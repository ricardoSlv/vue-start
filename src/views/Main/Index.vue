<template>
  <main class="d-flex" style="height: 100%">
    <SideBar :isMobile="isMobile" />
    <router-view />
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
