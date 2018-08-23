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
      </div>
    </div>
    <div class="listcount colorborder">
      <div class="left">
        <div class="listcount-left-up">
          <div class="listcount-left-up-bg" @mousemove="mousemoves()" :style="'background:url('+src+');background-size:100% 100%'">
            <div class="listcount-left-up-bg-jingzi">
              <div :style="'background:url('+src+');background-size:200% 200%;background-position-x:'+-positionx+'px;background-position-y:'+-positiony+'px'"></div>
            </div>
          </div>
        </div>
        <div class="zicount">
          <ul>
            <li v-for="item in list">
              <img :src="item"/>
            </li>
          </ul>
        </div>
        <div class="listcount-left-down"></div>
      </div>
      <div class="middle">
         <div class="listcount-middle-count">
           <p class="header">
             2018夏装新款韩版学院风简约百搭纯色打底衫背心上衣女装学生衣服
           </p>
           <div class="pricethis" style="position: relative">
             <p>价格<span style="margin-left: 30px">￥250</span></p>
             <div><span style="line-height: 20px">优惠价</span><span style="">￥150</span><span>超值优惠</span></div>
             <div class="messagges">
               <div class="ban">
                 <p style="text-align: center">1245</p>
                 <p style="text-align: center">累计评论</p>
               </div>
               <div class="ban">
                 <p style="text-align: center">1245</p>
                 <p style="text-align: center">交易成功</p>
               </div>
             </div>
           </div>
           <div class="peisong">
             <span>配送</span>
             <span style="margin-left: 20px">广东省</span>
             <span>湖南长沙</span>
           </div>
           <div class="chima">
              <span>尺码</span>
             <ul>
               <li :class="{border:borders[0]}" @click="chima(0)">S</li>
               <li :class="{border:borders[1]}" @click="chima(1)">M</li>
               <li :class="{border:borders[2]}" @click="chima(2)">L</li>
               <li :class="{border:borders[3]}" @click="chima(3)">XL</li>
             </ul>
           </div>
           <div class="fenlei">
             <span>颜色分类</span>
             <ul>
               <li v-for="item in incolor">{{item}}</li>
             </ul>
           </div>
           <div class="changenumber">
             <span>数量</span>
             <div class="numberbox">
               <span>-</span>
               <span>1</span>
               <span>+</span>
             </div>
           </div>
           <div class="addtobtn">
             <div class="bay">立刻购买</div>
             <div class="addto">加入购物车</div>
           </div>
         </div>
      </div>
      <div class="right">
        <p class="xian"><span>看了又看</span></p>
        <ul class="likethis">
          <li>
            <div class="baise">
              <p>￥400</p>
            </div>
          </li>
          <li>
            <div class="baise">
              <p>￥400</p>
            </div>
          </li>
          <li>
            <div class="baise">
              <p>￥400</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="pinglun">
      <div class="pinglun-left">
        <div class="left-header">
          <input placeholder="搜宝贝"/>
          <!--宝贝搜索-->
          <div class="left-count">
            <p>本店搜索</p>
            <div class="guajian" style="margin-top: 10px">
              <span>关键字</span>
              <input placeholder="连衣裙"/>
            </div>
            <div class="guajian">
              <span>价格</span>
              <div class="price">
                <input />
                <input />
              </div>
            </div>
            <div class="searchbens">搜索</div>
            <a>2018</a> <a>连衣裙</a> <a>明星同款</a>
          </div>
          <!--客服中心-->
          <div class="left-count kefuzhong">
            <p>客服中心</p>
            <p>工作时间</p>
            <p>周一至周五：8.30-24：00</p>
            <p>周一至周五：8.30-24：00</p>
            <p>在线咨询</p>
            <p>掌柜</p>
            <p>客服</p>
            <p>联系方式</p>
            <p>联系手机号码：1356464564</p>
          </div>
          <!--宝贝分类-->
          <div class="left-counts" style="margin-top: 30px">
            <p>宝贝分类</p>
             <p>查看所有宝贝</p>
            <div class="sore">
              <p>按销量 按新品 按价格 按收藏</p>
            </div>
            <div class="counts-new">
              <p class="news">++++【九月新款】</p>
              <p class="news">++++【九月新款】</p>
              <p class="news">++++【九月新款】</p>
              <p class="news">++++【九月新款】</p>
              <p class="news">++++【九月新款】</p>
              <p class="news">++++【九月新款】</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pinglun-right">
        <div class="right-up">
          <ul class="right-header">
            <li @click="getlist(0)" :class="{getlistborder:goodstoke[0]}">宝贝详情</li>
            <li @click="getlist(1)" :class="{getlistborder:goodstoke[1]}">累计评论</li>
          </ul>
        </div>
        <!--宝贝详情-->
        <div style="border-right: solid 1px #E8E8E8;" v-if="goodstoke[0]">
          <div class="right-middle">
            <ul>
              <li>
                <p>货号：8919#</p>
                <p>货号：8919#</p>
                <p>货号：8919#</p>
              </li>
              <li>
                <p>货号：8919#</p>
                <p>货号：8919#</p>
                <p>货号：8919#</p>
              </li>
            </ul>
          </div>
        </div>
        <!--累计评论-->
        <div v-if="goodstoke[1]">
          <div class="yinxiang">
            <div class="yinxiang-left">大家印象：</div>
            <div class="yinxiang-right">
               <ul>
                 <li>样式好（11）</li>
                 <li>样式好（11）</li>
                 <li>样式好（11）</li>
                 <li>样式好（11）</li>
               </ul>
            </div>
          </div>
          <div class="changes">
            <ul>
              <li>
                <input type="radio"/>
                <span>全部</span>
              </li>
              <li>
                <input type="radio"/>
                <span>图片(1100)</span>
              </li>
              <li>
                <input type="radio"/>
                <span>追评(33444)</span>
              </li>
              <li>
                <input type="radio"/>
                <span>好评</span>
              </li>
              <li>
                <input type="radio"/>
                <span>中评</span>
              </li>
              <li>
                <input type="radio"/>
                <span>差评</span>
              </li>
            </ul>
          </div>
          <div class="changgecount">
            <div class="changecount-left">
              <div class="chang-left-bg"></div>
              <p>姓名</p>
            </div>
            <div class="changecount-right">
              <p>裙子非常仙气，很好看，跟实物一模一样，质量也很好，</p>
              <p>2018年05月09日  颜色分类：蓝色分类：蓝色【现货】 尺码：M</p>
              <span>有用(10)</span>
            </div>
          </div>
          <div class="changgecount">
            <div class="changecount-left">
              <div class="chang-left-bg"></div>
              <p>姓名</p>
            </div>
            <div class="changecount-right">
              <p>裙子非常仙气，很好看，跟实物一模一样，质量也很好，</p>
              <p>2018年05月09日  颜色分类：蓝色分类：蓝色【现货】 尺码：M</p>
              <span>有用(10)</span>
            </div>
          </div>
          <div class="changgecount">
            <div class="changecount-left">
              <div class="chang-left-bg"></div>
              <p>姓名</p>
            </div>
            <div class="changecount-right">
              <p>裙子非常仙气，很好看，跟实物一模一样，质量也很好，</p>
              <p>2018年05月09日  颜色分类：蓝色分类：蓝色【现货】 尺码：M</p>
              <span>有用(10)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ShopGoddsInfo',
    data(){
      return{
        changes:[true,false,false,false,false,false],
        goodstoke:[true,false],
        incolor:["红色","蓝色"],
        borders:[true,false,false,false],
          src:"../../static/images/goods.jpg",
        list:[
          "../../static/images/goods.jpg",
          "../../static/images/goods.jpg",
          "../../static/images/goods.jpg",
          "../../static/images/goods.jpg",
          "../../static/images/goods.jpg",
          "../../static/images/goods.jpg",
        ],
        positionx:0,
        positiony:0,
      }
    },
    computed: {
    },
    components: {
    },
    methods: {
      getlist:function (i) {
          var length=this.goodstoke.length;
          this.goodstoke=[];
          for(var j=0;j<length;j++){
              if(i!=j){
                this.goodstoke.push(false);
              }
              else{
                this.goodstoke.push(true);
              }
           }
      },
      chima:function (t) {
          alert(this.borders.length)
         for(var i=0;i<this.borders.length;i++){
           this.borders[i]=false;
         }
         this.borders[t]=true;
      },
      mousemoves:function (event) {

      },
    }
  }
