<template>
  <v-container class="justify-center mt-5">
    <TabelaDados 
      @deletar="deletar"
      @toggleValue="toggleValue"
      @editar="editar"
      :headers="headers" 
      :items="items"
    ></TabelaDados>
  </v-container>
</template>

<script>
  export default {
    data: () => {
      return {
        dialog: false,
        valor: 0,
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
      await  this.getItems();
    },

    methods: {

      async deletar(item) {
        if(confirm(`Tem certeza que deseja deletar itens do id ${item.id}?`)) {
          const response = await this.$api.post(`/cupons/destroy/${item.id}`, { id: item.id });
            if(response.type == 'error') {
              alert(response.message);
            }
          }
          await this.getItems();
        },
        
        editar(item) {
          console.error('editar');
      },

      async toggleValue(item) {
        try {
          const response = await this.$api.post(`/cupons/destroy/${item.id}`, { ativo: !item.ativo });
          console.error('Item atualizado com sucesso!')
          await this.getItems();
        } catch (error) {
          console.error('Error ao atualizar o item', error);
          await this.getItems();
        }
      },
      
      async getItems() {
        const response = await this.$api.get('/cupons');
        this.items = response.data;
        console.log(this.items);
      }
      
    }
  }
</script>

