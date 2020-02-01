<template>
<div class="container marging-top">
    <div v-for="item in dataTable" v-bind:key="item[0]" class="columns with-border">
        <div v-for="element in item" v-bind:key="element" class="row-table">{{element}}</div>
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

.container.marging-top{margin-top: 75px;}
.columns{

    &.with-border{
        border: 1px solid #999;

        .row-table{
            display: flex;
            flex-direction: row;
            justify-content: flex-start;


            width: 20%;
            height: auto;
            max-width: 124px;
            max-height: 100px;
            font-size: 12px;
            padding: 2px;

            font-size: 12px;
            border-right: 0.5px solid #999;
            cursor: pointer;


            // border-left: 0.5px solid #999;

            &:first-child {border-left: none; border-right: 0.5px solid #999;}
            &:last-child {border-left: none; border-right: none;}
            &:hover{ background-color: #cff3e3;}
        }
    }

    &:nth-child(odd){
	background-color: #f5f5f5;
    }


}
</style>