<template>
<div class="container">
    <div>{{dataTable}}</div>
</div>
</template>

<script>
export default {
    name: 'table-render',
    computed:{
        dataTable(){
        return this.$store.getters.getTable
        }
    }
}
</script>