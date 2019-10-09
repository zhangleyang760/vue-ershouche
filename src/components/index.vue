<template>
    <div>
        <div id="headdiv">
          <div id="logo"><img src="http://pyl6emnsf.bkt.clouddn.com/logo.jpg"/></div>
          <div id="search"><input/><a href="">搜车源</a></div>
          <div id="post"><a href="">免费发布</a></div>
        </div>
      <div id="main">
        <div id="filter">
          <dl>
            <dt>类型:</dt>
            <dd>
              <a @click="getSearch('')">不限</a>
              <a @click="getSearch('轿车')">轿车</a>
              <a>越野车</a>
              <a>MPV</a>
              <a>跑车</a>
              <a>面包车</a>
              <a>皮卡</a>
              <a>新能源</a>
              <a>工程车</a>
              <a>货车</a>
              <a>客车</a>
              <a>三轮机动车</a>
              <a>老年代步车</a>
            </dd>
          </dl>
          <dl>
            <dt>品牌:</dt>
            <dd>
              <a>不限</a>
              <a>丰田</a>
              <a>吉普</a>
              <a>长城</a>
              <a>现代</a>
              <a>本田</a>
              <a>宝马</a>
              <a>三菱</a>
              <a>路虎</a>
              <a>起亚</a>
              <a>奥迪</a>
              <a>奔驰</a>
              <a>北汽制造</a>
              <a>大众</a>
              <a>日产</a>
              <a>一汽</a>
            </dd>
          </dl>
          <dl>
            <dt>价格:</dt>
            <dd>
              <a>不限</a>
              <a>六万元以内</a>
              <a>6-8万元</a>
              <a>8-10万元</a>
              <a>10-20万元</a>
              <a>20-30万元</a>
              <a>30万元以上</a>
            </dd>
          </dl>
          <dl>
            <dt>颜色:</dt>
            <dd>
              <a>全部</a>
              <a><em class="filter_color_icon" style="background-color: #29282c"></em>黑</a>
              <a>白</a>
              <a>红</a>
              <a>灰</a>
              <a>银</a>
              <a>蓝</a>
              <a>黄</a>
              <a>棕</a>
              <a>绿</a>
              <a>橙</a>
              <a>紫</a>
              <a>香槟</a>
            </dd>
          </dl>
        </div>
        <div id="carList">
          <div v-for="car in carList" class="car">
            <img :src="car.pic" height="150px" width="200px"/>
            <div class="price"><span v-html="car.price"></span>万元</div>
            <div class="brand"><span v-html="car.brand"></span></div>
            <div class="cname"><span v-html="car.cname"></span></div>
            <div class="detail">
              <span v-html="car.cyear"></span>年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span v-html="car.mileage"></span>万公里&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span v-html="car.ctype"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default{
        data(){
            return {
                searchTap: {
                  type: '',
                  brand: '',
                  price: '',
                  color: '',
                },
                carList:[
                  {
                      cname:'3系 2017款 320Li M运动型 ',
                      brand:'宝马',
                      price:12,
                      ctype:'越野车',
                      mileage:2,
                      cyear:2017,
                      pic:'',
                  },{
                    cname:'3系 2017款 320Li M运动型 ',
                    brand:'宝马',
                    price:12,
                    ctype:'越野车',
                    mileage:2,
                    cyear:2017,
                    pic:'',
                  },{
                    cname:'3系 2017款 320Li M运动型 ',
                    brand:'宝马',
                    price:12,
                    ctype:'越野车',
                    mileage:2,
                    cyear:2017,
                    pic:'',
                  },{
                    cname:'3系 2017款 320Li M运动型 ',
                    brand:'宝马',
                    price:12,
                    ctype:'越野车',
                    mileage:2.8,
                    cyear:2017,
                    pic:'',
                  }
                ]


            }
        },
        mounted(){

        },
        methods: {
          getSearch:function (search) {
              alert(search)

          }
        }
    }
