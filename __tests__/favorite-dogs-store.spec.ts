import { favoritesDogsStore } from '../src/store'
import { FavoriteDog } from '../src/models/favorite-dogs'

describe('Test favorite dogs store methods', () => {
    it('Should toggle dog once time dog on favorites.', async () => {
        try {
            const favoriteDog = new FavoriteDog({
                breed: 'Teste',
                image_url: ':teste_image_url'
            })
            favoritesDogsStore().toggleDogFavorite(favoriteDog)
            const favoriteDogOnStore = favoritesDogsStore().getById('Teste:teste_image_url')
            expect(favoriteDogOnStore).toBeDefined()
        } catch(e) {
            throw new Error(e)
        }
    })
})