webpackJsonp([13],{101:function(t,e,a){a(266);var s=a(1)(a(199),a(329),null,null);t.exports=s.exports},166:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(0),n=a(101),i=a.n(n);new s.default({render:function(t){return t(i.a)}}).$mount("#app")},199:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(2),n=a(10),i=a.n(n),o=a(5),r=a.n(o);e.default={data:function(){return{radio:"最新活动",type:!0,total:0,pageNum:1,items:[]}},components:{McHead:i.a,McFoot:r.a},beforeCreate:function(){},beforeMount:function(){},mounted:function(){this.getTotal(this.type),this.getList(1,this.type)},methods:{tab:function(){"往期活动"==this.radio?(this.getList(1,!1),this.total=3,this.pageNum=1,this.type=!1):(this.getList(1,!0),this.getTotal(!0),this.pageNum=1,this.type=!0)},getTotal:function(t){var e=this;this.axios.get(s.a.C.url_mc+"/mall/bss/farm/page",{params:{pageNo:"",pageSize:"",statu:t}}).then(function(t){e.total=t.data.data.items.length}).catch(function(t){console.log(t)})},getList:function(t,e){var a=this;this.axios.get(s.a.C.url_mc+"/mall/bss/farm/page",{params:{pageNo:t,pageSize:1,statu:e}}).then(function(t){a.items=t.data.data.items}).catch(function(t){console.log(t)})},handleCurrentChange:function(t){this.pageNum=t,this.getList(t,this.type)}}}},266:function(t,e){},329:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("McHead",[a("div",{staticClass:"m-search",slot:"u-search"},[a("input",{attrs:{type:"text",value:"",placeholder:"牛肉"}}),t._v(" "),a("i",{staticClass:"el-icon-search"})])]),t._v(" "),a("div",{staticClass:"g-content"},[t._m(0),t._v(" "),a("div",{staticClass:"g-notice"},[a("div",{staticClass:"m-tab"},[a("el-radio-group",{on:{change:t.tab},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[a("el-radio-button",{attrs:{label:"最新活动"}}),t._v(" "),a("el-radio-button",{attrs:{label:"往期活动"}})],1)],1),t._v(" "),a("ul",{staticClass:"m-notice"},t._l(t.items,function(e,s){return a("li",[a("a",{attrs:{href:"detail.html?activeId="+e.farmActivePk}},[a("p",[t._v(t._s(e.nm))]),a("span",[t._v(t._s(e.releTm))])])])})),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"page-size":1,"current-page":t.pageNum,layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)])]),t._v(" "),a("McFoot")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-crumb"},[a("a",{attrs:{href:"home.html"}},[t._v("首页")]),a("em",[t._v("\t>")]),a("span",[t._v("商城广告")])])}]}}},[166]);