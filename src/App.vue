<template>
  <h1 v-for="todo in todosFilter" :key="todo.text">{{ todo.text }}</h1>
  <button @click="checkAllTodos">Finalizar</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Todos {
  text: string
  done: boolean
}

export default defineComponent({
  data() {
    return {
      todos: [] as Todos[]
    }
  },
  computed: {
    todosFilter(): Todos[] {
      return this.todos.filter((todo) => todo.done)
    }
  },
  created() {
    this.todos = [
      { text: 'Estudar Typescript', done: true },
      { text: 'Lavar os pratos', done: false },
      { text: 'Aprender Nuxt.js', done: true }
    ]
  },
  watch: {
    todos(newValue: Todos[]) {
      const isFinished = !newValue.some(({ done }) => !done)

      if (isFinished) {
        alert('Todos finalizados')
      }
    }
  },
  methods: {
    checkAllTodos() {
      this.todos = this.todos.map(({ text }) => {
        return { text, done: true }
      })
    }
  }
})
</script>
