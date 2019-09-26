import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }

  // Custom types //
  // Custom types //
  export interface RootState {
    version: string;
  }

  export interface AuthState {
    token: string | null;
  }

  interface LoginForm {
    username: string;
    password: string;
  }

  interface BookType {
    id: string;
    title: string;
    price: number;
  }
}
