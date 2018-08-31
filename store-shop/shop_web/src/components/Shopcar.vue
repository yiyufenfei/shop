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

    <div class="goodlot">
      <div class="count">全部商品<span style="color: #ff6000">1</span><span class="line"></span></div>
      <div class="count">降价商品<span style="color: #ff6000">1</span><span class="line"></span></div>
      <div class="count">库存紧张<span style="color: #ff6000">1</span></div>
      <div class="jiesuan" style="display: none">结算</div>
      <div class="jiesuans">结算</div>
      <div class="right">已选商品(不含运费)<span style="color: #ff6000;margin-left: 5px">0.00</span></div>
    </div>
    <div class="changesall">
      <input type="checkbox" class="checkall"/>
      <span class="words">全选</span>
      <span  class="wordss">商品信息</span>
      <div class="wordsright">
        <ul>
          <li>单价</li>
          <li>数量</li>
          <li>金额</li>
          <li>操作</li>
        </ul>
      </div>
    </div>
    <div class="countbox">
      <div class="count">
        <div class="goodlist">
          <div class="counts">
            <div class="left" style="width:330px">
              <input type="checkbox" class="checkcount"/>
              <div class="images"></div>
              <div class="word">天然紫水晶项链女纯银吊坠简约心形爱心锁骨链成人正品生日礼物</div>
            </div>
            <div class="middle">颜色分类：【礼意久久正品】7克拉天然紫水晶项链+质检证书</div>
            <div class="right">
              <div class="p">
                <p class="price">￥399</p>
                <p class="prices">￥399</p>
              </div>
              <div class="nunmber">
                <div class="box">
                  <div class="box-left" style="line-height:22px;text-aline:center">-</div>
                  <div class="box-middle">1</div>
                  <div class="box-right" style="line-height:22px;text-aline:center">+</div>
                </div>
              </div>
              <div class="theprice">￥10000</div>
              <div class="topice">
                <p>移入收藏夹</p>
                <p>删除</p>
                <p>相似宝贝</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="countbox">
      <div class="count">
        <div class="goodlist" style="background: #f0f0f0;border: solid 1px #e7e7e7">
          <div class="counts">
            <div class="left" style="width:330px">
              <span>失效</span>
              <div class="images" style="margin-left: 30px"></div>
              <div class="word" style="color: #ccc">天然紫水晶项链女纯银吊坠简约心形爱心锁骨链成人正品生日礼物</div>
            </div>
            <div class="middle" style="color: #ccc">颜色分类：【礼意久久正品】7克拉天然紫水晶项链+质检证书</div>
            <div class="right">
              <div class="p">
                <p class="price" style="color: #ccc">￥399</p>
                <p class="prices" style="color: #ccc">￥399</p>
              </div>
              <div class="nunmber">
                <div class="box">
                  <div class="box-left" style="display: none"></div>
                  <div class="box-middle" style="border: none;color: #ccc">1</div>
                  <div class="box-right" style="display: none"></div>
                </div>
              </div>
              <div class="theprice" style="color: #ccc">￥10000</div>
              <div class="topice">
                <p>移入收藏夹</p>
                <p>删除</p>
                <p style="display: block;color:#ff6000">相似宝贝</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footjiesuan">
      <ul>
        <li>
          <input type="checkbox" style="margin-top: 15px" class="checkcount"/>
          全选
        </li>
        <li>删除</li>
        <li>移入收藏夹</li>
        <li>分享</li>
      </ul>
     <div class="jiesuanright">
       <!--<span class="huise">结算</span>-->
       <span class="zhengchang"  @click="tomany()">结算</span>
       <span>0.00</span>
       <span>合计（不含运费）:</span>
       <span>件</span>
       <span style="color: #ff6000">0</span>
       <span>已选商品</span>
     </div>
    </div>

    <!--最近浏览过的，猜您喜欢的-->
    <div class="maybylike">
      <ul>
        <li :class="{backgroundyellow:isshowyellow}" @click="lack()">最近浏览过的</li>
        <li class="line"></li>
        <li :class="{backgroundyellow:!isshowyellow}" @click="lack()">猜您喜欢的</li>
      </ul>
    </div>
     <div class="likecount">
       <ul>
         <li v-for="item in list">
           <img :src="item">
           <p class="likeprice">￥230.2</p>
           <p class="likegoods">大码胖仙女吊带裙胖MM藏肉遮肚子收腰格子连衣裙长款开衫两件套装</p>
         </li>
       </ul>
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
     <div class="shouhua" v-show="jiesuan">
        <div class="boxs">
          <div class="title">新增收货人信息</div>
          <div class="en">
            <span>收货人:</span>
            <input placeholder="请输入收货人"/>
          </div>
          <div class="en">
            <span>详细地址:</span>
            <input placeholder="请输入详细地址"/>
          </div>
          <div class="en">
            <span>手机号码:</span>
            <input placeholder="请输入手机号"/>
          </div>
          <div class="en">
            <span>固定电话:</span>
            <input placeholder="请输入固定号码"/>
          </div>
          <div class="en">
            <span>邮箱地址:</span>
            <input placeholder="请输入邮箱地址"/>
          </div>
          <p>用来接收订单提醒邮件，便于您及时了解订单状态</p>
          <div class="en">
            <span>地址别名:</span>
            <input placeholder="请输入地址别名"/>
          </div>
          <div class="submitbtn" @click="savethis()">保存收货人地址</div>
        </div>
     </div>
  </div>
