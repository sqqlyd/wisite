<template>
  <header id='header'>
<<<<<<< Updated upstream
    <div>
    <img src="../../images/logo.png" height="52" width="461"/>
<span>地理位置</span>
<span>关于我们</span>
    </div>

    <section>
  <router-link to="/home">首頁</router-link>
  <router-link to="/companyProfile">公司简介</router-link>
  <router-link to="/causeContent">事业内容</router-link>
  <router-link to="/recruitmentInformation">招聘信息</router-link>
  <router-link to="/businessCase">业务案例</router-link>
  <router-link to="/contactUs">联系我们</router-link>
  <router-link to="/protectPersonalInformation">保护个人信息</router-link>
  <router-link to="/linkAddress">链接</router-link>

</section>
=======
    <section>
      <table border="0" cellpadding="0" cellspacing="0" width="950">
        <tr>
          <td><span id="table-left">< img src="../../images/logo.png" title="大连维思创新科技有限公司" border="0" /></span></td>
          <td style="text-align:right;vertical-align:bottom;"><router-link to="">日本語</router-link></td>
          <td style="text-align:right;vertical-align:bottom;"><router-link to="../causeContent">地理位置</router-link></td>
        </tr>
        <div id="tabs">
          <router-link to="/home">首頁</router-link>
          <router-link to="/companyProfile">公司简介</router-link>
          <router-link to="/causeContent">事业内容</router-link>
          <router-link to="/recruitmentInformation">招聘信息</router-link>
          <router-link to="/businessCase">业务案例</router-link>
          <router-link to="/contactUs">联系我们</router-link>
          <router-link to="/protectPersonalInformation">保护个人信息</router-link>
          <router-link to="/linkAddress">链接</router-link>
        </div>

      </table>
    </section>

>>>>>>> Stashed changes

  </header>


</template>

<script >

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
