import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import errorLog from './modules/errorLog'
import permission from './modules/permission'
import tagsView from './modules/tagsView'
import user from './modules/user'
import appMain from './modules/appMain'
import download from './modules/download'
import apply from './modules/apply'
import family from './modules/family'
import claim from './modules/claim'
import resource from './modules/resource'
import getters from './getters'

import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoading: false
  },
  mutations: {
    // 控制loading显示隐藏
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading
    }
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })],
  modules: {
    app,
    errorLog,
    permission,
    tagsView ,
    user,
    appMain,
    apply,
    download,
    family,
    claim,
    resource
  },
  getters
})

export default store
