<template>
  <div class="hello">
    Header
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'page-header',
  props: {
    msg: String,
  },
});
</script>
