<template>
    <b-row>
        <b-col>
            <h5>Info</h5>
            <b-row>
                <b-col>
                    <b-row>
                        <b-col>
                            <p>Total de {{userTitle}}: </p>
                        </b-col>
                        <b-col cols="auto">
                            <p>12</p>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <p>{{userTitle}} disponibles:</p>
                        </b-col>
                        <b-col cols="auto">
                            <p>1</p>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col cols="auto">
                    <p>Plan: <strong>Ruby</strong></p>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>
<script>
export default {
    props:{
        userTitle: {
            type: String,
            default: ''
        }
    }
}
</script>
<style lang="scss">
    p{
        text-transform: capitalize;
    }
</style>
