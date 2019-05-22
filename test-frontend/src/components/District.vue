<template>
    <div>
        <tr class="row">
            <td class="col5 align-left">
                <div class="row  mobile-row-direction">
                    <div class="col1"><img src="./../assets/images/districtIcon.svg" alt="District"></div>
                    <div class="col2">{{ district.name }}</div>
                    <div class="col1"><img src="./../assets/images/download.svg" alt=""></div>
                    <div class="col3 align-right">
                        <button v-bind:class="{ 'bg-dark': showTownships }" class="button button-collapse" v-on:click="toggleStatus">
                            <div class="row flex-center">
                                <div class="align-left">
                                    <b>{{ assignedTownships.length }}</b> Townships 
                                </div>
                                
                                <div class="row col1 image-wrapper">
                                    <img v-show="showTownships" 
                                    src="./../assets/images/remove.svg" 
                                    alt="Expand">
                                    <img v-show="!showTownships" 
                                    src="./../assets/images/add.svg" 
                                    alt="Expand">
                                </div>
                                
                            </div>
                        </button>
                    </div>
                </div>
            </td>
            <td class="col2">{{ district.lastInput }}</td>
            <td class="col2">{{ district.formCount }}</td>
            <td class="col2">{{ district.voterCount }}</td>
            <td class="col2">{{ district.update }}</td>
        </tr>

        <Township v-for="(township, townshipIndex) in assignedTownships" 
                  :township="township" 
                  :key="district.stateId+district.id+'-township'+townshipIndex"
                  v-show="showTownships"></Township>
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
    data() {
        return {
            showTownships: false,
        }
    },
    methods: {
        toggleStatus(){
            this.showTownships = !this.showTownships
        }
    },
}
</script>
