<template>
  <transition name="fadeIn">
        <div v-if="dataTable" class="container marging-top">
            <table>
                <tr v-for="(item, index) in dataTable" v-bind:key="index" v-bind:class="{headerRow : checkHeaderRow('has header', index)}">
                    <td v-for="(element, index) in item" v-bind:key="index" v-bind:class="{isLabel: isSelected(index, dataLabel), isValue: index === dataValue ? true : false}">{{element}}</td>
                </tr>
            </table>
            <chartBoxBar></chartBoxBar>
        </div>
  </transition>
</template>

<script>

import chartBoxBar from './chart-box--bar.vue'

export default {
    name: 'table-render',
    components: {
        chartBoxBar
    },
    data(){
        return{
            show: false,
            label : false
        }
    },
    methods:{
        checkHeaderRow(nameOption, index){
            // nameOtion --> parse the input option name from the store

            // Get options array from the store
            const options = this.$store.getters.getInputOptions

            // Define input attribute check false by default
            let isCheck = false;

            // Loop through all the inputOtpions from the store get the attribute check from the option parsed
            options.forEach(option => { 
                option.name == nameOption ? 
                isCheck = option.isCheck : isCheck;
            });

            // Check if is the first line of the table and the option has been checked.
            return (index === 0 ? isCheck : false)
        },
        isSelected(index, computedData){
            // Retrieve the cell to be selected from the dropdwons selectors
            // If the cell index matches with the dropdown option --> highligh

            return ( index === computedData ? true : false)
        }
    },
    computed:{
        dataTable(){
        //get data table
        return this.$store.getters.getTable
        },
        dataLabel(){
        //get data table
        return this.$store.getters.getMiniChart.inputs.labels
        },
        dataValue(){
        //get data table
        return this.$store.getters.getMiniChart.inputs.values
        }
    }
}
</script>

<style lang="scss">
.container.marging-top{margin-top: 115px;}

table{
    border: 1px solid #999;
    background: white;
    width: 100%;
    margin-bottom: 50px;
    tr{
        border-bottom: 1px solid #cecece;
        &:nth-child(odd){
            background-color: #f5f5f5;
        }

        td{
        font-size: 12px;
        border-right: 0.5px solid #cecece;
        padding: 5px;
        cursor: pointer;
            &:first-child {border-left: none; border-right: 0.5px solid #cecece}
            // &:last-child {border-left: none; border-right: none;}
            &:hover{ background-color: #cff3e3;}

            &.isLabel{ background-color: #75c1f3;}
            &.isValue{ background-color: #fdcf38;}

        }

        &.headerRow{
            background-color: #8effcc;
            columns: #000;
            border-bottom: 5px solid #000;
            font-weight: bold;
        }

    }
}

/* Table animation */
.fadeIn-enter-active{
animation: fadeIn .6s; 
}

.fadeIn-leave-active{
animation: fadeIn .4s reverse;
}


@keyframes fadeIn{
  0%{
    opacity: 0;
    margin-top: -10px;
  }
  100%{
    opacity: 1;
     margin-top: 115px;
  }
}
</style>