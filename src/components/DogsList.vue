<template>
    <div class="dogs-list-container">
        <div>
            <SearchBreedComponent @load-dogs="loadDogs"/>
        </div>
        <div v-if="dogs.message.length === 0 && !loading" class="no-filter-selected-message">
            <h2 id="custom-header-text">
                Selecione as raças/subraças para visualizar diversos tipos de cachorro. =)
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
import { prepareBreedName } from '@/helpers/prepare-breed-name'

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

    dogs: ImagesBreedResponse = { message: [], status: 'initial' }
    dogBreed: string = ''
    loading: boolean = false
    favorites_dogs_on_store: Array<FavoriteDog> = []

    mounted() {
        this.favorites_dogs_on_store = favoritesDogsStore().favoritesDogs
    }

    async loadDogs(params) {
        this.loading = true
        this.dogBreed = null
        if(!params?.subBreedValue) {
            this.dogBreed = prepareBreedName(params?.breedValue)
            await dogsStore.getImageByBreed(params.breedValue)
                .then(res => this.dogs = res)
                .finally(() => this.loading = false)
        } else {
            this.dogBreed = prepareBreedName(params?.subBreedValue)
            await dogsStore.getImagesBySubBreed({ breed: String(params?.breedValue).trim(), subBreed: String(params?.subBreedValue).trim() })
                .then(res => this.dogs = res)
                .finally(() => this.loading = false)
        }
    }

}
</script>

<style src="../assets/components/dogsList.css"> 
</style>
