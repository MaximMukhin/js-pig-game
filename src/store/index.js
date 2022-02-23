import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		products: [],
		cart: [],
	},
	mutations: {
		SET_PRODUCTS_TO_STATE: (state, products) => {
			state.products = products;
		},

		SET_CART: (state, product) => {
			if (state.cart.length) {
				let isProductExists = false;
				state.cart.map(function (item) {
					if (item.article === product.article) {
						isProductExists = true;
						item.quantity++
					}
				})
				if (!isProductExists) {
					state.cart.push(product)
				}
			} else {
				state.cart.push(product)
			}

		},
		REMOVE_FROM_CARD: (state, index) => {
			state.cart.splice(index, 1)
		},

		DECREMENT: (state, index) => {
			if (state.cart[index].quantity > 1)
				state.cart[index].quantity--
		},

		INCREMENT: (state, index) => {
			state.cart[index].quantity++
		},
	},
	actions: {
		GET_PRODUCTS_FROM_API({ commit }) {
			return axios('http://localhost:3000/products', {
				method: "GET"
			})
				.then((products) => {
					commit('SET_PRODUCTS_TO_STATE', products.data);
					return products;
				})
				.catch((error) => {
					console.log(error)
					return error;
				})
		},
		ADD_TO_CART({ commit }, product) {
			commit('SET_CART', product);
		},
		DECREMENT_CART_ITEM({ commit }, index) {
			commit('DECREMENT', index)
		},
		INCREMENT_CART_ITEM({ commit }, index) {
			commit('INCREMENT', index)
		},
		DELETE_FROM_CART({ commit }, index) {
			commit('REMOVE_FROM_CARD', index)
		},
	},
	modules: {
	},
	getters: {
		PRODUCTS(state) {
			return state.products;
		},
		CART(state) {
			return state.cart;
		}
	}
})
