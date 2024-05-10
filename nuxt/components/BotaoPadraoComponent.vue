<template>
  <v-btn
    :text="text"
    :color="dialog ? 'green' : 'red'"
    @click="emitirEvento()"
  ></v-btn>
</template>

<script>
export default  {
  name: 'BotaoPadraoComponent',
  data() {
    return {
  
    };
  },
  props: {
    text: {
      type: String
    },
    dialog: {
      type: Boolean,
    }
  },
  methods: {
    emitirEvento() {
      this.$emit('ClicouBotao')
    }
  },
};
</script>