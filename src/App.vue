<template>
  <div>
    <topheaddd/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
  import topheaddd from 'components/TopHeadr.vue'
  import Footer from 'components/footer.vue'
  export default {
    name: 'app',
    components: {
      topheaddd,
      Footer
    }
}

</script>

<style>
</style>
