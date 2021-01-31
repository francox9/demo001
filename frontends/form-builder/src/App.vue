<template>
  <page-header>
    Header
  </page-header>

  <question-box />
  <question-box />

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageHeader from './components/PageHeader.vue';
import QuestionBox from './components/QuestionBox.vue';

export default defineComponent({
  name: 'App',
  components: {
    PageHeader,
    QuestionBox
  },
});
</script>
