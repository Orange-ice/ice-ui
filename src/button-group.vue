<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>
<script></script>
<style lang="scss">
    .g-button-group {
        display: inline-flex;

        > .g-button {
            border-radius: 0;
            margin-left: -1px;
            &:first-child {
                border-radius: var(--border-radius) 0 0 var(--border-radius);
            }
            &:last-child {
                border-radius: 0 var(--border-radius) var(--border-radius) 0
            }
            &:hover {
                position: relative;
                z-index: 1
            }
        }
    }
</style>