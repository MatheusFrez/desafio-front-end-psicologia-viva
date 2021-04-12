<template>
    <v-card>
        <v-img
            :src="image_src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
            width="200px"
        >
            <v-card-title v-text="title"></v-card-title>
        </v-img>

        <v-card-actions>
            {{action_card_text}}
            <v-btn icon color="orange" @click="toggleFavoriteDog">
                <v-icon>mdi-star</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
import { FavoriteDog } from '@/models/favorite-dogs'
import { favoritesDogsStore } from '@/store'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
})
export default class DogComponent extends Vue {
    @Prop() title: string
    @Prop() image_src: string
    @Prop() favorites_dogs_on_store: Array<FavoriteDog>

    get action_card_text(): string {
        const indexFavoriteDog: number = this.favorites_dogs_on_store.findIndex(favoriteDog => this.title + this.image_src === favoriteDog._id)
        return indexFavoriteDog === -1 ? 'Favoritar' : 'Desfavoritar'
    }

    toggleFavoriteDog() {
        favoritesDogsStore().toggleDogFavorite(new FavoriteDog({
            breed: this.title,
            image_url: this.image_src
        }))
    }
}
</script>

<style> 
   
</style>
