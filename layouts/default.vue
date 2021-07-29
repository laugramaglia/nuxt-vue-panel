<template>
  <div>
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
</template>

<script>
import NavBarTop from '../components/nabvar/navBarTop.vue'
import NavBarLeft from '../components/nabvar/navBarLeft.vue'
export default {
  components:{
    NavBarTop,
    NavBarLeft
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
