<template>
  <v-app>
    <v-navigation-drawer>
      <v-list-item title="Páginas" subtitle="Vuetify"></v-list-item>
      <v-divider></v-divider>
      <v-list-item link title="Index" @click="index()"></v-list-item>
      <v-list-item link title="Variaveis" @click="variaves()"></v-list-item>
      <v-list-item link title="Twitter" @click="twitter()"></v-list-item>
      <v-list-item link title="Tabela" @click="tabela()"></v-list-item>
      <v-list-item link title="Loops" @click="loops()"></v-list-item>
    </v-navigation-drawer>
    <v-main style="height: 100vh;">
      <slot/>
    </v-main>
  </v-app>
</template>

<style>

</style>

<script>
  export default {
    methods: {
    index(){
      this.$router.push({ path: '/'});
    },
    variaves(){
      this.$router.push({ path: '/variaveis' });
    },
    twitter(){
      this.$router.push({ path: '/twitter' });
    },
    tabela(){
      this.$router.push({ path: '/tabela' });
    },
    loops(){
      this.$router.push({ path: '/loops' });
    },
  }
}
</script>