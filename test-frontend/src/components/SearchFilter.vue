<template>
    <select name="filter" id="filter" placeholder="Filter" class="input" v-model="selectedFilter">
        <option value="" selected disabled>Filter</option>
        <option v-for="regionType in regionTypes" :key="regionType">{{ regionType }}</option>
    </select>
</template>


<script>
export default {
    props:{
        regionTypes: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            selectedFilter: ""
        }
    },
    watch: {
        selectedFilter: function(){
            console.log("watching")
        }
    },
}
</script>