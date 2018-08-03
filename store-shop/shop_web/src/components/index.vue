
<template>
<div>
  <div>
    <div id="head" style="height: 188px">
      <!--头部top开始-->
      <div class="top">
        <div class="head_top">
          <!--头部top左开始-->
          <p style="margin: 0 auto;padding: 0">您好，欢迎光临智慧商圈信息服务平台</p>
          <!--头部top左结束-->

          <!--头部top右开始-->
          <div class="top_right">
            <a target="_parent" @click="loaddings()">登录</a><span>|</span>
            <a  target="_parent" @click="regresss()">注册</a>
            <span>|</span><a href="#">个人中心</a>
            <span>|</span>
            <a href="#">我的服务</a><span>|</span><a href="#">帮助说明</a><span>|</span>

          </div>
          <!--头部to右结束p开始-->
        </div>
      </div>
      <!--头部top结束-->

      <!--头部main开始-->
      <div class="main" style="height: 96px;overflow: hidden">
        <!--头部main左开始-->
        <div class="main_left">
          <p style="margin: 0 ">
            <img src="../../static/images/logo.png" width="130" height="80"  />
          </p>
        </div>
        <!--头部main左结束-->

        <!--头部main_search开始-->
        <div class="main_search">
          <input type="text" value="搜服务，搜商品，搜租房信息！" class="input_01"/><input type="button" value="搜索" class="input_02"/>
        </div>
        <!--头部main_search结束-->
        <div class="cl"></div>
      </div>
      <!--头部main结束-->

      <!--头部menu开始-->
      <div class="menu">
        <div class="head_menu">
          <ul style="box-sizing: border-box;margin: 0">
            <li><a href="index.html" target="_parent">首页</a></li>
            <li><a href="news.html"   target="_parent">业务展示</a></li>
            <li><a href="lifetwo.html" target="_parent">已办业务</a></li>
            <li><a href="wyserver.html" target="_parent">业务办理</a></li>
            <li><a href="abutter.html" target="_parent">关于我们</a></li>
            <div class="cl"></div>
          </ul>
        </div>
      </div>
      <!--头部menu结束-->
    </div>
  </div>

  <div class="index-header" style="height:600px">
    <ul class="indexul">
      <li>全部有商品分类</li>
      <li>优惠券</li>
      <li>特色贵州</li>
      <li>三品一标馆</li>
    </ul>
    <!--轮播图片-->
    <div class="lunboxbox">
      <ul class="lunbo" :style="'margin-left:'+num+'px'">
        <li v-for="item in list">
          <img v-bind:src="item">
        </li>
      </ul>
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
    name: 'index',
    data(){
      return{
        list:[
          "../../static/images/1.jpg",
          "../../static/images/2.jpg",
          "../../static/images/3.jpg",
          "../../static/images/4.jpg",
          "../../static/images/5.jpg",
        ],
        num:0,
        number:0,
      }
    },
    computed: {
    },
    components: {
    },
    mounted:function(){
      this.$nextTick(function () {
        this.cartView()
      })
    },
    methods: {
      cartView:function(){
//        this.number++;
        setInterval(function(){
          this.num=-(this.num+10);
        },1000)
      },

    loaddings:function () {
        this.$router.push("ShopLoad")
      },
      regresss:function () {
        this.$router.push("ShopRegress")
      },
    }
  }
</script>
<style>
  .lunbo li img{
    width: 100%;
    height: 100%;
  }
  .indexul{
    overflow: hidden;
    width:1000px;
    display: block;
    font-size: 13px;
    margin:0 auto;
    box-sizing: border-box;
  }
  .lunbo li{
    width: 20%;
    height: 100%;
    float: left;
    margin:0 auto;
    padding:0;
    overflow:hidden;
    display:inline
  }
  .lunbo{
    width: 500%;
    height: 100%;
    list-style: none;
    margin:0px;
    padding:0px;
  }
  .lunboxbox{
    width: 100%;
    height: 500px;
    background: red;
    list-style-type:none;
    margin:0 auto;
    overflow:hidden;
  }
  .indexul li{
    list-style: none;
    float: left;
    padding:15px 25px 15px 25px;
    box-sizing: border-box;
  }
  .index-header{
    width: 100%;
    height: 500px;
  }
  .index-header{
    width: 100%;
    height: 40px;
    /*background: red;*/
  }
</style>
