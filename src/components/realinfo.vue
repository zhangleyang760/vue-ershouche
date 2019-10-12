<template>
  <div>
    <div class="container w3layouts agileits">
    <h1>实名认证</h1><br>
    <el-form :inline="true" :model="user" class="demo-form-inline">
      <el-form-item label="真实姓名：">
        <el-input v-model="user.sname" placeholder="请输入您的真实姓名"></el-input>
      </el-form-item><br>
      <el-form-item label="身份证号：">
        <el-input v-model="user.idcard" placeholder="请输入您的身份证号"></el-input>
      </el-form-item><br>
      <el-form-item label="性别：">
        <el-input v-model="user.sex" placeholder="请输入您的性别：男或女"></el-input>
      </el-form-item><br>
      <el-select size="small" style="width: 100px"
                 v-model="user.provice"
                 placeholder="请选择省份"
                 v-on:change="getProv($event)">
        <el-option
          v-for="item in provs"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-select size="small" style="width: 100px"

                 v-model="user.city"
                 placeholder="请选择城市"
                 v-on:change="getCity($event)">
        <el-option
          v-for="item in citys"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-form-item label="手机号：">
        <el-input v-model="user.phone" placeholder="请输入手机号"></el-input>
      </el-form-item><br>
      <el-form-item>
        <el-button type="primary" @click="csubmit()">买家提交</el-button>
        <el-button type="primary" @click="ssubmit()">卖家提交</el-button>
      </el-form-item>
    </el-form>
    </div>
    <div class="footer w3layouts agileits">
      <p>Copyright &copy; More Templates</p>
    </div>
  </div>

