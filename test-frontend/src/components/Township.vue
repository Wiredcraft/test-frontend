<template>
    <tr class="row">
        <td class="col5 align-left">
            <div class="row ">
                <div class="col1"></div>
                <div class="col1"><img src="./../assets/images/townshipIcon.svg" alt="Township"></div>
                <div class="col2">{{ township.name }}</div>
                <div class="col1"><img src="./../assets/images/download.svg" alt=""></div>
                <div class="col3 align-right"></div>
            </div>
        </td>
        <td class="col2">{{ township.lastInput }}</td>
        <td class="col2">{{ township.formCount }}</td>
        <td class="col2">{{ township.voterCount }}</td>
        <td class="col2">{{ township.update }}</td>
    </tr>
</template>

<script>
export default {
    props: {
        township:{
            type: Object,
            required: true
        }
    }
}
</script>