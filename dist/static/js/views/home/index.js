webpackJsonp([1],{

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__indexApp__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__indexApp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__indexApp__);





new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
    render: function render(h) {
        return h(__WEBPACK_IMPORTED_MODULE_1__indexApp___default.a);
    }
}).$mount('#app');

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_Countdown__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_Countdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_Countdown__);




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'g-head',
    data: function data() {
        return {
            lev: false,
            address: false,
            cart: false,
            code: false
        };
    },

    methods: {
        jLev1: function jLev1(e) {
            this.lev = true;
        },
        jLev2: function jLev2(e) {
            this.lev = false;
        },
        jAddress1: function jAddress1(e) {
            this.address = true;
        },
        jAddress2: function jAddress2(e) {
            this.address = false;
        },
        jCode1: function jCode1(e) {
            this.code = true;
        },
        jCode2: function jCode2(e) {
            this.code = false;
        },
        jCart1: function jCart1(e) {
            this.cart = true;
        },
        jCart2: function jCart2(e) {
            this.cart = false;
        },
        del: function del(item, index) {
            var delArr = [item.id, item.num];
            this.lists.splice(index, 1);
            this.$emit('child-number', 0);
            this.$emit('child-price', 0);
            this.$emit('child-id', delArr);
            var str = 0;
            var str2 = 0;
            this.lists.map(function (item) {
                str = this.lists.length;

                str2 += item.price * item.num;
                this.$emit('child-number', str);
                this.$emit('child-price', str2);
            }.bind(this));

            if (!this.lists.length) {
                console.log('清空了');
                this.$emit('child-cutTime', '0');
            }
        },
        callback: function callback() {
            console.log('倒计时结束');
            this.lists.splice(0);
            this.$emit('child-number', 0);
            this.$emit('child-price', 0);
        },
        jTop: function jTop() {
            $('body').animate({ 'scrollTop': 0 });
        }
    },
    mounted: function mounted() {
        function throttle(method, context) {
            clearTimeout(method.tId);
            method.tId = setTimeout(function () {
                method.call(context);
            }, 100);
        }
        function myFunc() {
            $('.g-float').animate({ 'top': $(document).scrollTop() + 150 });
        }
        $(document).scroll(function () {
            throttle(myFunc);
        });
    },


    props: ['lists', 'allNum', 'allPrice', 'cutTime'],
    components: {
        countDown: __WEBPACK_IMPORTED_MODULE_0_components_Countdown___default.a
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_assets_js_Lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_McHead__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_McHead___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_McHead__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_McFoot__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_McFoot___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_McFoot__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Countdown__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Countdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_Countdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_viewload__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);













__WEBPACK_IMPORTED_MODULE_4_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_5_vue_viewload__["a" /* default */], {
    threshold: -200,
    effectFadeIn: true
});





