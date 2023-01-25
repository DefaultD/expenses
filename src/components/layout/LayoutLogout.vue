<template>
  <button @click="logout()" class="btn btn-logout">
    <i class="fa fa-power-off"></i>
    Sair
  </button>
</template>
<script>
import { getAuth, signOut } from 'firebase/auth'

export default {
  name: 'layoutLogout',

  methods: {
    // eslint-disable-next-line space-before-function-paren
    logout() {
      const auth = getAuth()
      signOut(auth)
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
<style scoped lang="scss">
.btn-logout {
  width: 100%;
  cursor: pointer;
  color: var(--white);

  &:hover {
    color: var(--featured);
  }
}
</style>
