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
                <div class="form-group col-12 d-flex align-items-center flex-column">
                  <input ref="input" class="d-none" accept="image/*" type="file" @change="handleFile">
                  <button type="button" @click="openFileDialog()" class="w-50 my-2 btn btn-outline-secondary">Adicionar
                    comprovante</button>
                  <div class="mt-2" v-if="form.receipt">
                    {{ form.receipt.name }}
                    <button type="button" @click="form.receipt = ''" class="btn badge badge-light">
                      <i class="fa fa-trash text-danger"></i>
                    </button>
                  </div>
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
import { getStorage, ref, uploadBytes } from 'firebase/storage'
export default {
  name: 'layoutNewExpense',

  data () {
    return {
      showModal: false,
      form: {
        description: '',
        value: '',
        receipt: ''
      }
    }
  },
  computed: {
    fileName () {
      const { receipt } = this.form
      if (receipt) {
        const split = receipt.name.split('.')
        return `${split[0]}-${new Date().getTime()}.${split[1]}`
      } else {
        return ''
      }
    }
  },
  methods: {
    handleFile ({ target }) {
      this.form.receipt = target.files[0]
    },
    openFileDialog () {
      this.$refs.input.value = null
      this.$refs.input.click()
    },
    closeModal () {
      this.showModal = false
    },
    async submit () {
      try {
        let uploadTask
        const id = window.uid
        const payload = {
          id,
          ...this.form,
          createdAt: new Date()
        }
        const docRef = await addDoc(collection(this.$firebase, 'expense'), payload)
        console.log(this.form.receipt.name)
        // const docImage = await addDoc(collection(this.$firebase, 'images'), {
        //   name: this.form.receipt.name
        // })
        // console.log(docImage)
        if (this.form.receipt) {
          const storage = getStorage()
          const mountainsRef = ref(storage, this.form.receipt.name)
          uploadTask = await uploadBytes(mountainsRef, this.form.receipt).then((snapshot) => {
            console.log('Uploaded a blob or file!', snapshot)
          })
          console.log(uploadTask)
        }

        console.log('Document written with ID: ', docRef.id)
      } catch (e) {
        console.error('Error adding document: ', e)
      }
    }
  }
}
</script>
<style scoped lang="scss">
.modal {
  color: var(--darker);
}
</style>
