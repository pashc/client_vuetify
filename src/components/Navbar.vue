<template>
  <v-container>

    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app,
      class="nav"
    >

      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >

          <v-list-tile-action>
            <v-icon v-html="item.icon"/>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>

        </v-list-tile>

      </v-list>
    </v-navigation-drawer>


    <v-toolbar
      app
      :clipped-left="clipped"
      class="toolbar"
    >
      <v-toolbar-side-icon class="toolbar_icon" @click.stop="drawer = !drawer"/>

    </v-toolbar>

  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [{
          title: 'Inspire'
        }, {
          title: 'Your'
        }, {
          title: 'Live'
        }],
        miniVariant: false,
        right: true
      }
    },
    name: 'Navbar'
  }
</script>

<style scoped>

</style>
