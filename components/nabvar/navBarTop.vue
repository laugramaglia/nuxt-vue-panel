<template>
    <b-row class="menu-style" align-v="center">
        <b-col cols="auto">
            <b-icon icon="layout-sidebar-inset" scale="2" @click="toggleSidebar()"></b-icon>
        </b-col>
        <b-col> 
            <NuxtLink to="/">
                <b-img src="https://picsum.photos/1024/400/?image=41" rounded height="40" alt="Responsive image"></b-img>
            </NuxtLink>
        </b-col>
        <b-col cols="auto">
            <NuxtLink to="/profile">
                 <b-avatar></b-avatar>
            </NuxtLink>
        </b-col>
        <b-col cols="auto">
            <b-dropdown no-caret right toggle-class="icon-button-edited">
                <template #button-content>
                  <b-icon icon="three-dots-vertical" scale="1.7"></b-icon>
                </template>
                <b-dropdown-item href="/profile">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#">Something else here</b-dropdown-item>
            </b-dropdown>
        </b-col>
    </b-row>
</template>
<script>
import {BIcon} from 'bootstrap-vue'
export default {
    components:{
        BIcon
    },
    props:{
        statusSidebar: {type: Boolean}
    },
    methods:{
        toggleSidebar(){
            this.$emit('changeStatusSidebar', !this.statusSidebar)

        }
    }
}
</script>
<style lang="scss">
   .menu-style{
       background-color: #a167c9;
       color: whitesmoke;
       padding: 0.75rem 1rem;
       .icon-button-edited{
           background-color: transparent;
           border: none;
       }
   } 
</style>