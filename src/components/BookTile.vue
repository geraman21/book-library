<template>
  <div class="book-tile">
    <p class="book-title">{{ book.name }}</p>
    <p><b>Author:</b> {{ book.author }}</p>
    <p><b>Category:</b> {{ book.category }}</p>
    <p><b>Ratings:</b></p>
    <p v-if="book.ratings.length === 0"> - Not rated</p>
    <ul v-else>
      <li v-for="rating in book.ratings" :key="rating.source">
      <i>{{ rating.source || 'Incognito' }}:</i> {{ rating.value }}
      </li>
    </ul>
    <p><b>Publish Year:</b> {{ book.publishYear }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Book } from '@/types/book';
import type { PropType } from 'vue';


defineProps({
  book: {
    type: Object as PropType<Book>,
    required: true
  }
})
</script>

<style scoped>
.book-tile {
  border: 2px solid #ccc;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
}

.book-title {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
