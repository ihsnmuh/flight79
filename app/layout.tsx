import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://flight79-kbp.astral-giant-6903.chatgpt.site"),
  title: "Flight 79 | Aviation-Themed Coffee & Eatery",
  description: "Nikmati first-class flavor di Flight 79, coffee & eatery bertema aviasi di Kota Baru Parahyangan.",
  openGraph: {
    title: "Flight 79 | First-Class Flavor, On the Ground",
    description: "Coffee, comfort food, dan pengalaman bersantap bertema aviasi di Kota Baru Parahyangan.",
    type: "website",
    locale: "id_ID",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
