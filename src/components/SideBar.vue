<template>
  <v-navigation-drawer class="nav-drawer" :app="isMobile" width="256px">
    <v-list-item class="title">
      <v-list-item-content>
        <v-list-item-title> 🦝 El Leonardo </v-list-item-title>
        <v-list-item-subtitle> Texto de bajo </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider />

    <!-- <v-expansion-panels accordion focusable>
      <v-expansion-panel v-for="(item, i) in items" :key="i">
        <v-expansion-panel-header>
          <div>
            <v-icon class="mx-3">{{ item.icon }}</v-icon>
            {{ item.title }}
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list dense nav>
            <v-list-item v-for="(link, i) in item.links" :key="i" link>
              <v-list-item-icon>
                <v-icon>{{ link.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ link.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels> -->

    <v-list>
      <v-list-group
        v-for="(item, i) in items"
        :key="i"
        :prepend-icon="item.icon"
      >
        <template v-slot:activator>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </template>

        <v-list-item v-for="(link, i) in item.links" :key="i" :to="link.href">
          <v-list-item-title v-text="link.text"></v-list-item-title>
          <v-list-item-icon>
            <v-icon v-text="link.icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang ="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    isMobile: Boolean,
  },
  data: () => ({
    items: [
      {
        icon: 'mdi-glasses',
        title: 'Professor',
        links: [
          {
            icon: 'mdi-folder-plus-outline',
            text: 'Generate Test',
            href: '/main/testgen',
          },
          {
            icon: 'mdi-folder-multiple-outline',
            text: 'View Tests',
            href: '/main/tests',
          },
        ],
      },
      {
        icon: 'mdi-notebook-edit-outline',
        title: 'Student',
        links: [
          {
            icon: 'mdi-newspaper-variant-outline',
            text: 'Solve Test',
            href: '/main/quizz',
          },
          {
            icon: 'mdi-chart-box-outline',
            text: 'Results',
            href: '/main/results',
          },
        ],
      },
      {
        icon: 'mdi-gamepad-variant-outline',
        title: 'Funnies',
        links: [
          {
            icon: 'mdi-crosshairs',
            text: 'Shooter',
            href: '/main/shooter',
          },
          {
            icon: 'mdi-brush',
            text: 'Paint',
            href: '/main/paint',
          },
        ],
      },
    ],
  }),
  methods: {},
});
</script>

<style scoped>
.nav-drawer {
  height: 100%;
  overflow: auto;
  flex: 0 0 256px;
}
</style>
