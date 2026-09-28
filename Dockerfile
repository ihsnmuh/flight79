# syntax=docker/dockerfile:1.7

FROM node:22-bookworm-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable && corepack prepare pnpm@11.25.0 --activate

WORKDIR /app

FROM base AS dependencies

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
RUN pnpm install --frozen-lockfile

FROM base AS builder

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

RUN pnpm build \
  && cp -LR node_modules/react dist/standalone/node_modules/react \
  && cp -LR node_modules/react-dom dist/standalone/node_modules/react-dom \
  && cp -LR node_modules/.pnpm/scheduler@0.27.0/node_modules/scheduler dist/standalone/node_modules/scheduler

FROM node:22-bookworm-slim AS runner

LABEL org.opencontainers.image.source="https://github.com/ihsnmuh/flight79"
LABEL org.opencontainers.image.description="Flight 79 marketing website"

ENV NODE_ENV="production"
ENV HOST="0.0.0.0"
ENV PORT="3000"

WORKDIR /app

RUN groupadd --system --gid 1001 nodejs \
  && useradd --system --uid 1001 --gid nodejs --create-home flight79

COPY --from=builder --chown=flight79:nodejs /app/dist/standalone ./

USER flight79

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:3000/').then((response) => { if (!response.ok) process.exit(1) }).catch(() => process.exit(1))"

CMD ["node", "server.js"]
