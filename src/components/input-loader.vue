<template>
<div class="launcher">

    <options-loader v-if="renderButton"></options-loader>

    <div class="columns">
      <div class="column is-four-fifths">
        <div class="file has-name is-right is-fullwidth">
          <label class="file-label">
            <input class="input" type="file" v-on:change="loadFile" />
            <span class="file-cta">
              <span class="file-icon">
                <font-awesome-icon icon="cloud-upload-alt" />
              </span>
              <span class="file-label">Browse</span>
            </span>
            <span class="file-name">{{fileName}}</span>
          </label>
        </div>
      </div>
      <div class="column is-one-fifths">
        <button
          class="button is-primary"
          @click="launchData"
          v-if="renderButton"
        >{{instruction}}</button>
      </div>
    </div>

</div>
</template>

<script>
// Import options from external component
import optionsLoader from "./input-options.vue";

export default {
  name: "inputLoader",
  components: {
    optionsLoader
  },
  data() {
    return {
      selectedFile: "",
      fileName: "No file chosen...",
      dataFile: null,
      showLaunch: false
    };
  },
  methods: {
    loadFile(event) {
      // Empties table -- Sets to null the data file from the store --> hides table
      this.$store.commit("loadDataFile", null);

      // Updates the file name on input onChange
      this.fileName = event.target.files[0].name;

      // Retrieves file from input onChange
      this.selectedFile = event.target.files[0];

      console.log(
        "%cFileReader --> event.target",
        "color:black; background-color:orange",
        event.target.files[0]
      );

      // If TRUE - file loaded
      if (this.selectedFile) {
        // 1 – change button LAUNCH state --> (show)
        this.showLaunch = true;
        this.$store.commit("showLaunch", this.showLaunch);
      }
    },
    launchData() {
      // Converts .csv file to plain text with JS FileReader
      const file = this.selectedFile;
      const reader = new FileReader();
      reader.readAsText(file);

      (reader.onload = event => {
        //If reader successful
        if (reader.result) {
          // commit data to the store.js --> loadDataFile function
          this.$store.commit("loadDataFile", event.target.result);

          // change button LAUNCH state to FALSE after launch --> (hide)
          this.showLaunch = false;
          this.$store.commit("showLaunch", this.showLaunch);

          // report
          console.log(
            "%cFileReader --> Successful.",
            "color:white; background-color:green"
          );
          console.table(reader.result);
        }
      }),
        // On error..
        (reader.onerror = function() {
          console.log(
            "%cFileReader --> could NOT read the file.",
            "color:white; background-color:red"
          );
        });
    }
  },
  computed: {
    instruction() {
      return this.$store.state.instructions.button.toUpperCase();
    },
    renderButton() {
      return this.$store.getters.getButton;
    }
  }
};
</script>

<style lang="scss">
.launcher{
  margin-top: 50px;
}

input[type="file"] {
  display: none;
}

.container {
  max-width: 500px;
}

.file-name {
  //font-weight: bold;
}

.file-icon {
  width: 2em !important;
}
</style>