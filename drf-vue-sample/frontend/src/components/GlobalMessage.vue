<template>
  <div id="global-messages">
    {{ errorMessage }}
    {{ infoMessage }}
    {{ warningMessages }}
    <button @click="clearMessages">Clear</button>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import { Getter, Action } from 'vuex-class';
import Component from 'vue-class-component';
const namespace: string = 'message';

@Component
export default class GlobalMessage extends Vue {
  @Getter('error', { namespace }) public errorMessage: string | undefined;
  @Getter('info', { namespace }) public infoMessage: string | undefined;
  @Getter('warnings', { namespace }) public warningMessages: string[] | undefined;
  @Action('clearMessages', { namespace }) public clearMessages: any;
}
</script>
