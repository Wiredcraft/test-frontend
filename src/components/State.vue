<template>
		<tr v-if="isShown">
			<td>
				<span class="first_capital"
					:class=[district_class]>{{firstCapital}}</span>
				<span>{{state.name}}</span>
				<span class="more_cities" :class="{active:more_cities}"
					@click="changeVisibility">
					{{subcitiesString}}
				</span>
			</td>
			<td>{{state.lastIput}}</td>
			<td>{{state.formNumber}}</td>
			<td>{{state.votersNumber}}</td>
			<td>{{state.updateNumber}}</td>
		</tr>
</template>
<script>
import states from '../states.js'
	export default {
		data(){
			return {
				more_cities:false,
			}
		},

		props:['state'],
		computed:{
			district_class(){
				return this.state.level
			},
			firstCapital(){
				return this.state.level.slice(0,1)
			},
			isShown(){
				return this.state.isShown
			},
			subcitiesNumber(){
				//find all cities whose pid is equal to this city's id
				return states.filter(State => State.pid == this.state.id).length
			},
			subcitiesString(){
				const hashMap = {'State':'District','District':'County'};
				const stateLevel = hashMap[this.state.level];
				if(this.subcitiesNumber == 0){
					return ;
				}else if(this.subcitiesNumber == 1){
					return `${this.subcitiesNumber} ${stateLevel}`
				}else if(this.subcitiesNumber > 1 && this.state.level == 'District'){
					return `${this.subcitiesNumber} Counties`
				}else{
					return `${this.subcitiesNumber} ${stateLevel}s`
				}
			}
		},
		methods:{
			changeVisibility(){
				this.more_cities = !this.more_cities
				let subCities = states.filter(State => State.pid == this.state.id)
				subCities.map(city => {
					city.isShown = !city.isShown
				})
				if(subCities[0].level == 'District' && subCities[0].isShown == false){
					subCities.map(subcity=>{
						return states.filter(State => State.pid == subcity.id)
						.map(sub=>sub.isShown = false)
					})

				}
				}
			},
		}
