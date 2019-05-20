<template>
    <input type="text" name="search" id="search" placeholder="Search" class="input" v-bind:value="value" v-on:input="$emit('input', $event.target.value)">
</template>

<script>
export default {
    props: ["value"]
}
</script>
