<template>
    <main>
        <div v-if="dogs.length === 0 && !loading" class="no-favorite-dog-message">
            <h2 id="custom-header-text">
                Escolhe seus cachorros favoritos através da <a @click="goToHome">página inicial</a>. =)
            </h2>
            <div>
                <v-img
                    alt="Dog example"
                    class="shrink mx-auto"
                    contain
                    src="../assets/logo.png"
                    transition="scale-transition"
                    width="300"
                />
            </div>
        </div>
        <div class="favorite-dogs-list" v-if="!loading">
            <div v-for="dog in dogs" :key="dog._id" class="dog">
                <DogComponent 
                    :title="dog.breed" 
                    :image_src="dog.image_url"
                    :favorites_dogs_on_store="dogs"
                />
            </div>
        </div>
        <div v-else-if="loading && dogs" class="favorite-dogs-list">
            <div v-for="n in 8" :key="n">
                <v-skeleton-loader
                    v-bind="attrs"
                    type="card"
                    class="loader dog"
                ></v-skeleton-loader>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import DogComponent from './Dog.vue'
import { FavoriteDog } from '@/models/favorite-dogs'
import { favoritesDogsStore } from '@/store'

@Component({
    data: () => ({
        attrs: {
        class: 'mb-6',
        boilerplate: true,
        elevation: 2
      }
    }),
    components: {
        DogComponent
    }
})
export default class FavoriteDogsListComponent extends Vue {

    dogs: Array<FavoriteDog> = []
    loading: boolean = true

    mounted() {
        this.dogs = favoritesDogsStore().favoritesDogs
        this.loading = false
    }

    goToHome() {
        this.$router.push('/')
    }

}
</script>

<style src="../assets/components/favoriteDogsList.css"> 
</style>
