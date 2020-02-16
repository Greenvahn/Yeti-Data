<template>
  <transition name="fadeIn">
        <div v-if="dataTable" class="container marging-top">
            <table>
                <tr v-for="(item, index) in dataTable" v-bind:key="index" v-bind:class="{headerRow : checkHeaderRow('Header row', index)}">
                    <td v-for="(element, index) in item" v-bind:key="index">{{element}}</td>
                </tr>
            </table>
        </div>
  </transition>
</template>

<script>
export default {
    name: 'table-render',
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

            // Loop through all the otpions from the store get the attribut check from the option parsed
            for(let i = 0; i < options.length; i++){
                if(options[i].text == nameOption){
                    isCheck = options[i].isCheck
                }
            }

            // Check if is the first line of the table and the option has been checked.
            return (index === 0 ? isCheck : false)
        }
    },
    computed:{
        dataTable(){
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
            border: 10px solid #000;
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