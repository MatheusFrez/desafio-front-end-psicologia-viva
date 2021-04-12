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

} 
</script>

<style scoped>
  .flex {
    display: flex;
  }

  .flex > h2 {
    align-self: center;
  }

  @media(min-width: 500px) {
    .custom-button {
      margin-right: 0.5rem;
    }
  }

  @media(max-width: 420px) {
    .header {
      height: 14rem !important;
    }

    .custom-container {
      margin-top: 6.5rem;
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
      height: 10.5rem !important;
    }

    .custom-container {
      margin-top: 5.0rem;
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
