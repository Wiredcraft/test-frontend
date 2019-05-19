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
        },
        firstRow: {
            type: String,
            required: true
        },
        otherRows: {
            type: String,
            required: true
        }
    }
}
</script>