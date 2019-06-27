<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import HelloWorld from './components/HelloWorld.vue'
import { TEST4 } from './store/module1/module2/types';
import { BLABLA } from '@/lib'; // Doesn't work

export default {
  name: 'app',
  components: {
    HelloWorld
  },

  mounted() {
    console.log(BLABLA); //
    this.testAll();
  },

  methods: {
    ...mapActions(['test1']),
    ...mapActions('module1', ['test2']),
    ...mapActions('module1/module2', {
      test3: 'test3',
      test4: TEST4,
    }),

    testAll() {
      this.test1({ param1: '1' }); // Works
      this.test2({ param2: '2' }); // Works
      this.test3({ param3: '3' }); // Works
      this.test4({ param4: '4'}); // Doesnt work :(
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
