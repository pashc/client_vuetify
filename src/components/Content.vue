<template>

  <v-container class="container-fluid font">
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-content style="padding: 10px 32px;">

          <v-container v-html="content"/>

        </v-content>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  export default {
    props: {
      content: {
        type: String,
        default: 'Hello World'
      }
    }
  }
</script>

<style scoped>

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
    font-weight: 100;
  }

  h3 {
    padding-top: 8px;
    font-size: 18px;
  }

  h2, h3 {
    margin-top: 5px;
  }

</style>
