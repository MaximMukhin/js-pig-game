import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import actions from './actions/actions'
import getters from './getters/getters'
import mutations from './mutations/mutations'

export default new Vuex.Store({
	state: {
		products: [],
		cart: [],
	},
	mutations,

	actions,

	modules: {},

	getters,
})
