<template>
<div class="container">
    <div v-for="item in dataTable" v-bind:key="item.id">{{item}}</div>
</div>
</template>

<script>
export default {
    name: 'table-render',
    props:['dataTable']
}
</script>