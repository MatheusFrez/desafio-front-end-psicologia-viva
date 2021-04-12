<template>
    <main>
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

}
</script>

<style> 

    .favorite-dogs-list {
        display: flex;

        margin: auto;
        margin-top: 4rem;
        max-width: 1000px;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .loader {
        width: 200px;
        height: auto;
    }

    .dog {
        margin: 1.5rem;
    }

    @media (max-width: 1000px) {
        .favorite-dogs-list {
            display: flex;

            margin: auto;
            margin-top: 4rem;
            max-width: 800px;
            flex-direction: row;
            flex-wrap: wrap;
        }
    }

    @media (max-width: 750px) {
        .favorite-dogs-list {
            display: flex;

            margin: auto;
            margin-top: 4rem;
            max-width: 500px;
            flex-direction: row;
            flex-wrap: wrap;
        }
    }

    @media (max-width: 490px) and (min-width: 420px) {
        .favorite-dogs-list {
            display: flex;

            margin: auto;
            margin-top: 10rem;
            max-width: 250px;
            flex-direction: row;
            flex-wrap: wrap;
        }
    }

    @media (max-width: 420px) {
        .favorite-dogs-list {
            display: flex;

            margin: auto;
            margin-top: 14.5rem;
            max-width: 240px;
            flex-direction: row;
            flex-wrap: wrap;
        }
    }
   
</style>
