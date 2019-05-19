<template>
    <div>
        <tr class="row">
            <td class="col2 align-left">
                <div class="row ">
                    <div class="col1"><img src="./../assets/images/stateIcon.svg" alt="State"></div>
                    <div class="col2">{{ state.name }}</div>
                    <div class="col1"><img src="./../assets/images/download.svg" alt=""></div>
                    <div class="col3 align-right"><button>{{ assignedDistricts.length }} Districts <img src="./../assets/images/add.svg" alt="Expand"></button></div>
                </div>
            </td>
            <td class="col1">{{ state.lastInput }}</td>
            <td class="col1">{{ state.formCount }}</td>
            <td class="col1">{{ state.voterCount }}</td>
            <td class="col1">{{ state.update }}</td>
        </tr>
        <District  v-for="(district, districtIndex) in assignedDistricts" 
                   :district="district" 
                   :districtIndex="districtIndex" 
                   :key="state.id+'-'+districtIndex"
                   :townships="townships"></District>
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
}
</script>