</script>
<style>
  .changecount-right span{
    position: absolute;
    right: 30px;
    bottom: 20px;
    font-size: 10px;
  }
  .changecount-right p{
    margin: 0;
    padding: 0;
  }
  .changecount-right p:nth-child(1){
    text-align: left;
    font-size: 14px;
  }
  .changecount-right p:nth-child(2){
    text-align: left;
    color: #B0B0B0;
    font-size: 12px;
    margin-top: 5px;
  }
  .changecount-right{
    width:80%;
    height: 100%;
    float: left;
  }
  .changecount-left p{
    font-size: 12px;
    margin: 3px auto;
  }
  .chang-left-bg{
    width: 45px;
    height: 45px;
    background: blue;
    margin: 0 auto;
  }
  .changgecount{
    width: 100%;
    padding-bottom: 20px;
    overflow: hidden;
    padding-top: 20px;
    box-sizing: border-box;
    border-bottom: solid 1px #e5e5e5;
    position: relative;
  }
  .changecount-left{
    box-sizing: border-box;
    width:20%;
    height: 100%;
    float: left;
  }
  .changes ul li{
    list-style: none;
    float: left;
    font-size: 13px;
    margin-right: 20px;
    line-height: 45px;
  }
  .changes ul{
    margin: 0;
    padding: 0;
    margin-left: 20px;
  }
  .changes{
    width: 100%;
    height: 45px;
    border:solid 1px #e5e5e5;
    box-sizing: border-box;
    margin-top: 10px;
  }
  .yinxiang-right ul{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    padding-top:28px;
    width: 490px;
    display: block;
    height: 100%;
  }
  .yinxiang-right ul li:hover{
     background: white;
     color: #ff6000;
  }
  .yinxiang-right ul li{
    list-style: none;
    height: 23px;
    line-height: 23px;
    padding: 0 10px 0 10px;
    float: left;
    font-size: 13px;
    background: #f47602;
    border-radius:2px;
    color: white;
    border: solid #ff6000 1px;
    margin-left: 5px;
  }
  .yinxiang-right{
    float: left;
    width: 565.6px;
    height: 100%;
  }
  .yinxiang-left{
    width: 130px;
    float: left;
    line-height: 80px;
    text-align: right;
    padding-right: 7px;
    box-sizing: border-box;
    font-size: 13px;
  }
  .yinxiang{
    width: 100%;
    height: 100px;
    border:solid 1px #e5e5e5;
    box-sizing: border-box;
  }
  .getlistborder{
    background: white;
    border-bottom: 1px solid white;
  }
  .counts-new{
    overflow: hidden;
    width: 100%;
  }
  .counts-new .news{
    clear: both;
    width: 100%;
    height: 30px;
    font-size: 12px;
    line-height: 30px;
    border-bottom:1px solid #e5e5e5;
    margin: 0;
  }
  .sore p{
    font-size: 10px;
    line-height: 30px;
    margin: 0;
    padding: 0;
  }
  .sore{
    width: 100%;
    height: 30px;
    background: white;
  }
  .left-counts{
    background: rgb(238,238,238);
    overflow: hidden;
    padding-bottom: 10px;
  }
  .left-counts>p:nth-child(2){
    font-size: 12px;
    font-weight: bold;
    text-align: left;
    line-height: 20px;
    margin: 0;
    margin-left: 20px;
    margin-top: 5px;
  }
  .kefuzhong p:nth-child(3), .kefuzhong p:nth-child(4), .kefuzhong p:nth-child(6), .kefuzhong p:nth-child(7), .kefuzhong p:nth-child(9){
    font-size: 10px;
    margin: 0;
    text-align: left;
    color: #303030;
    margin-top: 1px;
    padding-left: 15px;
    box-sizing: border-box;
  }
  .kefuzhong p:nth-child(2), .kefuzhong p:nth-child(5), .kefuzhong p:nth-child(8){
    font-size: 13px;
    margin: 0;
    margin-top: 10px;
    font-weight: bold;
    text-align: left;
    color: #303030;
    padding-left: 5px;
    box-sizing: border-box;
  }

  .left-count a{
    float: left;
    font-size: 13px;
    margin-left: 10px;
    margin-top: 10px;
    line-height: 20px;
  }
  .left-count a:hover{
    color:#000;text-decoration:underline;
  }
  .searchbens{
    width: 45px;
    height: 23px;
    background: #ff6000;
    font-size: 12px;
    color: white;
    text-align: center;
    line-height: 23px;
    border-radius: 1px;
    margin-left: 48px;
  }
  .guajian .price input:nth-child(1){
    float: left;
  }
  .guajian .price input:nth-child(2){
    float: right;
  }
  .guajian .price input{
    width: 40%;
    height: 100%;
  }
  .guajian .price{
    float: right;
    width: 65%;
    margin-right: 10px;
    font-size: 12px;
  }
  .guajian>input{
    float: right;
    width: 63%;
    margin-right: 10px;
    font-size: 12px;
  }
  .guajian{
    width: 100%;
    height: 25px;
  }
  .left-count span{
    float: left;
    font-size: 12px;
    margin-left: 5px;
  }
  .left-count p:nth-child(1) , .left-counts>p:nth-child(1){
    width: 100%;
    height: 25px;
    font-size: 12px;
    text-align: left;
    display: block;
    color: white;
    background:#9b0000 ;
    line-height: 25px;
    margin: 0;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .left-count{
    width: 100%;
    padding-bottom: 10px;
    border:1px solid #e5e5e5;
    box-sizing: border-box;
    overflow: hidden;
    margin-top: 30px;
  }
  .left-header>input{
    width: 80%;
    height: 60%;
    border: none;
    margin-top:10px;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .left-header{
    width: 100%;
    height: 45px;
    border:1px solid #e5e5e5;
    background: #F4F4F4;
    box-sizing: border-box;
  }
  .right-middle ul{
    list-style: none;
    margin-left: 20px;
    padding: 0;
    overflow: hidden;
  }
  .right-middle ul li{
    float: left;
    width: 31%;
    font-size: 12px;
    text-align: left;
  }
  .right-middle{
    width: 100%;
    padding:10px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .right-middle li p{
    padding: 0;
    margin-top: 7px;
    margin-bottom: 0;
  }
  .right-header li{
    width: 120px;
    float: left;
    height: 100%;
    border-right: solid 1px #E8E8E8;
    font-size: 15px;
    line-height: 45px;
  }
  .right-header{
    box-sizing: border-box;
    list-style: none;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border: solid 1px #E8E8E8;
    border-top:none;
    margin: 0;
    padding: 0;
    background: #f6f6f6;
  }
  .right-up{
    width: 100%;
    height: 45px;
  }
  .pinglun-left{
    width: 17%;
    float: left;
  }
  .pinglun-right{
    border-right: solid 1px #E8E8E8;
    width: 70%;
    height: 500px;
    float: left;
  }
  .pinglun{
    width: 1000px;
    height: 800px;
    overflow: hidden;
    border: solid 1px #E8E8E8;
    margin: 0 auto;
    box-sizing: border-box;
    margin-top: 15px;
  }
  .baise p{
    color: #424242;
    font-size: 15px;
    line-height: 30px;
    padding: 0;
    margin: 0;
  }
  .baise{
    position: absolute;
    bottom: 0;
    width: 100%;
    background: rgba(255,255,255,0.7);
    height: 25px;

  }
  .likethis{
    width: 70%;
    overflow: hidden;
    list-style: none;
    margin: 0 auto;
    padding: 0;
  }
  .likethis li{
    width: 100%;
    height: 140px;
    position: relative;
    background: red;
    margin-top: 20px;
  }
  .right p:nth-child(1) span{
    width: 50px;
    color: #9b9b9b;
    height: 20px;
    font-size: 10px;
    text-align: left;
    background: white;
    display: block;
    position: absolute;
    top: 12px;
  }
  .right>p:nth-child(1){
    width: 70%;
    height: 20px;
    border-bottom:1px solid #E8E8E8;
    margin: 0 auto;
    position: relative;
  }
  .colorborder{
    border:1px solid #E8E8E8;
    box-sizing: border-box;
  }
  .right{
    width:11.1rem;
    height: 100%;
    float: right;
    border-left:1px solid #E8E8E8;
    box-sizing: border-box;
  }
  .addtobtn div:nth-child(1){
    background:#FFE4D0;
    color: #ff6000;
  }
  .addtobtn div:nth-child(2){
    background: #ff6000;
    color:#FFE4D0;
    margin-left: 20px;
  }
  .addtobtn div{
    float: left;
    padding: 0 30px 0 30px;
    height: 100%;
    line-height:40px ;
    border-radius: 2px;
  }
  .addtobtn{
    width: 100%;
    height: 40px;
    font-size: 14px;
    margin-top:30px
  }
  .numberbox span{
    box-sizing: border-box;
    font-size: 17px;
    text-align: center;
    line-height:35px;
  }
  .numberbox span:nth-child(1){
    width: 27%;
    height: 100%;
    background: #ededed;
    float: left;
    border: 1px solid #ccc;
  }
  .numberbox span:nth-child(2){
    width: 46%;
    height: 100%;
    background: white;
    float: left;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  .numberbox span:nth-child(3){
    width: 27%;
    height: 100%;
    background: #ededed;
    float: right;
    border: 1px solid #ccc;
  }
  .numberbox{
    width: 100px;
    height: 100%;
    float: left;
    margin-left: 32px;
  }
  .changenumber{
    width: 100%;
    height: 35px;
    line-height: 40px;
    margin-top: 20px;
    padding: 0 10px 0 10px;
  }
  .changenumber>span:nth-child(1){
    float: left;
    text-align: left;
  }
  .changenumber{
    font-size: 12px;
  }
  .fenlei{
    width:100%;
    height: 37px;
    font-size: 12px;
    padding: 0 10px 0 10px;
    line-height: 35px;
    margin-top: 10px;
  }
  .fenlei ul li:nth-child(1){
    margin-left: 9px;
  }
  .fenlei ul li{
    float: left;
    height: 35px;
    padding: 0 10px 0 10px;
    border: 1px solid #DCDCDC;
    margin-right: 8px;
  }
  .fenlei ul{
    float: left;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .fenlei span:nth-child(1){
    float: left;
  }
  .border{
    border: 2px solid #ff6000;
  }
  .chima span{
    float: left;
  }
  .chima ul li:hover{
    border: 1px solid #ff6000;
    box-sizing: border-box;
  }
  .chima ul li{
    float: left;
    padding: 0 7px 0 7px;
    font-weight: 200;
    line-height: 35px;
    height: 35px;
    border: 1px solid #DCDCDC;
    list-style: none;
    margin: 0 5px 0 5px;
    box-sizing: border-box;
  }
  .chima ul{
    margin-top: 10px;
    margin-left: 10px;
    box-sizing: border-box;
  }
  .chima{
    font-size: 12px;
    width: 100%;
    height: 45px;
    padding: 0px 10px 0px 10px;
    line-height: 40px;
    box-sizing: border-box;
  }
  .peisong{
    font-size: 13px;
    text-align: left;
    padding: 10px 10px 10px 10px;
    border-bottom: 1px solid #f1f3f4;
  }
  .ban{
    width: 48%;
    height: 100%;
    float: left;
  }
  .ban p:nth-child(1){
    padding-top: 10px;
    font-size: 18px;
  }
  .ban p:nth-child(2){
    padding-top: 4px;
    font-size: 10px;
  }

  .messagges{
    width: 150px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
  }
  .pricethis div:nth-child(2){
    text-align: left;
    position: relative;
  }
  .pricethis p{
    font-size: 12px;
    margin: 0 auto;
    text-align: left;
  }
  .pricethis div:nth-child(2) span:nth-child(3){
    width: 50px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    background: #ff6000;
    position: absolute;
    left: 123px;
    top: 12px;
    color: white;
    font-size: 10px;
  }
  .pricethis div:nth-child(2) span:nth-child(1){
    font-size: 13px;
    line-height: 20px;
    position: absolute;
    top: 10px;
  }
  .pricethis div:nth-child(2) span:nth-child(2){
    margin-left: 20px;color: #ff6000;font-size: 25px;
    position: absolute;
    top: 5px;
    left: 30px;
  }
  .pricethis{
    width: 100%;
    height: 70px;
    background: #FFF2E8;
    padding: 10px;
    box-sizing: border-box;
    margin-top: 10px;
  }
  .pricethies{
    width: 100%;
    height: 70px;
    background: #FFF9F5;
    padding: 10px;
    box-sizing: border-box;
    margin-top: 10px;
  }
  .listcount-middle-count .header{
    font-size: 16px;
    font-weight: 700;
    color: #3c3c3c;
    padding: 0;
    margin: 0;
  }
  .listcount-middle-count{
    width: 100%;
    height: 100%;
    /*background: yellow;*/
  }
  .listcount .middle{
    width: 450px;
    height: 100%;
    float: left;
    padding: 20px;
    box-sizing: border-box;
  }
  .listcount-left-down{
    width: 100%;
    height: 80px;
    background: darkred;
  }
  .zicount ul li img{
    width: 100%;
    height: 100%;
  }
  .zicount ul li{
    width:16.6%;
    height: 50%;
    float: left;
    padding: 5px 5px 5px 5px;
    box-sizing: border-box;
  }
  .zicount ul{
    width: 100%;
    height: 100%;
    margin:0;
    list-style: none;
    padding: 0;
    overflow: hidden;
  }
  .zicount{
    width: 100%;overflow: hidden;
    padding: 0 20px 0 20px;
    box-sizing: border-box;
  }
  .listcount-left-up-bg:hover   .listcount-left-up-bg-jingzi{
    display: block;
  }
  .listcount-left-up-bg-jingzi{
    display: none;
  }
  .listcount-left-up-bg-jingzi div{
    width: 100%;
    height: 100%;
  }
  .listcount-left-up-bg-jingzi{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 370px;
    z-index: 99;
    background-size: 100% 100%;
  }
  .listcount-left-up-bg{
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    position: relative;
  }
  .listcount-left-up{
    width: 100%;
    height:400px;
    padding: 20px;
    box-sizing: border-box;
  }
  .listcount{
    width: 1000px;
    height:580px;
    margin: 0 auto;
  }
  .left{
    width: 370px;
    height: 100%;
    float: left;
  }
</style>
