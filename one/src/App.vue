<template>
  <compo nm="Dogg"></compo>
</template>

<script>
  import {
    provide,
    reactive,
    ref
  } from 'vue';
  import Compo from "./components/compo";
  export default {
    name: 'App',
    components: {
      Compo
    },
    setup() {
      let a = 100;
      let b = ref('badd');
      let c = reactive(true);
      provide('a', a);
      provide('b', b);
      provide('c', c);
      a++;
      b.value = 'bigg';
      c = false;
    }
  }
</script>

<style>

</style>