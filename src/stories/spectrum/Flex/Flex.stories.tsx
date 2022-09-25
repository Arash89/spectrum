import {Flex} from '@adobe/react-spectrum'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Box } from '../helper-components/Box/Box'

export default {
  title: 'Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>

const Template: ComponentStory<typeof Flex> = args => <Flex {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: <><Box>Flex 1</Box><Box>Flex 2</Box><Box>Flex 3</Box></>
}
