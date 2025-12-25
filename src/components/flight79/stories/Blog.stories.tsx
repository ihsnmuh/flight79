import type { Meta, StoryObj } from '@storybook/react';
import Blog from '../Blog';

const meta = {
  title: 'Flight79/Blog',
  component: Blog,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Blog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
