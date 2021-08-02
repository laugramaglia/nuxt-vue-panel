<template>
    <section class="container">
        <b-row class="mt-3">
            <b-col>
                <card-container>
                    <user-new user="customer"></user-new>
                </card-container>
            </b-col>
            <b-col>
                <card-container>
                    funca
                </card-container>
            </b-col>
        </b-row>
        <b-row class="mt-3">
            <b-col>
                <card-container>
                    list Customer
                </card-container>
            </b-col>
        </b-row>
    </section>
</template>
<script>
import CardContainer from '../../../components/cardContainer.vue'
import UserNew from '../../../components/userModule/userNew.vue'
export default {
  components: { 
      CardContainer,
      UserNew 
  },
  middleware: 'master'
}
</script>
<style lang="scss">
section{
  min-height: 100vh;
}
</style>