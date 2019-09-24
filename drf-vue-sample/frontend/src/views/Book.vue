<template>
  <div>
    <h1>Book</h1>
    <div class="container">
      <h2>Book List</h2>
      <ul
          v-for="book in books"
          :key="book.id"
      >
        <li>{{ book.id }}, {{ book.title }}, {{ book.price }}</li>
      </ul>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';


@Component({})
export default class Book extends Vue {
  public books: Book[] = [];

  // noinspection JSUnusedLocalSymbols
  private created() {
      this.getBooks();
  }

  // --------------------------------------
  // methods
  // --------------------------------------
  private async getBooks(): Promise<void> {
    const response = await axios.get(`${process.env.VUE_APP_API_ROOT_URL}books/`);
    console.log(response);
    this.books = response.data;
  }


}

console.log('pigimaru');
console.log(process.env.VUE_APP_BACKEND_HOST);
</script>
