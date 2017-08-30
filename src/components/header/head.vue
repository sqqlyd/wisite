<template>
  <header id='header'>

    <section>
      <table border="0" cellpadding="0" cellspacing="0" width="950">
        <tr>
          <td><span id="table-left">< img src="../../images/logo.png" title="大连维思创新科技有限公司" border="0" /></span></td>
          <td style="text-align:right;vertical-align:bottom;"><router-link to="">日本語</router-link></td>
          <td style="text-align:right;vertical-align:bottom;"><router-link to="../causeContent">地理位置</router-link></td>
        </tr>
        <div id="tabs">
          <router-link to="/home" >{{title}}</router-link>
          <router-link to="/companyProfile" v-lang.categories.companyProfile></router-link>
          <router-link to="/causeContent" v-lang.categories.causeContent></router-link>
          <router-link to="/recruitmentInformation" v-lang.categories.recruitmentInformation></router-link>
          <router-link to="/businessCase" v-lang.categories.businessCase></router-link>
          <router-link to="/contactUs" v-lang.categories.contactUs></router-link>
          <router-link to="/protectPersonalInformation" v-lang.categories.protectPersonalInformation></router-link>
          <router-link to="/linkAddress" v-lang.categories.linkAddress></router-link>

        </div>

      </table>
    </section>

  </header>


</template>

<script >
  export default{
    data() {
      return {

      }
    },
    messages: {
      cn: {
        title: '首页'
      },
      jp: {
        title: 'ホーム'
      }
    },
    computed: {
      title() {
        this.$language = 'jp' //先设定一个假的语言
        return this.translate(this.$language, 'title')
      }
    },
  }
</script>

<style >

  #header{
    font-size: 12px;
    color: #2779aa;

  }
  .ui-tabs {
    padding: 3px;
    margin:3px
  }
  .ui-tabs .ui-tabs-nav li {
    width:12%;
    text-align: left;
  }
  .ui-tabs .ui-tabs-nav li {height: 35px; font-size:12px; }
  .ui-tabs .ui-tabs-nav li a {
    display: inline-block;
    float: none;
    padding: 0px;
    margin:0px;
    text-decoration: none;
    width: 100%;
  }

</style>
