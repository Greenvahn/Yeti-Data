<template>
    <button>Button chart</button>
</template>
<script>
export default {
    name: 'button-chart',
    data(){
        return{
            show: false
        }
    },
    methods:{
        showChart(){
            show = !show
        }
    }
}
</script>
<style>

</style>