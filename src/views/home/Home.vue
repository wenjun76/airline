<template>
  <div class="home">
    <banner></banner>
    <div class="home-content">

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import banner from './banner.vue'
export default {
  name: 'Home',
  components: {
    banner: banner
  }
}

// function strMapToObj(strMap) {
//   let obj = {}
//   for (let [k,v] of strMap) {
//     obj[k] = v;
//   }
//   return obj;
// }

// const myMap = new Map()
//   .set('yes', true)
//   .set('no', false);

// console.log(strMapToObj(myMap));
</script>


<style scoped>
  .home-content {
    height: 200px;
  }
</style>