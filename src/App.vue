<template>
  <v-app>
    <Header />
    <v-main>
      <DogsList />
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import DogsList from './components/DogsList.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    HelloWorld,
    Header,
    Footer,
    DogsList
  },
  data: () => ({
  })
})
export default class AppPage extends Vue {

} 
</script>

<style src="./assets/global.css">
</style>