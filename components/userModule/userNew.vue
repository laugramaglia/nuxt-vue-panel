<template>
  <b-row class="center">
    <b-col>
        <h5>New {{user}}</h5>
      <b-form v-if="show" @submit="onSubmit" @reset="onReset">
        <b-form-group id="input-group-1" label="E-mail:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Ingresar email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Igresar nombre"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
export default {
    props:{
        user: {
            type: String,
            default: ''
            },
        path: {
            type: String,
            default:''
        }
    },
  data() {
    return {
      form: {
        email: '',
        name: '',
        },
      show: true,
    }
  },
  methods: {
     onSubmit(event) {
      event.preventDefault()
      this.form.pass = "laureano"
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>