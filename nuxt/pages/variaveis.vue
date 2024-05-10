<template>
  <div>
    <v-btn 
    text="Sai daqui"
    color="yellow"
    @click="index()"
    ></v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    index(){
      this.$router.push({ path: '/' });
    }
  }
}
</script>

<style>

</style>