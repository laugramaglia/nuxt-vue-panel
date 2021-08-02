<template>
    <section class="container">
    <b-row class="mt-3">
        <b-col>
            <card-container>
                    <b-row class="center text-center">
                        <b-col>
                            <h5>Profile</h5>
                            <p>Name: {{userInfo.name}}</p>
                            <p>E-mail: {{userInfo.email}}</p>
                        </b-col>
                    </b-row>
            </card-container>
        </b-col>
        <b-col>
            <card-container>
                    <b-row class="center text-center">
                        <b-col>
                            <h5>@ User</h5>
                            <p>Username: {{userInfo.user}}</p>
                            <p>Account: {{userInfo.type}}</p>
                        </b-col>
                    </b-row>
            </card-container>
        </b-col>
    </b-row>
    </section>
</template>
<script>
import cardContainer from '../components/cardContainer.vue'
export default {
  components: { cardContainer },
   middleware: ['auth'],
  data(){
      return {
          userInfo: {
              name:'',
              email:'',
              user:'',
              type:''
          }

      }
  },
 
    async fetch() {
      try {
          // show loading
        this.$nuxt.$loading.start()
        // Fetch data
          this.userInfo = await fetch(
        'https://nest-access.herokuapp.com/customer/get/only/'+this.$auth.user._id
      ).then(res => res.json())
        // Hidde loading
        this.$nuxt.$loading.finish()      
      } catch (err){
          
      }
    }
    
}
</script>
<style lang="scss">
section{
  min-height: 100vh;
    p{
        text-transform: none;
        text-align: left;
    }
}
</style>