<template>
  <div>
    <GlobalMessage></GlobalMessage>

    <div v-if="!isLoggedIn">
      <h1>Please Login First</h1>
      <div class="form">
        <div class="form-group">
          <label>User name: </label>
          <input type="text" v-model="form.username" required/>
        </div>
        <div class="form-group">
          <label>Password: </label>
          <input type="text" v-model="form.password" required/>
        </div>
        <button @click="submitLogin">Login</button>
      </div>

    </div>
    <div v-else>

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

      <button @click="logout">Logout</button>

    </div>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import { Getter, Action } from 'vuex-class';
import Component from 'vue-class-component';
import GlobalMessage from "@/components/GlobalMessage.vue";
const namespace: string = 'auth';

import api from '@/api';


@Component({
  components: {
    GlobalMessage,
  },
})
export default class BookPage extends Vue {
  public form: LoginForm = {
    username: '',
    password: '',
  };
  public books: BookType[] = [];
  @Getter('isLoggedIn', { namespace }) public isLoggedIn: boolean | undefined;
  @Action('login', { namespace }) public login: any;
  @Action('logout', { namespace }) public logout: any;

  // noinspection JSUnusedLocalSymbols
  private created() {
    if (this.isLoggedIn) {
      this.getBooks();
    }
  }

  // --------------------------------------
  // methods
  // --------------------------------------
  private async getBooks(): Promise<void> {
    const response = await api.getBooks();
    this.books = response.data;
  }

  public submitLogin(): void {
    this.login(this.form);
    this.getBooks();
  }
}
</script>
