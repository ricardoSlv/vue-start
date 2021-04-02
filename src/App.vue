<template>
  <v-app>
    <!-- <v-app-bar id="app-bar" app color="primary" flat dark hide-on-scroll>
      <v-app-bar-nav-icon
        @click="showNav = !showNav"
        v-show="windowWidth < 640"
      />
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      <div id="nav" v-show="windowWidth >= 640">
        <router-link class="text-subtitle-1" to="/">Home</router-link>
        <span> | </span>
        <router-link class="text-subtitle-1" to="/about">About</router-link>
        <span> | </span>
        <router-link class="text-subtitle-1" to="/main">Main</router-link>
      </div>
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-expand-transition>
      <v-list
        dense
        v-show="windowWidth < 640 && showNav && showBar"
        id="navitems"
        :style="{ top: showBar ? '56px' : '-10px' }"
        class="pa-0"
        color="primary"
      >
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in links" :key="i">
            <v-list-item-icon />
            <v-list-item-content>
              <v-list-item-title v-text="item.text">
                <router-link :to="item.path">Home</router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-expand-transition> -->
    <router-view :isMobile="windowWidth < 640" />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    selectedItem: '',
    showNav: false,
    showBar: true,
    lastScrollY: 0,
    windowWidth: window.innerWidth,
    links: [
      { text: 'Home', path: '/' },
      { text: 'About', path: '/about' },
      { text: 'Main', path: '/main' },
    ],
  }),
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
      if (window.innerWidth < 640) this.showNav = false;
    },
    handleScroll() {
      // Any code to be executed when the window is scrolled
      if (window.scrollY > this.lastScrollY) {
        this.showBar = false;
        this.showNav = false;
      }
      if (window.scrollY < this.lastScrollY) this.showBar = true;
      this.lastScrollY = window.scrollY;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
      window.addEventListener('scroll', this.handleScroll);
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('scroll', this.handleScroll);
  },
});
</script>

<style scoped>
#app-bar {
  position: sticky;
  flex-grow: 0;
}

#navitems {
  position: fixed;
  width: 100%;
  top: 56px;
  z-index: 2;
}

#nav a {
  margin: 0 1em;
  color: white;
}

#nav {
  padding: 0 1em;
}
</style>
