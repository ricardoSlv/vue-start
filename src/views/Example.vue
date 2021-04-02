<template>
  <div>
    <appHeader></appHeader>
    <navDraw></navDraw>
    <!-- :sort-by="["valor do parâmetro pelo qual se quer ordenar inicialmente"]" -->
    <!-- :items="items a serem representados na tabela" -->
    <v-main>
      <v-data-table
        :headers="headers"
        :items-per-page="15"
        :search="search"
        multi-sort
        ><template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>Título da janela</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>

            <!-- Barra de Pesquisa -->
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Pesquisa"
              single-line
              hide-details
              class="mr-5"
            ></v-text-field>
          </v-toolbar>
        </template>
        <!-- Definição dos headers -->
        <!-- v-slot:header.valor="{ header }" -->
        <template>
          <!-- <label> {{ header.text }} </label> -->
        </template>
        ...
        <!-- v-slot:item.options="{ item }" -->
        <!-- @click="Função a ser executada quando se carrega neste icon" -->
        <template>
          <v-icon small class="mr-2"> icon MDI </v-icon>
        </template>
      </v-data-table>
    </v-main>
  </div>
</template>

<script>
// imports dos outros componentes e axios para os pedidos
// import axios from 'axios';
import appHeader from '../components/example/appHeader.vue';
import NavDraw from '../components/example/navDraw.vue';

export default {
  data() {
    return {
      headers: [
        {
          text:
            'Texto correspondente ao parâmetro a ser representado na tabela',
          value: 'valor',
        },
        {
          text: 'Opções',
          value: 'options',
          sortable: false,
        },
      ],
      search: '',
    };
  },
  components: {
    NavDraw,
    appHeader,
  },
};
</script>

<style scoped>
/* css para tornar a aparência mais similar ao template */
.v-data-table /deep/ th {
  background-color: #4b779e;
}
.v-data-table /deep/ tr {
  color: #73879c;
  font-size: 13px;
}
.v-data-table /deep/ tr:nth-child(even) {
  background-color: rgb(245, 245, 245);
}
#docs * {
  box-sizing: border-box;
}
#docs {
  margin: 20px auto;
  max-width: 1100px;
  margin-bottom: 80px;
}
label {
  color: white;
  padding: 8px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 15px;
}
</style>
