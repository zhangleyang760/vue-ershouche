<template>
    <div id="index">
        <div id="headdiv">
          <div id="logo"><img src="http://pyl6emnsf.bkt.clouddn.com/logo.jpg"/></div>
          <div id="search">
            <input placeholder="请输入关键字查找" v-model="this.searchTag.name" ref="name" />
            <a @click="inputName">搜车源</a>
          </div>
          <div id="post"><a @click="upload">免费发布</a></div>
        </div>
      <div id="main">
        <div id="filter">
          <div id="ad">
            <li v-for="ad in adList"><a :href="ad.href"><img :src="ad.img"/></a></li>
          </div>
          <dl>
            <dt>类型:</dt>
            <dd >
              <a  v-for="type in typeList" @click="selectType(type)" v-html="type"
                  :class="typeOn == type? 'selectA':'unSelect' "></a>
            </dd>
          </dl>
          <dl>
            <dt>品牌:</dt>
            <dd>
              <a  v-for="brand in brandList" @click="selectBrand(brand)" v-html="brand"
                  :class="brandOn == brand? 'selectA':'unSelect' "></a>
            </dd>
          </dl>
          <dl>
            <dt>价格:</dt>
            <dd>
              <a ref="price" v-for="price in priceList" @click="selectPrice(price.val,price.name)" v-html="price.name"
                 :class="priceOn == price.name? 'selectA':'unSelect' "></a>
            </dd>
          </dl>
          <dl>
            <dt>颜色:</dt>
            <dd>
              <a  v-for="color in colorList" @click="selectColor(color)" v-html="color"
                  :class="colorOn == color? 'selectA':'unSelect' "></a>
            </dd>
          </dl>
          <div id="reset"><el-button type="text" size="medium" @click="reset()">重置条件</el-button></div>
        </div>
        <div id="carList">
          <div v-for="car in carList" class="car">
            <img :src="car.pic" height="150px" width="200px"/>
            <div class="price"><span v-html="car.price"></span>万元</div>
            <div class="brandAndName">
              <span v-html="car.brand" class="brand"></span>
              <span v-html="car.cname" class="cname" @click="detail(car.cid)"></span>
            </div>
            <div class="detail">
              <span v-html="car.cyear"></span>年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span v-html="car.mileage"></span>万公里&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span v-html="car.ctype"></span>
            </div>
          </div>
          <el-pagination
            v-on:current-change="changePage"
            :current-page="this.param.currentPage"
            :page-size="this.param.size"
            layout="prev, pager, next"
            :total="this.total">
          </el-pagination>
        </div>
        <div id="clickList">
          <div class="click" v-for="car in clickList">
              <img :src="car.pic" height="" width="180px" @click="detail(car.cid)"/>
            <div v-text="car.cname" class="clickName" @click="detail(car.cid)"></div>
            <div  class="clickCount" @click="detail(car.cid)">点击量：<span v-text="car.click"></span></div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import ElInput from "../../node_modules/element-ui/packages/input/src/input";
    export default{
      components: {ElInput},
      data(){
            return {
                adList:[{href:'https://faw-vw.58.com/?PGTID=0d30001d-0000-1866-91c3-ddd7eea6be6f&ClickID=31',img:'https://pic7.58cdn.com.cn/brandpic/car/n_v2df13a22a7cc242f4917476e6b5b21a09_9ab6ed75cbd11946.png'},
                  {href:'https://jixinche.58.com/?PGTID=0d30001d-0000-1866-91c3-ddd7eea6be6f&ClickID=32',img:'https://pic7.58cdn.com.cn/brandpic/car/n_v2a855ae91a16244c4a94332512aaf8592_2679c595b1b763d6.png'},
                  {href: 'https://audi.58che.com/?PGTID=0d30001d-0000-1866-91c3-ddd7eea6be6f&ClickID=33',img:'https://pic7.58cdn.com.cn/brandpic/car/n_v2f06c49cc87084137b64d68da7f345873_3ebc8f66449a9118.png'},
                  {href: 'https://topic-m.58che.com/topic/3463topic.html?mz_ca=2125045&mz_sp=7PU3P&mz_sb=1',img:'https://pic7.58cdn.com.cn/brandpic/car/n_v2b4f7f5fb455d481ca63842ab3c5b7bc8_8a55ecc2d58b97b3.png'},
                   ],
                typeOn:'不限',
                brandOn:'不限',
                priceOn:'不限',
                colorOn:'不限',
                total:'',
                param:{
                  currentPage:1,
                  size:10,
                },
                typeList:[
                  '不限', '轿车', '越野车','MPV','跑车','面包车','皮卡','新能源','工程车','货车','客车','三轮机动车','老年代步车'
                ],
                brandList:['不限','丰田','吉普','长城','现代','本田','宝马','三菱','路虎',
                  '起亚','奥迪','奔驰','北汽制造','大众','日产','一汽','吉利','雪铁龙'],
                priceList:[{name:'不限',val:[]},{name:'六万元以内',val:[0,6]},{name:'6-8万元',val:[6,8]},
                  {name:'8-10万元',val:[8,10]},{name:'10-20万元',val:[10,20]},{name:'20-30万元',val:[20,30]},
                  {name:'30万元以上',val:[30,1000]}],
                colorList:['不限','黑','白','红','灰','银','蓝','黄','棕','绿','橙','紫','香槟'],
                searchTag: {
                  name:'',
                  type: '',
                  brand: '',
                  minPrice: '',
                  maxPrice:'',
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
                ],
                clickList:[]
            }
        },
        mounted(){
            this.findAll();
            this.getClickList();
        },
        methods: {

          findAll:function () {
              axios.post('/api/index',{
                name:this.searchTag.name,
                type:this.searchTag.type,
                brand:this.searchTag.brand,
                minPrice:this.searchTag.minPrice,
                maxPrice:this.searchTag.maxPrice,
                color:this.searchTag.color,
                currentPage:this.param.currentPage,
                size:this.param.size
              }).
              then(res=>{
                  this.carList=res.data.cars;
                  this.total=res.data.total;
              })
          },
          getClickList:function () {
            axios.get('/api/findByClick/'+this.param.size).then(res=>{
                this.clickList=res.data
            })
          },
          changePage:function (page) {
            this.param.currentPage=page;
            this.findAll();
          },
          selectType:function (val) {
              this.typeOn=val;
              if(val=='不限'){
                  val='';
              }
              this.searchTag.type=val;
              this.param.currentPage=1;
              this.findAll();

          },
          selectBrand:function (val) {
            this.brandOn=val;
            if(val=='不限'){
              val='';
            }
            this.searchTag.brand=val;
            this.param.currentPage=1;
            this.findAll();
          },
          selectColor:function (val) {
            this.colorOn=val;
            if(val=='不限'){
              val='';
            }
            this.searchTag.color=val;
            this.param.currentPage=1;
            this.findAll();
          },
          selectPrice:function (val,name) {
            this.priceOn=name;
            if(val=='不限'){
              val='';
            }
            this.searchTag.minPrice=val[0];
            this.searchTag.maxPrice=val[1];
            this.param.currentPage=1;
            this.findAll();
          },
          inputName:function () {
            this.searchTag.name=this.$refs.name.value;
            this.param.currentPage=1;
            this.findAll();
          },
          reset:function () {
              this.param.currentPage=1;
              this.typeOn='不限';
              this.brandOn='不限';
              this.priceOn='不限';
              this.colorOn='不限';
              this.searchTag.name='';
              this.searchTag.type='';
              this.searchTag.brand='';
              this.searchTag.minPrice='';
              this.searchTag.maxPrice='';
              this.searchTag.color='';
              this.findAll();
          },
          detail:function (id) {
            axios.get('/api/checkLogin').then(res => {
              if (res.data != null && res.data =="未登录"){
                this.$router.push({name: 'userlogin'});
              }else {
                  axios.get('/api/addClick/'+id).then(res=>{
                    this.$router.push({name:'detail',params:{cid:id}});
                  })

              }
            });

          },
          upload:function () {
            var url = '/api/checkLogin'
            axios.get(url).then(res => {

              if (res.data != null && res.data =="成功") {
                this.$router.push({name: 'upload'});
              }else if (res.data != null && res.data =="未登录"){
                this.$router.push({name: 'userlogin'});
              }
            })
          }

        }
    }
