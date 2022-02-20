<template>
  <h1 :class="['static', { 'text-danger': hasError }]">Cataline</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      isActive: true,
      hasError: false
    }
  }
})
</script>

<style scoped>
.test {
  color: red;
}
.active {
  color: green;
}
</style>
