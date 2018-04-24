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
            <v-list-tile-content>
              <v-list-tile-title>{{ category.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile
            v-for="article in category.articles"
            :key="article.title"
            @click="content = selectArticle(article.title)">

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
  import Footer from './components/Footer'

  export default {
    components: {
      Footer
    },
    methods: {
      selectArticle: function (articleTitle) {
        return db[0].articles.filter(article => article.title === articleTitle)[0].content
      },
      getAllCategories: function () {
        return db
      },
      getFirstArticle: function () {
        return db[0].articles[0].content
      }
    },
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        categories: this.getAllCategories(),
        content: this.getFirstArticle(),
        miniVariant: false,
        right: true
      }
    },
    name: 'App'
  }

  const db = [{
    title: 'Inspire',
    articles: [{
      title: 'First Article',
      content: 'First Article Content'
    }, {
      title: 'Second Article',
      content: 'Second Article Content'
    }, {
      title: 'Third Article',
      content: 'Third Article Content'
    }]
  }, {
    title: 'The',
    articles: [{
      title: 'First Article',
      content: 'First Article Content'
    }, {
      title: 'Second Article',
      content: 'Second Article Content'
    }, {
      title: 'Third Article',
      content: 'Third Article Content'
    }]
  }, {
    title: 'World',
    articles: [{
      title: 'First Article',
      content: 'First Article Content'
    }, {
      title: 'Second Article',
      content: 'Second Article Content'
    }, {
      title: 'Third Article',
      content: 'Third Article Content'
    }]
  }]
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
