<template>
  <transition name="fadeIn">
        <div v-if="dataTable" class="container marging-top">
            <table>
                <tr v-for="(item, index) in dataTable" v-bind:key="index" v-bind:class="{headerRow : checkHeaderRow('has header', index)}">
                    <td v-for="(element, index) in item" v-bind:key="index">{{element}}</td>
                </tr>
            </table>
            <barChart></barChart>
            <buttonChart></buttonChart>
        </div>
  </transition>
</template>

<script>

import barChart from './bar-chart.vue'
import buttonChart from './button-chart.vue'

export default {
    name: 'table-render',
    components: {
        barChart,
        buttonChart
    },
    data(){
        return{
            show: false
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
        }
    },
    computed:{
        dataTable(){
        //get data table
        return this.$store.getters.getTable
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