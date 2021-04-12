<template>
  <v-main>
    <FavoritesDogs />
  </v-main>
</template>

<script lang="ts">
import FavoritesDogs from '../components/FavoriteDogsList.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    FavoritesDogs
  },
  data: () => ({
  })
})
export default class FavoritesDogsPage extends Vue {

} 
</script>

<style src="../assets/global.css">
</style>