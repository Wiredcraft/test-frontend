<template>
	<select v-model="filterTerm" @change="searchTerms($event)" class="filter">
		<option value="">All</option>
		<option value="State">State</option>
		<option value="District">District</option>
		<option value="County">County</option>
	</select>
</template>
<script>
	export default {
		data(){
			return {
				filterTerm:this.$store.getters.filterTerm
			}
		},
		methods:{
			searchTerms($event){

				this.$store.dispatch('setFilterTerm',$event.target.value)

				if(this.filterTerm == ''){
					this.$store.dispatch('initStates')
				}else{
					this.$store.dispatch('filterLevel',this.filterTerm)
				}
			}
		}
	}
</script>
<style scoped>
	.filter {
		width: 142px;
		padding: 10px;
		box-sizing: border-box;
	}
</style>