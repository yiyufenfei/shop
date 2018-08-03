<template>
  <div>
    <div>
      <div id="head" style="height: 140px">
        <!--头部main开始-->
        <div class="main" style="height: 96px;overflow: hidden">
          <!--头部main左开始-->
          <div class="main_left" @click="loadding()">
            <p style="margin: 0 ">
              <img src="../../static/images/logo.png" width="130" height="80"  />
            </p>
          </div>
          <span class="headerregress">欢迎注册</span>
          <div class="cl"></div>
        </div>
      </div>
    </div>
    <div v-show="status.three!=true">
      <div class="progress-bar clearfix">
        <div class="pro-step cur-step">
          <span class="step-index" style="background-position: 0 -200px" v-show="status.one==false">1</span>
          <span class="step-index" style="background-position: 0 0"  v-show="status.one==true"></span>
          <p class="step-desc">验证手机号</p>
        </div>
        <div class="pro-line pro-line1 person-pro-line person-pro-line1" v-show="status.one==false" style="background-position: 0 -100px;width: 130px"></div>
        <div class="pro-line pro-line1 person-pro-line person-pro-line1" v-show="status.one==true" style="background-position: 0 -130px;width: 130px"></div>

        <div class="pro-step pro-step2 person-pro-step2" style="margin-left: 100px">
          <span class="step-index" style="background-position: -45px -200px"  v-show="status.two=='no'">2</span>
          <span class="step-index" style="background-position: 0px -200px"  v-show="status.two==false">2</span>
          <span class="step-index"  style="background-position: 0px 0px"  v-show="status.two==true"></span>
          <p class="step-desc">填写账号信息</p>
        </div>
        <div class="pro-line pro-line2 person-pro-line person-pro-line2 "   v-show="status.two=='no'||status.two==false" style="background-position: 0 -100px;width: 130px;margin-left: 50px"></div>
        <div class="pro-line pro-line2 person-pro-line person-pro-line2 "   v-show="status.two==true"style="background-position: 0 -130px;width: 130px;margin-left: 50px"></div>

        <div class="pro-step pro-step3 person-pro-step3  " style="margin-left: 110px">
          <span class="step-index" style="background-position: -45px -200px"  v-show="status.three=='no'">3</span>
          <span class="step-index" style="background-position: 0px -200px"  v-show="status.three==false">3</span>
          <span class="step-index"  style="background-position: 0px 0px"  v-show="status.three==true"></span>
          <p class="step-desc">注册成功</p>
        </div>
      </div>

      <!--第一步-->
      <div class="step1-wrap"  v-show="status.one!=true">
        <div class="step1-wrap-up">
          <div class="left" @click="isshow=!isshow">中国0086<span></span></div>
          <input placeholder="建议使用常用的手机号">
        </div>
        <div class="step1-wrap-down">点击按钮进行验证</div>
        <div class="regressbtn" @click="next()">下一步</div>
        <div class="count" :class="{yingcang:isshow}"></div>
      </div>

      <!--第二步-->
      <div   v-show="status.one==true">
        <div class="step1-wrap">
          <div class="step1-wrap-up">
            <div class="left" @click="isshow=!isshow" style="border: none;">用  户  名</div>
            <input placeholder="您的账户名和登录名">
          </div>
          <div class="step1-wrap-up margin">
            <div class="left" @click="isshow=!isshow" style="border: none;">设置密码</div>
            <input placeholder="建议使用两种或两种以上的字符组合">
          </div>
          <div class="step1-wrap-up margin">
            <div class="left" @click="isshow=!isshow" style="border: none;">确认密码</div>
            <input placeholder="请再次输入密码">
          </div>
          <div class="step1-wrap-up margin">
            <div class="left" @click="isshow=!isshow" style="border: none;">邮箱验证</div>
            <input placeholder="请输入邮箱">
          </div>
          <div class="step1-wrap-up margin">
            <div class="left" @click="isshow=!isshow" style="border: none;">邮箱验证</div>
            <input placeholder="请输入邮箱验证码" style="width: 195px;">
            <div class="getyanzheng">获取验证码</div>
          </div>
          <div class="regressbtn" @click="regress()">立刻注册</div>
        </div>
      </div>
    </div>

    <div v-show="status.three==true" style="height: 460px;padding-top: 50px">
      <div class="end">
        <div class="icon"></div>
        <p>恭喜您</p>
        <p>您已成功注册为京东用户，祝您购物愉快</p>
        <div class="shopbtn" @click="loadding()">去购物</div>
      </div>
    </div>
    <div>
      <div class="kb cl"></div>
      <div id="footer">
        <div class="footer">
          <div class="fenge"></div>
          <div class="ul1">
            <b>用户帮助</b>
            <p><a href="#">如何使用</a></p>
            <p><a href="#">常见问题</a></p>
            <p><a href="#">网站地图</a></p>
          </div>
          <div class="fenge"></div>
          <div class="ul2">
            <b>商务合作</b>
            <p><a href="#">市场合作</a></p>
            <p><a href="#">商家入驻</a></p>
          </div>
          <div class="fenge"></div>
          <div class="ul3">
            <b>公司信息</b>
            <p><a href="#" target="_blank">关于我们</a></p>
            <p><a href="#">联系我们</a></p>
            <p><a href="#">营业执照</a></p>
          </div>
          <div class="fenge"></div>
          <div class="ul4">
            <div class="footer_img">服务电话：15034140476</div>
            <p>Copyright©2018 平安集团综合金融</p>
            <p><a>晋ICP备12007454号</a><a href="#">网站统计</a></p>
          </div>
          <div class="cl"></div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'ShopRegress',
    data(){
      return{
          isshow:true,
          status:{
           one:false,
            two:"no",
            three:"no",
          }
      }
    },
    computed: {
    },
    components: {
    },
    methods: {
      next:function () {
          this.status.one=true;
        this.status.two=false;
        },
      loadding:function () {
        this.$router.push("/")
      },
      regress:function () {
        this.status.two=true;
        this.status.three=true;
      }
    }
  }
