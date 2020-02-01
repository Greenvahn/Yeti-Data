<template>
      <div class="columns">
        <div class="column">
           <input class="input is-small" type="file" @change="onFileSelected"/>
        </div>
      </div>
</template>

<script>
export default {
    name:'inputLoader',
    data(){
      return{
        selectedFile: null
      }
    },
    methods: {
      onFileSelected(event) {
        console.log(event)
        this.selectedFile = event.target.files[0]
      }
    }
}
</script>

<style lang="scss">
.container{
    max-width: 500px
}
</style>