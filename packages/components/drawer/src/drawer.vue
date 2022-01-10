<template>
    <teleport to="body" :disabled="!appendToBody">
        <transition
            name="l-drawer-fade"
            @after-enter="afterEnter"
            @after-leave="afterLeave"
            @before-leave="beforeLeave"
        >
            <l-overlay
                v-show="visible"
                :mask="modal"
                :overlay-class="modalClass"
                :z-index="zIndex"
                @click="onModalClick"
            >
                <div
                    ref="drawerRef"
                    v-trap-focus
                    aria-modal="true"
                    aria-labelledby="l-drawer__title"
                    :aria-label="title"
                    :class="['l-drawer', direction, visible && 'open', customClass]"
                    :style="
                        isHorizontal ? 'width: ' + drawerSize : 'height: ' + drawerSize
                    "
                    role="dialog"
                    @click.stop
                >
                    <header
                        v-if="withHeader"
                        id="l-drawer__title"
                        class="l-drawer__header"
                    >
                        <slot name="title">
                            <span role="heading" :title="title">
                                {{ title }}
                            </span>
                        </slot>
                        <button
                            v-if="showClose"
                            :aria-label="'close ' + (title || 'drawer')"
                            class="l-drawer__close-btn"
                            type="button"
                            @click="handleClose"
                        >
                            <l-icon class="l-drawer__close"><close /></l-icon>
                        </button>
                    </header>
                    <template v-if="rendered">
                        <section class="l-drawer__body">
                            <slot></slot>
                        </section>
                    </template>
                </div>
    </teleport>
</template>