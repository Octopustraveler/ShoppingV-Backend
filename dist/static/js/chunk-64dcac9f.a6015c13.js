(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64dcac9f"],{"21e1":function(t,a,e){},2700:function(t,a,e){},"330c":function(t,a,e){"use strict";e("a432")},3555:function(t,a,e){"use strict";e("9c75")},9406:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Card"),e("Sale")],1)},i=[],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{span:6}},[e("el-card",[e("Detail",{attrs:{title:"总销售额",count:"￥ 126566"}},[e("template",{slot:"charts"},[e("span",[t._v("周同比 56.69% "),e("i",{staticClass:"el-icon-caret-top"})]),e("span",[t._v("同日比 19.96% "),e("i",{staticClass:"el-icon-caret-bottom"})])]),e("template",{slot:"footer"},[e("span",[t._v("日销售额 ￥ 12345")])])],2)],1)],1),e("el-col",{attrs:{span:6}},[e("el-card",[e("Detail",{attrs:{title:"访问量",count:"12345"}},[e("template",{slot:"charts"},[e("lineCharts")],1),e("template",{slot:"footer"},[e("span",[t._v("日访问量: 5555")])])],2)],1)],1),e("el-col",{attrs:{span:6}},[e("el-card",[e("Detail",{attrs:{title:"支付笔数",count:"54321"}},[e("template",{slot:"charts"},[e("barCharts")],1),e("template",{slot:"footer"},[e("span",[t._v("转换率66%")])])],2)],1)],1),e("el-col",{attrs:{span:6}},[e("el-card",[e("Detail",{attrs:{title:"运营活动效果",count:"78%"}},[e("template",{slot:"charts"},[e("progressCharts")],1),e("template",{slot:"footer"},[e("span",[t._v("周同比 56.69%"),e("i",{staticClass:"el-icon-caret-top"})]),e("span",[t._v("同日比 19.96%"),e("i",{staticClass:"el-icon-caret-bottom"})])])],2)],1)],1)],1)],1)},n=[],l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"card-header"},[t._v(" "+t._s(t.title)+" "),e("i",{staticClass:"el-icon-info"})]),e("div",{staticClass:"card-content"},[t._v(t._s(t.count))]),e("div",{staticClass:"card-charts"},[t._t("charts")],2),e("div",{staticClass:"card-footer"},[t._t("footer")],2)])},c=[],o={name:"Detail",props:["title","count"]},p=o,u=(e("330c"),e("2877")),d=Object(u["a"])(p,l,c,!1,null,"7b809ed6",null),h=d.exports,f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"charts",staticClass:"charts"})},v=[],m=e("313e"),_={name:"lineCharts",mounted:function(){var t=m["a"](this.$refs.charts);t.setOption({xAxis:{axisLine:{show:!1},type:"category"},yAxis:{axisLine:{show:!1}},series:[{type:"line",data:[8,15,33,12,55,11,27,15,40],itemStyle:{opacity:0},smooth:!0,lineStyle:{color:"purple"},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#c775f9"},{offset:1,color:"#fff"}],global:!1}}}],grid:{left:0,top:0,right:0,bottom:0}})}},b=_,y=(e("bfe7"),Object(u["a"])(b,f,v,!1,null,"e76c8fbc",null)),x=y.exports,C=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"charts",staticClass:"charts"})},g=[],Y={name:"barCharts",mounted:function(){var t=m["a"](this.$refs.charts);t.setOption({xAxis:{axisLine:{show:!1},type:"category"},yAxis:{axisLine:{show:!1}},series:[{type:"bar",data:[8,15,33,12,55,11,27,15,40]}],tooltip:{},grid:{left:0,top:0,right:0,bottom:0}})}},D=Y,M=(e("3555"),Object(u["a"])(D,C,g,!1,null,"4647a27a",null)),w=M.exports,O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"charts",staticClass:"charts"})},k=[],$={name:"progressCharts",mounted:function(){var t=m["a"](this.$refs.charts);t.setOption({xAxis:[{axisLine:{show:!1},min:0,max:100}],yAxis:[{type:"category",axisLine:{show:!1}}],series:[{type:"bar",data:[78],barWidth:10,color:"yellowgreen",showBackground:!0,backgoundStyle:{color:"#eee"},label:{show:!0,formatter:"|",position:"right"}}],grid:{left:0,top:0,right:0,bottom:0}})}},S=$,A=(e("a86e"),Object(u["a"])(S,O,k,!1,null,"34e3a514",null)),L=A.exports,j={name:"Card",components:{Detail:h,lineCharts:x,barCharts:w,progressCharts:L}},E=j,N=(e("e22a"),Object(u["a"])(E,r,n,!1,null,"41ab5493",null)),J=N.exports,W=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-card",{staticClass:"box-card",staticStyle:{margin:"10px 0"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("el-tabs",{staticClass:"tab",model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"销售额",name:"sale"}}),e("el-tab-pane",{attrs:{label:"访问量",name:"visit"}})],1),e("div",{staticClass:"right"},[e("span",{on:{click:t.setDay}},[t._v("本日")]),e("span",{on:{click:t.setWeek}},[t._v("本周")]),e("span",{on:{click:t.setMonth}},[t._v("本月")]),e("span",{on:{click:t.setYear}},[t._v("本年")]),e("el-date-picker",{staticClass:"date",attrs:{type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期",size:"small","value-format":"yyyy-MM-dd"},model:{value:t.date,callback:function(a){t.date=a},expression:"date"}})],1)],1),e("div",[e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{span:18}},[e("div",{ref:"charts",staticClass:"charts"})]),e("el-col",{staticClass:"right",attrs:{span:6}},[e("h3",[t._v("门店"+t._s(t.title)+"排名")]),e("ul",[e("li",[e("span",{staticClass:"rindex"},[t._v("1")]),e("span",[t._v("肯德基")]),e("span",{staticClass:"rvalue"},[t._v("123456")])]),e("li",[e("span",{staticClass:"rindex"},[t._v("2")]),e("span",[t._v("麦当劳")]),e("span",{staticClass:"rvalue"},[t._v("123456")])]),e("li",[e("span",{staticClass:"rindex"},[t._v("3")]),e("span",[t._v("必胜客")]),e("span",{staticClass:"rvalue"},[t._v("123456")])]),e("li",[e("span",[t._v("4")]),e("span",[t._v("赛百味")]),e("span",{staticClass:"rvalue"},[t._v("123456")])]),e("li",[e("span",[t._v("5")]),e("span",[t._v("海底捞")]),e("span",{staticClass:"rvalue"},[t._v("123456")])]),e("li",[e("span",[t._v("6")]),e("span",[t._v("清真")]),e("span",{staticClass:"rvalue"},[t._v("123456")])]),e("li",[e("span",[t._v("7")]),e("span",[t._v("沙县大酒店")]),e("span",{staticClass:"rvalue"},[t._v("123456")])])])])],1)],1)])],1)},z=[],B=e("5a0c"),F=e.n(B),P={name:"Sale",data:function(){return{activeName:"sale",mycharts:null,date:[]}},methods:{setDay:function(){var t=F()().format("YYYY-MM-DD");this.date=[t,t]},setWeek:function(){var t=F()().day(1).format("YYYY-MM-DD"),a=F()().day(7).format("YYYY-MM-DD");this.date=[t,a]},setMonth:function(){var t=F()().startOf("month").format("YYYY-MM-DD"),a=F()().endOf("month").format("YYYY-MM-DD");this.date=[t,a]},setYear:function(){var t=F()().startOf("year").format("YYYY-MM-DD"),a=F()().endOf("year").format("YYYY-MM-DD");this.date=[t,a]}},computed:{title:function(){return"sale"==this.activeName?"销售额":"访问量"}},mounted:function(){this.mycharts=m["a"](this.$refs.charts),this.mycharts.setOption({title:{text:this.title},tooltio:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Jan","Feb","Mar","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisTick:{alignWidthLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"",type:"bar",barWidth:"45%",data:[33,72,200,334,390,330,220,110,98,167,123,45]}]})},watch:{title:function(){this.mycharts.setOption({title:{text:this.title}})}}},T=P,q=(e("e9c4"),Object(u["a"])(T,W,z,!1,null,"31049a24",null)),G=q.exports,H={name:"dashboard",components:{Card:J,Sale:G}},I=H,K=Object(u["a"])(I,s,i,!1,null,"b249a706",null);a["default"]=K.exports},"9c75":function(t,a,e){},a3bc:function(t,a,e){},a432:function(t,a,e){},a86e:function(t,a,e){"use strict";e("21e1")},bfe7:function(t,a,e){"use strict";e("a3bc")},d65b:function(t,a,e){},e22a:function(t,a,e){"use strict";e("2700")},e9c4:function(t,a,e){"use strict";e("d65b")}}]);