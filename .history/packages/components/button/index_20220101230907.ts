import { withInstall, withNoopInstall } from '@' //TODO: add a package name here
import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'

export const LButton = withInstall(Button, {
    ButtonGroup,
})
export const LButtonGroup = withNoopInstall(ButtonGroup)
export default LButton

export * from './src/button'