<template>
      <div class="columns">
        <div class="column">
           <input class="input is-small" type="file" @change="loadFile"/>
           <button @click="launchData">{{instruction}}</button>
        </div>
      </div>
</template>

<script>


export default {
    name:'inputLoader',
    data(){
      return{
        selectedFile: '',
        dataFile: ''
      }
    },
  methods: {
    loadFile(event) {
      this.selectedFile = event.target.files[0];
      //console.log(event.target.files[0].name)

      // const file = this.selectedFile
      // const reader = new FileReader();
      // reader.readAsText(file);

      // reader.onload = (event) => (this.dataFile = event.target.result)
      // reader.onload = (event) => this.$emit("loadData", event.target.result);
      // reader.onload = (event) => console.log(""+this.selectedFile.name+" CSV as text -->\n\n"+event.target.result);
    },
    launchData(){


      const file = this.selectedFile
      const reader = new FileReader();
      reader.readAsText(file);

      reader.onload = (event) => {
        
        console.log(""+this.selectedFile.name+" CSV as text -->\n\n"+event.target.result);
        this.$store.commit('loadDataFile', event.target.result)
      }
    }
  },
  computed:{
    instruction(){
      //return this.$store.getters.getInstruction
      return this.$store.state.instructions
    }
  }
}
</script>

<style lang="scss">
.container{
    max-width: 500px
}
</style>