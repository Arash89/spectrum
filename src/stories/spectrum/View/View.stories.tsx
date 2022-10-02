import { TextField, View } from '@adobe/react-spectrum'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'View',
  component: View,
} as ComponentMeta<typeof View>

const Template: ComponentStory<typeof View> = args => <View {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'View 1',
  padding: 'size-250',
  borderColor: 'red-500',
  borderWidth: 'thin',
}


export const Example = () => (<View
  borderWidth="thin"
  borderColor="red-600"
  borderRadius="medium"
  padding="size-250">
  <TextField label="Name" />
</View>)
