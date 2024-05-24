<template>
  <body style="background-color: black; min-height: 100vh;">
    
    <div style="text-align: center; color: white;">
      <h1>Algum titulo</h1>
    </div>
    
    <div class="container">
      <div class="item" v-for="item in items" :key="item.id">
        <h1>{{ item.cupom }}</h1>
        <p>{{ item.desconto }}</p>
        <p>{{ item.ativo }}</p>
      </div>
    </div>

  </body>
</template>

<script>

export default {
    data: () => {
      return {
        dialog: false,
        valor: 0,
        ativo: false,
        cupom: {},
        loading: true,
        textoUsuario: null,
        headers: [
          {
            title: 'Indetificador',
            key: 'id'
          },
          {
            title: 'cupom',
            key: 'cupom'
          },
          {
            title: 'desconto',
            key: 'desconto'
          },
          {
            title: 'ativo',
            key: 'ativo'
          },
          {
            title: 'actions',
            key: 'actions',
            sortable: false
          },
        ],
        items: [],
      }
    },

    async created() {
      await this.getItems();
    },

    methods: {
      async getItems() {
        const response = await this.$api.get('/cupons');
        this.items = response.data;
        this.loading = false;
      }
    },
}
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
  gap: 10px;
}

.item {
  flex: 1;
  text-align: center;
  margin: auto;
  max-height: 20vh;
  max-width: 40vh;
  min-height: 20vh;
  min-width: 40vh;
  background-color: white;
  border: 10px solid black;
  outline: 5px solid white;
  border-radius: 10%;
  color: black;

}
</style>