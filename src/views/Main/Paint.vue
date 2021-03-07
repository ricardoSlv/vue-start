<template>
  <section class="d-flex flex-column">
    <header class="d-flex my-2">
      <v-btn-toggle mandatory v-model="selectedColor">
        <v-btn class="px-4" color="red"> Red </v-btn>
        <v-btn class="px-4" color="green"> Green </v-btn>
        <v-btn class="px-4" color="blue"> Blue </v-btn>
        <v-btn class="px-4" color="cyan lighten-1"> LightBlue </v-btn>
        <v-btn class="px-4" color="#cd754c"> Brown </v-btn>
        <v-btn class="px-4" color="yellow"> Yellow </v-btn>
        <v-btn class="px-4" color="black">
          <span style="color: white">Black</span>
        </v-btn>
        <v-btn class="px-4" color="white"> White </v-btn>
      </v-btn-toggle>
      <v-btn class="ms-auto me-2 px-4 py-6" color="primary" @click="clear">
        Clear
      </v-btn>
    </header>
    <canvas id="brickGame" height="450" width="800"> </canvas>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

type color =
  | 'Red'
  | 'Green'
  | 'Blue'
  | 'DeepSkyBlue'
  | 'Sienna'
  | 'Yellow'
  | 'Black'
  | 'Snow';
const colors: color[] = [
  'Red',
  'Green',
  'Blue',
  'DeepSkyBlue',
  'Sienna',
  'Yellow',
  'Black',
  'Snow',
];
export default Vue.extend({
  name: 'Paint',

  data: (): {
    cvs: HTMLCanvasElement | null;
    ctx: CanvasRenderingContext2D | null;
    selectedColor: number;
  } => ({
    cvs: null,
    ctx: null,
    selectedColor: 0,
  }),
  methods: {
    clear() {
      if (this.ctx && this.cvs) {
        this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
      }
    },
  },
  mounted() {
    // function drawRect(posX: number, ctxIn: CanvasRenderingContext2D) {
    //   const rectY = 420;
    //   const rectWidth = 100;
    //   const rectHeight = 20;
    //   const cornerRadius = 20;
    //   ctxIn.strokeRect(
    //     posX + cornerRadius / 2,
    //     rectY + cornerRadius / 2,
    //     rectWidth - cornerRadius,
    //     rectHeight - cornerRadius,
    //   );
    //   ctxIn.fillRect(
    //     posX + cornerRadius / 2,
    //     rectY + cornerRadius / 2,
    //     rectWidth - cornerRadius,
    //     rectHeight - cornerRadius,
    //   );
    // }
    const cvs = document.getElementById('brickGame') as HTMLCanvasElement;
    const ctx = cvs?.getContext('2d');
    this.cvs = cvs;
    this.ctx = ctx;
    if (ctx && cvs) {
      //   ctx.lineJoin = 'round';
      ctx.lineWidth = 10;
      //   ctx.fillStyle = 'orange';
      //   ctx.strokeStyle = 'orange';
      //   drawRect(20, ctx);
      // }
      cvs.addEventListener('mousemove', (e) => {
        if (ctx && cvs) {
          // ctx.clearRect(0, 420, cvs.width, 20);
          // ctx.strokeStyle = 'orange';

          // const clamp = (number: number, min: number, max: number) =>
          //   // eslint-disable-next-line implicit-arrow-linebreak
          //   Math.max(min, Math.min(number, max));
          // drawRect(clamp(e.offsetX - 50, 0, 700), ctx);
          if (e.buttons === 1) {
            ctx.strokeStyle = colors[this.selectedColor];
            ctx.beginPath();
            ctx.arc(e.offsetX, e.offsetY, 5, 0, 2 * Math.PI);
            ctx.stroke();
          }
        }
      });
    }
  },
});
</script>

<style scoped>
#brickGame {
  background: rgb(220, 220, 220);
  border-radius: 25px;
  cursor: pointer;
}
</style>
