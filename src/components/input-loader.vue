<template>
  <div class="wrap-text-launcher">
    <div class="main-text">
      <div v-for="(section, index) in mainText" :class="section.type" :key="index">
        <p v-for="(el, index) in section.content" :class="el.class" :key="index">{{el.p}}</p>
        <a
          v-for="(btn, index) in section.buttons"
          :class="btn.class"
          :href="btn.itemURL"
          :key="'btn'+index"
        >{{btn.txt}}</a>
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
    },
    sampleCSV(event) {
      window.open("assets/sample.csv");
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
  button {
    width: 100%;
  }
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
.information,
.sample-download {
  margin: 50px 0px 35px 0px;
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

  &.reduced-margin {
    margin: 10px 0px 15px 0px;
    &.last-segment {
      margin-bottom: 65px;
    }
  }
}

.sample-download {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  p {
    width: 83%;
  }
  button {
    width: 15%;
  }
}

a.yeti-sample-csv {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 14%;
  padding: 5px;
  line-height: 1.2em;
  text-align: center;
  opacity: 0.8;
  margin-top: 15px;
  background: transparent;
  border-radius: 5px;
  border: 2px solid #3298dc;
  cursor: pointer;
  font-weight: bold;
  color: #3298dc;

  &:hover {
    opacity: 1;
    background-color: #3298dc;
    color: #fff;
  }

  &:focus {
    outline: none;
  }
}

@media only screen and (max-width: 600px) {
  .sample-download {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    p {
      width: 100%;
    }
    a.yeti-sample-csv {
      display: flex;
      flex-direction: row;
      align-self: center;
      width: 35%;
      padding: 10px;
      text-align: center;
    }
  }
}
</style>