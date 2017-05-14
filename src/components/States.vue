<template>
	<table>
		<thead>
			<tr>
				<td>Region</td>
				<td>Last input</td>
				<td>Number of forms</td>
				<td>Number of votes</td>
				<td>Update</td>
			</tr>
		</thead>
		<tbody>
		<tr is="app-state" v-for="state in states" :state="state">
		</tr>
	</tbody>
	</table>
</template>
<script>
	import state from "./State.vue"

	export default {
		components: {
			appState:state,
		},
		computed: {
			states(){
				return this.$store.getters.states
			}
		}
	}
</script>
<style>
	table {
		width: 1016px;
		margin: 0 auto;
		border-collapse:collapse;
		border-color: #eaebef;
		border-style: solid;
		border-width: 0px 0 0 1px;
		background-color: #fff;
	}
	thead>tr td {
		border-bottom-color: #333;
	}
	thead>tr td:first-child {
		padding-left: 15px;
	}
	tr td:first-child {
	  width: 40%;
	  text-align: left;
	}
	tr td:nth-child(2) {
	  width: 15%;
	}
	tr td:nth-child(3) {
	  width: 15%;
	}
	tr td:nth-child(4) {
	  width: 15%;
	}
	tr td:nth-child(5) {
	  width: 15%;
	}
	tr td {
		border-color: #eaebef;
		border-style: solid;
		border-width: 0 1px 1px 0;
		padding: 10px 0;
		text-align: center;
		line-height: 27px;
	}
</style>