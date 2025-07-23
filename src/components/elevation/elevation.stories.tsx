import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Elevation } from './elevation';

import elevationStyle from './elevation.module.scss';

const meta = {
  title: 'Components/Elevation',
} satisfies Meta<typeof Elevation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '3rem' }}>
      <Elevation className={elevationStyle['elevation-x-small']} />
      <Elevation className={elevationStyle['elevation-small']} />
      <Elevation className={elevationStyle['elevation-medium']} />
      <Elevation className={elevationStyle['elevation-large']} />
      <Elevation className={elevationStyle['elevation-x-large']} />
      <Elevation className={elevationStyle['elevation-xx-large']} />
    </div>
  ),
};
