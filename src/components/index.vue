<template>
    <div>
        <div id="headdiv">
          <div id="logo"><img src="http://pyl6emnsf.bkt.clouddn.com/logo.jpg"/></div>
          <div id="search"><input/><a href="">搜车源</a></div>
          <div id="post"><a href="">免费发布</a></div>
        </div>
      <div id="main">
        <div id="searchTag">

        </div>

      </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default{
        data(){
            return {}
        },
        mounted(){

        },
        methods: {}
    }
</script>
<style>
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
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    background: #F0F0F0;
  }
  #searchTag{
    height: 236px;
    width: 1183px;
    margin-left: 150px;
    background-color: white;
  }


</style>
