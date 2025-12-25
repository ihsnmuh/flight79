import type { Meta, StoryObj } from '@storybook/react';
import Atmosphere from '../Atmosphere';

const meta = {
  title: 'Flight79/Atmosphere',
  component: Atmosphere,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Atmosphere>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
