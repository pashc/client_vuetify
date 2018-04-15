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
          :prepend-icon="category.action"
          no-action
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>{{ category.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile v-for="article in category.articles" :key="article.title" @click="">

            <v-list-tile-content>
              <v-list-tile-title>{{ article.title }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>{{ article.action }}</v-icon>
            </v-list-tile-action>

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
      <router-view/>
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
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        categories: [{
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }],
        miniVariant: false,
        right: true
      }
    },
    name: 'App'
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

  .nav_title {
    color: #808080;
    font-weight: normal;
    font-size: 23px;
    font-family: Menlo, sans-serif;
    padding-left: 10px;
  }


</style>
