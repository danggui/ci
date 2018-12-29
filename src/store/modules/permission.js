//import { asyncRouterMap, constantRouterMap } from '@/router'
import {constantRouterMap } from '@/router'
const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { roles } = data
        commit('SET_ROUTERS', roles)
        resolve()
      })
      
    }
    
  }

}

export default permission
