import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../Input';

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your name...',
    type: 'text',
  },
};

export const RoundedFull: Story = {
    args: {
        placeholder: 'Search...',
        className: 'rounded-full px-6'
    }
}
