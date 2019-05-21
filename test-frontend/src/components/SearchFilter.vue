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
        },
        value:{
            type: String
        }
    },
    data() {
        return {
            selectedFilter: ""
        }
    },
    watch: {
        selectedFilter: function(){
            // EMIT event to parent component with the category type to be searched
            this.$emit('updateFilter', this.selectedFilter.toLowerCase());
        }
    },
}
</script>