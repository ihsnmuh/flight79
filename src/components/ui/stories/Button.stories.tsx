import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Plus } from 'lucide-react';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
        control: 'select',
        options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'flight-primary'],
    },
    size: {
        control: 'select',
        options: ['default', 'sm', 'lg', 'icon'],
    }
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
};

export const FlightPrimary: Story = {
  args: {
    children: 'Board Now',
    variant: 'flight-primary',
    size: 'lg',
    className: 'rounded-full'
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: 'Link',
    variant: 'link',
  },
};

export const Icon: Story = {
    args: {
        size: 'icon',
        variant: 'secondary',
        className: 'rounded-full',
        children: <Plus size={16} />
    }
}
