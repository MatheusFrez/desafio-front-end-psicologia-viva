<template>
  <v-app-bar
    app
    color="primary"
    dark
    class="header"
  >
    <v-layout row wrap class="d-flex align-center custom-container">
      <div class="flex">
        <v-img
          alt="Dog example"
          class="shrink mr-2"
          contain
          src="../assets/logo.png"
          transition="scale-transition"
          width="50"
        />
        <h2>Filtragem de cachorros de raça</h2>
      </div>
      <v-spacer></v-spacer>
      <v-btn @click="goToBreedsAndSubBreedsPage" class="d-flex justify-end custom-button" outlined>
        Raças/Sub-Raças
        <v-icon
          right
          dark
          color="black"
        >
          mdi-dog
        </v-icon>
      </v-btn>
      <v-btn @click="goToFavoritesDogsPage" class="d-flex justify-end custom-button" outlined>
        Favoritos
        <v-icon
          right
          dark
          color="orange"
        >
          mdi-star
        </v-icon>
      </v-btn>
      <v-btn @click="goToHomePage" class="d-flex justify-end custom-button-home" outlined>
        home
        <v-icon
          right
          dark
          color="white"
        >
          mdi-home
        </v-icon>
      </v-btn>
    </v-layout>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({ 
  data: () => ({
  })
})
export default class HeaderComponent extends Vue {

  goToFavoritesDogsPage() {
    this.$router.push('/favorite_dogs')
  }

  goToHomePage() {
    this.$router.push('/')
  }

  goToBreedsAndSubBreedsPage() {
    this.$router.push('/breeds')
  }

} 
</script>

<style scoped>
  .flex {
    display: flex;
  }

  .flex > h2 {
    align-self: center;
  }

  @media(min-width: 500px) and (max-width: 850px){
    .custom-container {
      margin-top: 12rem;
    }
  }

  @media (min-width: 960px) {
    .custom-button {
      margin-right: 0.5rem;
      text-align: center;
    }
  }

  @media(max-width: 870px) {
    .header {
      height: 14rem !important;
    }

    .custom-container {
      margin-top: 8rem;
    }

    .custom-button {
      margin-top: 0.5rem;
      width: 100%;
      text-align: center;
    }

    .custom-button-home {
      margin-top: 0.5rem !important;
      width: 100%;
      text-align: center;
    }

    .v-application .justify-end {
      justify-content: center !important;
    }
  }

  @media(max-width: 490px) and (min-width: 420px) {
    .header {
      height: 14rem !important;
    }

    .custom-container {
      margin-top: 8.5rem;
    }

    .custom-button {
      margin-top: 0.5rem;
      width: 100%;
      text-align: center;
    }

    .custom-button-home {
      margin-top: 0.5rem !important;
      width: 100%;
      text-align: center;
    }

    .v-application .justify-end {
      justify-content: center !important;
    }
  }

   @media(max-width: 420px) {
    .header {
      height: 17rem !important;
    }

    .custom-container {
      margin-top: 10rem;
    }

    .custom-button {
      margin-top: 0.5rem;
      width: 100%;
      text-align: center;
    }

    .custom-button-home {
      margin-top: 0.5rem !important;
      width: 100%;
      text-align: center;
    }

    .v-application .justify-end {
      justify-content: center !important;
    }
  }
</style>
