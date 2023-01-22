<template>
  <div class="base-spinner fa-3x" v-if="visible">
    <i class="fas fa-circle-notch fa-spin"></i>
  </div>
</template>
<script>
export default {
  props: {
    visible: {
      type: Boolean
    }
  }
}
</script>
<style lang="scss" scoped>
.base-spinner {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--dark-medium);
  color: var(--featured);
  z-index: 10000000;
}
</style>
