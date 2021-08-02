<template>
  <b-row class="center">
    <b-col>
        <h5>Login</h5>
      <b-form @submit="onSubmit">
        <b-form-group id="input-group-1" label="User:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.user"
            placeholder="Ingresar Usuario"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.pass"
            placeholder="Ingresar contraseña"
            required
            type="password"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Login</b-button>
      </b-form>
        <b-alert class="mt-3"
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown"
      @dismiss-count-down="countDownChanged"
    >
      {{ textWarning }}
    </b-alert>
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
        user: '',
        pass: '',
        },
        dismissCountDown: 0,
        textWarning: ''
    }
  },
  methods: {
     async onSubmit(event) {
      event.preventDefault()
    try{
        await this.$auth.loginWith('local', { 
            data: {
                username: this.form.user,
                password: this.form.pass
            } 
        })
       
    }catch(error){
            // The actual data returned from the API is in `error.response.data`
            const response = error.response.data;
            
            // Set the messages & errors to display
            this.status = response.statusCode;
            this.message = response.message;
            if( this.status === 401 ) this.textWarning = "Check username/Password"
            this.showAlert(5)

        }
    },
    countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert(time) {
        this.dismissCountDown = time
      }
  },
}
</script>