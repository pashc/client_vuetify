<template>

  <v-footer class="footer" :fixed="fixed" app>
    <img class="img_size" src="@/assets/cc.png" alt="CC"> <span>2018</span>
  </v-footer>

</template>

<script>
  export default {
    name: 'footer'
  }
</script>

<style scoped>

  .footer {
    color: #404040;
    background-color: #abb1ba;
    padding: 5px;
  }

  .img_size {
    width: 16px;
    margin: 3px;
  }

</style>
