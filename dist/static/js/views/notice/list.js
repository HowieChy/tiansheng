webpackJsonp([11],{103:function(t,e,a){a(267);var n=a(1)(a(201),a(330),null,null);t.exports=n.exports},168:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(0),s=a(103),o=a.n(s);new n.default({render:function(t){return t(o.a)}}).$mount("#app")},201:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(2),s=a(10),o=a.n(s),r=a(5),i=a.n(r);e.default={data:function(){return{items:[],total:null,currentPage:1}},components:{McHead:o.a,McFoot:i.a},beforeCreate:function(){},beforeMount:function(){},mounted:function(){var t=this;this.axios.get(n.a.C.url_mc+"/mall/bss/news/FarmLogPage",{params:{pageNo:"",pageSize:""}}).then(function(e){t.total=e.data.data.items.length}).catch(function(t){console.log(t)}),this.axios.get(n.a.C.url_mc+"/mall/bss/news/FarmLogPage",{params:{pageNo:1,pageSize:this.currentPage}}).then(function(e){console.log(e.data.data.items),t.items=e.data.data.items}).catch(function(t){console.log(t)})},methods:{handleCurrentChange:function(t){var e=this;this.axios.get(n.a.C.url_mc+"/mall/bss/news/FarmLogPage",{params:{pageNo:t,pageSize:1}}).then(function(t){e.items=t.data.data.items}).catch(function(t){console.log(t)})}}}},267:function(t,e){},330:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("McHead",[a("div",{staticClass:"m-search",slot:"u-search"},[a("input",{attrs:{type:"text",value:"",placeholder:"牛肉"}}),t._v(" "),a("i",{staticClass:"el-icon-search"})])]),t._v(" "),a("div",{staticClass:"g-content"},[t._m(0),t._v(" "),a("div",{staticClass:"g-notice"},[a("ul",{staticClass:"m-notice"},t._l(t.items,function(e,n){return a("li",[a("a",{attrs:{href:"detail.html?id="+e.newsPk}},[a("p",[t._v(t._s(e.nm))]),a("span",[t._v(t._s(e.releTm))])])])})),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"page-size":t.currentPage,layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)])]),t._v(" "),a("McFoot")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-crumb"},[a("a",{attrs:{href:"home.html"}},[t._v("首页")]),a("em",[t._v("\t>")]),a("span",[t._v("农产日志")])])}]}}},[168]);