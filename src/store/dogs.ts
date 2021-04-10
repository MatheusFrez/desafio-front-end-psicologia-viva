
import { getModule, Module, VuexModule, Action } from "vuex-module-decorators"
import httpService from '../services/http' 
import store from './index'
import { BreedsResponse } from "../models/breeds-response"
import { RandomImageResponse } from "../models/random-image-response"
import { ImagesBreedResponse } from "../models/images-breed-response"
import { SubBreedResponse } from "../models/sub-breed-reponse"

@Module({
  name: 'dogsStore',
  dynamic: true,
  namespaced: true,
  store: store
})
export default class DogsStore extends VuexModule {

  /**
   * List all breeds
   * @returns 
   */
  @Action
  async getAllBreeds(): Promise<BreedsResponse> {
    return (await httpService()
      .get(`/breeds/list/all`)).data
  }

  /**
   * Display single random image from all dogs collections
   * @returns 
   */
  @Action
  async getRandomImage(): Promise<RandomImageResponse> {
    return (await httpService()
      .get(`/breeds/image/random`)).data
  }

  /**
   * Returns an array of all the images from a breed, e.g. hound
   * @param breed breed name
   * @returns 
   */
  @Action
  async getRandomImageByBreed(breed: string): Promise<ImagesBreedResponse> {
    return (await httpService()
      .get(`/breed/${breed}/images/random`)).data
  }

  /**
   * Returns an array of all the images from a breed, e.g. hound
   * @param breed breed name
   * @returns 
   */
  @Action
  async getImageByBreed(breed: string): Promise<ImagesBreedResponse> {
    return (await httpService()
      .get(`/breed/${breed}/images`)).data
  }

  /**
   * Get all images from a sub breed.
   * @param breed breed name
   * @param subBreed subBreed name
   * @returns 
   */
    @Action
    async getImagesBySubBreed(params: { breed: string, subBreed: string }): Promise<ImagesBreedResponse> {
      return (await httpService()
        .get(`/breed/${params.breed}/${params.subBreed}/images`)).data
    }

  /**
   * Returns an array of all the sub-breeds from a breed
   * @param breed breed name
   * @returns 
   */
  @Action
  async getSubBreedsFromBreed(breed: string): Promise<SubBreedResponse> {
    return (await httpService()
      .get(`/breed/${breed}/list`)).data
  }

}

export const dogsStore = getModule<DogsStore>(DogsStore, store)
