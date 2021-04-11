import { FavoriteDog } from '@/models/favorite-dogs';
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import FavoritesDogsStore from './favorites-dogs';
import { getModule } from 'vuex-module-decorators'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    favoritesDogsStore: FavoritesDogsStore
  },
  plugins: [ createPersistedState({ storage: window.localStorage }) ],
  state: {

  }
})
export default store

export const favoritesDogsStore = <T extends FavoriteDog>() => getModule<FavoritesDogsStore<T>>(FavoritesDogsStore, store)
