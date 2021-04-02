<template>
  <v-container class="shootingZone">
    <header class="d-flex py-2 align-center">
      <v-btn class="px-4" @click="reset" color="primary">Reset</v-btn>
      <h2 class="text-center px-4">Shots: {{ shots }}</h2>
      <p class="px-4 mb-0">Shoot 30 targets</p>
    </header>
    <main>
      <section v-for="i in 9" :key="i" class="d-flex">
        <div v-for="j in 16" :key="j">
          <main
            v-if="targetPos[0] === i && targetPos[1] === j"
            @click="shoot"
            class="zone target"
          />
          <div v-else class="zone" />
        </div>
      </section>
    </main>
    <footer class="d-flex justify-space-around py-4">
      <p>Last Shot: {{ lastShot }} ms</p>
      <p>Fastest Shot: {{ fastestShot }} ms</p>
      <p>
        Average:
        {{
          Math.floor((new Date().valueOf() - beginTime.valueOf()) / this.shots)
        }}
        ms
      </p>
    </footer>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Shooter',

  data: () => ({
    targetPos: [1, 1],
    beginTime: new Date(),
    lastTargetSet: new Date(),
    shots: 0,
    lastShot: 0,
    fastestShot: Infinity,
  }),
  methods: {
    shoot() {
      const currTime = new Date();
      this.lastShot = currTime.valueOf() - this.lastTargetSet.valueOf();
      this.lastTargetSet = currTime;
      this.shots += 1;
      if (this.lastShot < this.fastestShot) this.fastestShot = this.lastShot;
      if (this.shots < 30) {
        this.targetPos = [
          Math.ceil(Math.random() * 9),
          Math.ceil(Math.random() * 16),
        ];
      } else {
        this.targetPos = [0, 0];
      }
    },
    reset() {
      this.targetPos = [1, 1];
      this.beginTime = new Date();
      this.lastTargetSet = new Date();
      this.shots = 0;
      this.lastShot = 0;
      this.fastestShot = Infinity;
    },
  },
});
</script>

<style scoped>
.shootingZone {
  width: fit-content;
}
.zone {
  height: 50px;
  width: 50px;
  margin: 2px;
  cursor: pointer;
  background-color: blue;
  border-radius: 10px;
}

.target {
  cursor: crosshair;
  background-color: red;
}
</style>
