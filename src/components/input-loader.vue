<template>
      <div class="columns">
        <div class="column is-four-fifths">
          <div class="control">
           <input class="input" type="file" v-on:change="loadFile"/>
           </div>
        </div>
        <div class="column">
           <button class="button is-primary" @click="launchData">
              <span class="icon is-small">
                <font-awesome-icon icon="fa-pie-chart"></font-awesome-icon>
              </span>
              {{instruction}}
             </button>
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
      return this.$store.state.instructions.button.toUpperCase();
    }
  }
}
</script>

<style lang="scss">
.container{
    max-width: 500px
}
</style>