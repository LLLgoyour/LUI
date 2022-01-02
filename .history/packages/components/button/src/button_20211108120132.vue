<template>
    <button
        :class="[
            'L-button',
            buttonType ? 'L-button--' + buttonType : '',
            buttonSize ? 'L-button--' + buttonSize : '',
            {
                'is-disabled': buttonDisabled,
                'is-loading': buttonLoading,
                'is-plain': buttonPlain,
                'is-round': buttonRound,
                'is-circle': buttonCircle,
            },
            ]"
        :disabled="buttonDisabled || buttonLoading"
        :autofocu="autofocus"
        :type="buttonType"
        @click="handleClick"
    >
        <L-icon v-if="buttonLoading" class="is-loading"><buttonLoading /></L-icon>
        <L-icon v-else-if="buttonIcon">
            <component :is="buttonIcon" />
        </L-icon>
        <span
            v=if=""

</template>

<script lang="ts">
import { inject, Text, defineComponent, computed} from 'vue';

export default defineComponent({
    name: 'LButton',

    components: {
        LIcon,
        ButtonLoading,
    },

    props: buttonProps,
    emits: buttonEmits,
    
    setup(props, { emit, slots }) {
        const LButton
        Group = inject(LButtonGroupKey, undefined)
        if (autoInsertSpace.value && defaultSlot?.length === 1) {
            
        }
    }
})
</script>