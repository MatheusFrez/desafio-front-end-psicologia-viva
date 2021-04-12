import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators"

@Module({
  name: 'favoritesDogsStore',
  preserveState: true
})
export default class FavoritesDogsStore<FavoriteDog> extends VuexModule {

  private _favoritesDogs: Array<FavoriteDog> = []

  get favoritesDogs(): Array<FavoriteDog> {
    return this._favoritesDogs
  }

  @Mutation
  toggleDogFavorite(dog: FavoriteDog) {
    const indexFavoriteDog: number = this._favoritesDogs.findIndex(favoriteDog => dog['_id'] === favoriteDog['_id'])
    if(indexFavoriteDog !== -1) this._favoritesDogs.splice(indexFavoriteDog, 1)
    else this._favoritesDogs.push(dog)
  }

  @Action
  getById(id: string) {
    return this.favoritesDogs.find(favoriteDog => id === favoriteDog['_id'])
  }

}