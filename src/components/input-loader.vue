<template>
  <div class="wrap-text-launcher">
    <div class="main-text">
      <div v-for="(section, index) in mainText" :class="section.type" :key="index">
        <p v-for="(text, index) in section.content" :class="text.class" :key="index">{{text.p}}</p>
      </div>
    </div>

    <div class="launcher">
      <div class="message is-info">
        <div class="message-body">{{instructionMsg}}</div>
      </div>

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
                <span class="file">Browse</span>
              </span>
              <span class="file-name">{{fileName}}</span>
            </label>
          </div>
        </div>
        <div class="column is-one-fifths">
          <button class="button is-primary" @click="launchData" v-if="renderButton">{{instruction}}</button>
        </div>
      </div>

      <notification-loader></notification-loader>
    </div>
  </div>
</template>

<script>
// Import options from external component
import optionsLoader from "./input-options.vue";
import notificationLoader from "./notification-msg.vue";

export default {
  name: "inputLoader",
  components: {
    optionsLoader,
    notificationLoader
  },
  data() {
    return {
      selectedFile: "",
      fileName: "No file chosen...",
      dataFile: null,
      fileSize: null,
      showLaunch: false
    };
  },
  methods: {
    loadFile(event) {
      // Empties table -- Sets to null the data file from the store --> hides table
      // * Call action 'addFile' from the store
      this.$store.dispatch("addFile", null);

      // Updates the file name on input onChange
      this.fileName = event.target.files[0].name;

      // Updates file size
      this.fileSize = event.target.files[0].size;

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
        this.$store.dispatch("addLaunchBtn", (this.showLaunch = true));
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
          this.$store.dispatch("addFile", {
            result: event.target.result,
            name: this.fileName,
            size: this.fileSize
          });

          // change button LAUNCH state to FALSE after launch --> (hide)
          this.$store.dispatch("addLaunchBtn", (this.showLaunch = false));

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

      this.$store.dispatch("reset", false);
    }
  },
  computed: {
    instructionMsg() {
      // get instructions from the store.js
      return this.$store.state.instructions.main;
    },
    instruction() {
      return this.$store.state.instructions.button.toUpperCase();
    },
    renderButton() {
      return this.$store.getters.getButton;
    },
    mainText() {
      // get description from the store.js
      return this.$store.state.mainText;
    }
  }
};
</script>

<style lang="scss">
.launcher,
.main-text {
  margin-top: 50px;
}

input[type="file"] {
  display: none;
}

.container {
  max-width: 500px;
}

.file-label {
  background: white;
}

.introduction,
.information {
  p {
    margin: 10px 0px;
    &.title {
      font-size: 2em;
      font-weight: bold;
    }
    &.info-title {
      font-size: 1.2em;
      font-weight: bold;
      margin: 35px 0px 10px 0px;
    }
    &.align-center {
      text-align: center;
    }
    &.message-body {
      color: #1d72aa;
      text-align: center;
      border: none;
      font-size: 1.1em;
      margin-top: 35px;
    }
  }
}

.introduction {
  margin-top: 50px;
}

.information {
  margin: 50px 0px 75px 0px;
}
</style>