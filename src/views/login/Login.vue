<template>
  <div class="home">
    <form @submit.prevent="doLogin()" class="form-login">
      <div class="card">
        <div class="card-header text-center">
          <h1 class="mb-0">Expenses</h1>
        </div>
        <div class="card-body">
          <div class="form-group">
            <input type="email" v-model="email" required placeholder="E-mail" class="form-control">
          </div>
          <div class=" mt-2 form-group">
            <input type="password" v-model="password" required placeholder="Senha" class="form-control">
          </div>
          <button class="mt-2 btn btn-primary w-100" :disabled="loading">
            <template v-if="loading">
              entrando...
              <i class="fa fa-spin fa-spinner"></i>
            </template>
            <template v-else>
              Entrar
              <i class="fa fa-sign-in-alt"></i>
            </template>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default {

  name: 'LoginPage',
  data () {
    return {
      loading: false,
      email: 'kaue.sobral19@gmail.com',
      password: 'olimpo12'
    }
  },
  components: {
    // HelloWorld
  },
  methods: {
    async doLogin () {
      this.loading = true
      try {
        const auth = getAuth()
        const res = await signInWithEmailAndPassword(auth, this.email, this.password)
        window.uid = res.user.uid
        this.$router.push({ name: 'home' })
      } catch (error) {
        console.log('err', error)
      }
      this.loading = false
    }
  },

  beforeRouteEnter (to, from, next) {
    if (window.uid) {
      next(vm => {
        vm.$router.push('/')
      })
    } else {
      next()
    }
  }
}
</script>

<style lang="scss" scoped>
.form-login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 18pt;
  }

  .card {
    width: 30%;
    color: var(--darker);
  }
}
</style>