</template>
<script>
  export default {
    name: 'Shopcar',
    data(){
      return{
        jiesuan:false,
          isshowyellow:true,
        list:[
          "../../static/images/1.jpg",
          "../../static/images/2.jpg",
          "../../static/images/3.jpg",
          "../../static/images/4.jpg",
          "../../static/images/5.jpg",
        ],
      }
    },
    computed: {
    },
    components: {
    },
    mounted:function(){
    },
    methods: {
      tomany:function(){
        this.jiesuan=true;
      },
      savethis:function(){
         this.jiesuan=false;
      },
      lack:function () {
         this.isshowyellow=!this.isshowyellow
      },
    }
  }
</script>
<style>
.submitbtn{
  width:100px;
  height:25px;
  background:#ff6000;
  font-size:13px;
  color:white;
  margin:15px 60px 50px 70px;
  line-height:25px;
  border-radius:2px;
}
.boxs .title{
  width:100%;
  height:25px;
  background:#f1f3f4;
  position:absolute;
  top:0;
  right:0;
  line-height:25px;
  text-align:left;
  padding-left:20px;
  font-size:12px;
  box-sizing:border-box;
}
.boxs p{
  font-size:12px;
  text-align:left;
  margin-left:70px;
}
.en span{
  float:left;
  font-size:13px;
  line-height:25px;
  margin-right:10px;
  width:60px;
  text-align:left;
}
.en input{
  float:left;
  height:20px;
  width:250px;
  font-size:12px;
  padding-left:10px;
}
.en{
  width:100%;
  height:30px;
  margin-top:10px;
}
.shouhua .boxs{
  width:500px;
  padding:40px 20px 10px 20px;
  background:white;
  margin:0 auto;
  position:relative;
  margin-top:200px;
}
.shouhua{
  width:100%;
  height:100vh;
  background:rgba(0,0,0,0.7);
  position:fixed;
  top:0;
  left:0;
}
  .goodlist{
    position: relative;
  }
  .left span:nth-child(1){
    float: left;
    font-size: 11px;
    display: block;
    width: 35px;
    height: 18px;
    line-height: 18px;
    border-radius: 2px;
    position: absolute;
    left: 10px;
    top: 40px;
    color: #5f5f5f;
    background:#dadada ;
  }
  .likecount ul li p:nth-child(3):hover{
    color: #ff6000;
  }
  .likegoods{
    font-size: 13px;
    height: 15px;
    margin: 0;
    padding: 5px 10px 0 10px;
    overflow: hidden;
  }
  .likeprice{
    font-size: 15px;
    text-align: left;
    font-weight: bold;
    margin: 0;
    color: #ff6000;
    padding: 5px 10px 0 10px;
  }
  .likecount ul li img{
    width: 100%;
    height: 75%;
  }
  .likecount ul li{
    width: 19%;
    list-style: none;
    height: 100%;
    float: left;
    margin:0 5px 0 5px;
    border:solid 1px #d7d7d7;
    box-sizing: border-box;
  }
  .likecount ul {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0;
  }
  .likecount{
    width: 1000px;
    height: 255px;
    margin: 20px auto;
  }
  .backgroundyellow{
  border-bottom: 2px solid #ff6000;
  }
  .maybylike ul{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-size: 13px;
    font-weight: bold;
    border-bottom: solid #e5e5e5 2px;
  }
  .maybylike .line{
    box-sizing: border-box;
    width: 1px;
    margin-top: 10px;
    height: 25px;
    display: block;
    float: left;
    background: #d7d7d7;
  }
  .maybylike ul li{
    margin: 0 auto;
    height: 40px;
  }
  .maybylike ul li:hover{
    box-sizing: border-box;
    color: #ff6000;
  }
  .maybylike ul li:nth-child(1){
    box-sizing: border-box;
    padding: 0 15px 0 15px;
    float: left;
    list-style: none;
  }
  .maybylike ul li:nth-child(3){
    box-sizing: border-box;
    padding: 0 15px 0 15px;
    float: left;
    list-style: none;
  }
  .maybylike{
    box-sizing: border-box;
    margin: 0 auto;
    width: 1000px;
    height: 40px;
    line-height: 45px;
  }
  .jiesuanright span:nth-child(5){
    padding: 0 5px 0 5px;
  }
  .jiesuanright span:nth-child(6){
    font-size: 13px;
  }
  .jiesuanright span:nth-child(4){
    font-size: 13px;
    margin-right:30px
  }
  .jiesuanright span:nth-child(3){
    margin-right: 6px;
    font-size: 13px;
  }
  .jiesuanright span:nth-child(2){
    margin-right: 6px;
    color: #ff6000;
  }
  .jiesuanright .zhengchang{
       width: 100px;
       height: 100%;
       background: #ff6000;
       display: block;
       color: white;
     }
  .jiesuanright .huise{
   width: 100px;
    height: 100%;
    background: #B0B0B0;
    display: block;
    color: white;
  }
  .jiesuanright span{
    float: right;
    line-height: 45px;
  }
  .jiesuanright{
    float: right;
    height: 100%;
  }
  .footjiesuan ul li{
    float: left;
    margin-right: 25px;
  }
  .footjiesuan ul{
    list-style: none;
    font-size: 12px;
    padding: 0;
    line-height: 45px;
  }
  .footjiesuan{
    width: 1000px;
    height: 45px;
    background: #e5e5e5;
    margin: 0 auto;
  }
  .counts:hover  .topice p:nth-child(3){
    display: block;
  }
  .topice p{
    font-size: 12px;
    color: #303030;
    text-align: left;
    padding: 0;
    margin: 0;
  }
  .topice p:nth-child(2){
    margin-top: 3px;
  }
  .topice p:nth-child(3){
    margin-top: 3px;
    display: none;
  }
  .topice p:hover{
   color: #ff6000;
  }
  .topice{
   width: 100px;
    height: 100%;
    margin-left: 90px;
    float: left;
  }
  .theprice{
    font-size: 15px;
    color: #ff6000;
    float: left;
  }
  .box-middle{
    float: left;
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    border: solid 1px #aaa;
    font-size: 13px;
    line-height:25px;
    text-align: center;
  }
  .box-left{
    width: 25%;
    height: 100%;
    background: #f0f0f0;
    border: solid 1px #e5e5e5;
    box-sizing: border-box;
    float: left;
  }
  .box-right{
    width: 25%;
    height: 100%;
    background: #f0f0f0;
    border: solid 1px #e5e5e5;
    box-sizing: border-box;
    float: right;
  }
  .nunmber .box{
    width: 80px;
    height: 25px;
    margin: 0px auto;
  }
  .nunmber{
    width: 150px;
    height: 100%;
    float: left;
  }
  .right .p{
    width: 50px;
    height: 100%;
    font-size: 14px;
    display: block;
    float: left;
  }
  .right .price{
    padding: 0;
    margin: 0;
    color: #9c9c9c;
  }
  .right .prices{
    padding: 0;
    margin: 0;
  }
  .counts .right{
    width: 500px;
    height: 80px;
    float: right;
  }
  .left .word{
    width: 200px;
    height: 80px;
    float: left;
    text-align: left;
    font-size: 12px;
    margin-left: 10px;
  }
  .middle{
    width: 150px;
    height: 80px;
    float: left;
    font-size: 12px;
    color: #9c9c9c;
    text-align: left;
  }
  .counts{
    overflow: hidden;
  }
  .counts .images{
     min-width: 80px;
    min-height: 80px;
    background: url("../../static/images/1.jpg") no-repeat;
    background-size:100% 100% ;
    float: left;
    margin-left: 10px;
  }
  .counts .left{
    float: left;
  }
  .goodlist .counts{
    width: 100%;
    padding:15px 25px 15px 25px;
  }
  .goodlist-header span{
    font-size: 12px;
    float: left;
    color: #ff6000;
    margin-left: 10px;
  }
  .baoyou{
    width: 29px;
    height: 20px;
    background: #e7e7e7;
    font-size: 12px;
    float: left;
  }
  .goodlist-header{
    width: 100%;
    height: 30px;
    padding-top: 8px;
    padding-left: 55px;
    border-bottom: 1px solid #e7e7e7;
  }
  .goodlist{
    width: 100%;
    clear: both;
    border-radius: 1px;
    border:solid 1px #aaa;
    box-sizing: border-box;
  }
  .wordsinfo{
    float: left;
    font-size: 12px;
  }
  .headers .icon{
    width: 15px;
    height: 15px;
    float: left;
    margin-right: 6px;
    margin-left: 6px;
  }
  .countbox .count .headers{
  }
  .countbox .count{
    width: 100%;
    padding: 15px 0 15px 0;
  }
  .countbox{
    width: 1000px;
    overflow: hidden;
    margin: 0 auto;
  }
  .wordsright ul li{
    width: 20%;
    height: 100%;
    line-height: 30px;
    list-style: none;
    float: left;
    font-size: 12px;
  }
  .checkcount{
    width: 15px;
    height: 15px;
    background: white;
    float: left;
    margin-top: 0;
  }
  .wordsright{
    float: right;
    width: 500px;
    height: 100%;
  }
  .changesall .words{
    font-size: 13px;
    float: left;
    line-height: 50px;
    margin-left: 3px;
  }
  .changesall .wordss{
    font-size: 13px;
    float: left;
    line-height: 50px;
    margin-left: 100px;
  }
  .checkthis{
    width: 15px;
    height: 15px;
    background: white;
    float: left;
  }
  .checkall{
    width: 15px;
    height: 15px;
    background: white;
    float: left;
    margin-top: 18px;
  }
  .changesall{
    width: 1000px;
    margin:0 auto;
    height: 50px;
  }
  .goodlot .right{
    float: right;
    font-size: 12px;
    line-height: 25px;
    margin-top: 20px;
  }
  .goodlot .jiesuan{
    float: right;
    font-size: 12px;
    width: 50px;
    background: #aaa;
    border-radius: 2px;
    margin-left: 5px;
    height: 25px;
    margin-top: 20px;
    line-height: 25px;
  }
  .goodlot .jiesuans{
    float: right;
    font-size: 12px;
    width: 50px;
    background: #ff6000;
    border-radius: 2px;
    margin-left: 5px;
    height: 25px;
    margin-top: 20px;
    line-height: 25px;
  }
  .count .line{
    width: 2px;
    height:15px;
    background: #f1f3f4;
    display: block;
    position: absolute;
    right: 0;
    top: 17px;
  }
  .goodlot .count{
    float: left;
    padding: 0 20px 0 20px;
    text-align: center;
    height: 100%;
    line-height: 55px;
    position: relative;
    font-size: 15px;
  }
  .goodlot .count:hover{
    border-bottom: solid 2px #ff6000;
  }
  .goodlot{
    width: 1000px;
    height: 50px;
    margin: 0 auto;
    border-bottom:solid 2px #e6e6e6;
  }
</style>
