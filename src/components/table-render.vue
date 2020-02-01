<template>
<div class="container">
    <div v-for="item in dataTable" v-bind:key="item[0]" class="columns">
        <div v-for="element in item" v-bind:key="element" class="column">{{element}}</div>
    </div>
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

<style lang="scss">

</style>