/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            slide: [{
                "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=150362903&di=6ad534cda71f5eb24bc2753fc2dfa3ec&imgtype=jpg&er=1&src=http%3A%2F%2Fimage5.tuku.cn%2Fpic%2Fwallpaper%2Fyouxidongman%2Fqianweishaonvdongmanbizhi%2F011.jpg",
                "aHref": "",
                "title": "冰鲜汤排"
            }, {
                "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503629603&di=6ad534cda71f5eb24bc2753fc2dfa3ec&imgtype=jpg&er=1&src=http%3A%2F%2Fimage5.tuku.cn%2Fpic%2Fwallpaper%2Fyouxidongman%2Fqianweishaonvdongmanbizhi%2F011.jpg",
                "aHref": "",
                "title": "冰鲜汤排"
            }, {
                "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503629603&di=6ad534cda71f5eb24bc2753fc2dfa3ec&imgtype=jpg&er=1&src=http%3A%2F%2Fimage5.tuku.cn%2Fpic%2Fwallpaper%2Fyouxidongman%2Fqianweishaonvdongmanbizhi%2F011.jpg",
                "aHref": "",
                "title": "冰鲜汤排"
            }, {
                "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503629603&di=6ad534cda71f5eb24bc2753fc2dfa3ec&imgtype=jpg&er=1&src=http%3A%2F%2Fimage5.tuku.cn%2Fpic%2Fwallpaper%2Fyouxidongman%2Fqianweishaonvdongmanbizhi%2F011.jpg",
                "aHref": "",
                "title": "冰鲜汤排"
            }, {
                "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503629603&di=6ad534cda71f5eb24bc2753fc2dfa3ec&imgtype=jpg&er=1&src=http%3A%2F%2Fimage5.tuku.cn%2Fpic%2Fwallpaper%2Fyouxidongman%2Fqianweishaonvdongmanbizhi%2F011.jpg",
                "aHref": "",
                "title": "冰鲜汤排"
            }],
            shopItem: [[{
                title: "四川凯特芒果",
                store: 10,
                newPrice: '300.00',
                oldPrice: '400.00',
                id: 1,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }, {
                title: "四川凯特芒果",
                store: 5,
                newPrice: '200.50',
                oldPrice: '300.00',
                id: 5,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }, {
                title: "四川凯特芒果",
                store: 2,
                newPrice: '700.00',
                oldPrice: '900.00',
                id: 2,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }, {
                title: "四川凯特芒果",
                store: 200,
                newPrice: '500.05',
                oldPrice: '600.00',
                id: 3,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }, {
                title: "四川凯特芒果",
                store: 200,
                newPrice: '500.05',
                oldPrice: '600.00',
                id: 4,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }], [{
                title: "四川凯特芒果",
                store: 10,
                newPrice: '300.00',
                oldPrice: '400.00',
                id: 1,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }, {
                title: "四川凯特芒果",
                store: 15,
                newPrice: '200.50',
                oldPrice: '300.00',
                id: 5,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }, {
                title: "四川凯特芒果",
                store: 2,
                newPrice: '700.00',
                oldPrice: '900.00',
                id: 6,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }, {
                title: "四川凯特芒果",
                store: 200,
                newPrice: '500.05',
                oldPrice: '600.00',
                id: 7,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }, {
                title: "四川凯特芒果",
                store: 200,
                newPrice: '500.05',
                oldPrice: '600.00',
                id: 8,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }], [{
                title: "四川凯特芒果",
                store: 20,
                newPrice: '300.00',
                oldPrice: '400.00',
                id: 9,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }, {
                title: "四川凯特芒果",
                store: 5,
                newPrice: '200.50',
                oldPrice: '300.00',
                id: 1,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }, {
                title: "四川凯特芒果",
                store: 2,
                newPrice: '700.00',
                oldPrice: '900.00',
                id: 11,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }, {
                title: "四川凯特芒果",
                store: 200,
                newPrice: '500.05',
                oldPrice: '600.00',
                id: 12,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }, {
                title: "四川凯特芒果",
                store: 200,
                newPrice: '500.05',
                oldPrice: '600.00',
                id: 13,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }], [{
                title: "四川凯特芒果",
                store: 5,
                newPrice: '200.50',
                oldPrice: '300.00',
                id: 2,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }, {
                title: "四川凯特芒果",
                store: 2,
                newPrice: '700.00',
                oldPrice: '900.00',
                id: 14,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }, {
                title: "四川凯特芒果",
                store: 200,
                newPrice: '500.05',
                oldPrice: '600.00',
                id: 15,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }, {
                title: "四川凯特芒果",
                store: 200,
                newPrice: '500.05',
                oldPrice: '600.00',
                id: 17,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }], [{
                title: "123",
                store: 5,
                newPrice: '500.00',
                oldPrice: '600.00',
                id: 18,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }, {
                title: "四川凯特芒果",
                store: 5,
                newPrice: '200.50',
                oldPrice: '300.00',
                id: 19,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }, {
                title: "四川凯特芒果",
                store: 2,
                newPrice: '700.00',
                oldPrice: '900.00',
                id: 20,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }, {
                title: "四川凯特芒果",
                store: 200,
                newPrice: '500.05',
                oldPrice: '600.00',
                id: 21,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }, {
                title: "四川凯特芒果",
                store: 200,
                newPrice: '500.05',
                oldPrice: '600.00',
                id: 22,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }], [{
                title: "四川凯特芒果",
                store: 10,
                newPrice: '300.00',
                oldPrice: '400.00',
                id: 23,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }, {
                title: "四川凯特芒果",
                store: 5,
                newPrice: '200.50',
                oldPrice: '300.00',
                id: 24,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }, {
                title: "四川凯特芒果",
                store: 2,
                newPrice: '700.00',
                oldPrice: '900.00',
                id: 25,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }, {
                title: "四川凯特芒果",
                store: 200,
                newPrice: '500.05',
                oldPrice: '600.00',
                id: 27,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }, {
                title: "四川凯特芒果",
                store: 200,
                newPrice: '500.05',
                oldPrice: '600.00',
                id: 28,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }], [{
                title: "四川凯特芒果",
                store: 12,
                newPrice: '200.00',
                oldPrice: '300.00',
                id: 29,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }, {
                title: "四川凯特芒果",
                store: 5,
                newPrice: '200.50',
                oldPrice: '300.00',
                id: 31,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }, {
                title: "四川凯特芒果",
                store: 2,
                newPrice: '700.00',
                oldPrice: '900.00',
                id: 32,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }, {
                title: "四川凯特芒果",
                store: 200,
                newPrice: '500.05',
                oldPrice: '600.00',
                id: 33,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }, {
                title: "四川凯特芒果",
                store: 200,
                newPrice: '500.05',
                oldPrice: '600.00',
                id: 36,
                numer: 1,
                aImg: __WEBPACK_IMPORTED_MODULE_6__assets_images_shop_png___default.a,
                time: "1504796400"
            }]],

            carItems: [{
                price: '300.00',
                num: 1,
                id: 1
            }, {
                price: '300.00',
                num: 1,
                id: 2
            }],

            allPrice: '600.00',
            allNum: 2,

            door: true,

            cutTime: '1506596400'
        };
    },

    components: {
        McHead: __WEBPACK_IMPORTED_MODULE_1_components_McHead___default.a, McFoot: __WEBPACK_IMPORTED_MODULE_2_components_McFoot___default.a, countDown: __WEBPACK_IMPORTED_MODULE_3_components_Countdown___default.a
    },
    beforeCreate: function beforeCreate() {},
    beforeMount: function beforeMount() {},
    mounted: function mounted() {
        console.log(__WEBPACK_IMPORTED_MODULE_0_assets_js_Lib__["a" /* default */].C.appname);
    },

    methods: {
        get: function get(msg) {
            this.allNum = msg;
        },
        get2: function get2(msg) {
            this.allPrice = msg;
        },
        get3: function get3(msg) {
            this.cutTime = '0';
        },
        getId: function getId(msg) {
            console.log(msg[0], msg[1]);
            var This = this;

            for (var i = 0; i < this.shopItem.length; i++) {
                this.shopItem[i].forEach(function (elem, index) {
                    if (msg[0] == elem.id) {
                        elem.store += msg[1];
                    }
                });
            }
        },
        jNav1: function jNav1(e) {
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()('.m-float').hide();
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()(e.currentTarget).find('.m-float').show();
        },
        jNav2: function jNav2(e) {
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()('.m-float').hide();
        },
        callback: function callback() {
            console.log('结束');
        },
        addShop: function addShop(item, index) {
            function add(e) {
                e.carItems.push({
                    price: item.newPrice,
                    num: item.numer,
                    id: item.id
                });
            }

            function sum(e) {
                e.allNum = 0;
                e.allPrice = 0;
                e.carItems.map(function (item) {
                    e.allNum = e.carItems.length;
                    e.allPrice += item.price * item.num;
                });
            }
            if (this.carItems.length) {
                add(this);
                var hash = {};
                var newItems = [];
                this.carItems.map(function (e, i) {
                    if (!hash[e.id]) {
                        newItems.push(e);
                        hash[e.id] = e;
                    } else {
                        hash[e.id].num += e.num;
                    }
                });
                this.carItems = newItems;
                sum(this);
            } else {
                console.log('第一次添加');
                add(this);
                sum(this);
            }

            for (var i = 0; i < this.shopItem.length; i++) {
                this.shopItem[i].forEach(function (elem, index) {
                    if (item.id == elem.id) {
                        elem.store -= item.numer;
                    }
                });
            }

            item.numer = 1;
            if (item.store < 0) {
                item.store = 0;
                return false;
            }
        }
    }
});

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 267:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/jc1.png";

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/jc2.png";

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/jc3.png";

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/shop.png";

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-head clearfix"
  }, [_c('div', {
    staticClass: "m-top clearfix"
  }, [_c('div', {
    staticClass: "m-content"
  }, [_c('div', {
    staticClass: "m-lev",
    on: {
      "mouseenter": _vm.jLev1,
      "mouseleave": _vm.jLev2
    }
  }, [_c('p', {
    class: {
      'f-active': _vm.lev
    }
  }, [_vm._m(0)]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.lev),
      expression: "lev"
    }],
    staticClass: "u-lev"
  }, [_vm._m(1), _vm._v(" "), _vm._m(2)])]), _vm._v(" "), _c('div', {
    staticClass: "m-address",
    on: {
      "mouseenter": _vm.jAddress1,
      "mouseleave": _vm.jAddress2
    }
  }, [_c('h2', {
    class: {
      'f-active': _vm.address
    }
  }, [_vm._v("基地："), _c('span', [_vm._v("宁波")]), _c('i', {
    staticClass: "el-icon-arrow-down"
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.address),
      expression: "address"
    }]
  }, [_vm._v("\n            宁波\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "g-cart",
    on: {
      "mouseenter": _vm.jCart1,
      "mouseleave": _vm.jCart2
    }
  }, [_c('h3', {
    class: {
      'f-active': _vm.cart
    }
  }, [_c('span', [_vm._v("天胜菜篮子（ " + _vm._s(_vm.allNum) + " ）")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.cart),
      expression: "cart"
    }],
    staticClass: "m-cart"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('ul', _vm._l((_vm.lists), function(item, index) {
    return _c('li', {
      staticClass: "clearfix"
    }, [_c('a', {
      attrs: {
        "href": ""
      }
    }, [_c('img', {
      attrs: {
        "src": __webpack_require__(73),
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "middle"
    }, [_c('p', [_vm._v(" 菠萝   "), _c('span', [_vm._v("￥" + _vm._s(item.price) + " "), _c('em', [_c('ins', [_vm._v("X")]), _vm._v(_vm._s(item.num))])])]), _vm._v(" "), _c('p', [_vm._v("1斤装")])])]), _vm._v(" "), _c('button', {
      on: {
        "click": function($event) {
          _vm.del(item, index)
        }
      }
    }, [_vm._v("删除")])])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "bottom clearfix"
  }, [_c('div', {
    staticClass: "left"
  }, [_c('p', [_vm._v("共 " + _vm._s(_vm.allNum) + " 件商品 ")]), _vm._v(" "), _c('p', [_c('em', [_vm._v("￥")]), _vm._v(_vm._s(_vm._f("currency")(_vm.allPrice, '')))])]), _vm._v(" "), _vm._m(3)])])]), _vm._v(" "), _c('ul', {
    staticClass: "m-nav"
  }, [_vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _vm._m(6), _vm._v(" "), _c('li', {
    staticClass: "m-code",
    class: {
      'f-active': _vm.code
    },
    on: {
      "mouseenter": _vm.jCode1,
      "mouseleave": _vm.jCode2
    }
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }, [_vm._v("掌上天胜")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.code),
      expression: "code"
    }]
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(18),
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("关注微信公众号")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "m-bottom"
  }, [_c('div', {
    staticClass: "m-content"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(19),
      "alt": ""
    }
  }), _vm._v(" "), _vm._t("u-search"), _vm._v(" "), _c('div', {
    staticClass: "g-float"
  }, [_c('div', {
    staticClass: "j-time"
  }, [_c('p', [_vm._v("剩余时间")]), _vm._v(" "), _c('count-down', {
    attrs: {
      "endTime": _vm.cutTime,
      "callback": _vm.callback,
      "endText": "0S"
    }
  })], 1), _vm._v(" "), _c('ul', [_c('li'), _vm._v(" "), _c('li'), _vm._v(" "), _c('li', {
    on: {
      "click": _vm.jTop
    }
  })])])], 2)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', [_vm._v("您好！ 151****8717 "), _c('i', {
    staticClass: "el-icon-arrow-down"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h2', [_vm._v("151****8717"), _c('em', [_vm._v("退出")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', [_c('li', [_c('h3', [_vm._v("级别")]), _vm._v(" "), _c('h4', [_vm._v("普通会员")]), _vm._v(" "), _c('strong')]), _vm._v(" "), _c('li', [_c('h3', [_vm._v("积分")]), _vm._v(" "), _c('h4', [_vm._v("45分（4.5元）")]), _vm._v(" "), _c('strong')]), _vm._v(" "), _c('li', [_c('h3', [_vm._v("余额")]), _vm._v(" "), _c('h4', [_vm._v("500.00元")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "right"
  }, [_c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("去购物车结算")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("商城公告")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("最新活动")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("我的订单")])])
}]}

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('McHead', {
    attrs: {
      "lists": _vm.carItems,
      "allPrice": _vm.allPrice,
      "allNum": _vm.allNum,
      "cutTime": _vm.cutTime
    },
    on: {
      "child-number": _vm.get,
      "child-price": _vm.get2,
      "child-cutTime": _vm.get3,
      "child-id": _vm.getId
    }
  }, [_c('div', {
    staticClass: "m-search",
    slot: "u-search"
  }, [_c('input', {
    attrs: {
      "type": "text",
      "value": "",
      "placeholder": "牛肉"
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "el-icon-search"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "g-nav"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "m-all"
  }, [_c('ul', [_vm._m(0), _vm._v(" "), _c('li', {
    on: {
      "mouseenter": _vm.jNav1,
      "mouseleave": _vm.jNav2
    }
  }, [_vm._m(1), _vm._v(" "), _vm._m(2)]), _vm._v(" "), _c('li', {
    on: {
      "mouseenter": _vm.jNav1,
      "mouseleave": _vm.jNav2
    }
  }, [_vm._m(3), _vm._v(" "), _vm._m(4)]), _vm._v(" "), _c('li', {
    on: {
      "mouseenter": _vm.jNav1,
      "mouseleave": _vm.jNav2
    }
  }, [_vm._m(5), _vm._v(" "), _vm._m(6)]), _vm._v(" "), _c('li', {
    on: {
      "mouseenter": _vm.jNav1,
      "mouseleave": _vm.jNav2
    }
  }, [_vm._m(7), _vm._v(" "), _vm._m(8)]), _vm._v(" "), _c('li', {
    on: {
      "mouseenter": _vm.jNav1,
      "mouseleave": _vm.jNav2
    }
  }, [_vm._m(9), _vm._v(" "), _vm._m(10)]), _vm._v(" "), _c('li', {
    on: {
      "mouseenter": _vm.jNav1,
      "mouseleave": _vm.jNav2
    }
  }, [_vm._m(11), _vm._v(" "), _vm._m(12)]), _vm._v(" "), _c('li', {
    on: {
      "mouseenter": _vm.jNav1,
      "mouseleave": _vm.jNav2
    }
  }, [_vm._m(13), _vm._v(" "), _vm._m(14)]), _vm._v(" "), _c('li', {
    on: {
      "mouseenter": _vm.jNav1,
      "mouseleave": _vm.jNav2
    }
  }, [_vm._m(15), _vm._v(" "), _vm._m(16)])])]), _vm._v(" "), _vm._m(17)])]), _vm._v(" "), _c('div', {
    staticClass: "g-Carousel"
  }, [_c('el-carousel', {
    attrs: {
      "trigger": "click",
      "interval": 5000
    }
  }, _vm._l((_vm.slide), function(item, index) {
    return _c('el-carousel-item', {
      key: index,
      attrs: {
        "label": item.title
      }
    }, [_c('a', {
      attrs: {
        "href": item.aHref
      }
    }, [_c('img', {
      attrs: {
        "src": "http://img2.niutuku.com/desk/1207/1025/ntk124744.jpg",
        "alt": ""
      }
    })])])
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "g-listed"
  }, [_c('h2', [_vm._v("上市货")]), _vm._v(" "), _c('ul', {
    staticClass: "m-shop clearfix"
  }, _vm._l((_vm.shopItem[0]), function(item, index) {
    return _c('li', [_c('a', {
      attrs: {
        "href": ""
      }
    }, [_c('img', {
      directives: [{
        name: "view",
        rawName: "v-view",
        value: (item.aImg),
        expression: "item.aImg"
      }],
      attrs: {
        "alt": ""
      }
    })]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('p', [_vm._v("库存:" + _vm._s(item.store))]), _vm._v(" "), _c('p', [_vm._v("会员价："), _c('em', [_vm._v(_vm._s(_vm._f("currency")(item.newPrice)))])]), _vm._v(" "), _c('p', [_vm._v("市场价：" + _vm._s(_vm._f("currency")(item.oldPrice)))]), _vm._v(" "), (index == 0 || index == 3 || index == 4 || index == 5) ? _c('div', [_c('el-input-number', {
      attrs: {
        "size": "small",
        "min": 1,
        "max": item.store
      },
      model: {
        value: (item.numer),
        callback: function($$v) {
          item.numer = $$v
        },
        expression: "item.numer"
      }
    }), _vm._v(" "), _c('ins', {
      attrs: {
        "id": item.id,
        "num": item.numer,
        "price": item.newPrice
      },
      on: {
        "click": function($event) {
          _vm.addShop(item, index)
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), (index == 1) ? _c('button', {
      staticClass: "u-button"
    }, [_vm._v("已售罄")]) : _vm._e(), _vm._v(" "), (index == 2) ? _c('button', {
      staticClass: "u-button u-time"
    }, [_c('em', [_vm._v("离开始还有 "), _c('count-down', {
      attrs: {
        "endTime": item.time,
        "callback": _vm.callback,
        "endText": "0S"
      }
    })], 1)]) : _vm._e()])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "g-content"
  }, [_c('div', {
    staticClass: "g-shops"
  }, [_c('h2', [_vm._v("VIP专区")]), _vm._v(" "), _c('ul', {
    staticClass: "m-shop clearfix"
  }, _vm._l((_vm.shopItem[1]), function(item, index) {
    return _c('li', [_c('a', {
      attrs: {
        "href": ""
      }
    }, [_c('img', {
      directives: [{
        name: "view",
        rawName: "v-view",
        value: (item.aImg),
        expression: "item.aImg"
      }],
      attrs: {
        "alt": ""
      }
    })]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('p', [_vm._v("库存:" + _vm._s(item.store))]), _vm._v(" "), _c('p', [_vm._v("会员价："), _c('em', [_vm._v(_vm._s(_vm._f("currency")(item.newPrice)))])]), _vm._v(" "), _c('p', [_vm._v("市场价：" + _vm._s(_vm._f("currency")(item.oldPrice)))]), _vm._v(" "), (index == 0 || index == 3 || index == 4) ? _c('div', [_c('el-input-number', {
      attrs: {
        "size": "small",
        "min": 1,
        "max": item.store
      },
      model: {
        value: (item.numer),
        callback: function($$v) {
          item.numer = $$v
        },
        expression: "item.numer"
      }
    }), _vm._v(" "), _c('ins', {
      attrs: {
        "id": item.id,
        "num": item.numer,
        "price": item.newPrice
      },
      on: {
        "click": function($event) {
          _vm.addShop(item, index)
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), (index == 1) ? _c('button', {
      staticClass: "u-button"
    }, [_vm._v("已售罄")]) : _vm._e(), _vm._v(" "), (index == 2) ? _c('button', {
      staticClass: "u-button u-time"
    }, [_c('em', [_vm._v("离开始还有 "), _c('count-down', {
      attrs: {
        "endTime": item.time,
        "callback": _vm.callback,
        "endText": "0S"
      }
    })], 1)]) : _vm._e()])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "g-shops"
  }, [_c('h2', {
    staticClass: "u-new3"
  }, [_vm._v("预售专区")]), _vm._v(" "), _c('ul', {
    staticClass: "m-shop clearfix"
  }, _vm._l((_vm.shopItem[2]), function(item, index) {
    return _c('li', [_c('a', {
      attrs: {
        "href": ""
      }
    }, [_c('img', {
      directives: [{
        name: "view",
        rawName: "v-view",
        value: (item.aImg),
        expression: "item.aImg"
      }],
      attrs: {
        "alt": ""
      }
    })]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('p', [_vm._v("库存:" + _vm._s(item.store))]), _vm._v(" "), _c('p', [_vm._v("会员价："), _c('em', [_vm._v("￥" + _vm._s(item.newPrice))])]), _vm._v(" "), _c('p', [_vm._v("市场价：￥" + _vm._s(item.oldPrice))]), _vm._v(" "), (index == 0 || index == 3 || index == 4) ? _c('div', [_c('el-input-number', {
      attrs: {
        "size": "small",
        "min": 1,
        "max": item.store
      },
      model: {
        value: (item.numer),
        callback: function($$v) {
          item.numer = $$v
        },
        expression: "item.numer"
      }
    }), _vm._v(" "), _c('ins', {
      attrs: {
        "id": item.id,
        "num": item.numer,
        "price": item.newPrice
      },
      on: {
        "click": function($event) {
          _vm.addShop(item, index)
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), (index == 1) ? _c('button', {
      staticClass: "u-button"
    }, [_vm._v("已售罄")]) : _vm._e(), _vm._v(" "), (index == 2) ? _c('button', {
      staticClass: "u-button u-time"
    }, [_c('em', [_vm._v("离开始还有 "), _c('count-down', {
      attrs: {
        "endTime": item.time,
        "callback": _vm.callback,
        "endText": "0S"
      }
    })], 1)]) : _vm._e()])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "g-shops"
  }, [_c('h2', {
    staticClass: "u-new2"
  }, [_vm._v("今日上架")]), _vm._v(" "), _c('ul', {
    staticClass: "m-shop clearfix"
  }, _vm._l((_vm.shopItem[3]), function(item, index) {
    return _c('li', {
      attrs: {
        "id": "aaa"
      }
    }, [_c('a', {
      attrs: {
        "href": ""
      }
    }, [_c('img', {
      directives: [{
        name: "view",
        rawName: "v-view",
        value: (item.aImg),
        expression: "item.aImg"
      }],
      attrs: {
        "alt": ""
      }
    })]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('p', [_vm._v("库存:" + _vm._s(item.store))]), _vm._v(" "), _c('p', [_vm._v("会员价："), _c('em', [_vm._v("￥" + _vm._s(item.newPrice))])]), _vm._v(" "), _c('p', [_vm._v("市场价：￥" + _vm._s(item.oldPrice))]), _vm._v(" "), (index == 0 || index == 3 || index == 4) ? _c('div', [_c('el-input-number', {
      attrs: {
        "size": "small",
        "min": 1,
        "max": item.store
      },
      model: {
        value: (item.numer),
        callback: function($$v) {
          item.numer = $$v
        },
        expression: "item.numer"
      }
    }), _vm._v(" "), _c('ins', {
      attrs: {
        "id": item.id,
        "num": item.numer,
        "price": item.newPrice
      },
      on: {
        "click": function($event) {
          _vm.addShop(item, index)
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), (index == 1) ? _c('button', {
      staticClass: "u-button"
    }, [_vm._v("已售罄")]) : _vm._e(), _vm._v(" "), (index == 2) ? _c('button', {
      staticClass: "u-button u-time"
    }, [_c('em', [_vm._v("离开始还有 "), _c('count-down', {
      attrs: {
        "endTime": item.time,
        "callback": _vm.callback,
        "endText": "0S"
      }
    })], 1)]) : _vm._e()])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "g-shops"
  }, [_c('h2', {
    staticClass: "u-new4"
  }, [_vm._v("免耕专区")]), _vm._v(" "), _c('ul', {
    staticClass: "m-shop clearfix"
  }, _vm._l((_vm.shopItem[4]), function(item, index) {
    return _c('li', [_c('a', {
      attrs: {
        "href": ""
      }
    }, [_c('img', {
      directives: [{
        name: "view",
        rawName: "v-view",
        value: (item.aImg),
        expression: "item.aImg"
      }],
      attrs: {
        "alt": ""
      }
    })]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('p', [_vm._v("库存:" + _vm._s(item.store))]), _vm._v(" "), _c('p', [_vm._v("会员价："), _c('em', [_vm._v("￥" + _vm._s(item.newPrice))])]), _vm._v(" "), _c('p', [_vm._v("市场价：￥" + _vm._s(item.oldPrice))]), _vm._v(" "), (index == 0 || index == 3 || index == 4) ? _c('div', [_c('el-input-number', {
      attrs: {
        "size": "small",
        "min": 1,
        "max": item.store
      },
      model: {
        value: (item.numer),
        callback: function($$v) {
          item.numer = $$v
        },
        expression: "item.numer"
      }
    }), _vm._v(" "), _c('ins', {
      attrs: {
        "id": item.id,
        "num": item.numer,
        "price": item.newPrice
      },
      on: {
        "click": function($event) {
          _vm.addShop(item, index)
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), (index == 1) ? _c('button', {
      staticClass: "u-button"
    }, [_vm._v("已售罄")]) : _vm._e(), _vm._v(" "), (index == 2) ? _c('button', {
      staticClass: "u-button u-time"
    }, [_c('em', [_vm._v("离开始还有 "), _c('count-down', {
      attrs: {
        "endTime": item.time,
        "callback": _vm.callback,
        "endText": "0S"
      }
    })], 1)]) : _vm._e()])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "g-shops"
  }, [_c('h2', {
    staticClass: "u-new5"
  }, [_vm._v("天胜丽制")]), _vm._v(" "), _c('ul', {
    staticClass: "m-shop clearfix"
  }, _vm._l((_vm.shopItem[5]), function(item, index) {
    return _c('li', [_c('a', {
      attrs: {
        "href": ""
      }
    }, [_c('img', {
      directives: [{
        name: "view",
        rawName: "v-view",
        value: (item.aImg),
        expression: "item.aImg"
      }],
      attrs: {
        "alt": ""
      }
    })]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('p', [_vm._v("库存:" + _vm._s(item.store))]), _vm._v(" "), _c('p', [_vm._v("会员价："), _c('em', [_vm._v("￥" + _vm._s(item.newPrice))])]), _vm._v(" "), _c('p', [_vm._v("市场价：￥" + _vm._s(item.oldPrice))]), _vm._v(" "), (index == 0 || index == 3 || index == 4) ? _c('div', [_c('el-input-number', {
      attrs: {
        "size": "small",
        "min": 1,
        "max": item.store
      },
      model: {
        value: (item.numer),
        callback: function($$v) {
          item.numer = $$v
        },
        expression: "item.numer"
      }
    }), _vm._v(" "), _c('ins', {
      attrs: {
        "id": item.id,
        "num": item.numer,
        "price": item.newPrice
      },
      on: {
        "click": function($event) {
          _vm.addShop(item, index)
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), (index == 1) ? _c('button', {
      staticClass: "u-button"
    }, [_vm._v("已售罄")]) : _vm._e(), _vm._v(" "), (index == 2) ? _c('button', {
      staticClass: "u-button u-time"
    }, [_c('em', [_vm._v("离开始还有 "), _c('count-down', {
      attrs: {
        "endTime": item.time,
        "callback": _vm.callback,
        "endText": "0S"
      }
    })], 1)]) : _vm._e()])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "g-shops"
  }, [_c('h2', {
    staticClass: "u-new6"
  }, [_vm._v("闪送专区")]), _vm._v(" "), _c('ul', {
    staticClass: "m-shop clearfix"
  }, _vm._l((_vm.shopItem[6]), function(item, index) {
    return _c('li', [_c('a', {
      attrs: {
        "href": ""
      }
    }, [_c('img', {
      directives: [{
        name: "view",
        rawName: "v-view",
        value: (item.aImg),
        expression: "item.aImg"
      }],
      attrs: {
        "alt": ""
      }
    })]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('p', [_vm._v("库存:" + _vm._s(item.store))]), _vm._v(" "), _c('p', [_vm._v("会员价："), _c('em', [_vm._v("￥" + _vm._s(item.newPrice))])]), _vm._v(" "), _c('p', [_vm._v("市场价：￥" + _vm._s(item.oldPrice))]), _vm._v(" "), (index == 0 || index == 3 || index == 4 || index == 5) ? _c('div', [_c('el-input-number', {
      attrs: {
        "size": "small",
        "min": 1,
        "max": item.store
      },
      model: {
        value: (item.numer),
        callback: function($$v) {
          item.numer = $$v
        },
        expression: "item.numer"
      }
    }), _vm._v(" "), _c('ins', {
      attrs: {
        "id": item.id,
        "num": item.numer,
        "price": item.newPrice
      },
      on: {
        "click": function($event) {
          _vm.addShop(item, index)
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), (index == 1) ? _c('button', {
      staticClass: "u-button"
    }, [_vm._v("已售罄")]) : _vm._e(), _vm._v(" "), (index == 2) ? _c('button', {
      staticClass: "u-button u-time"
    }, [_c('em', [_vm._v("离开始还有 "), _c('count-down', {
      attrs: {
        "endTime": item.time,
        "callback": _vm.callback,
        "endText": "0S"
      }
    })], 1)]) : _vm._e()])
  }))]), _vm._v(" "), _vm._m(18), _vm._v(" "), _vm._m(19)]), _vm._v(" "), _c('McFoot')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('p', [_vm._v("全部分类")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', [_vm._v("天生好菜")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-float"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('h2', [_vm._v("蔬菜 "), _c('i', {
    staticClass: "el-icon-arrow-right"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("萝卜")])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('h2', [_vm._v("蔬菜 "), _c('i', {
    staticClass: "el-icon-arrow-right"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("萝卜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("西瓜")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', [_vm._v("天滋美肉")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-float"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('h2', [_vm._v("蔬菜 "), _c('i', {
    staticClass: "el-icon-arrow-right"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("新西兰柠檬")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("萝卜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("西瓜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("新西兰柠檬")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("萝卜")])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('h2', [_vm._v("蔬菜 "), _c('i', {
    staticClass: "el-icon-arrow-right"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("萝卜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("西瓜")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', [_vm._v("天天有鱼")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-float"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('h2', [_vm._v("蔬菜 "), _c('i', {
    staticClass: "el-icon-arrow-right"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("萝卜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("西瓜")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', [_vm._v("原生好蛋")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-float"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('h2', [_vm._v("蔬菜 "), _c('i', {
    staticClass: "el-icon-arrow-right"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("新西兰柠檬")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("萝卜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("西瓜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("新西兰柠檬")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("萝卜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("西瓜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("新西兰柠檬")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("萝卜")])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('h2', [_vm._v("蔬菜 "), _c('i', {
    staticClass: "el-icon-arrow-right"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("萝卜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("西瓜")])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('h2', [_vm._v("蔬菜 "), _c('i', {
    staticClass: "el-icon-arrow-right"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("萝卜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("西瓜")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', [_vm._v("天赐好粮")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-float"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('h2', [_vm._v("蔬菜 "), _c('i', {
    staticClass: "el-icon-arrow-right"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("新西兰柠檬")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("萝卜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("西瓜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("新西兰柠檬")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("萝卜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("西瓜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("新西兰柠檬")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("萝卜")])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('h2', [_vm._v("蔬菜 "), _c('i', {
    staticClass: "el-icon-arrow-right"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("萝卜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("西瓜")])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('h2', [_vm._v("蔬菜 "), _c('i', {
    staticClass: "el-icon-arrow-right"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("萝卜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("西瓜")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', [_vm._v("果色天香")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-float"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('h2', [_vm._v("蔬菜 "), _c('i', {
    staticClass: "el-icon-arrow-right"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("新西兰柠檬")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("萝卜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("西瓜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("新西兰柠檬")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("萝卜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("西瓜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("新西兰柠檬")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("萝卜")])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('h2', [_vm._v("蔬菜 "), _c('i', {
    staticClass: "el-icon-arrow-right"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("萝卜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("西瓜")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', [_vm._v("天生丽制")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-float"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('h2', [_vm._v("蔬菜 "), _c('i', {
    staticClass: "el-icon-arrow-right"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("萝卜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("西瓜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("新西兰柠檬")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("萝卜")])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('h2', [_vm._v("蔬菜 "), _c('i', {
    staticClass: "el-icon-arrow-right"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("萝卜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("西瓜")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', [_vm._v("天作之盒")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-float"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('h2', [_vm._v("蔬菜 "), _c('i', {
    staticClass: "el-icon-arrow-right"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("新西兰柠檬")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("萝卜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("西瓜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("新西兰柠檬")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("萝卜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("西瓜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("新西兰柠檬")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("萝卜")])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('h2', [_vm._v("蔬菜 "), _c('i', {
    staticClass: "el-icon-arrow-right"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("萝卜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("西瓜")])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('h2', [_vm._v("蔬菜 "), _c('i', {
    staticClass: "el-icon-arrow-right"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("青菜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("萝卜")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("西瓜")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-nav"
  }, [_c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("VIP专区")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("预售专区")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("免耕专区")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("闪送专区")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("私人订制")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("卡卷专区")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("增值服务")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("科普体现")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("农场日志")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("产品大全")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-items"
  }, [_c('h2', {
    staticClass: "u-jc"
  }, [_vm._v("产品检测")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(322),
      "alt": ""
    }
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(323),
      "alt": ""
    }
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(324),
      "alt": ""
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-items"
  }, [_c('h2', [_vm._v("农场风采")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(45),
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "m-mask"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(45),
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "m-mask"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(45),
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "m-mask"
  })])])
}]}

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(263)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(177),
  /* template */
  __webpack_require__(340),
  /* scopeId */
  "data-v-13b2dd2e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/pic.png";

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * vue-viewload 资源懒加载vue2.0版，图片懒加载，可视区域加载，依赖vue.js。使用最新的API，建议在移动端使用
 * Author : 水煮菠菜 949395345@qq.com
 * Url : https://github.com/shuizhubocai
 * Date : 2017-4-27
 */

let _util = {
    /**
     * debounce 函数去抖
     * @param fn
     * @param delay
     * @returns {function()}
     */
    debounce: function (fn, delay) {
        let timer
        return () => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                fn.apply(this, arguments)
            }, delay)
        }
    },
    /**
     * getPicInfo 快速获取图片宽高，图片加载完回调
     * @param options 对象类型，包含{src:string, fastCallback:fn, loadedCallback:fn, errorCallback:fn}
     * @options  src是图片地址，fastCallback是快速获取到图片宽高后的回调函数，loadedCallback是图片加载完的回调函数，errorCallback是图片加载失败的回调函数
     * @params {isError: boolean, width:number: height:number}，回调函数参数
     */
    getPicInfo: function (options) {
        let src = options.src || '',
            fastCallback = options.fastCallback,
            loadedCallback = options.loadedCallback,
            errorCallback = options.errorCallback,
            pic = new Image(),
            params = {
                isError: false,
                width: 0,
                height: 0
            },
            rollpolling = function () {
                if (params.isError || pic.width > 0 || pic.height > 0) {
                    clearInterval(timer)
                    params.width = pic.width
                    params.height = pic.height
                    fastCallback && fastCallback(params)
                }
            },
            timer
        pic.src = src
        pic.addEventListener('error', function (e) {
            params.isError = true
            errorCallback && errorCallback(params)
        }, false)
        if (pic.complete) {
            params.width = pic.width
            params.height = pic.height
            fastCallback && fastCallback(params)
            loadedCallback && loadedCallback(params)
        } else {
            pic.addEventListener('load', function () {
                params.width = pic.width
                params.height = pic.height
                loadedCallback && loadedCallback(params)
            }, false)
            timer = setInterval(rollpolling, 50)
        }
    }
}

class VueViewload {
    /**
     * @attr  emptyPic              base64空白图片
     * @param defaultPic            默认加载中图片
     * @param errorPic              加载失败图片
     * @param threshold             距离可视范围偏移值，负值表示提前进入，正值表示延迟进入
     * @param container             容器，必须是id名称，默认为window
     * @param effectFadeIn          是否渐入显示，默认是false
     * @param callback(ele, src)    进入可视区域后的回调函数，接收两个参数：ele表示元素，src表示加载的资源
     * @attr  selector              集合数组[{ele:'', src:''}]，每一项是一个对象，ele表示元素，src表示加载的资源
     * @attr  status                资源加载状态属性值，loading表示还没加载，loaded表示加载完，error表示加载失败
     * @attr  event                 支持的事件
     */
    constructor (options) {
        this.emptyPic = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
        this.defaultPic = options && options.defaultPic || this.emptyPic
        this.errorPic = options && options.errorPic || this.emptyPic
        this.container = options && options.container || window
        this.threshold = options && parseInt(options.threshold, 10) || 0
        this.effectFadeIn = options && options.effectFadeIn || false
        this.callback = options && options.callback || new Function
        this.selector = options && options.selector || []
        this.event = ['scroll', 'resize']
        this.status = ['loading', 'loaded', 'error']
        this.delayRender = _util.debounce(this.render.bind(this), 200)
    }

    /**
     * inView 是否进入可视区域
     * @param ele
     * @returns {boolean}
     */
    inView (ele) {
        let isInView = false,
            rect = ele.getBoundingClientRect(),
            parentRect = this.container == window ? {left: 0, top: 0} : this.container.getBoundingClientRect(),
            viewWidth = this.container == window ? window.innerWidth : this.container.clientWidth,
            viewHeight = this.container == window ? window.innerHeight : this.container.clientHeight
        if (rect.bottom > this.threshold + parentRect.top && rect.top + this.threshold < viewHeight + parentRect.top && rect.right > this.threshold + parentRect.left && rect.left + this.threshold < viewWidth + parentRect.left) {
            isInView = true
        }
        return isInView
    }

    /**
     * bindUI 绑定UI事件
     */
    bindUI () {
        this.event.forEach((item, index) => {
            this.container.addEventListener(item, this.delayRender, false)
            if (this.container !== window && item == 'resize') {
                window.addEventListener(item, this.delayRender, false)
            }
        })
    }

    /**
     * unbindUI 删除UI事件
     */
    unbindUI () {
        this.event.forEach((item, index) => {
            this.container.removeEventListener(item, this.delayRender, false)
            if (this.container !== window && item == 'resize') {
                window.removeEventListener(item, this.delayRender, false)
            }
        })
    }

    /**
     * render 渲染资源
     * data-status属性 值包含：error加载失败，loading加载中，loaded加载完成
     */
    render () {
        if (!this.isLoadEvent) {
            this.isLoadEvent = true
            this.bindUI()
        }
        if (!this.selector.length) {
            this.unbindUI()
        }
        for (let i = 0; i < this.selector.length; i++) {
            let item = this.selector[i],
                eleType = item.ele.nodeName.toLowerCase()
            if (getComputedStyle(item.ele, null).display == 'none') {
                this.selector.splice(i--, 1)
                continue
            }
            if (eleType == 'img') {
                if (!item.ele.getAttribute('data-src')) {
                    item.ele.setAttribute('data-src', item.src)
                    item.ele.setAttribute('data-status', this.status[0])
                }
                if (!item.ele.getAttribute('src')) {
                    item.ele.setAttribute('src', this.defaultPic)
                }
            }
            if (this.inView(item.ele)) {
                if (eleType == 'img') {
                    _util.getPicInfo({
                        src: item.src,
                        errorCallback: (options) => {
                            item.ele.src = this.errorPic
                            item.ele.setAttribute('data-status', this.status[2])
                        },
                        loadedCallback: (options) => {
                            if (this.effectFadeIn) {
                                item.ele.style.opacity = 0
                            }
                            item.ele.src = options.isError ? this.errorPic : item.src
                            item.ele.removeAttribute('data-src')
                            item.ele.setAttribute('data-status', this.status[1])
                            setTimeout(() => {
                                item.ele.style.opacity = 1
                                item.ele.style.transition = 'all 1s'
                            }, 50)

                        }
                    })
                    this.callback(item.ele, item.src)
                } else {
                    typeof item.src == 'function' && item.src.call(item.ele)
                }
                this.selector.splice(i--, 1)
            }
        }
    }
}

/* harmony default export */ __webpack_exports__["a"] = ({
    /**
     * Vue插件 install方法
     * @param Vue
     * @param options options选项值和VueViewload类选项是一致的
     */
    install(Vue, options = {}) {
        let resourceEles = {},
            initRender
        Vue.directive('view', {
            bind(el, binding) {
                let containerName = binding.arg == undefined ? 'window' : binding.arg
                if (resourceEles[containerName] == undefined) {
                    resourceEles[containerName] = []
                }
                resourceEles[containerName].push({
                    ele: el,
                    src: binding.value
                })
                Vue.nextTick(() => {
                    if (typeof initRender == 'undefined') {
                        initRender = _util.debounce(function () {
                            for (let key in resourceEles) {
                                options.container = key == 'window' ? window : document.getElementById(key)
                                options.selector = resourceEles[key]
                                new VueViewload(options).render()
                            }
                        }, 200)
                    }
                    initRender()
                })
            }
        })
    }
});


/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(267)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(198),
  /* template */
  __webpack_require__(344),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

},[162]);