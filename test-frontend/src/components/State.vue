<template>
    <div>
        <tr class="row">
            <td class="col5 align-left">
                <div class="row mobile-row-direction">
                    <div class="col1"><img src="./../assets/images/stateIcon.svg" alt="State"></div>
                    <div class="col2">{{ state.name }}</div>
                    <div class="col1"><img src="./../assets/images/download.svg" alt=""></div>
                    <div class="col3 align-right">
                        <button v-bind:class="{ 'bg-dark': showDistricts }" class="button button-collapse" v-on:click="toggleStatus">
                            <div class="row flex-center">
                                <div class="">
                                    <b>{{ assignedDistricts.length }}</b> Districts 
                                </div>
                                
                                <div class="row col1 image-wrapper">
                                    <img v-show="showDistricts" 
                                    src="./../assets/images/remove.svg" 
                                    alt="Expand">
                                    <img v-show="!showDistricts" 
                                    src="./../assets/images/add.svg" 
                                    alt="Expand">
                                </div>
                                
                            </div>
                            
                        </button>
                    </div>
                </div>
            </td>
            <td class="col2">{{ state.lastInput }}</td>
            <td class="col2">{{ state.formCount }}</td>
            <td class="col2">{{ state.voterCount }}</td>
            <td class="col2">{{ state.update }}</td>
        </tr>
        <District  v-for="(district, districtIndex) in assignedDistricts" 
                   :district="district" 
                   :districtIndex="districtIndex" 
                   :key="state.id+'-'+districtIndex"
                   :townships="townships"
                   v-show="showDistricts"></District>
    </div>
</template>

<script>
import District from './District.vue'

export default {
    props:{
        state:{
            type: Object,
            requires: true
        },
        districts:{
            type: Array,
        },
        townships:{
            type: Array
        }
    },
    components:{
        District
    },
    computed: {
        assignedDistricts: function (){
            let currentState = this.state

            return this.districts.filter(function(district){
                return district.stateId == currentState.id;
            })
        }
    },
    data() {
        return {
            showDistricts: false,
        }
    },

    methods: {
        toggleStatus(){
            this.showDistricts = !this.showDistricts
        }
    },
}
</script>
