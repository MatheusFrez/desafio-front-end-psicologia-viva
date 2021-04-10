import { dogsStore } from '../src/store/dogs'

describe('Test dogs store module', () => {
    it('Should get random image from API.', async () => {
        try {
            const randomImage = await dogsStore.getRandomImage()
            expect(randomImage.message).toBeDefined()
        } catch(e) {
            throw new Error(e)
        }
    })
    it('Should get all breeds from API.', async () => {
        try {
            const breeds = await dogsStore.getAllBreeds()
            expect(Object.keys(breeds.message).length).toBeGreaterThan(1)
        } catch(e) {
            throw new Error(e)
        }
    })
    it('Should get random image by breed from API.', async () => {
        try {
            const breed = await dogsStore.getRandomImageByBreed('hound')
            expect(breed.message.length).toBeGreaterThan(1)
        } catch(e) {
            throw new Error(e)
        }
    })
    it('Should get images by breed from API.', async () => {
        try {
            const imagesByBreed = await dogsStore.getImageByBreed('hound')
            expect(imagesByBreed.message.length).toBeGreaterThan(1)
        } catch(e) {
            throw new Error(e)
        }
    })
    it('Should get images by subbreed from API.', async () => {
        try {
            const imagesByBreed = await dogsStore.getImagesBySubBreed({ breed: 'elkhound', subBreed: 'norwegian'})
            expect(imagesByBreed.message.length).toBeGreaterThan(1)
        } catch(e) {
            throw new Error(e)
        }
    })
    it('Should get subbreads by breed from API.', async () => {
        try {
            const subBreadsFromBreed = await dogsStore.getSubBreedsFromBreed('hound')
            expect(subBreadsFromBreed.message.length).toBeGreaterThan(1)
        } catch(e) {
            throw new Error(e)
        }
    })
})