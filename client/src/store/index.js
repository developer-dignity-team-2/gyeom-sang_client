import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import {api} from 'boot/axios'

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      // example
    },
    state:{
      mainData:{}
    },

    getters:{
      getMainData : (state) => state.mainData
    },

    mutations:{
      setMainData : (state, payload) => state.mainData = payload
    },

    actions:{
      loadMainData({commit, getters}, payload) {
        return api.get('https://nicespoons.com/api/v1/babsang', null)
          .then((res) => {
            let res_data = res.data;
            commit('setMainData', res_data);
            if(payload.onLoad !== undefined) payload.onLoad(getters.getMainData);
          })
          .catch((error) => {
            console.log("error : ", error);

          });
      }
    },


    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
