<template>
  <div>
    <h1>Book</h1>
    <div class="container">
      <h2>Book List</h2>
      <ul
          v-for="book in books"
          :key="book.id"
      >
        <li>{{ book.id }}, {{ book.title }}</li>
      </ul>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


function getBooks(): Book[] {
  let books = [];
  for (let i = 0; i < 5; i++) {
    const book = {
      id: `sample_id_${i}`,
      title: 'sample title',
      price: 10500,
    };
    books.push(book)
  }
  return books
}

@Component({})
export default class About extends Vue {
  public books: Book[] = [];

  // noinspection JSUnusedLocalSymbols
  private created() {
      this.books = getBooks();
  }

  // --------------------------------------
  // methods
  // --------------------------------------

}

console.log('pigimaru');
console.log(process.env.VUE_APP_BACKEND_HOST);
</script>
