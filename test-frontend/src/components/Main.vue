<template>
    <div id="app">
        <section class="container bg-white border-rounded">
            <div>
                <div class="row">
                    <!-- Table Filter -->
                    <div class="col1 input-object">
                        <SearchFilter v-bind:regionTypes="regionTypes"></SearchFilter>
                    </div>
                    <div class="col6 input-object">
                        <input type="text" name="search" id="search" placeholder="Search" class="input" v-model="keyword">
                    </div>
                </div>
                <div>
                    <table class="table">
                        <!-- Table Header -->
                        <TableHeader :dataCategories="dataCategories" :firstRow="firstRow" :otherRows="otherRows"></TableHeader>

                        <tbody>
                            <State v-for="(state, index) in states" 
                                   :state="state" :index="index" 
                                   :key="state.id" 
                                   :districts="districts" 
                                   :townships="townships"></State>
                            
                            <!-- Load each tr as a component -->
                            <!-- <template v-for="(state, index) in stateData"> -->
                                <!-- STATES -->
                                <!-- <tr class="row" :key="index">
                                    <td class="col2 align-left">
                                        <div class="row ">
                                            <div class="col1"><img src="./../assets/images/stateIcon.svg" alt="State"></div>
                                            <div class="col2">{{ state.name }}</div>
                                            <div class="col1"><img src="./../assets/images/download.svg" alt=""></div>
                                            <div class="col3 align-right"><button>{{ state.districts.length }} Districts <img src="./../assets/images/remove.svg" alt="Expand"></button></div>
                                        </div>
                                    </td>
                                    <td class="col1">{{ state.lastInput }}</td>
                                    <td class="col1">{{ state.formCount }}</td>
                                    <td class="col1">{{ state.voterCount }}</td>
                                    <td class="col1">{{ state.update }}</td>
                                </tr> -->
                                <!-- <template v-for="(district, districtIndex) in state.districts"> -->
                                    
                                    <!-- <tr class="row" :key="index+'-'+districtIndex">
                                        <td class="col2 align-left">
                                            <div class="row ">
                                                <div class="col1"><img src="./../assets/images/districtIcon.svg" alt="District"></div>
                                                <div class="col2">{{ district.name }}</div>
                                                <div class="col1"><img src="./../assets/images/download.svg" alt=""></div>
                                                <div class="col3 align-right"><button>{{ district.townships.length }} Townships <img src="./../assets/images/remove.svg" alt="Expand"></button></div>
                                            </div>
                                        </td>
                                        <td class="col1">{{ district.lastInput }}</td>
                                        <td class="col1">{{ district.formCount }}</td>
                                        <td class="col1">{{ district.voterCount }}</td>
                                        <td class="col1">{{ district.update }}</td>
                                    </tr> -->

                                    <!-- <tr class="row" v-for="(township, townshipIndex) in district.townships" :key="index+districtIndex+'-township'+townshipIndex">
                                        <td class="col2 align-left">
                                            <div class="row ">
                                                <div class="col1"><img src="./../assets/images/townshipIcon.svg" alt="Township"></div>
                                                <div class="col2">{{ township.name }}</div>
                                                <div class="col1"><img src="./../assets/images/download.svg" alt=""></div>
                                                <div class="col3 align-right"></div>
                                            </div>
                                        </td>
                                        <td class="col1">{{ township.lastInput }}</td>
                                        <td class="col1">{{ township.formCount }}</td>
                                        <td class="col1">{{ township.voterCount }}</td>
                                        <td class="col1">{{ township.update }}</td>
                                    </tr>
                                </template> -->
                            <!-- </template> -->
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import SearchFilter from "./SearchFilter.vue"
import TableHeader from "./TableHeader.vue"
import State from "./State.vue"
import District from "./District.vue"

export default {
    data() {
        return {
            regionTypes: ['State', 'District', 'Township'],
            dataCategories: ['Region', 'Last input', 'Number of forms', 'Number of Voters', 'Update'],
            firstRow: 'col2 align-left',
            otherRows: 'col1',
            keyword: '',
            states:[
                {
                    id: '1',
                    name: 'Shan state', 
                    lastInput: '123,456', 
                    formCount: '342,456', 
                    voterCount: '123,546', 
                    update: '342,456',
                },
                {
                    id: '2',
                    name: 'Shan state', 
                    lastInput: '123,456', 
                    formCount: '342,456', 
                    voterCount: '123,546', 
                    update: '342,456',
                },
                {
                    id: '3',
                    name: 'Shan state', 
                    lastInput: '123,456', 
                    formCount: '342,456', 
                    voterCount: '123,546', 
                    update: '342,456',
                },
            ],
            districts:[
                {
                    id: '1',
                    name: 'Aunglan',
                    lastInput: '123,456', 
                    formCount: '342,456', 
                    voterCount: '123,546', 
                    update: '342,456',
                    stateId: '1'
                },
                {
                    id: '2',
                    name: 'Aunglan',
                    lastInput: '123,456', 
                    formCount: '342,456', 
                    voterCount: '123,546', 
                    update: '342,456',
                    stateId: '1'
                },
                {
                    id: '3',
                    name: 'Aunglan',
                    lastInput: '123,456', 
                    formCount: '342,456', 
                    voterCount: '123,546', 
                    update: '342,456',
                    stateId: '2'
                },
                {
                    id: '4',
                    name: 'Aunglan',
                    lastInput: '123,456', 
                    formCount: '342,456', 
                    voterCount: '123,546', 
                    update: '342,456',
                    stateId: '2'
                },
                {
                    id: '5',
                    name: 'Aunglan',
                    lastInput: '123,456', 
                    formCount: '342,456', 
                    voterCount: '123,546', 
                    update: '342,456',
                    stateId: '1'
                },
                {
                    id: '6',
                    name: 'Aunglan',
                    lastInput: '123,456', 
                    formCount: '342,456', 
                    voterCount: '123,546', 
                    update: '342,456',
                    stateId: '3'
                },
            ],
            townships:[
                {
                    id: '1',
                    name: 'Loilen',
                    lastInput: '123,456', 
                    formCount: '342,456', 
                    voterCount: '123,546', 
                    update: '342,456',
                    districtId: '1'
                },
                {
                    id: '2',
                    name: 'Loilen',
                    lastInput: '123,456', 
                    formCount: '342,456', 
                    voterCount: '123,546', 
                    update: '342,456',
                    districtId: '2'
                },
                {
                    id: '3',
                    name: 'Loilen',
                    lastInput: '123,456', 
                    formCount: '342,456', 
                    voterCount: '123,546', 
                    update: '342,456',
                    districtId: '1'
                },
            ],
        }
    },
    components: {
        SearchFilter, TableHeader, State, District
    }
}
</script>