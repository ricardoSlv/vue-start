<template>
  <main class="wrapper">
    <v-btn elevation="4" x-large @click="snackbar.show = true">
      Chamar a Api do Hugo
    </v-btn>
    <v-snackbar top v-model="snackbar.show">
      <section class="d-flex align-center">
        {{ snackbar.text }}
        <v-spacer />
        <v-btn :color="snackbar.color" text @click="snackbar.show = false">
          Okeey 😔
        </v-btn>
      </section>
    </v-snackbar>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TestGen',
  data: () => ({
    snackbar: {
      show: false,
      text: 'Tá a 😴 dormir o home 😕',
      color: 'yellow',
    },
  }),
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
