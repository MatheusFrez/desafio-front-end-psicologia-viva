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
            Favoritar
            <v-btn icon color="orange">
                <v-icon>mdi-star</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
})
export default class DogComponent extends Vue {
    @Prop() title: string
    @Prop() image_src: string
}
</script>

<style> 
   
</style>
