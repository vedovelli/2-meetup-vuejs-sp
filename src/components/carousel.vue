
<script>
  import Vue from 'vue'
  /* eslint-disable no-undef */
  export default {
    props: ['alan'],
    watch: {
      alan() {
        Vue.nextTick(() => jQuery(this.$refs.carousel).slick({ autoplay: true }))
      },
    },
  }
</script>

<template>
  <div ref="carousel">
    <div v-for="image in alan">
      <img :src="image">
    </div>
  </div>
</template>
