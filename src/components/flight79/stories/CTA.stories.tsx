import type { Meta, StoryObj } from '@storybook/react';
import CTA from '../CTA';

const meta = {
  title: 'Flight79/CTA',
  component: CTA,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CTA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
