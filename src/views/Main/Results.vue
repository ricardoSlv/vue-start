<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  />
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
        { text: 'Answered in', value: 'resdate' },
        { text: 'Difficulty', value: 'difficulty' },
        { text: 'Time to complete', value: 'restime' },
        { text: 'Result', value: 'result' },
      ],
      desserts: [
        {
          name: 'Prova de diagnostico',
          resdate: '15/9/20',
          difficulty: 1.0,
          restime: 24,
          result: 4.0,
          forfeit: '1%',
        },
        {
          name: 'Teste intermedio 1',
          resdate: '25/10/20',
          difficulty: 2.0,
          restime: 37,
          result: 4.3,
          forfeit: '1%',
        },
        {
          name: 'Eclair',
          resdate: '26/11/20',
          difficulty: 16.0,
          restime: 23,
          result: 6.0,
          forfeit: '7%',
        },
        {
          name: 'Cupcake',
          resdate: '305',
          difficulty: 3.7,
          restime: 67,
          result: 4.3,
          forfeit: '8%',
        },
        {
          name: 'Gingerbread',
          resdate: '356',
          difficulty: 16.0,
          restime: 49,
          result: 3.9,
          forfeit: '16%',
        },
        {
          name: 'Jelly bean',
          resdate: '375',
          difficulty: 0.0,
          restime: 94,
          result: 0.0,
          forfeit: '0%',
        },
        {
          name: 'Lollipop',
          resdate: '392',
          difficulty: 0.2,
          restime: 98,
          result: 0,
          forfeit: '2%',
        },
        {
          name: 'Honeycomb',
          resdate: '408',
          difficulty: 3.2,
          restime: 87,
          result: 6.5,
          forfeit: '45%',
        },
        {
          name: 'Donut',
          resdate: '452',
          difficulty: 25.0,
          restime: 51,
          result: 4.9,
          forfeit: '22%',
        },
        {
          name: 'KitKat',
          resdate: '518',
          difficulty: 26.0,
          restime: 65,
          result: 7,
          forfeit: '6%',
        },
      ],
    };
  },
};
</script>
