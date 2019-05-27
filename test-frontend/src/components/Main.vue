<template>
    <div id="app">
        <section class="container bg-white border-rounded">
            <div>
                <div class="row">
                    <!-- Table Filter -->
                    <div class="col1 input-object">
                        <SearchFilter v-bind:regionTypes="regionTypes" v-on:updateFilter="selectedFilter = $event"></SearchFilter>
                    </div>
                    <div class="col6 input-object">
                        <KeywordSearch v-model="keywords"></KeywordSearch>
                    </div>
                </div>
                <div>
                    <table class="table">
                        <!-- Table Header -->
                        <TableHeader :dataCategories="dataCategories"></TableHeader>

                        <!-- Table Rows (States, Districts, Townships) -->
                        <tbody>
                            <State v-for="(state, index) in filteredStates" 
                                   :state="state" :index="index" 
                                   :key="state.id" 
                                   :districts="districts" 
                                   :townships="townships"
                                   v-show="selectedFilter == 'states' || selectedFilter == ''"></State>

                            <!-- Hidden until selected by the filter -->
                            <District  v-for="(district, districtIndex) in filteredStates" 
                                       :district="district" 
                                       :districtIndex="districtIndex" 
                                       :key="district.id+'-'+districtIndex"
                                       :townships="townships"
                                       v-show="selectedFilter == 'districts'"></District>

                            <Township v-for="(township, townshipIndex) in filteredStates" 
                                      :township="township" 
                                      :key="township.districtId+township.id+'-township'+townshipIndex"
                                      v-show="selectedFilter == 'townships'"></Township>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import SearchFilter from "./SearchFilter.vue"
import KeywordSearch from "./KeywordSearch.vue"
import TableHeader from "./TableHeader.vue"
import State from "./State.vue"
import District from "./District.vue"
import Township from "./Township.vue"

export default {
    data() {
        return {
            regionTypes: ['States', 'Districts', 'Townships'],
            dataCategories: ['Region', 'Last input', 'Number of forms', 'Number of Voters', 'Update'],
            keywords: '',
            selectedFilter: '',
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
                    name: 'Pols state', 
                    lastInput: '123,456', 
                    formCount: '342,456', 
                    voterCount: '123,546', 
                    update: '342,456',
                },
                {
                    id: '3',
                    name: 'Cnfg state', 
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
                    name: 'Mapsdf',
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
        SearchFilter, KeywordSearch, TableHeader, State, District, Township
    },
    computed: {
        filteredStates: function() {
            switch (this.selectedFilter) {
                case 'districts':
                    return this.districts.filter((district) => {
                        return district.name.match(this.keywords)
                    })
                    break;
                
                case 'townships':
                    return this.townships.filter((township) => {
                        return township.name.match(this.keywords)
                    })
                    break;
            
                default:
                    return this.states.filter((state) => {
                        return state.name.match(this.keywords)
                    })
                    break;
            }
        }
    },
}
</script>