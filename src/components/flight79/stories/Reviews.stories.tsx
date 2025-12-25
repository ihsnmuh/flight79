import type { Meta, StoryObj } from '@storybook/react';
import Reviews from '../Reviews';

const meta = {
  title: 'Flight79/Reviews',
  component: Reviews,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Reviews>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
