<template>

  <v-container class="container-fluid font">
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-content style="padding: 10px 32px;">
          {{ content }}
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

  .container-fluid {
    background-color: #2d2d2d;
    -webkit-box-shadow: 9px 8px 11px -4px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 9px 8px 11px -4px rgba(0, 0, 0, 0.3);
    box-shadow: 9px 8px 11px -4px rgba(0, 0, 0, 0.3);
    margin-top: 0px;
    margin-bottom: 20px;
    max-width: 1400px;
    padding: 20px;
  }

  .font {
    color: #d8d6cf;
    font-weight: normal;
    font-size: 18px;
    font-family: Courier, sans-serif;
  }

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
