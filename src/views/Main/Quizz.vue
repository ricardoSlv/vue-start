<template>
  <main class="wrapper">
    <section>
      <v-form v-model="valid" ref="form" @submit.prevent="submitForm">
        <h1>Quizz Numero uno</h1>
        <v-container>
          <h3>Quien eres?</h3>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="student.firstname"
                :rules="student.nameRules"
                :counter="10"
                label="First name"
                required
              />
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="student.lastname"
                :rules="student.nameRules"
                :counter="10"
                label="Last name"
                required
              />
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="student.email"
                :rules="student.emailRules"
                label="E-mail"
                required
              />
            </v-col>
          </v-row>
        </v-container>

        <v-container>
          <h3>Cultura geral</h3>
          <v-row>
            <v-col class="pb-0" cols="12">
              <v-select
                v-model="culture.painter"
                :items="culture.painters"
                label="Who painted the Mona Lisa"
              />
            </v-col>
            <v-col class="py-0" cols="12">
              <v-subheader class="ps-0"
                >Com quantos paus se faz uma canoa?</v-subheader
              >
              <v-slider
                v-model.number="culture.paus"
                dense
                ticks="always"
                thumb-label
                value="0"
                step="1"
                min="0"
                max="20"
              />
            </v-col>
            <v-col class="pt-0" cols="12">
              <v-subheader class="ps-0"
                >Please Select Prof Orlando?</v-subheader
              >
              <v-radio-group
                class="mt-0"
                v-model="culture.professor"
                :rules="culture.professorRules"
                row
              >
                <v-radio label="👴🏼" value="orlando" />
                <v-radio label="👨🏾" value="mexico" />
              </v-radio-group>
            </v-col>
          </v-row>
        </v-container>
        <v-btn style="width: 100%" color="primary" type="submit">
          Submit
        </v-btn>
      </v-form>
      <v-snackbar top v-model="snackbar.show">
        <section class="d-flex align-center">
          {{ snackbar.text }}
          <v-spacer />
          <v-btn :color="snackbar.color" text @click="snackbar.show = false">
            Close
          </v-btn>
        </section>
      </v-snackbar>
    </section>
  </main>
</template>

<script lang ="ts">
import Vue from 'vue';
import { VuetifyForm } from '@/vuetify_types';

export default Vue.extend({
  name: 'Quizz',
  data: () => ({
    valid: false,
    snackbar: {
      show: false,
      text: '',
      color: '',
    },
    student: {
      firstname: '',
      lastname: '',
      nameRules: [
        (v: string) => !!v || 'Name is required',
        (v: string) => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        (v: string) => !!v || 'E-mail is required',
        (v: string) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    },
    culture: {
      painter: '',
      painters: ['Da Vinqui??', 'Picasso', 'O hugo'],
      painterRules: [(v: string) => !!v || 'Answer is required'],
      paus: 0,
      professor: '',
      professorRules: [(v: string) => !!v || 'Please select one'],
    },
  }),
  methods: {
    submitForm() {
      console.log('ola');
      const form = this.$refs.form as VuetifyForm;

      const validForm = form.validate();
      if (validForm) this.snackbar.show = true;
      else return;

      const { painter, paus, professor } = this.culture;
      if (painter === 'Da Vinqui??' && paus === 20 && professor === 'orlando') {
        this.snackbar.text = `Bom trabalho ${this.student.firstname} 😆!`;
        this.snackbar.color = 'green';
      } else {
        this.snackbar.text = 'Estuda malandro 🙄!';
        this.snackbar.color = 'red';
      }
    },
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
