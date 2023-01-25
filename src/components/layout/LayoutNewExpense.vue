<template>
  <div class="w-100 d-flex justify-content-center">
    <button @click="showModal = true" class="btn btn-lg btn-outline-primary w-75">
      <i class="fa fa-plus"></i>
      Novo gasto
    </button>
    <form @submit.prevent="submit()">
      <div class="modal fade" :class="{ show: showModal }" :style="{ display: showModal ? 'block' : 'none' }">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLiveLabel">Adicionar um novo gasto</h5>
              <button type="button" class="close" @click="closeModal()">
                <span>×</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="form-group col-8">
                  <label for="">Descrição:</label>
                  <input required type="text" v-model="form.description" class="form-control">
                </div>
                <div class="form-group col-4">
                  <label for="">Valor (R$):</label>
                  <input required type="text" v-model="form.value" class="form-control">
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" @click="closeModal" class="btn btn-secondary">Fechar</button>
              <button class="btn btn-primary">Incluir novo gasto</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-backdrop fade" :style="{ display: showModal ? 'block' : 'none' }"></div>
    </form>
  </div>
</template>
<script>
import { collection, addDoc } from 'firebase/firestore'

export default {
  name: 'layoutNewExpense',

  data () {
    return {
      showModal: false,
      form: {
        description: '',
        value: ''
      }
    }
  },
  methods: {
    closeModal () {
      this.showModal = false
    },
    async submit () {
      try {
        const docRef = await addDoc(collection(this.$firebase, 'expense'), {
        })
        console.log('Document written with ID: ', docRef.id)
      } catch (e) {
        console.error('Error adding document: ', e)
      }
      console.log('oi')
    }
  }
}
</script>
<style scoped lang="scss">
.modal {
  color: var(--darker);
}
</style>