</script>
<style>
  a, abbr, acronym, address, applet, big, blockquote, body, caption, cite, code, dd, del, dfn, div, dl, dt, em, fieldset, font, form, h1, h2, h3, h4, h5, h6, iframe, ins, kbd, label, legend, li, object, ol, p, pre, q, s, samp, small, span, strike, strong, sub, sup, table, tbody, td, tfoot, th, thead, tr, tt, ul, var {
    font-family: microsoft yahei,arial,"\5B8B\4F53",sans-serif;
  }
  html{
    width: 100%;
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
    height: 200px;
    width: 1183px;
    margin-left: 150px;
    background-color: white;
  }
  #filter #ad{
     position: absolute;
     width: 200px;
     left: 1153px;
     height:202px;
     text-align: center;
    border-left: 1px solid #eee;
   }
  #filter #ad li{
    list-style: none;
    display: list-item;
    text-align: -webkit-match-parent;
  }
  #filter #ad li a{
    display: block;
    width: 123px;
    height: 44px;
    box-sizing: border-box;
    margin: 0 auto 9px;
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
  #filter dl dd .selectA {
    color: #ff6946;
  }
  #filter #reset{
    position: relative;
    left: 17px;
    top: -11px;
    width: 40px;
  }
  #carList{
    padding: 20px;
    width: 950px;
    margin-left: 150px;
    margin-top: 20px;
    background-color: white;
  }

  #carList .car{
    margin-right: 0;
    height: 150px;
    padding: 15px 0 15px 0;
    border-bottom: 1px solid #f2f2f2;
    width: 950px;
    position: relative;
    left: 10px;
  }
  #carList .car:hover{
    background-color:#FCFCFC ;
  }
  .car .brandAndName{
    position: absolute;
    left: 23%;
    top: 17px;
  }
  .car .cname{
    cursor: pointer;
    font-weight: 400;
    color: #494949;
    font-size: 18px;
    line-height: 25px;
  }
  .car .brand{
    cursor: pointer;
    color: rgb(255, 0, 0);
    font-size: 20px;
    font-weight: 500;
  }
  .car .price{
    left: 74%;
    top: 65px;
    height: 30px;
    width: 80px;
    font-size: 22px;
    color: #fc4e28;
    font-weight: 700;
    position: absolute;
  }
  .car .detail{
    left: 25%;
    top: 52px;
    height: 56px;
    width: 37%;
    display: inline-block;
    margin-right: 18px;
    color: #787878;
    line-height: 56px;
    position: absolute;
  }
  .car img{
    position: absolute;
    cursor: pointer;
  }
  #clickList{
    position: absolute;
    left: 1153px;
    top: 417px;
    padding: 20px 10px 50px 10px;
    width: 180px;
    background-color: white;
  }
  #clickList .click{
    height: 150px;
    padding: 15px 0 15px 0;
    border-bottom: 1px solid #f2f2f2;
  }
  #clickList .click img{
    cursor: pointer;
  }
  #clickList .click .clickName{
    cursor: pointer;
    font-weight: 400;
    font-size: 15px;
    overflow: hidden;
    height: 21px;
    width: 180px;

  }
  #clickList .click .clickCount{
    text-align: center;
    font-size: 13px;
    font-weight: 600;
    font-family: "Adobe 黑体 Std R";
    color: #fc4e28;
  }

</style>