</template>
<script>
  import axios from "axios"
  export default{
    name:'',
    data(){
      return{
        user:{
          sname:'',
          provice:'',
          city:'',
          phone:'',
          idcard:'',
          sex:'',
        },
        provs:[{label:"北京市",value:"北京市"},

          {label:"天津市",value:"天津市"},

          {label:"河北省",value:"河北省"},

          {label:"山西省",value:"山西省"},

          {label:"内蒙古自治区",value:"内蒙古自治区"},

          {label:"辽宁省",value:"辽宁省"},

          {label:"吉林省",value:"吉林省"},

          {label:"黑龙江省",value:"黑龙江省"},

          {label:"上海市",value:"上海市"},

          {label:"江苏省",value:"江苏省"},

          {label:"浙江省",value:"浙江省"},

          {label:"安徽省",value:"安徽省"},

          {label:"福建省",value:"福建省"},

          {label:"江西省",value:"江西省"},

          {label:"山东省",value:"山东省"},

          {label:"河南省",value:"河南省"},

          {label:"湖北省",value:"湖北省"},

          {label:"湖南省",value:"湖南省"},

          {label:"广东省",value:"广东省"},

          {label:"广西壮族自治区",value:"广西壮族自治区"},

          {label:"海南省",value:"海南省"},

          {label:"重庆市",value:"重庆市"},

          {label:"四川省",value:"四川省"},

          {label:"贵州省",value:"贵州省"},

          {label:"云南省",value:"云南省"},

          {label:"西藏自治区",value:"西藏自治区"},

          {label:"陕西省",value:"陕西省"},

          {label:"甘肃省",value:"甘肃省"},

          {label:"青海省",value:"青海省"},

          {label:"宁夏回族自治区",value:"宁夏回族自治区"},

          {label:"新疆维吾尔自治区",value:"新疆维吾尔自治区"},

          {label:"台湾省",value:"台湾省"},

          {label:"香港特别行政区",value:"香港特别行政区"},

          {label:"澳门特别行政区",value:"澳门特别行政区"}] ,

        citys: [],

      }
    },
    methods:{
      getProv: function (prov) {

        var tempCity=[];

        this.citys=[];

        this.user.city='';

        var allCity=[{

          prov: "北京市",

          label: "北京市"

        }, {

          prov: "天津市",

          label: "天津市"

        }, {

          prov: "河北省",

          label: "石家庄市"

        }, {

          prov: "河北省",

          label: "唐山市"

        }, {

          prov: "河北省",

          label: "秦皇岛市"

        }, {

          prov: "河北省",

          label: "邯郸市"

        }, {

          prov: "河北省",

          label: "邢台市"

        }, {

          prov: "河北省",

          label: "保定市"

        }, {

          prov: "河北省",

          label: "张家口市"

        }, {

          prov: "河北省",

          label: "承德市"

        }, {

          prov: "河北省",

          label: "沧州市"

        }, {

          prov: "河北省",

          label: "廊坊市"

        }, {

          prov: "河北省",

          label: "衡水市"

        }, {

          prov: "山西省",

          label: "太原市"

        }, {

          prov: "山西省",

          label: "大同市"

        }, {

          prov: "山西省",

          label: "阳泉市"

        }, {

          prov: "山西省",

          label: "长治市"

        }, {

          prov: "山西省",

          label: "晋城市"

        }, {

          prov: "山西省",

          label: "朔州市"

        }, {

          prov: "山西省",

          label: "晋中市"

        }, {

          prov: "山西省",

          label: "运城市"

        }, {

          prov: "山西省",

          label: "忻州市"

        }, {

          prov: "山西省",

          label: "临汾市"

        }, {

          prov: "山西省",

          label: "吕梁市"

        }, {

          prov: "内蒙古自治区",

          label: "呼和浩特市"

        }, {

          prov: "内蒙古自治区",

          label: "包头市"

        }, {

          prov: "内蒙古自治区",

          label: "乌海市"

        }, {

          prov: "内蒙古自治区",

          label: "赤峰市"

        }, {

          prov: "内蒙古自治区",

          label: "通辽市"

        }, {

          prov: "内蒙古自治区",

          label: "鄂尔多斯市"

        }, {

          prov: "内蒙古自治区",

          label: "呼伦贝尔市"

        }, {

          prov: "内蒙古自治区",

          label: "巴彦淖尔市"

        }, {

          prov: "内蒙古自治区",

          label: "乌兰察布市"

        }, {

          prov: "内蒙古自治区",

          label: "兴安盟"

        }, {

          prov: "内蒙古自治区",

          label: "锡林郭勒盟"

        }, {

          prov: "内蒙古自治区",

          label: "阿拉善盟"

        }, {

          prov: "辽宁省",

          label: "沈阳市"

        }, {

          prov: "辽宁省",

          label: "大连市"

        }, {

          prov: "辽宁省",

          label: "鞍山市"

        }, {

          prov: "辽宁省",

          label: "抚顺市"

        }, {

          prov: "辽宁省",

          label: "本溪市"

        }, {

          prov: "辽宁省",

          label: "丹东市"

        }, {

          prov: "辽宁省",

          label: "锦州市"

        }, {

          prov: "辽宁省",

          label: "营口市"

        }, {

          prov: "辽宁省",

          label: "阜新市"

        }, {

          prov: "辽宁省",

          label: "辽阳市"

        }, {

          prov: "辽宁省",

          label: "盘锦市"

        }, {

          prov: "辽宁省",

          label: "铁岭市"

        }, {

          prov: "辽宁省",

          label: "朝阳市"

        }, {

          prov: "辽宁省",

          label: "葫芦岛市"

        }, {

          prov: "吉林省",

          label: "长春市"

        }, {

          prov: "吉林省",

          label: "吉林市"

        }, {

          prov: "吉林省",

          label: "四平市"

        }, {

          prov: "吉林省",

          label: "辽源市"

        }, {

          prov: "吉林省",

          label: "通化市"

        }, {

          prov: "吉林省",

          label: "白山市"

        }, {

          prov: "吉林省",

          label: "松原市"

        }, {

          prov: "吉林省",

          label: "白城市"

        }, {

          prov: "吉林省",

          label: "延边朝鲜族自治州"

        }, {

          prov: "黑龙江省",

          label: "哈尔滨市"

        }, {

          prov: "黑龙江省",

          label: "齐齐哈尔市"

        }, {

          prov: "黑龙江省",

          label: "鸡西市"

        }, {

          prov: "黑龙江省",

          label: "鹤岗市"

        }, {

          prov: "黑龙江省",

          label: "双鸭山市"

        }, {

          prov: "黑龙江省",

          label: "大庆市"

        }, {

          prov: "黑龙江省",

          label: "伊春市"

        }, {

          prov: "黑龙江省",

          label: "佳木斯市"

        }, {

          prov: "黑龙江省",

          label: "七台河市"

        }, {

          prov: "黑龙江省",

          label: "牡丹江市"

        }, {

          prov: "黑龙江省",

          label: "黑河市"

        }, {

          prov: "黑龙江省",

          label: "绥化市"

        }, {

          prov: "黑龙江省",

          label: "大兴安岭地区"

        }, {

          prov: "上海市",

          label: "上海市"

        }, {

          prov: "江苏省",

          label: "南京市"

        }, {

          prov: "江苏省",

          label: "无锡市"

        }, {

          prov: "江苏省",

          label: "徐州市"

        }, {

          prov: "江苏省",

          label: "常州市"

        }, {

          prov: "江苏省",

          label: "苏州市"

        }, {

          prov: "江苏省",

          label: "南通市"

        }, {

          prov: "江苏省",

          label: "连云港市"

        }, {

          prov: "江苏省",

          label: "淮安市"

        }, {

          prov: "江苏省",

          label: "盐城市"

        }, {

          prov: "江苏省",

          label: "扬州市"

        }, {

          prov: "江苏省",

          label: "镇江市"

        }, {

          prov: "江苏省",

          label: "泰州市"

        }, {

          prov: "江苏省",

          label: "宿迁市"

        }, {

          prov: "浙江省",

          label: "杭州市"

        }, {

          prov: "浙江省",

          label: "宁波市"

        }, {

          prov: "浙江省",

          label: "温州市"

        }, {

          prov: "浙江省",

          label: "嘉兴市"

        }, {

          prov: "浙江省",

          label: "湖州市"

        }, {

          prov: "浙江省",

          label: "绍兴市"

        }, {

          prov: "浙江省",

          label: "金华市"

        }, {

          prov: "浙江省",

          label: "衢州市"

        }, {

          prov: "浙江省",

          label: "舟山市"

        }, {

          prov: "浙江省",

          label: "台州市"

        }, {

          prov: "浙江省",

          label: "丽水市"

        }, {

          prov: "安徽省",

          label: "合肥市"

        }, {

          prov: "安徽省",

          label: "芜湖市"

        }, {

          prov: "安徽省",

          label: "蚌埠市"

        }, {

          prov: "安徽省",

          label: "淮南市"

        }, {

          prov: "安徽省",

          label: "马鞍山市"

        }, {

          prov: "安徽省",

          label: "淮北市"

        }, {

          prov: "安徽省",

          label: "铜陵市"

        }, {

          prov: "安徽省",

          label: "安庆市"

        }, {

          prov: "安徽省",

          label: "黄山市"

        }, {

          prov: "安徽省",

          label: "滁州市"

        }, {

          prov: "安徽省",

          label: "阜阳市"

        }, {

          prov: "安徽省",

          label: "宿州市"

        }, {

          prov: "安徽省",

          label: "六安市"

        }, {

          prov: "安徽省",

          label: "亳州市"

        }, {

          prov: "安徽省",

          label: "池州市"

        }, {

          prov: "安徽省",

          label: "宣城市"

        }, {

          prov: "福建省",

          label: "福州市"

        }, {

          prov: "福建省",

          label: "厦门市"

        }, {

          prov: "福建省",

          label: "莆田市"

        }, {

          prov: "福建省",

          label: "三明市"

        }, {

          prov: "福建省",

          label: "泉州市"

        }, {

          prov: "福建省",

          label: "漳州市"

        }, {

          prov: "福建省",

          label: "南平市"

        }, {

          prov: "福建省",

          label: "龙岩市"

        }, {

          prov: "福建省",

          label: "宁德市"

        }, {

          prov: "江西省",

          label: "南昌市"

        }, {

          prov: "江西省",

          label: "景德镇市"

        }, {

          prov: "江西省",

          label: "萍乡市"

        }, {

          prov: "江西省",

          label: "九江市"

        }, {

          prov: "江西省",

          label: "新余市"

        }, {

          prov: "江西省",

          label: "鹰潭市"

        }, {

          prov: "江西省",

          label: "赣州市"

        }, {

          prov: "江西省",

          label: "吉安市"

        }, {

          prov: "江西省",

          label: "宜春市"

        }, {

          prov: "江西省",

          label: "抚州市"

        }, {

          prov: "江西省",

          label: "上饶市"

        }, {

          prov: "山东省",

          label: "济南市"

        }, {

          prov: "山东省",

          label: "青岛市"

        }, {

          prov: "山东省",

          label: "淄博市"

        }, {

          prov: "山东省",

          label: "枣庄市"

        }, {

          prov: "山东省",

          label: "东营市"

        }, {

          prov: "山东省",

          label: "烟台市"

        }, {

          prov: "山东省",

          label: "潍坊市"

        }, {

          prov: "山东省",

          label: "济宁市"

        }, {

          prov: "山东省",

          label: "泰安市"

        }, {

          prov: "山东省",

          label: "威海市"

        }, {

          prov: "山东省",

          label: "日照市"

        }, {

          prov: "山东省",

          label: "莱芜市"

        }, {

          prov: "山东省",

          label: "临沂市"

        }, {

          prov: "山东省",

          label: "德州市"

        }, {

          prov: "山东省",

          label: "聊城市"

        }, {

          prov: "山东省",

          label: "滨州市"

        }, {

          prov: "山东省",

          label: "菏泽市"

        }, {

          prov: "河南省",

          label: "郑州市"

        }, {

          prov: "河南省",

          label: "开封市"

        }, {

          prov: "河南省",

          label: "洛阳市"

        }, {

          prov: "河南省",

          label: "平顶山市"

        }, {

          prov: "河南省",

          label: "安阳市"

        }, {

          prov: "河南省",

          label: "鹤壁市"

        }, {

          prov: "河南省",

          label: "新乡市"

        }, {

          prov: "河南省",

          label: "焦作市"

        }, {

          prov: "河南省",

          label: "濮阳市"

        }, {

          prov: "河南省",

          label: "许昌市"

        }, {

          prov: "河南省",

          label: "漯河市"

        }, {

          prov: "河南省",

          label: "三门峡市"

        }, {

          prov: "河南省",

          label: "南阳市"

        }, {

          prov: "河南省",

          label: "商丘市"

        }, {

          prov: "河南省",

          label: "信阳市"

        }, {

          prov: "河南省",

          label: "周口市"

        }, {

          prov: "河南省",

          label: "驻马店市"

        }, {

          prov: "河南省",

          label: "省直辖县级行政区划"

        }, {

          prov: "湖北省",

          label: "武汉市"

        }, {

          prov: "湖北省",

          label: "黄石市"

        }, {

          prov: "湖北省",

          label: "十堰市"

        }, {

          prov: "湖北省",

          label: "宜昌市"

        }, {

          prov: "湖北省",

          label: "襄阳市"

        }, {

          prov: "湖北省",

          label: "鄂州市"

        }, {

          prov: "湖北省",

          label: "荆门市"

        }, {

          prov: "湖北省",

          label: "孝感市"

        }, {

          prov: "湖北省",

          label: "荆州市"

        }, {

          prov: "湖北省",

          label: "黄冈市"

        }, {

          prov: "湖北省",

          label: "咸宁市"

        }, {

          prov: "湖北省",

          label: "随州市"

        }, {

          prov: "湖北省",

          label: "恩施土家族苗族自治州"

        }, {

          prov: "湖北省",

          label: "省直辖县级行政区划"

        }, {

          prov: "湖北省",

          label: "仙桃市"

        }, {

          prov: "湖北省",

          label: "潜江市"

        }, {

          prov: "湖北省",

          label: "天门市"

        }, {

          prov: "湖北省",

          label: "神农架林区"

        }, {

          prov: "湖南省",

          label: "长沙市"

        }, {

          prov: "湖南省",

          label: "株洲市"

        }, {

          prov: "湖南省",

          label: "湘潭市"

        }, {

          prov: "湖南省",

          label: "衡阳市"

        }, {

          prov: "湖南省",

          label: "邵阳市"

        }, {

          prov: "湖南省",

          label: "岳阳市"

        }, {

          prov: "湖南省",

          label: "常德市"

        }, {

          prov: "湖南省",

          label: "张家界市"

        }, {

          prov: "湖南省",

          label: "益阳市"

        }, {

          prov: "湖南省",

          label: "郴州市"

        }, {

          prov: "湖南省",

          label: "永州市"

        }, {

          prov: "湖南省",

          label: "怀化市"

        }, {

          prov: "湖南省",

          label: "娄底市"

        }, {

          prov: "湖南省",

          label: "湘西土家族苗族自治州"

        }, {

          prov: "广东省",

          label: "广州市"

        }, {

          prov: "广东省",

          label: "韶关市"

        }, {

          prov: "广东省",

          label: "深圳市"

        }, {

          prov: "广东省",

          label: "珠海市"

        }, {

          prov: "广东省",

          label: "汕头市"

        }, {

          prov: "广东省",

          label: "佛山市"

        }, {

          prov: "广东省",

          label: "江门市"

        }, {

          prov: "广东省",

          label: "湛江市"

        }, {

          prov: "广东省",

          label: "茂名市"

        }, {

          prov: "广东省",

          label: "肇庆市"

        }, {

          prov: "广东省",

          label: "惠州市"

        }, {

          prov: "广东省",

          label: "梅州市"

        }, {

          prov: "广东省",

          label: "汕尾市"

        }, {

          prov: "广东省",

          label: "河源市"

        }, {

          prov: "广东省",

          label: "阳江市"

        }, {

          prov: "广东省",

          label: "清远市"

        }, {

          prov: "广东省",

          label: "东莞市"

        }, {

          prov: "广东省",

          label: "中山市"

        }, {

          prov: "广东省",

          label: "潮州市"

        }, {

          prov: "广东省",

          label: "揭阳市"

        }, {

          prov: "广东省",

          label: "云浮市"

        }, {

          prov: "广西壮族自治区",

          label: "南宁市"

        }, {

          prov: "广西壮族自治区",

          label: "柳州市"

        }, {

          prov: "广西壮族自治区",

          label: "桂林市"

        }, {

          prov: "广西壮族自治区",

          label: "梧州市"

        }, {

          prov: "广西壮族自治区",

          label: "北海市"

        }, {

          prov: "广西壮族自治区",

          label: "防城港市"

        }, {

          prov: "广西壮族自治区",

          label: "钦州市"

        }, {

          prov: "广西壮族自治区",

          label: "贵港市"

        }, {

          prov: "广西壮族自治区",

          label: "玉林市"

        }, {

          prov: "广西壮族自治区",

          label: "百色市"

        }, {

          prov: "广西壮族自治区",

          label: "贺州市"

        }, {

          prov: "广西壮族自治区",

          label: "河池市"

        }, {

          prov: "广西壮族自治区",

          label: "来宾市"

        }, {

          prov: "广西壮族自治区",

          label: "崇左市"

        }, {

          prov: "海南省",

          label: "海口市"

        }, {

          prov: "海南省",

          label: "三亚市"

        }, {

          prov: "海南省",

          label: "三沙市"

        }, {

          prov: "海南省",

          label: "省直辖县级行政区划"

        }, {

          prov: "海南省",

          label: "五指山市"

        }, {

          prov: "海南省",

          label: "琼海市"

        }, {

          prov: "海南省",

          label: "儋州市"

        }, {

          prov: "海南省",

          label: "文昌市"

        }, {

          prov: "海南省",

          label: "万宁市"

        }, {

          prov: "海南省",

          label: "东方市"

        }, {

          prov: "海南省",

          label: "定安县"

        }, {

          prov: "海南省",

          label: "屯昌县"

        }, {

          prov: "海南省",

          label: "澄迈县"

        }, {

          prov: "海南省",

          label: "临高县"

        }, {

          prov: "海南省",

          label: "白沙黎族自治县"

        }, {

          prov: "海南省",

          label: "昌江黎族自治县"

        }, {

          prov: "海南省",

          label: "乐东黎族自治县"

        }, {

          prov: "海南省",

          label: "陵水黎族自治县"

        }, {

          prov: "海南省",

          label: "保亭黎族苗族自治县"

        }, {

          prov: "海南省",

          label: "琼中黎族苗族自治县"

        }, {

          prov: "重庆市",

          label: "重庆市"

        }, {

          prov: "四川省",

          label: "成都市"

        }, {

          prov: "四川省",

          label: "自贡市"

        }, {

          prov: "四川省",

          label: "攀枝花市"

        }, {

          prov: "四川省",

          label: "泸州市"

        }, {

          prov: "四川省",

          label: "德阳市"

        }, {

          prov: "四川省",

          label: "绵阳市"

        }, {

          prov: "四川省",

          label: "广元市"

        }, {

          prov: "四川省",

          label: "遂宁市"

        }, {

          prov: "四川省",

          label: "内江市"

        }, {

          prov: "四川省",

          label: "乐山市"

        }, {

          prov: "四川省",

          label: "南充市"

        }, {

          prov: "四川省",

          label: "眉山市"

        }, {

          prov: "四川省",

          label: "宜宾市"

        }, {

          prov: "四川省",

          label: "广安市"

        }, {

          prov: "四川省",

          label: "达州市"

        }, {

          prov: "四川省",

          label: "雅安市"

        }, {

          prov: "四川省",

          label: "巴中市"

        }, {

          prov: "四川省",

          label: "资阳市"

        }, {

          prov: "四川省",

          label: "阿坝藏族羌族自治州"

        }, {

          prov: "四川省",

          label: "甘孜藏族自治州"

        }, {

          prov: "四川省",

          label: "凉山彝族自治州"

        }, {

          prov: "贵州省",

          label: "贵阳市"

        }, {

          prov: "贵州省",

          label: "六盘水市"

        }, {

          prov: "贵州省",

          label: "遵义市"

        }, {

          prov: "贵州省",

          label: "安顺市"

        }, {

          prov: "贵州省",

          label: "毕节市"

        }, {

          prov: "贵州省",

          label: "铜仁市"

        }, {

          prov: "贵州省",

          label: "黔西南布依族苗族自治州"

        }, {

          prov: "贵州省",

          label: "黔东南苗族侗族自治州"

        }, {

          prov: "贵州省",

          label: "黔南布依族苗族自治州"

        }, {

          prov: "云南省",

          label: "昆明市"

        }, {

          prov: "云南省",

          label: "曲靖市"

        }, {

          prov: "云南省",

          label: "玉溪市"

        }, {

          prov: "云南省",

          label: "保山市"

        }, {

          prov: "云南省",

          label: "昭通市"

        }, {

          prov: "云南省",

          label: "丽江市"

        }, {

          prov: "云南省",

          label: "普洱市"

        }, {

          prov: "云南省",

          label: "临沧市"

        }, {

          prov: "云南省",

          label: "楚雄彝族自治州"

        }, {

          prov: "云南省",

          label: "红河哈尼族彝族自治州"

        }, {

          prov: "云南省",

          label: "文山壮族苗族自治州"

        }, {

          prov: "云南省",

          label: "西双版纳傣族自治州"

        }, {

          prov: "云南省",

          label: "大理白族自治州"

        }, {

          prov: "云南省",

          label: "德宏傣族景颇族自治州"

        }, {

          prov: "云南省",

          label: "怒江傈僳族自治州"

        }, {

          prov: "云南省",

          label: "迪庆藏族自治州"

        }, {

          prov: "西藏自治区",

          label: "拉萨市"

        }, {

          prov: "西藏自治区",

          label: "昌都地区"

        }, {

          prov: "西藏自治区",

          label: "山南地区"

        }, {

          prov: "西藏自治区",

          label: "日喀则地区"

        }, {

          prov: "西藏自治区",

          label: "那曲地区"

        }, {

          prov: "西藏自治区",

          label: "阿里地区"

        }, {

          prov: "西藏自治区",

          label: "林芝地区"

        }, {

          prov: "陕西省",

          label: "西安市"

        }, {

          prov: "陕西省",

          label: "铜川市"

        }, {

          prov: "陕西省",

          label: "宝鸡市"

        }, {

          prov: "陕西省",

          label: "咸阳市"

        }, {

          prov: "陕西省",

          label: "渭南市"

        }, {

          prov: "陕西省",

          label: "延安市"

        }, {

          prov: "陕西省",

          label: "汉中市"

        }, {

          prov: "陕西省",

          label: "榆林市"

        }, {

          prov: "陕西省",

          label: "安康市"

        }, {

          prov: "陕西省",

          label: "商洛市"

        }, {

          prov: "甘肃省",

          label: "兰州市"

        }, {

          prov: "甘肃省",

          label: "嘉峪关市"

        }, {

          prov: "甘肃省",

          label: "金昌市"

        }, {

          prov: "甘肃省",

          label: "白银市"

        }, {

          prov: "甘肃省",

          label: "天水市"

        }, {

          prov: "甘肃省",

          label: "武威市"

        }, {

          prov: "甘肃省",

          label: "张掖市"

        }, {

          prov: "甘肃省",

          label: "平凉市"

        }, {

          prov: "甘肃省",

          label: "酒泉市"

        }, {

          prov: "甘肃省",

          label: "庆阳市"

        }, {

          prov: "甘肃省",

          label: "定西市"

        }, {

          prov: "甘肃省",

          label: "陇南市"

        }, {

          prov: "甘肃省",

          label: "临夏回族自治州"

        }, {

          prov: "甘肃省",

          label: "甘南藏族自治州"

        }, {

          prov: "青海省",

          label: "西宁市"

        }, {

          prov: "青海省",

          label: "海东市"

        }, {

          prov: "青海省",

          label: "海北藏族自治州"

        }, {

          prov: "青海省",

          label: "黄南藏族自治州"

        }, {

          prov: "青海省",

          label: "海南藏族自治州"

        }, {

          prov: "青海省",

          label: "果洛藏族自治州"

        }, {

          prov: "青海省",

          label: "玉树藏族自治州"

        }, {

          prov: "青海省",

          label: "海西蒙古族藏族自治州"

        }, {

          prov: "宁夏回族自治区",

          label: "银川市"

        }, {

          prov: "宁夏回族自治区",

          label: "石嘴山市"

        }, {

          prov: "宁夏回族自治区",

          label: "吴忠市"

        }, {

          prov: "宁夏回族自治区",

          label: "固原市"

        }, {

          prov: "宁夏回族自治区",

          label: "中卫市"

        }, {

          prov: "新疆维吾尔自治区",

          label: "乌鲁木齐市"

        }, {

          prov: "新疆维吾尔自治区",

          label: "克拉玛依市"

        }, {

          prov: "新疆维吾尔自治区",

          label: "吐鲁番地区"

        }, {

          prov: "新疆维吾尔自治区",

          label: "哈密地区"

        }, {

          prov: "新疆维吾尔自治区",

          label: "昌吉回族自治州"

        }, {

          prov: "新疆维吾尔自治区",

          label: "博尔塔拉蒙古自治州"

        }, {

          prov: "新疆维吾尔自治区",

          label: "巴音郭楞蒙古自治州"

        }, {

          prov: "新疆维吾尔自治区",

          label: "阿克苏地区"

        }, {

          prov: "新疆维吾尔自治区",

          label: "克孜勒苏柯尔克孜自治州"

        }, {

          prov: "新疆维吾尔自治区",

          label: "喀什地区"

        }, {

          prov: "新疆维吾尔自治区",

          label: "和田地区"

        }, {

          prov: "新疆维吾尔自治区",

          label: "伊犁哈萨克自治州"

        }, {

          prov: "新疆维吾尔自治区",

          label: "塔城地区"

        }, {

          prov: "新疆维吾尔自治区",

          label: "阿勒泰地区"

        }, {

          prov: "新疆维吾尔自治区",

          label: "自治区直辖县级行政区划"

        }, {

          prov: "新疆维吾尔自治区",

          label: "石河子市"

        }, {

          prov: "新疆维吾尔自治区",

          label: "阿拉尔市"

        }, {

          prov: "新疆维吾尔自治区",

          label: "图木舒克市"

        }, {

          prov: "新疆维吾尔自治区",

          label: "五家渠市"

        }, {

          prov: "台湾省",

          label: "台北市"

        }, {

          prov: "台湾省",

          label: "高雄市"

        }, {

          prov: "台湾省",

          label: "基隆市"

        }, {

          prov: "台湾省",

          label: "台中市"

        }, {

          prov: "台湾省",

          label: "台南市"

        }, {

          prov: "台湾省",

          label: "新竹市"

        }, {

          prov: "台湾省",

          label: "嘉义市"

        }, {

          prov: "台湾省",

          label: "省直辖"

        }, {

          prov: "香港特别行政区",

          label: "香港岛"

        }, {

          prov: "香港特别行政区",

          label: "九龙"

        }, {

          prov: "香港特别行政区",

          label: "新界"

        }, {

          prov: "澳门特别行政区",

          label: "澳门半岛"

        }, {

          prov: "澳门特别行政区",

          label: "澳门离岛"

        }, {

          prov: "澳门特别行政区",

          label: "无堂区划分区域"

        }];

        for (var val of allCity){
          if (prov == val.prov){
            console.log(val);
            tempCity.push({label: val.label, value: val.label})
          }
        }
        this.citys = tempCity;
      },
      getCity: function (city) {
        console.log(city);
        console.log(this.user.city)
      },
     ssubmit:function () {
        var url='/api/srealinfo'
        axios.post(url,this.user).then(res=>{
          // alert(res.data)

              alert(res.data)
            this.$router.push({name:'index'});

        })
      },
      csubmit:function () {
        var url='/api/crealinfo'
        axios.post(url,this.user).then(res=>{
          // alert(res.data)
            alert(res.data)
            this.$router.push({name:'index'});


        })
      }}

  }
