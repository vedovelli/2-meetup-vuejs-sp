<script>
  import VdCarousel from './components/carousel'

  /* eslint-disable no-undef */
  export default {
    name: 'Marvel',
    components: {
      VdCarousel,
    },
    data() {
      return {
        events: [],
      }
    },
    mounted() {
      this.$http.get('v1/public/events').then((res) => {
        this.events = res.data.data.results
      })
    },
    computed: {
      images() {
        return this.events.map(({ thumbnail }) => `${thumbnail.path}.${thumbnail.extension}`)
      },
    },
  }
</script>

<template>
  <div>
    <vd-carousel :alan="images"></vd-carousel>
  </div>
</template>
