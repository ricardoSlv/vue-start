<template>
  <main class="wrapper">
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
    />
  </main>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'Name',
          align: 'start',
          value: 'name',
        },
        { text: 'GenDate', value: 'gendate' },
        { text: 'Difficulty', value: 'difficulty' },
        { text: 'Answers', value: 'answers' },
        { text: 'Forfeit', value: 'forfeit' },
        { text: 'Avg Result', value: 'avgresult' },
      ],
      desserts: [
        {
          name: 'Prova de diagnostico',
          gendate: '15/9/20',
          difficulty: 1.0,
          answers: 24,
          avgresult: 4.0,
          forfeit: '1%',
        },
        {
          name: 'Teste intermedio 1',
          gendate: '25/10/20',
          difficulty: 2.0,
          answers: 37,
          avgresult: 4.3,
          forfeit: '1%',
        },
        {
          name: 'Eclair',
          gendate: '26/11/20',
          difficulty: 16.0,
          answers: 23,
          avgresult: 6.0,
          forfeit: '7%',
        },
        {
          name: 'Cupcake',
          gendate: '305',
          difficulty: 3.7,
          answers: 67,
          avgresult: 4.3,
          forfeit: '8%',
        },
        {
          name: 'Gingerbread',
          gendate: '356',
          difficulty: 16.0,
          answers: 49,
          avgresult: 3.9,
          forfeit: '16%',
        },
        {
          name: 'Jelly bean',
          gendate: '375',
          difficulty: 0.0,
          answers: 94,
          avgresult: 0.0,
          forfeit: '0%',
        },
        {
          name: 'Lollipop',
          gendate: '392',
          difficulty: 0.2,
          answers: 98,
          avgresult: 0,
          forfeit: '2%',
        },
        {
          name: 'Honeycomb',
          gendate: '408',
          difficulty: 3.2,
          answers: 87,
          avgresult: 6.5,
          forfeit: '45%',
        },
        {
          name: 'Donut',
          gendate: '452',
          difficulty: 25.0,
          answers: 51,
          avgresult: 4.9,
          forfeit: '22%',
        },
        {
          name: 'KitKat',
          gendate: '518',
          difficulty: 26.0,
          answers: 65,
          avgresult: 7,
          forfeit: '6%',
        },
      ],
    };
  },
};
</script>

<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
}
</style>
