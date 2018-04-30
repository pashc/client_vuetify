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

      <span class="nav-title">Categories</span>

      <v-list>
        <v-list-group
          v-model="category.active"
          v-for="category in categories"
          :key="category.title"
          no-action
        >
          <v-list-tile slot="activator">
            <v-list-tile-content @click="setPostsForCategory(category.title)">
              <v-list-tile-title>{{ category.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile
            v-if="category.active"
            v-for="post in posts"
            :key="post.title"
            @click="setContentAsHtml(post.content)">

            <v-list-tile-content>
              <v-list-tile-title>
                <router-link to="/">{{ post.title }}</router-link>
              </v-list-tile-title>
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
  import BlogService from './services/BlogService'
  import Footer from './components/Footer'
  import showdown from 'showdown'

  const md2html = new showdown.Converter()

  md2html.setOption('tables', true)
  md2html.setOption('strikethrough', true)
  md2html.setOption('smartIndentationFix', true)
  md2html.setOption('simpleLineBreaks', true)
  md2html.setOption('simplifiedAutoLink', true)
  md2html.setOption('openLinksInNewWindow', true)
  md2html.setOption('requireSpaceBeforeHeadingText', true)
  md2html.setOption('backslashEscapesHTMLTags', true)
  md2html.setOption('splitAdjacentBlockquotes', true)
  md2html.setOption('disableForced4SpacesIndentedSublists', true)

  export default {
    name: 'App',
    components: {
      Footer
    },
    data () {
      return {
        clipped: false,
        drawer: true,
        categories: [],
        posts: [],
        content: '',
        miniVariant: false,
        right: true
      }
    },
    created () {
      this.setAllCategories()
      this.setContentAsHtml(
        '# Paul Werner\'s Blog\n' +
        'Hello World and welcome to my collection of personal articles about things I\'ve learned on my journey and ' +
        'the conclusions I\'ve made out of them. All articles are categorized and will be extended by time. Feel free to explore.')
    },
    methods: {
      async setAllCategories() {
        const response = await BlogService.getAllCategories()
        this.categories = response.data
      },
      async setPostsForCategory(category) {
        const response = await BlogService.getPostsForCategory(category)
        this.posts = response.data
      },
      setContentAsHtml(mdText) {
        this.content = md2html.makeHtml(mdText)
      }
    }
  }
</script>

<style scoped>
  a {
    font-family: Menlo, sans-serif;
    text-decoration: none;
    cursor: auto;
    color: #1e1f1f;
  }

  .app {
    background-color: #1a1a1a;
    padding: 20px;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .container-fluid {
    background-color: #2d2d2d;
    -webkit-box-shadow: 9px 8px 11px -4px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 9px 8px 11px -4px rgba(0, 0, 0, 0.3);
    box-shadow: 9px 8px 11px -4px rgba(0, 0, 0, 0.3);
    margin-top: 0px;
    margin-bottom: 20px;
    max-width: 1000px;
    padding: 20px;
  }

  .font {
    color: #d8d6cf;
    font-weight: normal;
    font-size: 16px;
    font-family: Courier, sans-serif;
  }

  .nav {
    font-family: Menlo, sans-serif;
    background-color: #ebedef;
  }

  .toolbar_icon {
    margin-top: -10px;
    color: #c4c4c3;
  }

  .toolbar {
    background-color: #6c6d69;
    height: 48px;
  }

  .nav-title {
    margin-left: 15px;
    margin-top: 1em;
    font-size: 18px;
    line-height: 20px;
    display: inline-block;
    vertical-align: middle;
    horiz-align: right;
    text-underline: #d8d6cf;
  }
</style>
