<template>
    <thead>
        <tr class="row">
            <th v-for="(category, index) in dataCategories" 
                :key="index"
                v-bind:class="[index == 0 ? firstRow : otherRows]">{{ category }}</th>
        </tr>
    </thead>
</template>

<script>
export default {
    props: {
        dataCategories:{
            type: Array,
            required: true
        }
    },
    data() {
        return {
            firstRow: 'col5 align-left',
            otherRows: 'col2',
        }
    },
}
</script>