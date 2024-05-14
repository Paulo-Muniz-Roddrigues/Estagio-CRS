<template>
  <v-data-table :headers="headers" theme="dark" :items="items">
    
    <template v-slot:no-data>
      <span>
        Nenhum dado Encontrado
      </span>
      <v-btn color="error">
        <v-icon>
          mdi-reload
        </v-icon>
      </v-btn>
    </template>
    
    <template v-slot:item.dataInicio="{ item }">
      <span style="color: green;">
        {{ 
          item.dataInicio.substring(0, 10)  
        }}
      </span>
    </template>
  
    <template v-slot:item.actions="{ item }">
      <v-icon
        class="me-2"
        size="small"
        @click="editeItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        size="small"
        color="error"
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>

    <template v-slot:item.id="{ item }">
      <v-text-field v-model="item.id">
      </v-text-field>
    </template>
    <template v-slot:item.cupom="{ item }">
      <v-text-field v-model="item.cupom">
      </v-text-field>
    </template>
    <template v-slot:item.desconto="{ item }">
      <v-text-field v-model="item.desconto">
      </v-text-field>
    </template>

    <template v-slot:item.ativo="{ item }">
      <v-btn
        size="small"
        :color="item.ativo ? 'green' : 'red'"
        @click="toggleItem(item)"
      >
        {{ item.ativo }}
      </v-btn>
    </template>

  </v-data-table>
</template>

<style></style>

<script>
  export default {
    name: 'TabelaDadosComponents',
    props: {
      items: {
        type: Array
      },
      headers: {
        type: Array,
      }
    },

    methods: {
      deleteItem(item) {
        this.$emit('deletar', item)
      },

      editeItem(item) {
        this.$emit('editar', item)
      },

      toggleItem(item) {
        this.$emit('toggleValue', item)
      }
    }
  }
</script>

