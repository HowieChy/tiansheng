webpackJsonp([12],{103:function(t,e,a){a(278);var s=a(1)(a(201),a(343),null,null);t.exports=s.exports},168:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(0),n=a(103),o=a.n(n);new s.default({render:function(t){return t(o.a)}}).$mount("#app")},201:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(2),n=a(10),o=a.n(n),i=a(5),r=a.n(i);e.default={data:function(){return{items:[],aHref:{src:"",title:""}}},components:{McHead:o.a,McFoot:r.a},beforeCreate:function(){},beforeMount:function(){},mounted:function(){var t=this,e=s.a.M.getUrlQuery("id",s.a.C.url_host);e&&(console.log(e),this.axios.get(s.a.C.url_mc+"/mall/bss/news/FarmLogDt",{params:{newsPk:e}}).then(function(e){console.log(e.data.data),t.items=e.data.data,t.aHref={title:"农场日志",title2:"公告详情",src:"list.html"},document.title="公告详情"}).catch(function(t){console.log(t)}));var a=s.a.M.getUrlQuery("activeId",s.a.C.url_host);a&&(console.log(a),this.axios.get(s.a.C.url_mc+"/mall/bss/farm/details",{params:{farmActivePk:a}}).then(function(e){console.log(e.data.data),t.items=e.data.data,t.aHref={title:"农场活动",title2:"活动详情",src:"active.html"},document.title="活动详情"}).catch(function(t){console.log(t)}))},methods:{handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){console.log("当前页: "+t)}}}},278:function(t,e){},343:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("McHead",[a("div",{staticClass:"m-search",slot:"u-search"},[a("input",{attrs:{type:"text",value:"",placeholder:"牛肉"}}),t._v(" "),a("i",{staticClass:"el-icon-search"})])]),t._v(" "),a("div",{staticClass:"g-content"},[a("div",{staticClass:"m-crumb"},[a("a",{attrs:{href:"home.html"}},[t._v("首页")]),a("em",[t._v("\t>")]),a("span",[a("a",{attrs:{href:t.aHref.src}},[t._v(t._s(t.aHref.title))])]),a("em",[t._v("\t>")]),a("span",[t._v(t._s(t.aHref.title2))])]),t._v(" "),a("div",{staticClass:"g-detail"},[a("div",{staticClass:"top"},[a("h2",[t._v(t._s(t.items.nm))]),t._v(" "),a("h3",[t._v(t._s(t.items.releTm))])]),t._v(" "),a("div",{staticClass:"bottom"},[a("p",{domProps:{innerHTML:t._s(t.items.cont)}})])])]),t._v(" "),a("McFoot")],1)},staticRenderFns:[]}}},[168]);