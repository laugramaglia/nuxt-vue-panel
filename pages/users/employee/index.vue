<template>
    <section class="container">
        <b-row class="mt-3">
            <b-col>
                <card-container>
                    <user-new user="employee"></user-new>
                </card-container>
            </b-col>
            <b-col>
                <card-container>
                   <user-info user-title="empleados"></user-info>
                </card-container>
            </b-col>
        </b-row>
        <b-row class="my-3">
            <b-col>
                <card-container>
                    <user-list></user-list>
                </card-container>
            </b-col>
        </b-row>
    </section>
</template>
<script>
import cardContainer from '../../../components/cardContainer.vue'
import userNew from '../../../components/userModule/userNew.vue'
import userList from '../../../components/userModule/userList.vue'
import userInfo from '../../../components/userModule/userInfo.vue'
export default {
  components: { 
      cardContainer,
      userNew,
      userList,
      userInfo
       },
    middleware: 'master'
}
</script>
<style lang="scss">
section{
  min-height: 100vh;
}
</style>
