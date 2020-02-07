<template>
      <div class="columns">
        <div class="column is-four-fifths">
          <div class="control">
           <input class="input" type="file" v-on:change="loadFile"/>
           </div>
        </div>
        <div class="column">
           <button class="button is-primary" @click="launchData" v-if="renderButton">
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
        dataFile: null,
        showLaunch: false
      }
    },
  methods: {
    loadFile(event) {

      // Empties table -- Sets to null the data file from the store --> hides table
      this.$store.commit('loadDataFile', null);  

      // Retrieves file from input onChange
      this.selectedFile = event.target.files[0];

        console.log("%cFileReader --> event.target", "color:black; background-color:orange", event.target.files[0])
        
        // If TRUE - file loaded
        if(this.selectedFile){

        // 1 – change button LAUNCH state --> (show)
          this.showLaunch = true;
          this.$store.commit('showLaunch', this.showLaunch);
        }


    },
    launchData(){

      // Converts .csv file to plain text with JS FileReader
      const file = this.selectedFile
      const reader = new FileReader();
      reader.readAsText(file);

      reader.onload = (event) => {

        //If reader successful
        if(reader.result){

            // commit data to the store.js --> loadDataFile function
            this.$store.commit('loadDataFile', event.target.result);

            // change button LAUNCH state to FALSE after launch --> (hide)
            this.showLaunch = false;
            this.$store.commit('showLaunch', this.showLaunch)


            // report
            console.log("%cFileReader --> Successful.", "color:white; background-color:green");
            console.log(reader.result);
        }

      },

      // On error..
      reader.onerror = function() {
        console.log("%cFileReader --> could NOT read the file.", "color:white; background-color:red");
      };

    }
  },
  computed:{
    instruction(){
      return this.$store.state.instructions.button.toUpperCase();
    },
    renderButton(){
      return this.$store.getters.getButton;
    }
  }
}
</script>

<style lang="scss">
.container{
    max-width: 500px
}
</style>