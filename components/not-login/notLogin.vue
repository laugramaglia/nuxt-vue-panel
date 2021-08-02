<template>
<section class="container">
        <b-row class="mt-3">
            <b-col>
                <card-container>
                    <Login />
                </card-container>
            </b-col>
        </b-row>
</section>
</template>
<script>
import CardContainer from '../cardContainer.vue'

import Login from './login.vue'

export default {
     components: { 
      CardContainer,
      Login
  }
}
</script>