import {Flex} from '@adobe/react-spectrum'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Box } from '../helper-components/Box/Box'

export default {
  title: 'Flex',
  component: Flex,
  argTypes: {
    direction: {
      options: ['column', 'row'],
      control: 'radio'
    }
  }
} as ComponentMeta<typeof Flex>

const Template: ComponentStory<typeof Flex> = args => <Flex {...args} />

const FlexChildren = [1, 2, 3]
const arr = FlexChildren.map((elem, index) => <Box height="50px" width="50px">Flex {index}</Box>)



export const Basic = Template.bind({})
Basic.args = {
  children: <>{arr}</>,
  width:"size-400",
  gap: "size-100",
}
