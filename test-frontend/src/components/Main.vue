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
        SearchFilter, TableHeader, State
    }
}
</script>