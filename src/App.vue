<template>
  <BaseSpinner></BaseSpinner>
  <router-view />
</template>

<script>
import BaseSpinner from '@/components/global/BaseSpinner.vue'
export default {
  components: {
    BaseSpinner
  }
}
</script>

<style lang="scss">

</style>
