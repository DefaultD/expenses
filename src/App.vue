<template id="app">
  <BaseSpinner :visible="loading"></BaseSpinner>
  <div class="container-fluid" v-if="isLogged">
    <div class="row">
      <div class="col-2 navigation-sidebar">
        <h1 class="app-tittle">Expenses</h1>
        <LayoutNavigation />
      </div>
      <div class="col mx-3">
        <router-view />
      </div>
    </div>
  </div>
  <router-view v-else />
</template>

<script>
import BaseSpinner from '@/components/global/BaseSpinner.vue'
import LayoutNavigation from '@/components/layout/LayoutNavigation.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default {
  name: 'App',

  data () {
    return {
      loading: true,
      isLogged: false
    }
  },

  mounted () {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      window.uid = user ? user.uid : null
      this.isLogged = !!user
      this.$router.push({ name: window.uid ? 'home' : 'login' })
      this.loading = false
    })
  },
  components: {
    BaseSpinner,
    LayoutNavigation
  }

}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  color: var(--light);
  background-color: var(--darker);
  .navigation-sidebar{
    background-color: var(--dark-medium);
    .app-tittle{
      font-size: 20pt;
      margin-top: 10px;
      text-align: center;
    }
  }
}
</style>
