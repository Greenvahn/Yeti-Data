<template>
  <transition name="fadeIn">
        <div v-if="dataTable" class="container marging-top">
            <table>
                <tr v-for="item in dataTable" v-bind:key="item[0]">
                    <td v-for="element in item" v-bind:key="element">{{element}}</td>
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