</script>
<style scoped>
	.more_cities {
		width: 80px;
		background-color: #dbdfeb;
		color: #9295a6;
		display: inline-block;
		padding: 0 20px 0 10px;
		line-height: inherit;
		border-radius: 3px;
		float: right;
		margin-right: 20px;
		background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAADeUlEQVR4nO3cYXHiXBiG4UcCEl4JlYCET0IlrAQcVEIlVMJKqIRKqITuj7az3a9AQglJTs51zeQfAy/JuTNDgCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/dklOSR5SLJfdBJYmUrymuTty3ZYcB62a5/3k/Ah7+uuCU/5N47P7WHJodicQ76vsbslBxrrOccDEQlTeczx9fW05FBjPeR0ICLhWqfieMv7yXn1dkleIhKmdy6OptZV5fsH9WbfDIvbZTiOl4/HNaMiEq43Jo7nNHQV66uKSPi5TcfxqSISLtdFHJ8qImG8ruL4VBEJw3Y5/WXzZuP4VBEJp42No6mrVZeqiITvxPFFRST8JY4jKiJBHGdVRNIzcYxQEUmPxHGBikh6MiaO3xHHPyoi6YE4rlARyZaJYwIVkWyROCZUEcmW7HL+r9hveY9HHBeoiGQLxsTxGHH8SEUkLRPHDCoiaVFl+N4E4phIRSQtqYy7cYc4JlQRSQsq4lhMRSRrVhHH4ioiWaO7iGM1KiJZk7FxMKOKSNZAHCtWEcmSxNGAikiWcBf7vRkVB2tO4mhQxUGbgzgaVnHwbkkcG1BxEG9hTByHpYbjMhWRTEkcG1QRyRTEsWEVkVxjH3FsXkUkP7HP8H67X2g2JlYRySX2EUd3KiIZYx9xdKsiknPuc37/vEYcm1cRyTH3EQcfKiL56j7i4H8qIkmSXxEHJ1T6jkQcDKr0GcmYOP5bbDpWpdJXJOLgYpU+IvmV8+9RHJxU2XYk4uBqlW1GIg4mU9lWJOJgcpVtRCIObqbSdiTi4OYqbUYiDmZTaSuSQ8TBzCptRHKIOFhIZd2RHE7M9DWOu6WGow+VdUZyGJhJHMymsq5IHgdmEQezq6wjkqE4XiIOFlJZNpIxcdQNXx8GVeaPZBdx0JDKfJGIgyZVbh/JmDieIw5WqnK7SMTBJlSmj0QcbEplukh2SZ4GnkscNKdyfSRj49hNPj3MoPLzSMRBFyqXRyIOulIZH4k46FJlXCTioFuV4UjEQdcqP4tEHHSjclkkvyMOOlMZF4k46FblfCTioHuV45GIAz5U/v4Y8TXvl3vFAUcIAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgiD+sSDiAAdH53AAAAABJRU5ErkJggg==");
		background-position: 90% 50%;
	    background-size: 10%;
	    background-repeat: no-repeat;
	}
	.more_cities.active {
		background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAADKElEQVR4nO3cXXEqMRiA4U8CEpCABCQcCUioBBwgoRKQUAmVUAmV0HNB0zNDD2xgf5JNnmdmb7j6NuSdyd4kAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINMmIk4R8RkRXxHx+v0bdG8TlyC+rp6PEAmduxWHSOjeUBwioVu5cYiE7mwi4hz5cYiEbjwbh0hoXk4c7zF89BIJzcmNI218kdCNR+NIRELzno0jEQnNGhtHIhKaM1UciUhoRk4cb/H4hhYJqzdXHIlIWK2540hEwups4vJNMXcciUhYjZw4zjH9hhUJ1cuJ4zXm26gioVrbuGzAUnEkIqE626gjjkQkVGMbw3GcYvkNKRKK20adcSQioZhd1B1HIhIWt5Y4EpGwmNw4aiMSZrfWOBKRMJtd/LsKdI1xJCJhcq3EkYiEybQWRyISRms1jkQkPK31OBKR8LCcOI6lhpuBSMjWWxyJSBi0jz7jSETCTfsYjuOl1HALEgm/7GM4jkOh2UoQCT/2IY7/EQlxCHHcI5KOHeJ+HJ/RdxyJSDp0CHE8QiQdOYQ4niGSDryEOMYQScNy4vhTbLr1EEmDxDEtkTREHPMQSQNe4v6fKI5xRLJi4liGSFZIHMsSyYqIowyRrIA4yhJJxcRRB5FUSBx1EUlFjiGOGomkAscYjmNfaDZEUtQxhuPYlRqOHyIp4BjiWBORLGhoscVRJ5EsIGeRt6WGY5BIZiSONohkYpsQR2tEMpGcON5DHGskkpHE0T6RPEkc/RDJg8TRH5Fk2kTEOcTRI5EMyI2j60VqnEhuEAeJSK6Ig2si+SYObuk+EnEwpNtIxEGu7iLJieMtGntpRukmEnHwrOYjEQdjNRuJOJhKc5Fs4vLBfe+lXmNlL0VRTUVyDHEwvWYiuXe0EgdjDEXyWm60fKcQB/O5F8lHwbmybeP34KcQB9O5Fcm55FCP2MXlW+Qcl4umYWrXJxXXzsKVQ1xCOYXLAwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAO/QX01TOOIMm+9AAAAABJRU5ErkJggg==");
		background-position: 90% 50%;
	}
	.first_capital {
		color: #fff;
		background-color: #8a7bcc;
		height: 27px;
		width: 27px;
		border-radius: 50%;
		display: inline-block;
		margin: 0 15px;
		text-align: center;
	}
	.District {
		margin-left: 45px;
	}
	.County {
		margin-left: 75px;
	}
</style>