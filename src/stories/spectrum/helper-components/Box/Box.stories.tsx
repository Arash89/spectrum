import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Box, IBox } from './Box'

export default {
  title: 'Box',
  component: Box,
} as ComponentMeta<typeof Box>

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: <strong>Simple Box</strong>
}
