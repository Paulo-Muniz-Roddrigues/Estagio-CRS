<template>
  <v-container class="justify-center mt-5">
    <TabelaDados 
      @editItem="editItem" 
      @deleteItem="deleteItem"
      @toggleItem="toggleItem"
      @add="ativo = true"
      titulo="Eventos" 
      :loading="loading" 
      :headers="headers" 
      :items="items"
    ></TabelaDados>
  </v-container>
  <v-dialog
    v-model="ativo"
    max-width="500"
  >
  <v-card
      height="600"
      width="700"
    >
      <v-card-title>
        <h1>
          {{ tituloDialog }} um Evento
        </h1>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-text-field
              variant="outlined"
              label="Id"
              placeholder="Identificador"
              disabled
              v-model="cupom.id"
            >

            </v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              variant="outlined"
              label="Cupom"
              placeholder="cupom"
              v-model="cupom.cupom"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              variant="outlined"
              label="desconto"
              placeholder="desconto"
              v-model="cupom.desconto"
            >
            </v-text-field>
          </v-col>
          <v-col>
            <v-switch
            :label="`Switch: ${cupom.ativo}`"
            false-value="false"
            true-value="true"
            hide-details
            v-model="cupom.ativo"
            >
            </v-switch>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green"
          variant="outlined"
          @click="persist"
        >
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
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

    computed: {
    tituloDialog: function() {
      return this.cupom.id ? 'Editar': 'Criar';
      }
    },

    watch: {
      ativo(valor) {
        if (valor == false) {
          this.resetCupons()
        }
      }
    },

    methods: {
      resetCupons() {
        this.cupom = {
          id: null,
          cupom: null,
          desconto: null,
          ativo: null,
        }
        this.ativo = false;
      },

      async persist() {
        if (this.cupom.id) {
          const response = await this.$api.post(`/cupons/persist/${this.cupom.id}`, this.cupom);
        } else {
          const response = await this.$api.post('/cupons/persist', this.cupom);
        }
        this.resetCupons()
        await this.getItems();
      },

      editItem(item) {
        this.cupom = {
          ...item
        };
        this.ativo = true;
      },
      
      async deleteItem(item) {
        if(confirm(`Tem certeza que deseja deletar itens do id ${item.id}?`)) {
          const response = await this.$api.post(`/cupons/destroy/${item.id}`, { id: item.id });
            if(response.type == 'error') {
              alert(response.message);
            }
          }
        await this.getItems();
      },

      async toggleItem(item) {
        try {
          const response = await this.$api.post(`/cupons/persist/${item.id}`, { ativo: !item.ativo });
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
        this.loading = false;
      }
    }
  }
</script>

<style>

</style>