</script>
<style>
  #head{
    border-bottom:  1px solid rgb(221, 221, 221);
    box-shadow: 5px 5px 5px #888888;
  }
  .headerregress{
    float: left;
    line-height: 90px;
    font-size: 26px;
    color: #e85356;
  }
  .end p:nth-child(2){
    font-size:22px;
    padding-top: 10px;
  }
  .end p:nth-child(3){
    font-size:16px;
    padding-top: 15px;
  }
  .end .shopbtn{
    width: 50px;
    height: 52px;
    padding: 0 25px;
    border: 1px solid #ee2223;
    background: #ee2223;
    font-size: 16px;
    color: #fefefe;
    outline: 0;
    transition: all .5s;
    font-weight: 700;
    margin: 35px auto;
    line-height: 52px;
  }
  .icon {
    margin: 60px auto 10px;
    display: block;
    height: 56px;
    width: 56px;
    background: url("../../static/images/icon-complete.png") no-repeat;
  }
  .end{
    width: 300px;
    height: 300px;
    margin: 0 auto;
  }
  .getyanzheng{
    border-left: 1px solid rgb(221, 221, 221);
    width: 100px;height: 100px;float: right;
  }
  .margin{
    margin-top: 40px;
  }
  .yingcang{
    display: none;
  }
  /*.step1-wrap-up:hover .count{*/
    /*display: block;*/
  /*}*/
  .step1-wrap .count{
    width: 300px;
    height: 200px;
    padding:10px 10px 10px 10px;
    z-index: 5;
    position: absolute;
    top: 49px;
    left: 0;
    background: white;
    -moz-box-shadow: 2px 2px 10px #909090;
    -webkit-box-shadow: 2px 2px 10px #909090;
    box-shadow:2px 2px 10px #909090;
  }
  .step1-wrap-up .left span{
    background: url("../../static/images/icon.png") no-repeat;
    width: 15px;
    height: 15px;
    display: inline-block;
    margin-top: 15px;
    margin-left: 5px;
    background-position: -2px -150px
  }
  .regressbtn{
    width: 100%;
    height:54px;
    line-height: 54px;
    background: #e2231a;
    color: white;
    font-size: 15px;
    margin-top: 60px;
  }
  .regressbtn:hover{
    background: #c81623;;
  }
  .step1-wrap-down{
    width: 100%;
    height: 50px;
    clear: both;
    display: block;
    margin-top: 40px;
    line-height: 50px;
    border:1px solid rgb(221, 221, 221);
  }
  .step1-wrap{
    position: relative;
  }
  .step1-wrap-up{
    width: 398px;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    box-sizing: border-box;
    border:1px solid rgb(221, 221, 221);
  }
  .step1-wrap input{
    width: 296px;
    height: 50px;
    line-height: 50px;
    float: left;
    display: block;
    padding-left: 20px;
    box-sizing: border-box;
    border: none;
  }
  .left{
    width: 100px;
    height: 50px;
    float: left;
    box-sizing: border-box;
    line-height: 50px;
    border-right:1px solid rgb(221, 221, 221);
  }
  .step1-wrap{
    width: 398px;
    margin: 50px auto;
    /*background: red;*/
  }
  .item-phone-wrap{
    width: 86px;
    position: relative;
    z-index:2;
  }
  .progress-bar .person-pro-step3 {
    margin-left: 112px;
  }
  .progress-bar .pro-step3 {
    margin-left: 43px;
  }
  .progress-bar .pro-step {
    float: left;
    text-align: center;
  }
  .progress-bar .person-pro-line2 {
    left: 228px;
  }
  .progress-bar .pro-line2 {
    left: 169px;
  }
  .progress-bar .person-pro-line {
    width: 124px;
    background-position: 0 -100px;
  }
  .progress-bar .pro-line {
    position: absolute;
    top: 7px;
    width: 74px;
    height: 10px;
    background-position: 0 -40px;
  }
  .progress-bar .person-pro-step2 {
    margin-left: 106px;
  }

  .progress-bar .pro-step2 {
    margin-left: 49px;
  }
  .progress-bar .pro-step {
    float: left;
    text-align: center;
  }
  .progress-bar .pro-line, .progress-bar .pro-step .step-index {
    background: url("../../static/images/reg-icon.png") no-repeat;
  }
  .progress-bar .pro-line {
    position: absolute;
    top: 7px;
    width: 74px;
    height: 10px;
    background-position: 0 -40px;
  }

  .progress-bar .person-pro-line1 {
    left: 55px;
  }
  .progress-bar .cur-step .step-desc {
    color: #3b4;
  }
  .progress-bar .pro-step .step-desc {
    margin-top: 10px;
    font-size: 12px;
    color: #999;
  }
  a, address, b, big, blockquote, body, center, cite, code, dd, del, div, dl, dt, em, fieldset, font, form, h1, h2, h3, h4, h5, h6, html, i, iframe, img, ins, label, legend, li, ol, p, pre, small, span, strong, u, ul, var {
    margin: 0;
    padding: 0;
  }
  .progress-bar .pro-step {
    float: left;
    text-align: center;
  }
  .progress-bar {
    position: relative;
    margin: 80px auto 0;
    width: 400px;
  }
  .clearfix {
  }
  a, address, b, big, blockquote, body, center, cite, code, dd, del, div, dl, dt, em, fieldset, font, form, h1, h2, h3, h4, h5, h6, html, i, iframe, img, ins, label, legend, li, ol, p, pre, small, span, strong, u, ul, var {
    margin: 0;
    padding: 0;
  }
  user agent stylesheet
  div {
    display: block;
  }
  body {
    font-size: 14px;
  }
  body {
    font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #666;
    background: #fff;
  }
  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .progress-bar .cur-step .step-index {
    background-position: 0 -200px;
    color: #fff;
  }
  .progress-bar .pro-step .step-index {
    margin: 0 auto;
    display: block;
    width: 24px;
    height: 24px;
    line-height: 24px;
    background: url("../../static/images/reg-icon.png") no-repeat;
    background-position: -45px -200px;
    font-size: 12px;
    font-weight: 700;
    color: #ccc;
  }
</style>
