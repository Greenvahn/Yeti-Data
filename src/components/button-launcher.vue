<template>
  <button @click="launchData">Launch</button>
</template>

<script>
export default {
    name:'button-launcher',
    props: [
      "dataFileName"
    ],
  methods: {
    launchData(){

      console.log(this.dataFileName);
      const file = this.dataFileName
      const reader = new FileReader();
      reader.readAsText(file);

      reader.onload = (event) => this.$emit("loadData", event.target);
      reader.onload = (event) => console.log(""+this.dataFileName.name+" CSV as text -->\n\n"+event.target);
      
    }
  }
}
</script>

<style lang="scss">
.container{
    max-width: 500px
}
</style>