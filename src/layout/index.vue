<template>
  <div>
      <sidebar></sidebar>
      <settings></settings>
  </div>
</template>
<script>
    import { Settings ,Sidebar} from './components'
    export default {
        name: "Layout",
        data(){
            return{}
        },
        components:{
            Sidebar,
            Settings
        }
    }
</script>

<style scoped>

</style>
