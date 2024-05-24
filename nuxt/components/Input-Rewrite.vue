<template>
  <input type="text" value="Texto pré-definido">
</template>

<script>
export default {
  name: 'edit-value',
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
    
  }
};
</script>