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
                        <KeywordSearch v-model="keywords"></KeywordSearch>
                    </div>
                </div>
                <div>
                    <table class="table">
                        <!-- Table Header -->
                        <TableHeader :dataCategories="dataCategories" :firstRow="firstRow" :otherRows="otherRows"></TableHeader>

                        <tbody>
                            <State v-for="(state, index) in filteredCategories" 
                                   :state="state" :index="index" 
                                   :key="state.id" 
                                   :districts="districts" 
                                   :townships="townships"></State>                            
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

export default {
    data() {
        return {
            regionTypes: ['States', 'Districts', 'Townships'],
            dataCategories: ['Region', 'Last input', 'Number of forms', 'Number of Voters', 'Update'],
            firstRow: 'col2 align-left',
            otherRows: 'col1',
            keywords: "",
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
        SearchFilter, KeywordSearch, TableHeader, State
    },
    computed: {
        filteredCategories: function() {
            return this.states.filter((state) => {
                return state.name.match(this.keywords)
            })
        }
    },
}
</script>