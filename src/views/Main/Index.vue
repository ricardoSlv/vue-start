<template>
  <main class="d-flex" style="height: 100%">
    <SideBar :isMobile="isMobile" />
    <v-container class="wrapper">
      <router-view />
    </v-container>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import SideBar from '@/components/SideBar.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Main',
  props: {
    isMobile: Boolean,
  },
  components: {
    SideBar,
  },
});
</script>

<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
}
</style>
