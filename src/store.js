import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userAgent:'PC'
    },
    mutations: {
        setUserAgent(state,item){
            state.userAgent = item
        }
    },
    actions: {

    }
})
