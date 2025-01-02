<template>
  <u-button
    :type="type"
    :size="size"
    :plain="plain"
    :disabled="disabled"
    :loading="loading"
    @click="$emit('click')"
  >
    <slot></slot>
  </u-button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    type: {
      type: String,
      default: 'default' 
    },
    size: {
      type: String,
      default: 'default' 
    },
    plain: {
      type: Boolean,
      default: false /
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false 
  }
};
</script>
