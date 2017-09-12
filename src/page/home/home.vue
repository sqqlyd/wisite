<template>
  <section>
    <head-top ></head-top>
    <div class="index-wrap">
      <slide-show :slides="slides"></slide-show>
    </div>
    <foot-guide></foot-guide>
  </section>
</template>


<script>
  import slideShow from '../../components/common/slideShow'
  import headTop from '../../components/header/head'
  import footGuide from '../../components/footer/foot.vue'
  export default {
    components: {
      headTop,
      footGuide,
      slideShow
    },
    data () {
      return {
        slides: [
          {
            src: require('../../images/slide_01.jpg'),
            title: 'xxx1',
          },
          {
            src: require('../../images/slide_02.jpg'),
            title: 'xxx2',
          },
          {
            src: require('../../images/head_img.jpg'),
            title: 'xxx3',
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .index-wrap {
    overflow: hidden;
  }
</style>
