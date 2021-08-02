<template>
  <div>
    <div v-if="$auth.loggedIn">
      <b-row>
        <b-col cols="auto" align-self="stretch" class="color-left-bar">
          <NavBarLeft :active-class='sidebarStatus'/>
        </b-col>
        <b-col>
          <NavBarTop :status-sidebar="sidebarStatus" @changeStatusSidebar="changeStateSidebar($event)" />
            <Nuxt />
        </b-col>
      </b-row>
    </div>
    <div v-else>
      <not-login></not-login>
    </div>
  </div>
</template>

<script>
import NavBarTop from '../components/nabvar/navBarTop.vue'
import NavBarLeft from '../components/nabvar/navBarLeft.vue'
import NotLogin from '../components/not-login/notLogin.vue'
export default {
  components:{
    NavBarTop,
    NavBarLeft,
    NotLogin
  },
  loading: {
    continuous: true
  },
  data(){
    return{
      sidebarStatus: true
    }
  },
  methods:{
    changeStateSidebar(event){
      this.sidebarStatus = event
    }
  }
}
</script>
<style lang="scss">
body{
  background-color: rgb(235, 235, 235);
}
.color-left-bar{
  background-color: #152238;
}
</style>
