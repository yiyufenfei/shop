<template>
  <div>
    <div>
      <div id="head" style="height: 140px">
        <!--头部main开始-->
        <div class="main" style="height: 96px;overflow: hidden">
          <!--头部main左开始-->
          <div class="main_left"  @click="loadding()">
            <p style="margin: 0 ">
              <img src="../../static/images/logo.png" width="130" height="80"  />
            </p>
          </div>
          <span class="headerregress">欢迎登陆</span>
          <div class="cl"></div>
        </div>
        <div class="tips-wrapper">
          <div class="tips-inner">
            <div class="cont-wrapper" style="width: 50%">
              <i class="icon-tips"></i>
              <p>依据《网络安全法》，为保障您的账户安全和正常使用，请尽快完成手机号验证！ 新版
                <a href="https://about.jd.com/privacy/" class="black" target="_blank">
                  《京东隐私政策》</a>已上线，将更有利于保护您的个人隐私。</p>
            </div>
          </div>
        </div>
      </div>
    </div>

     <div class="bg">
       <div class="background"></div>
       <div class="loadbox">
         <div class="tips-wrapper">
           <div class="tips-inner">
             <div class="cont-wrapper">
               <i class="icon-tips"></i>
               <p>京东不会以任何理由要求您转账汇款，谨防诈骗。</p>
             </div>
           </div>
         </div>
         <div class="loadword">账户登录</div>
         <div class="count" style="margin-top: 40px">
           <div class="icon-user"></div>
           <input placeholder="邮箱/用户名/已验证手机"/>
         </div>
         <div class="count">
           <div class="icon-password"></div>
           <input placeholder="密码"/>
         </div>
         <a class="a">忘记密码</a>
         <div class="loadbtn" @click="loadding">登录</div>
         <div class="bottom">
           <div class="qqbg"></div>
           <a class="qqword">QQ</a>
           <span class="line" style="margin-left: 7px">|</span>
           <div class="wxbg" style="margin-left: 10px"></div>
           <a class="wxword">微信</a>
           <a class="regressword" @click="regressbtn">立刻注册</a>
           <div class="regressbg" @click="regressbtn"></div>
         </div>
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
    name: 'ShopLoad',
    data(){
      return{
      }
    },
    computed: {
    },
    components: {
    },
    methods: {
      loadding:function () {
        this.$router.push("/")
      },
      regressbtn:function () {
        this.$router.push("ShopRegress")
      },
    }
  }
</script>
<style>
  #content .tips-wrapper .cont-wrapper {
    display: inline-block;
    width: 90%;
  }
  #content .tips-wrapper .tips-inner p {
    vertical-align: middle;
    color: #999;
    font-size: 12px;
    display: inline-block;
  }
  #content .tips-wrapper .icon-tips {
    background: url("../../static/images/icon-tips.png");
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin-right: 5px;
  }
  #content .tips-wrapper {
    background: #fff8f0;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
  }
.headerregress{
  float: left;
  line-height: 90px;
  font-size: 26px;
  color: #e85356;
}

  .bottom{
    font-size: 12px;
    text-align: right;
    display: block;
    margin-right: 17px;
    margin-top: 10px;
    color: #666;
    line-height: 50px;
  }
  .line{
    color: #ccc;
    float: left;
  }
  .regressword{
      float: right;
      padding-left: 7px;
    padding-right: 0;
    }
  .regressbg{
    width: 19px;
    height: 18px;
    text-align: right;
    display: block;
    background: url("../../static/images/pwd-icons-new.png") no-repeat;
    background-position: -104px -75px;
    margin: 15px auto;
    float: right;
  }
  .wxword{
    float: left;
    padding-left: 7px;
  }
  .wxbg{
    width: 19px;
    height: 18px;
    display: block;
    background: url("../../static/images/QQ-weixin.png") no-repeat;
    background-position: -20px 0;;
    margin: 15px auto;
    float: left;
  }
  .qqword{
    float: left;
    padding-left: 7px;
  }
  .qqbg{
    width: 19px;
    height: 18px;
    display: block;
    background: url("../../static/images/QQ-weixin.png") no-repeat;
    margin: 15px auto;
    float: left;
  }
  .bottom{
    padding-left: 20px;
    padding-right: 20px;
    line-height: 50px;
    height: 50px;
    width: 100%;
    box-sizing: border-box;
    border-top: 1px solid #f4f4f4;
    background-color: #fcfcfc;
    position: absolute;
    bottom: 0px;
  }
  .loadbtn:hover{
    background: #c81623;;
  }
  .loadbtn{
    border: 1px solid #e85356;
    display: block;
    width: 302px;
    background: #e4393c;
    height: 31px;
    line-height: 31px;
    color: #fff;
    font-size: 20px;
    font-family: 'Microsoft YaHei';
    margin: 0 auto;
    margin-top: 20px;
  }
  .loadbox .a{
    font-size: 12px;
    text-align: right;
    display: block;
    margin-right: 17px;
    margin-top: 10px;
    color: #666;
  }
  .loadbox .a:hover{
    color: #e93854;
  }
  .background{
    width: 990px;
    height: 100%;
    background: blue;
    margin: 0 auto;
  }
  .icon-password{
    z-index: 3;
    width: 38px;
    height: 38px;
    border-right: 1px solid #bdbdbd;
    float: left;
    background: url("../../static/images/pwd-icons-new.png") no-repeat;
    background-position: -48px 0;
  }
  .count{
    width: 90%;
    height: 38px;
    margin: 0 auto;
    margin-top: 20px;
    border: 1px solid rgb(221, 221, 221);
  }
  .count input{
    width: 272.3px;
    display: block;
    float: left;
    height: 38px;
    border: none;
    box-sizing: border-box;
    padding-left: 15px;
  }
  .icon-user{
    z-index: 3;
    width: 38px;
    height: 38px;
    border-right: 1px solid #bdbdbd;
    float: left;
    background: url("../../static/images/pwd-icons-new.png") no-repeat;
  }
  .loadword{
    font-size: 18px;
    height: 50px;
    font-weight: bold;
    border-bottom: 1px solid rgb(221, 221, 221);
    line-height: 50px;
    color: #e93854;
  }
  .cont-wrapper p{
    font-size: 12px;
    float: left;
    color: #999;
  }
 .tips-wrapper {
    background: #fff8f0;
    width: 100%;
    text-align: center;
  }
  .cont-wrapper {
    display: inline-block;
    width: 90%;
  }
  .icon-tips {
    background: url("../../static/images/icon-tips.png");
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    float: left;
    margin-right: 5px;
    margin-top: 12px;
  }
   .bg{
     left: 0;
     top: 0;
     width: 100%;
     height: 475px;
     background: #e93854;
     position: relative;
   }
  .loadbox{
    position: absolute;
    right: 200px;
    top: 10px;
    z-index: 4;
    background: #fff;
    overflow: visible;
    width: 346px;
    height:400px;
  }
</style>
