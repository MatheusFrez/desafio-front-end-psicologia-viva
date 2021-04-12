<template>
    <div>
        <h2 id="title">Raças e sub-raças de cachorros.</h2>
        <v-expansion-panels>
            <v-expansion-panel
                v-for="(breed,i) in all_breeds"
                :key="i"
            >
                <v-expansion-panel-header>
                    {{breed.name}}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <div class="sub-breeds">
                        <strong>
                            {{getSubBreedsDescription(breed.subBreeds)}}
                        </strong>
                    </div>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { BreedDetails } from '@/models/breed-sub-breed'

@Component({
})
export default class BreedAndSubBreeds extends Vue {
    @Prop() all_breeds: Array<BreedDetails>

    getSubBreedsDescription(subBreeds: Array<string>): string {
        let subBreedsString: string = 'Sub-raças: '
        if(subBreeds.length > 0)
            subBreedsString += subBreeds.join(', ') + '.'
        else subBreedsString = 'Essa raça não possui sub-raças.'
        return subBreedsString
    } 
}
</script>