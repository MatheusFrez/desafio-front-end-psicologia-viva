<template>
  <v-container class="breeds-sub-breeds">
    <div v-if="!loading">
        <h2 id="title">Raças e sub-raças de cachorros.</h2>
        <v-expansion-panels>
            <v-expansion-panel
                v-for="(breed,i) in allBreeds"
                :key="i"
            >
                <v-expansion-panel-header>
                    {{breed.name}}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <div class="sub-breeds">
                        {{getSubBreedsDescription(breed.subBreeds)}}
                    </div>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
    <div v-else>
        <div v-for="n in 8" :key="n">
            <v-skeleton-loader
                type="list-item-two-line, table-tfoot"
                class="loader dog"
            ></v-skeleton-loader>
        </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { dogsStore } from '@/store/dogs'
import { Component, Vue } from 'vue-property-decorator'
import { prepareBreedName } from '@/helpers/prepare-breed-name'

declare interface BreedDetails {
    name: string
    subBreeds: Array<string>
}

@Component({
  components: {
  },
  data: () => ({
  })
})
export default class BreedsSubBreedsPage extends Vue {

    allBreeds: Array<BreedDetails> = []
    loading: boolean = true

    mounted() {
        dogsStore.getAllBreeds()
            .then(res => {
                const breeds = res.message
                const breedsName = Object.keys(breeds)
                this.allBreeds = breedsName.map(breedName => {
                    return {
                        name: prepareBreedName(breedName),
                        subBreeds: breeds[breedName]
                    }
                })
            })
            .finally(() => this.loading = false)
    }

    getSubBreedsDescription(subBreeds: Array<string>): string {
        let subBreedsString: string = 'Sub-raças: '
        if(subBreeds.length > 0)
            subBreedsString += subBreeds.join(', ') + '.'
        else subBreedsString = 'Essa raça não possui sub-raças.'
        return subBreedsString
    } 

} 
</script>

<style>

    .loader {
        width: 700px;
        height: auto;
    }

    @media(max-width: 900px) {
        .loader {
            width: 500px;
            height: auto;
        }
    }

    @media(max-width: 600px) {
        .loader {
            width: 250px;
            height: auto;
        }
    }

    #title {
        text-align: center;
        margin-bottom: 1rem;
    }

    .breeds-sub-breeds {
        margin-top: 5rem;
    }

    .sub-breeds {
        margin-left: 2rem;
    }

    @media(max-width: 870px) and (min-width: 420px) {
        .breeds-sub-breeds {
            margin-top: 14rem;
        }
    }

    @media (max-width: 420px) {
       .breeds-sub-breeds {
            margin-top: 17rem;
        } 
    }
</style>