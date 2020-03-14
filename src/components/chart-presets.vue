<template>
    <div class="control">
        <div v-on:change="commitValue()" class="select" id="opt1">
        <select>
            <option>Select dropdown 1</option>
            <option>With options 1</option>
        </select>
        </div>
        <div v-on:change="commitValue()" class="select" id="opt2">
        <select>
            <option>Select dropdown 2</option>
            <option>With options 2</option>
        </select>
        </div>
    </div>
</template>
<script>
export default {
  name: "chart-presets",
  components: {},
  data() {
    return {};
  },
  methods: {
      commitValue(){
          console.log("change")
      }
  },
  computer: {}
};
</script>