<template>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Dog example"
          class="shrink mr-2"
          contain
          src="../assets/logo.png"
          transition="scale-transition"
          width="50"
        />

        <v-spacer></v-spacer>

        <h2>Filtragem de cachorros de raça</h2>
      </div>
    </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({ 
  data: () => ({
  })
})
export default class HeaderComponent extends Vue {
 
} 
</script>
