
<template>
<div>
  <!--购物车-->
  <div class="goodscar">
    <ul>
      <li>购物车</li>
    </ul>
  </div>
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
      <div class="menu" style="z-index:3">
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
    <div style="width: 1000px;margin: 0 auto;">
      <ul class="indexul">
        <li style="position: relative;color: white;z-index: 0">全部有商品分类
          <div class="listdatas"></div>
        </li>
        <li>优惠券</li>
        <li>特色贵州</li>
        <li>三品一标馆</li>
      </ul>

    </div>
    <!--轮播图片-->
    <div class="lunboxbox" id="ul">
      <ul class="lunbo" :style="'opacity:'+num">
        <li v-for="item,index in list" v-show="listshow[index]">
          <img v-bind:src="item">
        </li>
      </ul>
    </div>
  </div>
  <!--商品列表-->
  <div class="pagecount" style="position: relative">
    <div class="pagecounts">
        <div class="cscount" style="position: relative">
          <div class="cs" v-for="item in goodslistimg">
            <img :src="item">
            <div class="twop" style="width: 100%;overflow: hidden;">
              <p class="goodsname" style="margin:0 ">上平名称商品名商品名称商品名称商品名称</p>
              <p class="price" style="color: #ff6000;margin:0 ">￥300</p>
            </div>
          </div>
        </div>
      <!--主题-->
      <div class="mintitle">
        <img :src="minphto">
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
        listshow:[true,false,false,false,false],
        goodslistimg:[
          "../../static/images/u=133680563,3592432663&fm=27&gp=0.jpg",
          "../../static/images/u=152148260,2888950566&fm=27&gp=0.jpg",
          "../../static/images/u=1158613928,3076234435&fm=27&gp=0.jpg",
          "../../static/images/u=2383555999,1443448416&fm=27&gp=0.jpg",
          "../../static/images/u=2721462338,1991093246&fm=27&gp=0.jpg",
          "../../static/images/u=3084857233,400094367&fm=27&gp=0.jpg",
          "../../static/images/u=3318517083,2462679086&fm=27&gp=0.jpg",
          "../../static/images/u=3621152253,1345415073&fm=27&gp=0.jpg",
          "../../static/images/u=3318517083,2462679086&fm=27&gp=0.jpg",
          "../../static/images/u=3621152253,1345415073&fm=27&gp=0.jpg",
        ],
        minphto://主题图片
          "../../static/images/TB1ssWnmrZnBKNjSZFGSuvt3FXa.jpg",
        num:1,
        number:0,
        step:0,
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
        var thiss=this;
        setInterval(function(){
          thiss.timers();


        },3000)
      },
      timers:function () {
        var thiss=this;
        var timer=setInterval(function(){
//          if(thiss.num<=1&&thiss.num>0){
//            thiss.num-=0.1;
//          }
          if(thiss.num>0.6){
            thiss.num-=0.1;
          }
          else{
            thiss.num=1;
            thiss.step++;
            if(thiss.step==5){
              thiss.step=0;
            }
            for(var i=0;i<thiss.list.length;i++){
              thiss.listshow[i]=false;
            }
            thiss.listshow[thiss.step]=true;
            clearInterval(timer)
          }
        },100)
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
  .indexul li:hover{
    color: #ff6000;
    font-weight: bold;
  }
  .goodscar{
    width: 30px;
    height: 100vh;
    background: rgba(0,0,0,1);
    position: fixed;
    right: 0;
    z-index: 999;
  }
  .mintitle img{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  .mintitle{
    width: 20%;
    height: 593px;
    padding: 5px;
    box-sizing: border-box;
  }
  .twop{
    padding: 0 20px 0 20px;
    box-sizing: border-box;
  }
  .twop p:nth-child(1){
   color: #303030;
    padding-top:15px
  }
  .twop p:nth-child(2){
    font-size: 15px;
    padding-top:10px
  }
  .cs:hover{
    border: 2px solid #ff6000;
  }
  .cscount{
    width: 80%;
    overflow: hidden;
    float: right;
    margin: 0 auto;
    box-sizing: border-box;
    z-index: 55;
  }
  .pagecounts{
    width:80%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    box-sizing: border-box;
  }
  .pagecounts .cs{
    width:19%;
    text-align: center;
    padding:0 4px 0 4px;
    font-size: 12px;
    box-sizing: border-box;
    margin:5px 5px 5px 5px;
    float: left;
    height: 289px;
    background: white;
  }
  .pagecounts .cs img{
    width: 100%;
    height: 200px;
    padding: 0;
    margin: 0;
    vertical-align:bottom;
  }
  .pagecount{
    width: 100%;
    padding: 10px 10px 10px 10px;
    margin: 0 auto;
    background: #f5f5f5;
    overflow: hidden;
    box-sizing: border-box;
  }
  .head_menu ul li a:hover{
    color:  #ff6000;
  }
  .head_menu ul li:hover{
    background: white;
  }
  .listdatas{
    width: 300px;
    height: 300px;
    background: rgba(0,0,0,0.6);
    position: absolute;
    top: 47.5px;
    left: 0;
    z-index: 33;
    display: none;
  }
  .indexul li:nth-child(1):hover .listdatas{
    display: block;
  }
  .indexul li:nth-child(1){
    background: #ff6000;
  }
  .lunbo li img{
    width: 100%;
    height: 100%;
  }
  .indexul{
    width:1000px;
    display: block;
    font-size: 13px;
    margin:0 auto;
    padding: 0;
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
    list-style-type:none;
    margin:0 auto;
    overflow:hidden;
    border-top: solid 1px  #ff6000;;
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
    position: relative;
  }
  .index-header{
    width: 100%;
    height: 40px;
    /*background: red;*/
  }
</style>
