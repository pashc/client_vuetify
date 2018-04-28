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

<style>

  h1 {
    font-size: 32px;
    text-decoration: underline;
    text-align: center;
    padding-bottom: 15px;
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 21px;
  }

  blockquote {
    border-left: 5px solid #ccc;
    margin: 1.5em 5px;
    padding: 0.5em 5px;
    quotes: "\201C" "\201D" "\2018" "\2019";
  }

  blockquote:before {
    color: #ccc;
    content: open-quote;
    font-size: 3em;
    line-height: 0.1em;
    margin-right: 0.05em;
    vertical-align: -0.2em;
  }

  blockquote p {
    display: inline;
  }

  code {
    background-color: #ebedef;
    color: black;
    border: black 2px;
    padding: 6px
  }

  ul {
    list-style: none;
    margin-left: 1em;
    padding-left: 1em;
  }

  ul li:before {
    content: "\0BB \020";
  }

  table {
    width: 100%;
    margin: 20px auto;
    table-layout: auto;
  }

  table,
  td,
  th {
    border-collapse: collapse;
  }

  th,
  td {
    padding: 10px;
    border: solid 1px;
    text-align: center;
  }

  p img {
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 5px;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    max-width: 100%;
    display: block;
    height: auto;
    width: auto\9; /* ie8 */
  }

</style>
