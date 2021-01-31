<template>
    <it-box class="question-box">
        Question
    </it-box>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'question-box',
});
</script>

<style lang="scss" scoped>
.question-box {
    border: solid 1px black;
}
</style>