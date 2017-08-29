<template>
  <div class="home">
    <head-top ></head-top>
    <div class="banner">
      <swiper :options="swiperOption" class="swiper-box">
        <swiper-slide class="swiper-item"><img src="../../images/head_img.jpg"  alt="..."></swiper-slide>
        <swiper-slide class="swiper-item"><img src="../../images/head_img.jpg"  alt="..."></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import headTop from '../../components/header/head'
  import footGuide from '../../components/footer/footGuide'


  import { mapGetters } from 'vuex'

  export default {

    components: {
      swiper,
      swiperSlide,
      headTop,
      footGuide
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          slidesPerView: 1,
          autoplay: 4000,
          paginationClickable: true,
          spaceBetween: 30,
          loop: true
        }
      }
    },
    created() {

    },
    computed: {

    },
    mounted(){

    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
  @import '../../plugins/function';

  .banner {
    .swiper-box {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      .swiper-item {
        height: px2rem(380px);
        text-align: center;
        font-size: 18px ;
        background: #fff;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
        }
      }
    }
  }


</style>
