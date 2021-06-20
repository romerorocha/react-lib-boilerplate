import { Story, Meta } from '@storybook/react'

import SomeComponent, { SomeComponentProps } from '.'

export default {
  title: 'SomeComponent',
  component: SomeComponent,
} as Meta

export const Default: Story<SomeComponentProps> = (args) => <SomeComponent {...args} />
