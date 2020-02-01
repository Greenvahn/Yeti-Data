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
    methods: {
      onFileSelected(event) {
        console.log(event.target.files);
      }
    }
}
</script>

<style lang="scss">
.container{
    max-width: 500px
}
</style>