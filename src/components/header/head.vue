<template>
  <header id='header'>

    <div class="container">
      <i class="fa fa-bars header-mobile-menu" aria-hidden="true"></i>
      <ul class="header-pc-menu">
        <li>Menu1</li>
        <li>Menu2</li>
        <li>Menu3</li>
      </ul>
      <h1>My Site</h1>

    </div>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark">
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="text">文字按钮</el-button>
      </div></el-col>
    </el-row>

  </header>


</template>

<script >
  export default{
    data() {
      return {
        choselanguage:'日本語',
        languages:[
          '中文',
          '日本語',
          'English'
          ],
      }
    },
    messages: {
      cn: {
        address:'地理位置'
      },
      en: {
        address:'address'
      },
      jp: {
        address:'地理位置'
      }
    },
    methods: {
      btnClick: function(){
        if(this.choselanguage=='中文'){
          this.$language = 'cn'
          }
        if(this.choselanguage=='日本語'){
          this.$language = 'jp'
        }
        if(this.choselanguage=='English'){
          this.$language = 'en'
        }
      },
    },
    computed: {
      address() {
        //this.$language = 'cn' //先设定一个假的语言
        return this.translate(this.$language, 'address')
      }
    },
  }
</script>

<style >

  #header{
    font-size: 12px;
    color: #2779aa;

  }


</style>
