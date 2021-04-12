import { prepareBreedName } from '../../src/helpers/prepare-breed-name'

describe('Test preprare breed name helper', () => {
    it('Should get first character of breed name in uppercase.', async () => {
        try {
            const readyBreedName: string = prepareBreedName('bulldog')
            expect(readyBreedName.charAt(0)).toBe('B')
        } catch(e) {
            throw new Error(e)
        }
    })
})