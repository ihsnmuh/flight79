import type { Meta, StoryObj } from '@storybook/react';
import Location from '../Location';

const meta = {
  title: 'Flight79/Location',
  component: Location,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Location>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
