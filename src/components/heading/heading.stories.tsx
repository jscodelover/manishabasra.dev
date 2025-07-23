import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { H1, H2, H3, H4 } from './heading';

const groupMeta = {
  title: 'Components/Heading Elements',
} satisfies Meta<typeof H1>;

export default groupMeta;

export const Default: StoryObj<typeof groupMeta> = {
  render: () => (
    <>
      <H1>h1 heading component</H1>
      <H2>h2 heading component</H2>
      <H3>h3 heading component</H3>
      <H4>h4 heading component</H4>
    </>
  ),
};

export const ComponentH1: StoryObj<typeof H1> = {
  render: () => <H1>h1 heading component</H1>,
};

export const ComponentH2: StoryObj<typeof H2> = {
  render: () => <H2>h2 heading component</H2>,
};

export const ComponentH3: StoryObj<typeof H3> = {
  render: () => <H3>h3 heading component</H3>,
};

export const ComponentH4: StoryObj<typeof H4> = {
  render: () => <H4>h4 heading component</H4>,
};
