import Vue from 'vue'
import Vuex from 'vuex'
import states from '../states.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		states:[],
		filterTerm:''
	},
	mutations:{
		FILTER_TERMS(state,term){
			state.states = state.states.filter(state_item=>{
				state_item.isShown = false
				return state_item.name.toLowerCase().indexOf(term) != -1
			})
		},
		FILTER_LEVEL(state,term){
			state.states = states.filter(state_item=>{
				state_item.isShown = false
				return state_item.level == term
			})
		},
		FILTER(state){
			 state.states.map(state => {
				state.isShown = true
			})
		},
		SET_STATES(state){
			states.map(state=>{
				if(state.level == 'State'){
					state.isShown = true
				}else {
					state.isShown = false
				}
			})
			state.states = states
		},
		SET_FILTER(state,term){
			state.filterTerm = term
		}
	},
	actions:{
		filterTerms({commit},term){
			commit('FILTER_TERMS',term);
			commit('FILTER',term)
		},
		filterLevel({commit},term){
			commit('FILTER_LEVEL',term);
			commit('FILTER',term)
		},
		initStates({commit}){
			commit('SET_STATES')
		},
		setFilterTerm({commit},term){
			commit('SET_FILTER',term)
		}

	},
	getters:{
		states:state=>{
			return state.states
		},
		filterTerm:state=>{
			return state.filterTerm
		}
	}
})