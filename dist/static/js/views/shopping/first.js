webpackJsonp([6],{102:function(t,a,c){c(284);var e=c(1)(c(205),c(354),null,null);t.exports=e.exports},169:function(t,a,c){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=c(0),s=c(102),n=c.n(s);new e.default({render:function(t){return t(n.a)}}).$mount("#app")},205:function(t,a,c){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=c(2),s=c(21),n=c.n(s),i=c(4),r=c.n(i),o=c(8),l=c.n(o),u=c(327);c.n(u);a.default={data:function(){return{cars:[],checked:!1,carList:0,carCheck:0,carPrice:0,carNum:0,rule:0,cutTime:"-999",shopItem:[]}},components:{CarHead:n.a,McFoot:r.a,countDown:l.a},beforeCreate:function(){},beforeMount:function(){},mounted:function(){var t=this;e.a.M.store.get("login")||this.$alert("请先登录账号","提示",{confirmButtonText:"确定",callback:function(t){window.location.href="../home/index.html"}}),e.a.M.store.get("userInfo")&&(this.userId=e.a.M.store.get("userInfo").ipPk),this.axios.get(e.a.C.url_mc+"/mall/bss/cart/cartList?t="+Date.now(),{params:{ipPk:this.userId}}).then(function(a){var c=[];a.data.data.forEach(function(t,a){c.push({isCheck:!1,id:t.prodPk,aPic:t.imgUrl,title:t.prodNm,price:t.membAmt,price2:t.markAmt,num1:t.qty,stock:t.stock,cartPk:t.cartPk})}),t.cars=c,t.carList=t.cars.length,t.cutTime=String(a.data.data[0].effectiveTime/1e3)}).catch(function(t){console.log(t)}),this.axios.get(e.a.C.url_mc+"/mall/bss/ip/asset",{params:{ipPk:this.userId}}).then(function(a){console.log(a.data.data.rule),t.rule=a.data.data.rule}).catch(function(t){console.log(t)}),this.axios.get(e.a.C.url_mc+"/mall/bss/prod/prodBHList",{params:{ipPk:this.userId,count:5}}).then(function(a){t.shopItem=a.data.data.items}).catch(function(t){console.log(t)})},watch:{checked:function(t,a){1==t?(this.carList=this.cars.length,this.carCheck=this.cars.length,this.cars.forEach(function(t,a){t.isCheck=!0})):(this.carCheck=0,this.carPrice=0,this.cars.forEach(function(t,a){t.isCheck=!1}))},carPrice:function(t){this.carNum=parseInt(t)*this.rule,this.carNum=Math.floor(parseInt(t)/10)},cars:{handler:function(t){var a=this;this.carPrice=0,this.carCheck=0,t.forEach(function(t,c){t.isCheck&&(a.carPrice+=t.num1*t.price,a.carCheck+=1)})},deep:!0}},methods:{del:function(t){var a=this;this.axios.get(e.a.C.url_mc+"/mall/bss/cart/del",{params:{ipPk:this.userId,prodPk:t.id}}).then(function(c){a.cars.splice(a.cars.indexOf(t),1);var e=0,s=0;a.carList.map(function(t){e=this.carList.length,s+=t.price*t.num1,this.carPrice=s,this.carList=e}.bind(a)),a.carList.length||(console.log("清空了"),a.cutTime="0")}).catch(function(t){console.log(t)})},callback:function(){console.log("结束1")},changeNum:function(t){var a=this,s=t.num1;setTimeout(function(){var n=this,i=t.num1,r=c(7),o=a.$loading({lock:!0,text:"修改数量中，请稍等",spinner:"el-icon-loading",background:"rgba(0,0,0,0.7)"});a.axios.post(e.a.C.url_mc+"/mall/bss/cart/edit",r.stringify({cartPk:t.cartPk,num:i-s})).then(function(t){console.log(t.data),200==t.data.status&&(o.close(),a.$alert("修改成功","提示",{confirmButtonText:"确定",callback:function(t){}})),400==t.data.status&&a.$alert(t.data.msg,"提示",{confirmButtonText:"确定",callback:function(t){}}),301==t.data.status&&(o.close(),a.$alert(t.data.msg,"提示",{confirmButtonText:"确定",callback:function(t){a.axios.get(e.a.C.url_mc+"/mall/bss/cart/cartList?t="+Date.now(),{params:{ipPk:a.userId}}).then(function(t){console.log(t.data.data);var c=[];t.data.data.forEach(function(t,a){c.push({isCheck:!1,id:t.prodPk,aPic:t.imgUrl,title:t.prodNm,price:t.membAmt,num1:t.qty,stock:t.stock,cartPk:t.cartPk})}),a.cars=c,a.carList=n.cars.length}).catch(function(t){console.log(t)})}}))}).catch(function(t){console.log(t)})})},go:function(){var t=this,a="";this.cars.forEach(function(t){t.isCheck&&(a+=t.id+",")}),console.log(a);var s=c(7);this.axios.post(e.a.C.url_mc+"/mall/bss/ordReqt/add",s.stringify({ipPk:this.userId,pks:a})).then(function(a){console.log(a.data),200==a.data.status&&(console.log(a.data),e.a.M.store.set("orderInfo",{id:a.data.data.ordReqtPk,time:a.data.data.paySurplusTm}),window.location.href="second.html"),400==a.data.status&&t.$alert(a.data.msg,"提示",{confirmButtonText:"确定"})}).catch(function(t){console.log(t)})}}}},284:function(t,a){},326:function(t,a,c){t.exports=c.p+"static/img/first.png"},327:function(t,a,c){t.exports=c.p+"static/img/shop.png"},354:function(t,a,c){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("CarHead",{attrs:{cutTime:t.cutTime}},[e("div",{staticStyle:{float:"right"},slot:"u-search"},[e("img",{attrs:{src:c(326),alt:""}})])]),t._v(" "),e("div",{staticClass:"g-car"},[e("div",{staticClass:"g-content"},[e("h2",[t._v("我的购物车 "),e("ins",[t._v("剩余时间 :"),e("count-down",{attrs:{endTime:t.cutTime,callback:t.callback,endText:"0S"}})],1)]),t._v(" "),e("div",{staticClass:"m-car"},[e("h3",[t._v("配送说明")]),t._v(" "),e("table",[e("tr",[e("th",[e("el-checkbox",{model:{value:t.checked,callback:function(a){t.checked=a},expression:"checked"}},[t._v("全选")])],1),e("th",[t._v("商品名称")]),e("th",[t._v("会员价")]),e("th",[t._v("市场价")]),e("th",[t._v("数量")]),e("th",[t._v("小计")]),e("th",[t._v("操作")])]),t._v(" "),t._l(t.cars,function(a,c){return e("tr",[e("td",[e("el-checkbox",{model:{value:a.isCheck,callback:function(t){a.isCheck=t},expression:"item.isCheck"}})],1),t._v(" "),e("td",[e("img",{attrs:{src:a.aPic,alt:""}}),e("em",[t._v(t._s(a.title))])]),t._v(" "),e("td",[e("span",[t._v(t._s(t._f("currency")(a.price)))])]),t._v(" "),e("td",[e("span",[t._v(t._s(t._f("currency")(a.price2)))])]),t._v(" "),e("td",[e("el-input-number",{attrs:{min:1},on:{change:function(c){t.changeNum(a)}},model:{value:a.num1,callback:function(t){a.num1=t},expression:"item.num1"}})],1),t._v(" "),e("td",[e("span",[t._v(t._s(t._f("currency")(a.price*a.num1)))])]),t._v(" "),e("td",[e("i",{staticClass:"el-icon-close",on:{click:function(c){t.del(a)}}})])])})],2)]),t._v(" "),e("div",{staticClass:"m-all"},[e("div",{staticClass:"m-left"},[e("a",{attrs:{href:"../home/index.html"}},[t._v("继续购物")]),e("i",[t._v("|")]),t._v(" "),e("p",[t._v("共"),e("em",[t._v(t._s(t.carList))]),t._v("件商品，已选择"),e("em",[t._v(t._s(t.carCheck))]),t._v("件 ")])]),t._v(" "),e("div",{staticClass:"m-right"},[e("p",[t._v("合计（不含运费）： "),e("strong",[t._v(t._s(t._f("currency")(t.carPrice)))]),t._v("元 "),e("span",[t._v("积分："+t._s(t.carNum)+"分")]),e("a",{attrs:{href:"javascript:;"},on:{click:t.go}},[t._v("去结算")])])])]),t._v(" "),e("div",{staticClass:"g-look"},[t._m(0),t._v(" "),e("ul",{staticClass:"m-shop clearfix"},t._l(t.shopItem,function(a,c){return e("li",[e("a",{attrs:{href:"../home/detail.html?id="+a.prodPk}},[e("img",{attrs:{src:a.prodImg,alt:""}})]),t._v(" "),e("p",[t._v(t._s(a.prodNm))]),t._v(" "),e("p",[t._v("库存:"+t._s(a.stock))]),t._v(" "),e("p",[t._v("会员价："),e("em",[t._v(t._s(t._f("currency")(a.membAmt)))])]),t._v(" "),e("p",[t._v("市场价："+t._s(t._f("currency")(a.markAmt)))])])}))])])]),t._v(" "),e("McFoot")],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("h2",[c("span",[t._v("最近预览的商品")])])}]}}},[169]);