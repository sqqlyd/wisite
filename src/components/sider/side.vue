<template>
  <div id="sidemenu">

    <div class="white"></div>
    <h2><img src="../../../elm/static/images/common/side_h3_01.gif" alt="エンジニア派遣" width="208" height="28"  /> </h2>
    <div id="preson">
      <h3><img src="../../../elm/static/images/common/side_h4_person.jpg" alt="お仕事をお探しの方へ" width="190" height="28" /></h3>
      <div id="needs"><img src="../../../elm/static/images/common/side_person_btn_01.gif" alt="プロテックが求める人材" width="133" height="15" />
        <img src="../../../elm/static/images/common/side_person_btn_02.gif" alt="東京本社・大阪営業所" width="181" height="50" />
        <p>プロテックが明るく<br />サポートしますのでご応募ください</p></div>
      <div id="recruit"><a href="http://www.s-protec.com/recruit/"><img src="../../../elm/static/images/common/side_person_btn_03.gif" alt="募集要項" width="65" height="17" /></a>
        <p>エンジニア希望の方へ</p>
        <a href="http://www.s-protec.com/inquiry2/"><img src="../../../elm/static/images/common/side_person_btn_register.jpg" alt="ご応募はこちら" width="175" height="36" /></a></div>
    </div>

    <div id="company">
      <h3><img src="../../../elm/static/images/common/side_h4_company.jpg" alt="エンジニアをお探しの企業様へ" height="28" width="190"></h3>
      <div id="introduce"><img src="../../../elm/static/images/common/side_company_btn_01.gif" alt="プロテックの人材派遣" height="15" width="123">
        <p>開発ごとに経験豊富なエンジニアが揃っております</p>
      </div>
      <div id="register"><img src="../../../elm/static/images/common/side_company_btn_03.gif" height="18" width="175">
        <p>エンジニアをお探しの<br />企業様へ</p>
        <a href="http://www.s-protec.com/inquiry/"><img src="../../../elm/static/images/common/side_company_btn_04.jpg" alt="エンジニア（請負・派遣）はこちら" height="36" width="175"></a></div>
    </div>

    <div id="area-sidebtn" class="clear pdt10">
      <ul class="mgb20">
        <li><a href="http://www.s-protec.com/recruit-staff_tokyo/"><img src="../../../elm/static/images/common/sidebtn04.jpg" alt="日本の社員募集" width="192" /></a></li>
        <li><a href="http://www.s-protec.com/recruit-staff_osaka/"><img src="../../../elm/static/images/common/sidebtn05.jpg" alt="大连の社員募集" width="192" /></a></li>
      </ul>
    </div>

  </div>
</template>

<script>


</script>
<style>
/* Sidemenu */
  #sidemenu {
    float:right;
    width:208px;
  }
  #sidemenu img {
    vertical-align:bottom;
  }
  #sidemenu #preson {
    float:left;
    width: 190px;
    border: solid 1px #F18B8B;
    padding-bottom: 4px;
    margin: 8px 0px 8px 8px;
    display: inline;
    background-color: #fff;
  }
  #sidemenu #preson #needs {
    float:left;
    background-image: url(../../../elm/static/images/common/side_person_img_01.jpg);
    background-repeat: no-repeat;
    background-position: right 66px;
    width: 182px;
    padding: 4px;
  }
  #sidemenu #preson #needs p {
    font-size:65%;
    padding: 0px 40px 0px 10px;
    color: #666;
    line-height: 135%;
    margin-bottom: 5px;
  }
  #sidemenu #preson #recruit {
    float:left;
    background-image: url(../../../elm/static/images/common/side_person_img_02.jpg);
    background-repeat: no-repeat;
    background-position: top right;
    width: 175px;
    padding: 4px;
    background-color: #FFE1E1;
    margin-left: 4px;
    display: inline;
  }
  #sidemenu #preson #recruit p {
    font-size:65%;
    padding: 0px 40px 0px 10px;
    color: #666;
    line-height: 135%;
    margin-bottom: 5px;
  }
  #sidemenu #preson #recruit a:hover {
    filter: alpha(opacity=70);
    opacity: 0.7;
  }

  #sidemenu #company {
    float:left;
    width: 190px;
    border: solid 1px #7CA637;
    padding-bottom: 4px;
    margin: 0px 0px 0px 8px;
    display: inline;
    background-color: #fff;
  }
  #sidemenu #company #introduce {
    float:left;
    background-image: url(../../../elm/static/images/common/side_company_img_01.jpg);
    background-repeat: no-repeat;
    background-position: top right;
    width: 182px;
    padding: 4px;
  }
  #sidemenu #company #introduce p {
    font-size:65%;
    padding: 0px 40px 0px 10px;
    color: #666;
    line-height: 135%;
    margin-bottom: 5px;
  }
  #sidemenu #company #register {
    float:left;
    background-image: url(../../../elm/static/images/common/side_company_img_02.jpg);
    background-repeat: no-repeat;
    background-position: right 20px;
    width: 175px;
    background-color: #EBF4D5;
    margin-left: 4px;
    display: inline;
    padding: 4px;
  }
  #sidemenu #company #register p {
    font-size:65%;
    padding: 0px 40px 0px 10px;
    color: #666;
    line-height: 135%;
    margin-bottom: 5px;
  }
  #sidemenu #company #register a:hover {
    filter: alpha(opacity=70);
    opacity: 0.7;
  }
  #sidemenu #area-sidebtn ul {
    padding-left: 8px;
  }
  #sidemenu #area-sidebtn ul li {
    margin-bottom: 10px;
  }
  #sidemenu #area-sidebtn ul li:hover {
    filter: alpha(opacity=80);
    opacity: 0.8;
  }
</style>

