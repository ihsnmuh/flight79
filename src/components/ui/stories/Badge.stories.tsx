import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../Badge';

const meta = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

export const FlightTopPick: Story = {
  args: {
    children: 'Top Pick',
    variant: 'flight-top-pick',
  },
};

export const FlightKids: Story = {
  args: {
    children: 'Kids',
    variant: 'flight-kids',
  },
};

export const FlightFresh: Story = {
    args: {
      children: 'Fresh',
      variant: 'flight-fresh',
    },
};
