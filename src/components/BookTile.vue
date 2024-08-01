<template>
  <div class="book-tile">
    <p class="book-title">{{ book.name }}</p>
    <p>Author: {{ book.author }}</p>
    <p>Category: {{ book.category }}</p>
    <p>Ratings:</p>
    <ul>
      <li v-for="rating in book.ratings" :key="rating.source">
        {{ rating.source }}: {{ rating.value }}
      </li>
    </ul>
    <p>Publish Year: {{ book.publishYear }}</p>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';


type Rating = {
  source: string;
  value: number;
};

type Book = {
  name: string;
  author: string;
  category: string;
  ratings: Array<Rating>;
  publishYear: number;
};

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
