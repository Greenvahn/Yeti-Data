<template>
    <div class="container">
            <presetsChart></presetsChart>
            <buttonChart></buttonChart>
            <barChart></barChart>
    </div>
</template>
<script>
import barChart from './bar-chart.vue'
import buttonChart from './button-chart.vue'
import presetsChart from './chart-presets.vue'

export default {
    name: 'chart-bar--box',
    components: {
        barChart,
        buttonChart,
        presetsChart
    }
}
</script>