<template>
  <v-app class="app">
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
      class="nav"
    >
      <v-list>
        <v-list-group
          v-model="category.active"
          v-for="category in categories"
          :key="category.title"
          no-action
        >
          <v-list-tile slot="activator">
            <v-list-tile-content @click="articles = getArticlesForCategory(category.title)">
              <v-list-tile-title>{{ category.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile
            v-if="category.active"
            v-for="article in articles"
            :key="article.title"
            @click="content = article.content">

            <v-list-tile-content>
              <v-list-tile-title>{{ article.title }}</v-list-tile-title>
            </v-list-tile-content>

          </v-list-tile>

        </v-list-group>
      </v-list>

    </v-navigation-drawer>

    <v-toolbar
      app
      :clipped-left="clipped"
      class="toolbar"
    >
      <v-toolbar-side-icon class="toolbar_icon" @click.stop="drawer = !drawer"/>
    </v-toolbar>

    <v-content>
      <router-view :content="content"/>
    </v-content>

    <Footer/>

  </v-app>
</template>

<script>
  import axios from 'axios'
  import Footer from './components/Footer'

  export default {
    name: 'App',
    components: {
      Footer
    },
    data() {
      return {
        clipped: false,
        drawer: true,
        categories: [],
        articles: [],
        content: "Hello World",
        miniVariant: false,
        right: true
      }
    },
    created() {
      this.getAllCategories()
    },
    methods: {
      getAllCategories: function () {
        axios.get('http://localhost:3000/api/categories')
          .then(response => {
            this.categories = response.data
          })
      },
      getArticlesForCategory: function (categoryTitle) {
        axios.get('http://localhost:3000/api/articles/', {
            params: {
              category: categoryTitle
            }
          }
        ).then(response => {
          this.articles = response.data
        })
      }
    }
  }

</script>

<style scoped>
  .app {
    background-color: #1a1a1a;
    padding: 20px;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .toolbar_icon {
    margin-top: -10px;
    color: #c4c4c3;
  }

  .toolbar {
    background-color: #6c6d69;
    height: 48px;
  }

  .nav {
    background-color: #ebedef;
    font-family: Menlo, sans-serif;
  }


</style>
