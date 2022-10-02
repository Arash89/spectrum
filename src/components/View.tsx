import { memo } from 'react'
import { TextField, View, Button } from '@adobe/react-spectrum'

const ViewTest = () => (
  <View
    borderWidth="thin"
    borderColor="red-500"
    borderRadius="medium"
    padding="size-250"
  >
    <TextField label="Name" />
    <Button variant="cta">Save</Button>
  </View>
)

export default memo(ViewTest)
