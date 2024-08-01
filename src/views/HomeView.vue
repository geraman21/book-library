<script setup lang="ts">
import BookTile from '@/components/BookTile.vue';

const bookExample =  {
        "name": "The Silent Tide",
        "author": "Emily Brown",
        "category": "Fiction",
        "ratings": [
            {
                "source": "Goodreads",
                "value": 1
            },
            {
                "source": "The New York Times",
                "value": 3
            },
            {
                "source": "Kirkus Reviews",
                "value": 3
            }
        ],
        "publishYear": 2019
    }

    // Fetch books from https://63c10327716562671870f959.mockapi.io/books
    // Render them on this page instead of the example


</script>

<template>
  <div class="container">
    <h1>Books</h1>
    <div class="books-container">
        <BookTile :book="bookExample" />
    </div>
  </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.books-container {
    display: flex;
    gap: 1rem;
}
</style>

