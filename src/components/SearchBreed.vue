<template>
    <v-container class="flex">
        <v-autocomplete
            v-model="model"
            :items="items"
            :loading="isLoading"
            :search-input.sync="search"
            color="grey"
            hide-no-data
            hide-selected
            label="Raças e sub-raças de cachorro"
            placeholder="Busque por raças e sub-raças de cachorro"
            prepend-icon="mdi-dog"
            item-text="breedName"
            item-value="breedName"
            class="custom-width"
            v-if="!isLoading"
            :filter="filterObject"
        >
            <template v-slot:item="data">
                <template>
                  <v-list-item-content>
                    <v-list-item-title v-html="data.item.breedName"></v-list-item-title>
                    <v-list-item-subtitle v-html="data.item.completeSubBreeds"></v-list-item-subtitle>
                  </v-list-item-content>
                </template>
            </template>
        </v-autocomplete>
        <v-autocomplete
            v-model="modelSubBreed"
            :items="subBreedsBySelectedBreed"
            :loading="isLoading"
            color="grey"
            label="Sub-raças de cachorro"
            placeholder="Sub-raças de cachorro baseada na raça selecionada"
            class="custom-width sub-breed"
            v-if="!isLoading"
        >
        </v-autocomplete>
    </v-container>
</template>

<script lang="ts">
import { dogsStore } from '@/store/dogs'
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

declare interface CompleteBreedList {
    breedName: string
    completeSubBreeds: string
    uniqueIdentify: string
}

@Component({
})
export default class SearchBreedComponent extends Vue {
    isLoading: boolean = false
    model: any = null
    modelSubBreed: any = null
    search: string = null
    descriptionLimit: number = 60
    items: Array<CompleteBreedList> = []
    subBreedsBySelectedBreed: Array<string> = []

    async mounted() {
        await this.getAllBreeds()
    }

    @Watch('model')
    getDogsOrSubBreeds() {
        this.modelSubBreed = null
        const selectedBreed = this.items.find(breed => breed.breedName == this.model)
        const stringSubBread = selectedBreed.completeSubBreeds
        if(stringSubBread === "") {
            this.subBreedsBySelectedBreed = []
            this.$emit('load-dogs', { breedValue: this.model, subBreedValue: this.modelSubBreed })
        }
        else 
            this.subBreedsBySelectedBreed = stringSubBread.replace('Sub-raças: ', '').split(',')
    }

    @Watch('modelSubBreed')
    getDogsBySubBreeds() {
        this.$emit('load-dogs', { breedValue: this.model, subBreedValue: this.modelSubBreed })
    }

    async getAllBreeds(): Promise<void> {
        return dogsStore.getAllBreeds()
            .then(res => {
                const breeds = Object.keys(res.message)
                this.items = breeds.map(breedName => {
                    const subBreeds: Array<string> = res.message[breedName]
                    const subBreedsSplited: string = subBreeds.join(', ')
                    const completeSubBreeds: string = subBreedsSplited.length > 0 ? `Sub-raças: ${subBreedsSplited}` : ''
                    return {
                        breedName,
                        completeSubBreeds,
                        uniqueIdentify: `${breedName},${completeSubBreeds}`
                    }
                })
            })
            .finally(() => this.isLoading = false)
    }

    @Watch('search')
    async loadItems() {
        // Items have already been loaded
        if (this.items.length > 0) return

        // Items have already been requested
        if (this.isLoading) return

        this.isLoading = true

        await this.getAllBreeds()
    }

    filterObject(item, queryText, itemText) {
        return (
            item.breedName.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1 
            ||
            item.completeSubBreeds.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1
        );
    }

}
</script>

<style scoped>
    .custom-width {
        width: 48%;
    }

    .v-list-item__subtitle {
        margin-left: 1rem;
    }

    .flex {
        display: flex;

        flex-direction: row;
        flex-wrap: wrap;
    }

    .sub-breed {
        margin-left: 1rem;
    }
</style>