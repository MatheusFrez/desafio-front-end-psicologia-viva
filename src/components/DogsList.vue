<template>
    <div class="dogs-list-container">
        <div>
            <SearchBreedComponent @load-dogs="loadDogs"/>
        </div>
        <div class="dogs-list" v-if="!loading">
            <div v-for="dog_src in dogs.message" :key="dog_src" class="dog">
                <DogComponent 
                    :title="dogBreed" 
                    :image_src="dog_src"
                    :favorites_dogs_on_store="favorites_dogs_on_store"
                />
            </div>
        </div>
        <div v-else-if="loading && dogBreed" class="dogs-list">
            <div v-for="n in 8" :key="n">
                <v-skeleton-loader
                    v-bind="attrs"
                    type="card"
                    class="loader dog"
                ></v-skeleton-loader>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ImagesBreedResponse } from '@/models/images-breed-response'
import { dogsStore } from '@/store/dogs'
import { Component, Prop, Vue } from 'vue-property-decorator'
import SearchBreedComponent from './SearchBreed.vue'
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
        SearchBreedComponent,
        DogComponent
    }
})
export default class DogsListComponent extends Vue {

    dogs: ImagesBreedResponse
    dogBreed: string = ''
    loading: boolean = true
    favorites_dogs_on_store: Array<FavoriteDog> = []

    mounted() {
        this.favorites_dogs_on_store = favoritesDogsStore().favoritesDogs
    }

    prepareBreedName(breedName: string) {
        return breedName.charAt(0).toUpperCase() + breedName.slice(1);
    }

    async loadDogs(params) {
        this.loading = true
        this.dogBreed = null
        if(!params?.subBreedValue) {
            this.dogBreed = this.prepareBreedName(params?.breedValue)
            await dogsStore.getImageByBreed(params.breedValue)
                .then(res => this.dogs = res)
                .finally(() => this.loading = false)
        } else {
            this.dogBreed = this.prepareBreedName(params?.subBreedValue)
            await dogsStore.getImagesBySubBreed({ breed: params?.breedValue, subBreed: params?.subBreedValue})
                .then(res => this.dogs = res)
                .finally(() => this.loading = false)
        }
    }

}
</script>

<style> 

    .dogs-list-container {
        margin-top: 8rem;
    }

    @media (min-width: 500px) {
        .dogs-list-container {
            margin-top: 0.5rem;
        }
    }

    .dogs-list {
        display: flex;

        margin: auto;
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
        .dogs-list {
            display: flex;

            margin: auto;
            max-width: 800px;
            flex-direction: row;
            flex-wrap: wrap;
        }
    }

    @media (max-width: 750px) {
        .dogs-list {
            display: flex;

            margin: auto;
            max-width: 500px;
            flex-direction: row;
            flex-wrap: wrap;
        }
    }

    @media (max-width: 500px) {
        .dogs-list {
            display: flex;

            margin: auto;
            max-width: 250px;
            flex-direction: row;
            flex-wrap: wrap;
        }
    }
   
</style>
