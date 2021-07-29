<template>
    <section class="container">
    <b-row class="mt-3">
        <b-col>
            <card-container>
                    <b-row class="center text-center">
                        <b-col>
                            <h5>Profile</h5>
                        </b-col>
                    </b-row>
            </card-container>
        </b-col>
        <b-col>
            <card-container>
                    <b-row class="center text-center">
                        <b-col>
                            <h5>@ User</h5>
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
}
</script>
<style lang="scss">
section{
  min-height: 100vh;

}
</style>