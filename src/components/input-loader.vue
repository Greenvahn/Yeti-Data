<template>
      <div class="columns">
        <div class="column">
           <input class="input is-small" type="file" @change="loadFile"/>
        </div>
      </div>
</template>

<script>
export default {
    name:'inputLoader',
    data(){
      return{
        selectedFile: ''
      }
    },
  methods: {
    loadFile(event) {
      this.selectedFile = event.target.files[0];
      console.log(event.target.files[0].name)
      this.$emit('newFile', this.selectedFile);
    }
  }
}
</script>

<style lang="scss">
.container{
    max-width: 500px
}
</style>