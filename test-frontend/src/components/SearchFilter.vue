<template>
    <select name="filter" id="filter" placeholder="Filter" class="input">
        <option value="" selected>Any</option>
        <option value="#" v-for="regionType in regionTypes" :key="regionType">{{ regionType }}</option>
    </select>
</template>


<script>
export default {
    props:{
        regionTypes: {
            type: Array,
            required: true
        }
    }
}
</script>