<template>
  <v-app-bar
    app
    color="primary"
    dark
    class="header"
  >
    <v-layout row wrap class="d-flex align-center custom-container" v-if="!isMobileOrTablet">
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
    <v-app-bar color="primary" dark fixed app v-if="isMobileOrTablet">
      <v-toolbar-title class="flex">
        <v-img
          alt="Dog example"
          class="shrink mr-2"
          contain
          src="../assets/logo.png"
          transition="scale-transition"
          width="50"
        />
        <h2>Filtragem de cachorros de raça</h2>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
          
      </v-toolbar-items>

      <v-menu class="hidden-md-and-up">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>
              <v-btn @click="goToBreedsAndSubBreedsPage" class="d-flex justify-center custom-button-mobile" outlined>
                Raças/Sub-Raças
                <v-icon
                  right
                  dark
                  color="black"
                >
                  mdi-dog
                </v-icon>
              </v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn @click="goToFavoritesDogsPage" class="d-flex justify-center custom-button-mobile" outlined>
                Favoritos
                <v-icon
                  right
                  dark
                  color="orange"
                >
                  mdi-star
                </v-icon>
              </v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn @click="goToHomePage" class="d-flex justify-center custom-button-mobile" outlined>
                home
                <v-icon
                  right
                  dark
                  color="black"
                >
                  mdi-home
                </v-icon>
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
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

  get isMobileOrTablet() {
    return this.$vuetify.breakpoint.mobile;
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

  .custom-button-mobile{
    width: 100%;
    text-align: center;
  }

  .custom-button {
    margin-right: 0.5rem;
    text-align: center;
  }

</style>