</script>
<style>
  a, abbr, acronym, address, applet, big, blockquote, body, caption, cite, code, dd, del, dfn, div, dl, dt, em, fieldset, font, form, h1, h2, h3, h4, h5, h6, html, iframe, ins, kbd, label, legend, li, object, ol, p, pre, q, s, samp, small, span, strike, strong, sub, sup, table, tbody, td, tfoot, th, thead, tr, tt, ul, var {
    font-family: microsoft yahei,arial,"\5B8B\4F53",sans-serif;
  }
  a, abbr, acronym, address, applet, big, blockquote, body, caption, cite, code, dd, del, dfn, div, dl, dt, em, fieldset, font, form, h1, h2, h3, h4, h5, h6, html, iframe, ins, kbd, label, legend, li, object, ol, p, pre, q, s, samp, small, span, strike, strong, sub, sup, table, tbody, td, tfoot, th, thead, tr, tt, ul, var {
    border: 0;
    text-decoration: none;
    font-size: 100%;
    font-style: inherit;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
  }
  #headdiv{
  height: 104px;
}
  #logo{
  float: left;
  position: relative;
  width: 316px;
  height:110px;
  left: 150px;
}
  #logo img{
  position: relative;
  top: 30px;
  width: 316px;
  height:53px;
}
  #search input{
    background: url(//img.58cdn.com.cn/ui7/car/list/img/minico.png) no-repeat;
    float: left;
    width: 468px;
    height: 38px;
    line-height: 38px;
    border: 2px solid #ff552e;
    padding: 0;
    padding-left: 34px;
    background-position: 10px -105px;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    -webkit-appearance: textfield;
    background-color: white;
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
  }
  #search input:focus{
  outline: 0;
  outline-offset: -2px;
  }
  #search{
    position: relative;
    padding-top: 30px;
    left: 300px;
    float: left;

  }
  #search a{
  float: left;
  width: 80px;
  height: 42px;
  background: #ff552e;
  font-size: 16px;
  color: #fff;
  text-align: center;
  line-height: 42px;
  cursor: pointer;
}
  #post{
    position: relative;
    left: 332px;
    height: 100px;
    width: 104px;
    float: left;
    border: 0;
    font-size: 100%;
    font-style: inherit;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
  }
  #post a{
    margin-top: 30px;
    display: inline-block;
    width: 100px;
    height: 42px;
    line-height: 42px;
    background: #ffefe7;
    color: #ff552e;
    text-align: center;
    border: 0;
  }
  #main{
    clear: both;
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    background: #F0F0F0;
    height: auto;
  }
  #filter{
    padding-top: 20px;
    padding-left: 20px;
    height: 180px;
    width: 1183px;
    margin-left: 150px;
    background-color: white;
  }
  #filter dl {
    margin-bottom: 8px;
    height: 33.6px;
    list-style: none;
    display: block;
    line-height: 34px;
    padding-left: 20px;
  }
  #filter dl :after{
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  #filter dl dt {
    float: left;
    color: #9f9f9f;
  }
  #filter dl dd {
    float: left;
    width: 928px;
  }
  #filter dl dd a {
    color: #666;
    display: inline-block;
    padding: 0 6px;
    cursor: pointer;
  }
  #filter dl dd a:hover {
    color: #ff6946;
  }
  #carList{
    padding-top: 20px;
    padding-left: 20px;
    width: 1183px;
    margin-left: 150px;
    margin-top: 20px;
    background-color: white;
  }
  #carList .car{
    height: 150px;
    padding: 20px 0 20px 0;
    border-bottom: 1px solid #f2f2f2;
    width: 950px;
  }
  #carList .car:hover{
    background-color:#FCFCFC ;
  }
  .car .cname{
    cursor: pointer;
    font-weight: 400;
    color: #494949;
    font-size: 18px;
    line-height: 25px;
    position: relative;
    left: 265px;
    top: -275px;
  }
  .car .brand{
    cursor: pointer;
    color: rgb(255, 0, 0);
    font-size: 20px;
    font-weight: 500;
    position: relative;
    left: 220px;
    top: -250px;
  }
  .car .price{
    padding: 68px 0 0 78px;
    font-size: 22px;
    color: #fc4e28;
    font-weight: 700;
    position: relative;
    left: 620px;
    top: -160px;
  }
  .car .detail{
    display: inline-block;
    margin-right: 18px;
    color: #787878;
    line-height: 56px;
    position: relative;
    left: 240px;
    top: -270px;
  }
  .car .cyearAndMile span{

  }
  .car img{
    position: relative;
    left: auto;
    top: auto;
  }

</style>