</script>
<style scoped>

  #logo{

    position: relative;
    width: 316px;
    height:110px;
    left: 450px;
    background: #ffefe7;
  }
  html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,dl,dt,dd,ol,nav ul,nav li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}
  article, aside, details, figcaption, figure,footer, header, hgroup, menu, nav, section {display: block;}
  ol,ul{list-style:none;padding:0;margin:0;}
  blockquote,q{quotes:none;}
  blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}
  table{border-collapse:collapse;border-spacing:0;}
  a{text-decoration:none;}
  .txt-rt{text-align:right;}
  .txt-lt{text-align:left;}
  .txt-center{text-align:center;}
  .float-rt{float:right;}
  .float-lt{float:left;}
  .clear{clear:both;}
  .pos-relative{position:relative;}
  .pos-absolute{position:absolute;}
  .vertical-base{vertical-align:baseline;}
  .vertical-top{vertical-align:top;}
  .underline{	padding-bottom:3px;	border-bottom: 1px solid #eee;}
  nav.vertical ul li{display:block;}
  nav.horizontal ul li{display: inline-block;}
  img{max-width:100%;}

  /*-- Reset Code --*/



  /*-- Index-Page-Styling --*/

  body {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    background: url("http://pyl6emnsf.bkt.clouddn.com/background1.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
  }

  #bottom{
    margin-top: 80px;
    width: 360px;
  }
  body a {
    transition:0.5s all;
    -webkit-transition:0.5s all;
    -moz-transition:0.5s all;
    -o-transition:0.5s all;
    -ms-transition:0.5s all;
    text-decoration: none;
  }

  h1 {
    font-size: 45px;
    font-weight: 500;
    letter-spacing: 4px;
    margin: 60px 0;
    color: #FFFFFF;
  }

  .container {
    width: 50%;
    margin: 0 auto;
    padding: 40px;
    background-color: rgba(10, 10, 10, 0.77);
    border: 2px ridge rgba(238, 238, 238, 0.13);
    border-radius: 5px;
    -moz-box-shadow: 0 -5px 10px 1px rgba(16, 16, 16, 0.57);
    -webkit-box-shadow: 0 -5px 10px 1px rgba(16, 16, 16, 0.57);
    box-shadow: 0 -5px 10px 1px rgba(16, 16, 16, 0.57);
    border-bottom: none;
    border-bottom-left-radius: initial;
    border-bottom-right-radius: initial;
  }

  .login {
    width: 100%;
    float: left;
    text-align: left;
    padding-right: 40px;
  }

  ::-webkit-input-placeholder {
    color: #CCC;
  }

  :-moz-placeholder {
    color: #CCC;
  }

  ::-moz-placeholder {
    color: #CCC;
  }

  :-ms-input-placeholder {
    color: #CCC;
  }

  h2 {
    font-size: 35px;
    text-align: left;
    color: #FFF;
    font-weight: 100;
    margin-bottom: 20px;
  }

  ul.tick {
    float: left;
    list-style: none;
    display: inline-block;
    width: 100%;
    margin-bottom: 20px;
  }

  ul.tick li input[type="checkbox"] {
    display: none;
  }

  ul.tick li input[type="checkbox"]+label {
    position: relative;
    padding-left: 30px;
    border: #F0F8FF;
    display: inline-block;
    font-size: 13px;
    color: #EEE;
  }

  ul.tick li input[type="checkbox"]+label span:first-child {
    width: 17px;
    height: 17px;
    display: inline-block;
    border: 1px solid #EEE;
    position: absolute;
    top: -3px;
    left: 0;
    bottom: 4px;
  }

  ul.tick li input[type="checkbox"]:checked+label span:first-child:before {
    content: "";
    background: url("http://pyl6emnsf.bkt.clouddn.com/tick.png")no-repeat;
    position: absolute;
    left: 3px;
    top: 3px;
    font-size: 10px;
    width: 10px;
    height: 10px;
  }

  .social-icons {
    margin-top: 20px;
    text-align: center;
  }

  .social-icons p {
    color: #CCC;
    margin-bottom: 15px;
  }

  .social-icons ul li {
    float: left;
    width: 32.9%;
  }
  .copyrights{text-indent:-9999px;height:0;line-height:0;font-size:0;overflow:hidden;}
  li.twt {
    margin: 0 2px;
  }

  .social-icons ul li a {
    display:block;
  }

  .social-icons ul li a span {
    vertical-align: middle;
    color: #fff;
    font-size: 15px;
  }

  .social-icons ul li span.icons {
    /*background: url("") no-repeat center;*/
    width: 30px;
    height: 30px;
    display: inline-block;
  }

  .social-icons ul li.weixin span.icons {
    /*background: url("") no-repeat;*/
    background-size: 100%;
  }
  .social-icons ul li.qq span.icons {
    /*background: url("") no-repeat;*/
    background-size: 100%;
  }
  .social-icons ul li.weibo span.icons {
    /*--w3layouts--*/
    /*--agileits--*/
    /*background: url("") no-repeat;*/
    background-size: 100%;
  }

  .social-icons ul li a:hover span.icons {
    transform: rotatey(360deg);
    -webkit-transform: rotatey(360deg);
    -o-transform: rotatey(360deg);
    -moz-transform: rotatey(360deg);
    -ms-transform: rotatey(360deg);
    transition: .5s all;
  }

  input[type="text"], input[type="password"] {
    width: 93.4%;
    margin-bottom: 20px;
    padding: 10px;
    float: left;
    background-color: transparent;
    border: none;
    font-size: 15px;
    border-bottom: 1px solid rgba(238, 238, 238, 0.41);
    outline: none;
    color: #FFF;
  }

  .send-button {
    margin-bottom: 20px;
  }

  .send-button input[type="submit"] {
    width: 60%;
    padding: 10px 0;
    font-size: 16px;
    font-weight: 100;
    background-color: transparent;
    color: #CCC;
    border: 1px solid rgba(238, 238, 238, 0.41);
    border-width: thin;
    cursor: pointer;
    outline: none;
    transition:0.5s all;
    -webkit-transition:0.5s all;
    -moz-transition:0.5s all;
    -o-transition:0.5s all;
    -ms-transition:0.5s all;
    text-decoration: none;
  }

  /*--w3layouts--*/
  /*--agileits--*/
  .send-button input[type="submit"]:hover {
    background-color: #000;
    border: 1px solid #FFF;
    color: #FFF;
    transition:0.5s all;
    -webkit-transition:0.5s all;
    -moz-transition:0.5s all;
    -o-transition:0.5s all;
    -ms-transition:0.5s all;
    text-decoration: none;
  }

  .login a {
    color: #CCC;
  }

  .login a:hover {
    color: #FFF;
  }

  .register {
    width: 44%;
    float: left;
    border-left: 1px solid #DDD;
    padding-left: 40px;
    text-align: left;
  }

  .register p {
    color: #CCC;
    margin-bottom: 10px;
  }

  .register p a {
    color: #CCC;
  }

  .register p a:hover {
    color: #FFF;
  }

  .footer {
    text-align: center;
    margin: 100px 20px 20px;
  }
  .footer p {
    color: #CCC;
    line-height: 25px;
    /*--w3layouts--*/
    /*--agileits--*/
  }
  .footer a {
    color: #CCC;
    text-decoration: none;
  }
  .footer a:hover {
    color: #FFF;
  }

  /*-- Index-Page-Styling --*/









  /*--- Responsive Code ---*/



  @media screen and (max-width: 1920px) {
    h1 {
      margin: 100px 0;
    }
  }

  @media screen and (max-width: 1600px) {
    h1 {
      margin: 60px 0;
    }
  }

  @media screen and (max-width: 1440px) {
    .container {
      width: 53%;
    }
  }

  @media screen and (max-width: 1366px) {
    h1 {
      margin: 50px 0;
    }
    .container {
      width: 57%;
    }
    /*--w3layouts--*/
    /*--agileits--*/
  }

  @media screen and (max-width: 1280px) {
    .container {
      width: 60%;
    }
  }

  @media screen and (max-width: 1024px) {
    .container {
      width: 76%;
    }
  }

  @media screen and (max-width: 966px) {
    .container {
      width: 80%;
    }
    .footer {
      margin: 50px 20px 20px;
    }
  }

  @media screen and (max-width: 853px) {
    .login {
      padding-right: 36px;
    }
    .register {
      padding-left: 36px;
    }
    .social-icons ul li {
      width: 32.8%;
    }
    .register p {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 800px) {
    h1 {
      font-size: 43px;
    }
    .login {
      padding-right: 35px;
    }
    .register {
      padding-left: 34px;
    }
    .social-icons ul li span.icons {
      width: 28px;
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      width: 85%;
    }
    .register p {
      font-size: 13.8px;
    }
  }

  @media screen and (max-width: 736px) {
    h1 {
      font-size: 40px;
    }
    .container {
      width: 87%;
      padding: 35px;
    }
    .login {
      padding-right: 34px;
    }
    .register {
      padding-left: 33px;
    }
    .social-icons ul li a span {
      font-size: 14px;
    }
    .register p {
      font-size: 13.2px;
    }
  }

  @media screen and (max-width: 667px) {
    h1 {
      font-size: 35px;
      letter-spacing: 3px;
    }
    .container {
      width: 55%;
      padding: 50px;
    }
    .login {
      padding: 0;
      width: 100%;
      margin-bottom: 50px;
    }
    .register {
      padding: 40px 0 0 0;
      width: 100%;
      border: none;
      border-top: 1px solid #DDD;
    }
  }

  @media screen and (max-width: 603px) {
    h1 {
      letter-spacing: 2px;
    }
  }

  @media screen and (max-width: 568px) {
    h1 {
      letter-spacing: 1px;
      margin: 30px 0;
    }
    .container {
      width: 60%;
      padding: 40px;
    }
  }

  @media screen and (max-width: 533px) {
    h1 {
      font-size: 32px;
    }
  }

  @media screen and (max-width: 480px) {
    .container {
      width: 70%;
      padding: 35px;
    }
    .send-button input[type="submit"] {
      width: 50%;
      padding: 8px 0;
    }
  }

  @media screen and (max-width: 414px) {
    h1 {
      font-size: 30px;
    }
    .container {
      width: 75%;
      padding: 25px;
    }
    .login {
      margin-bottom: 30px;
    }
    h2 {
      font-size: 30px;
      margin-bottom: 15px;
    }
    .register {
      padding: 30px 0 0 0;
    }
    .footer p {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 384px) {
    h1 {
      letter-spacing: 0px;
    }
  }

  @media screen and (max-width: 375px) {
    .social-icons ul li span.icons {
      width: 27px;
    }
    .register p {
      font-size: 13px;
      line-height: 23px;
    }
  }

  @media screen and (max-width: 360px) {
    .container {
      width: 80%;
      padding: 20px;
    }
  }

  @media screen and (max-width: 320px) {
    .social-icons ul li {
      width: 32.7%;
    }
    .social-icons ul li span.icons {
      width: 25px;
    }
    .social-icons ul li a span {
      font-size: 12.4px;
    }
  }

</style>
