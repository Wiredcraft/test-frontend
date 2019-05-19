<template>
    <div>
        <tr class="row">
            <td class="col2 align-left">
                <div class="row ">
                    <div class="col1"><img src="./../assets/images/districtIcon.svg" alt="District"></div>
                    <div class="col2">{{ district.name }}</div>
                    <div class="col1"><img src="./../assets/images/download.svg" alt=""></div>
                    <div class="col3 align-right"><button>{{ assignedTownships.length }} Townships <img src="./../assets/images/add.svg" alt="Expand"></button></div>
                </div>
            </td>
            <td class="col1">{{ district.lastInput }}</td>
            <td class="col1">{{ district.formCount }}</td>
            <td class="col1">{{ district.voterCount }}</td>
            <td class="col1">{{ district.update }}</td>
        </tr>

        <Township v-for="(township, townshipIndex) in assignedTownships" 
                :township="township" 
                :key="district.stateId+district.id+'-township'+townshipIndex"></Township>
    </div>

</template>

<script>
import Township from './Township.vue'

export default {
    props:{
        district:{
            type: Object,
            required: true
        },

        townships:{
            type: Array,
        }
    },
    components:{
         Township
    },
    computed: {
        assignedTownships: function(){
            let currentDistrict = this.district
            return this.townships.filter(function(township){
                return township.districtId == currentDistrict.id;
            })
        }
    },
}
</script>
