<template>
  <div >
    <head-top ></head-top>
    <section>这是保护个人信息</section>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
  import headTop from '../../components/header/head'
  import footGuide from '../../components/footer/foot.vue'

  export default {
    data(){
      return {}
    },

    components: {
      headTop,
      footGuide
    }

  }
</script>
