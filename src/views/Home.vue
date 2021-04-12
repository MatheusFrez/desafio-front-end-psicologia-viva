<template>
  <v-app>
    <v-main>
      <DogsList />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import DogsList from '../components/DogsList.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    Header,
    Footer,
    DogsList
  },
  data: () => ({
  })
})
export default class HomePage extends Vue {

} 
</script>

<style src="../assets/global.css">
</style>