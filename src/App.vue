<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage/index';
export default {
  name: 'app',
  components: {
  },
  mounted() {
    // storage.setItem('a',1);
    // storage.setItem('b',2);
    // storage.setItem('usr',{'c':1});
    // storage.setItem('abc',{'d':1}, 'usr');
    // storage.clear('c', 'usr');
  }
}
</script>

