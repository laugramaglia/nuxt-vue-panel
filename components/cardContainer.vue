<template>
  <div class="card-back">
    <b-container class="container">
        <slot></slot>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'CardBackground',
}
</script>
<style lang="scss">
.card-back {
  background-color: white;
  border-radius: 12px;
  padding: 18px;
}
</style>