webpackJsonp([4],{

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__indexApp__ = __webpack_require__(93);
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
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_assets_js_Lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_Countdown__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_Countdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_Countdown__);





/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            login: false,
            lev: false,
            address: false,
            cart: false,
            code: false,
            personInfo: [],
            codeSrc: '',
            addressItem: [],
            postion: '宁波'
        };
    },

    computed: {
        phone: function phone() {
            if (this.personInfo.mob) {
                return this.personInfo.mob.slice(0, 2) + '******' + this.personInfo.mob.slice(8, 11);
            }
        }
    },
    methods: {
        exit: function exit() {
            __WEBPACK_IMPORTED_MODULE_0_assets_js_Lib__["a" /* default */].M.store.set('login', false);
            location.reload();
        },
        jLev1: function jLev1() {
            this.lev = true;
        },
        jLev2: function jLev2() {
            this.lev = false;
        },
        jAddress1: function jAddress1() {
            this.address = true;
        },
        jAddress2: function jAddress2() {
            this.address = false;
        },
        set: function set(e) {
            console.log(e);
            this.postion = e.nmCn;
            this.address = false;
        },
        jCode1: function jCode1() {
            this.code = true;
        },
        jCode2: function jCode2() {
            this.code = false;
        },
        jCart1: function jCart1() {
            this.cart = true;
        },
        jCart2: function jCart2() {
            this.cart = false;
        },
        del: function del(item, index) {
            var _this = this;

            this.axios.get(__WEBPACK_IMPORTED_MODULE_0_assets_js_Lib__["a" /* default */].C.url_mc + '/mall/bss/cart/del', {
                params: {
                    ipPk: this.userId,
                    prodPk: item.prodPk
                }
            }).then(function (res) {
                _this.carItems = res.data.data;
                _this.carItems.map(function (item) {
                    this.allNum = this.carItems.length;
                    this.allPrice += item.membAmt * item.qty;
                }.bind(_this));
            }).catch(function (err) {
                console.log(err);
            });

            var delArr = [item.prodPk, item.qty];
            this.lists.splice(index, 1);
            this.$emit('child-shop', {
                number: 0,
                price: 0
            });
            this.$emit('child-id', delArr);
            var str = 0;
            var str2 = 0;
            this.lists.map(function (item) {
                str = this.lists.length;

                str2 += item.membAmt * item.qty;
                this.$emit('child-shop', {
                    number: str,
                    price: str2
                });
            }.bind(this));

            if (!this.lists.length) {
                console.log('清空了');
                this.$emit('child-cutTime', '0');
            }
        },
        callback: function callback() {
            console.log('倒计时结束');
            this.lists.splice(0);
            this.$emit('child-shop', {
                number: 0,
                price: 0
            });
        },
        jTop: function jTop() {
            $('body').animate({ 'scrollTop': 0 });
        }
    },
    mounted: function mounted() {
        var _this2 = this;

        this.axios.get(__WEBPACK_IMPORTED_MODULE_0_assets_js_Lib__["a" /* default */].C.url_mc + '/mall/sys/sysCat/listByPrntCd', {
            params: {
                prntCd: 9014
            }
        }).then(function (res) {
            _this2.addressItem = res.data.data.items;
        }).catch(function (err) {
            console.log(err);
        });

        this.codeSrc = __WEBPACK_IMPORTED_MODULE_0_assets_js_Lib__["a" /* default */].C.url_mc + '/mall/bss/ip/QRCode?url=https://www.baidu.com/';

        if (__WEBPACK_IMPORTED_MODULE_0_assets_js_Lib__["a" /* default */].M.store.get('userInfo')) {
            this.userId = __WEBPACK_IMPORTED_MODULE_0_assets_js_Lib__["a" /* default */].M.store.get('userInfo').ipPk;
        }
        if (__WEBPACK_IMPORTED_MODULE_0_assets_js_Lib__["a" /* default */].M.store.get('login')) {
            this.login = true;

            this.axios.get(__WEBPACK_IMPORTED_MODULE_0_assets_js_Lib__["a" /* default */].C.url_mc + '/mall/bss/ip/user', {
                params: {
                    ipPk: this.userId
                }
            }).then(function (res) {
                _this2.personInfo = res.data.data;
            }).catch(function (err) {
                console.log(err);
            });
        }

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
        countDown: __WEBPACK_IMPORTED_MODULE_1_components_Countdown___default.a
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(5)))

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_assets_js_Lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_McHead__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_McHead___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_McHead__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_McFoot__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_McFoot___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_McFoot__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Countdown__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Countdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_Countdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_viewload__ = __webpack_require__(47);















__WEBPACK_IMPORTED_MODULE_5_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_6_vue_viewload__["a" /* default */], {
    threshold: -200,
    effectFadeIn: true
});

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            login: false,
            userId: '',

            siledItem: [],
            slide: [],
            shopItem: [],
            carItems: [],

            product: [],
            farm: [],

            allPrice: 0,
            allNum: 0,

            door: false,

            cutTime: '-999' };
    },

    components: {
        McHead: __WEBPACK_IMPORTED_MODULE_1_components_McHead___default.a, McFoot: __WEBPACK_IMPORTED_MODULE_2_components_McFoot___default.a, countDown: __WEBPACK_IMPORTED_MODULE_3_components_Countdown___default.a
    },
    beforeCreate: function beforeCreate() {},
    beforeMount: function beforeMount() {},
    mounted: function mounted() {
        var _this = this;

        if (__WEBPACK_IMPORTED_MODULE_0_assets_js_Lib__["a" /* default */].M.store.get('userInfo')) {
            this.userId = __WEBPACK_IMPORTED_MODULE_0_assets_js_Lib__["a" /* default */].M.store.get('userInfo').ipPk;
        }

        this.axios.get(__WEBPACK_IMPORTED_MODULE_0_assets_js_Lib__["a" /* default */].C.url_mc + '/mall/sys/sysCat/tree?methCd=9040').then(function (res) {
            _this.siledItem = res.data;
        }).catch(function (err) {
            console.log(err);
        });

        this.axios.get(__WEBPACK_IMPORTED_MODULE_0_assets_js_Lib__["a" /* default */].C.url_mc + '/mall/bss/ad/list?statCd=2210.170').then(function (res) {
            _this.slide = res.data.data.items;
        }).catch(function (err) {
            console.log(err);
        });


        this.axios.get(__WEBPACK_IMPORTED_MODULE_0_assets_js_Lib__["a" /* default */].C.url_mc + '/mall/bss/prod/list?t=' + Date.now()).then(function (res) {
            _this.shopItem = res.data.data;
            _this.door = true;
            var id = window.location.toString().split('#')[1];
            _this.$nextTick(function () {
                if (id) {
                    var t = __WEBPACK_IMPORTED_MODULE_4_jquery___default()('#' + id).offset().top;
                    __WEBPACK_IMPORTED_MODULE_4_jquery___default()(window).scrollTop(t);
                }
            });
        }).catch(function (err) {
            console.log(err);
        });

        this.axios.get(__WEBPACK_IMPORTED_MODULE_0_assets_js_Lib__["a" /* default */].C.url_mc + '/mall/bss/cart/cartList?t=' + Date.now(), {
            params: {
                ipPk: this.userId
            }
        }).then(function (res) {
            _this.carItems = res.data.data;
            _this.carItems.map(function (item) {
                this.allNum = this.carItems.length;
                this.allPrice += item.membAmt * item.qty;
                this.cutTime = String(res.data.data[0].effectiveTime / 1000);
            }.bind(_this));
        }).catch(function (err) {
            console.log(err);
        });

        this.axios.get(__WEBPACK_IMPORTED_MODULE_0_assets_js_Lib__["a" /* default */].C.url_mc + '/mall/bss/ad/list?statCd=2210.180').then(function (res) {
            _this.product = res.data.data.items;
        }).catch(function (err) {
            console.log(err);
        });

        this.axios.get(__WEBPACK_IMPORTED_MODULE_0_assets_js_Lib__["a" /* default */].C.url_mc + '/mall/bss/ad/list?statCd=2210.190').then(function (res) {
            _this.farm = res.data.data.items;
        }).catch(function (err) {
            console.log(err);
        });
    },

    methods: {
        getShop: function getShop(msg) {
            this.allNum = msg.number;
            this.allPrice = msg.price;
        },
        getTime: function getTime(msg) {
            this.cutTime = '0';
        },
        getId: function getId(msg) {
            console.log(msg[0], msg[1]);
            var This = this;

            for (var i = 0; i < this.shopItem.length; i++) {
                this.shopItem[i].prodRos.forEach(function (elem, index) {
                    if (msg[0] == elem.prodPk) {
                        elem.stock += msg[1];
                    }
                });
            }
        },
        jNav1: function jNav1(e) {
            __WEBPACK_IMPORTED_MODULE_4_jquery___default()('.m-float').hide();
            __WEBPACK_IMPORTED_MODULE_4_jquery___default()(e.currentTarget).find('.m-float').show();
        },
        jNav2: function jNav2(e) {
            __WEBPACK_IMPORTED_MODULE_4_jquery___default()('.m-float').hide();
        },
        look: function look(item) {
            var Qs = __webpack_require__(7);
            this.axios.post(__WEBPACK_IMPORTED_MODULE_0_assets_js_Lib__["a" /* default */].C.url_mc + '/mall/bss/prod/addProdBH', Qs.stringify({
                ipPk: this.userId,
                prodPk: item.prodPk
            })).then(function (res) {
                console.log(res.data);
            }).catch(function (err) {
                console.log(err);
            });
        },
        addShop: function addShop(item, index) {
            var _this2 = this;

            if (!__WEBPACK_IMPORTED_MODULE_0_assets_js_Lib__["a" /* default */].M.store.get('login')) {

                this.$alert('请先登录账号', '提示', {
                    confirmButtonText: '确定',
                    callback: function callback(action) {}
                });

                return false;
            }

            var Qs = __webpack_require__(7);

            this.axios.post(__WEBPACK_IMPORTED_MODULE_0_assets_js_Lib__["a" /* default */].C.url_mc + '/mall/bss/cart/add', Qs.stringify({
                ipPk: this.userId,
                prodPk: item.prodPk,
                prodNum: item.number
            }), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function (res) {
                console.log(res.data);
                if (res.data.status == 200) {
                    var add = function add(e) {
                        e.carItems.push({
                            imgUrl: item.imgUrl,
                            prodNm: item.nm,
                            membAmt: item.membAmt,
                            qty: item.number,
                            prodPk: item.prodPk
                        });
                    };

                    var sum = function sum(e) {
                        e.allNum = 0;
                        e.allPrice = 0;
                        e.carItems.map(function (item) {
                            e.allNum = e.carItems.length;
                            e.allPrice += item.membAmt * item.qty;
                        });
                    };

                    _this2.$alert('加入购物车成功', '提示', {
                        confirmButtonText: '确定',
                        callback: function callback(action) {}
                    });

                    ;

                    if (_this2.carItems.length) {
                        add(_this2);
                        var hash = {};
                        var newItems = [];
                        _this2.carItems.map(function (e, i) {
                            if (!hash[e.prodPk]) {
                                newItems.push(e);
                                hash[e.prodPk] = e;
                            } else {
                                hash[e.prodPk].qty += e.qty;
                            }
                        });
                        _this2.carItems = newItems;
                        sum(_this2);
                    } else {
                        console.log('第一次添加');
                        add(_this2);
                        sum(_this2);

                        _this2.axios.get(__WEBPACK_IMPORTED_MODULE_0_assets_js_Lib__["a" /* default */].C.url_mc + '/mall/bss/cart/cartList?t=' + Date.now(), {
                            params: {
                                ipPk: _this2.userId
                            }
                        }).then(function (res) {
                            _this2.cutTime = String(res.data.data[0].effectiveTime / 1000);
                        }).catch(function (err) {
                            console.log(err);
                        });
                    }

                    for (var i = 0; i < _this2.shopItem.length; i++) {
                        _this2.shopItem[i].prodRos.forEach(function (elem, index) {
                            if (item.prodPk == elem.prodPk) {

                                elem.stock -= item.number;
                            }
                        });
                    }

                    item.number = 1;
                    if (item.stock < 0) {
                        item.stock = 0;
                        return false;
                    }
                }
                if (res.data.status == 400) {
                    _this2.$alert('加入购物车失败', '提示', {
                        confirmButtonText: '确定',
                        callback: function callback(action) {}
                    });
                }
            }).catch(function (err) {
                console.log(err);
            });
        }
    }
});

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 283:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 333:
/***/ (function(module, exports) {

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
      "child-shop": _vm.getShop,
      "child-id": _vm.getId,
      "child-cutTime": _vm.getTime
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
  }, [_c('ul', [_vm._m(0), _vm._v(" "), _vm._l((_vm.siledItem), function(item, index) {
    return _c('li', {
      on: {
        "mouseenter": _vm.jNav1,
        "mouseleave": _vm.jNav2
      }
    }, [_c('p', [_c('span', [_vm._v(_vm._s(item.nmCn))])]), _vm._v(" "), _c('div', {
      staticClass: "m-float"
    }, _vm._l((item.childSysCatDtozList), function(val, index) {
      return _c('div', {
        staticClass: "item"
      }, [_c('h2', [_vm._v(_vm._s(val.nmCn) + " "), _c('i', {
        staticClass: "el-icon-arrow-right"
      })]), _vm._v(" "), _vm._l((val.childSysCatDtozList), function(atem, index) {
        return _c('a', {
          attrs: {
            "href": '../home/supermaket.html?id=' + atem.cd
          }
        }, [_vm._v(_vm._s(atem.nmCn))])
      })], 2)
    }))])
  })], 2)]), _vm._v(" "), _vm._m(1)])]), _vm._v(" "), _c('div', {
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
        "label": item.cd
      }
    }, [_c('a', {
      attrs: {
        "href": item.hrefUrl
      }
    }, [_c('img', {
      attrs: {
        "src": item.srcUrl,
        "alt": ""
      }
    })])])
  }))], 1), _vm._v(" "), (_vm.door) ? _c('div', {
    staticClass: "g-listed"
  }, [(_vm.shopItem[0].prodRos.length) ? _c('h2', [_vm._v("上市货")]) : _vm._e(), _vm._v(" "), _c('ul', {
    staticClass: "m-shop clearfix"
  }, _vm._l((_vm.shopItem[0].prodRos), function(item, index) {
    return _c('li', [_c('a', {
      attrs: {
        "href": 'detail.html?id=' + item.prodPk
      },
      on: {
        "click": function($event) {
          _vm.look(item)
        }
      }
    }, [_c('img', {
      directives: [{
        name: "view",
        rawName: "v-view",
        value: (item.imgUrl),
        expression: "item.imgUrl"
      }],
      attrs: {
        "alt": ""
      }
    })]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.nm))]), _vm._v(" "), _c('p', [_vm._v("库存:" + _vm._s(item.stock))]), _vm._v(" "), _c('p', [_vm._v("会员价："), _c('em', [_vm._v(_vm._s(_vm._f("currency")(item.membAmt)))])]), _vm._v(" "), _c('p', [_vm._v("市场价：" + _vm._s(_vm._f("currency")(item.markAmt)))]), _vm._v(" "), (item.stock != 0) ? _c('div', [_c('el-input-number', {
      attrs: {
        "size": "small",
        "min": 1,
        "max": Number(item.stock)
      },
      model: {
        value: (item.number),
        callback: function($$v) {
          item.number = $$v
        },
        expression: "item.number"
      }
    }), _vm._v(" "), _c('ins', {
      attrs: {
        "id": item.prodPk,
        "num": item.number,
        "price": item.membAmt
      },
      on: {
        "click": function($event) {
          _vm.addShop(item, index)
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), (item.stock == 0) ? _c('button', {
      staticClass: "u-button"
    }, [_vm._v("已售罄")]) : _vm._e()])
  }))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "g-content"
  }, [(_vm.door) ? _c('div', {
    staticClass: "g-shops",
    attrs: {
      "id": "A"
    }
  }, [(_vm.shopItem[1].prodRos.length) ? _c('h2', [_vm._v("VIP专区")]) : _vm._e(), _vm._v(" "), _c('ul', {
    staticClass: "m-shop clearfix"
  }, _vm._l((_vm.shopItem[1].prodRos), function(item, index) {
    return _c('li', [_c('a', {
      attrs: {
        "href": 'detail.html?id=' + item.prodPk
      },
      on: {
        "click": function($event) {
          _vm.look(item)
        }
      }
    }, [_c('img', {
      directives: [{
        name: "view",
        rawName: "v-view",
        value: (item.imgUrl),
        expression: "item.imgUrl"
      }],
      attrs: {
        "alt": ""
      }
    })]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.nm))]), _vm._v(" "), _c('p', [_vm._v("库存:" + _vm._s(item.stock))]), _vm._v(" "), _c('p', [_vm._v("会员价："), _c('em', [_vm._v(_vm._s(_vm._f("currency")(item.membAmt)))])]), _vm._v(" "), _c('p', [_vm._v("市场价：" + _vm._s(_vm._f("currency")(item.markAmt)))]), _vm._v(" "), (item.stock != 0) ? _c('div', [_c('el-input-number', {
      attrs: {
        "size": "small",
        "min": 1,
        "max": Number(item.stock)
      },
      model: {
        value: (item.number),
        callback: function($$v) {
          item.number = $$v
        },
        expression: "item.number"
      }
    }), _vm._v(" "), _c('ins', {
      attrs: {
        "id": item.prodPk,
        "num": item.number,
        "price": item.membAmt
      },
      on: {
        "click": function($event) {
          _vm.addShop(item, index)
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), (item.stock == 0) ? _c('button', {
      staticClass: "u-button"
    }, [_vm._v("已售罄")]) : _vm._e()])
  }))]) : _vm._e(), _vm._v(" "), (_vm.door) ? _c('div', {
    staticClass: "g-shops",
    attrs: {
      "id": "B"
    }
  }, [(_vm.shopItem[2].prodRos.length) ? _c('h2', {
    staticClass: "u-new3"
  }, [_vm._v("预售专区")]) : _vm._e(), _vm._v(" "), _c('ul', {
    staticClass: "m-shop clearfix"
  }, _vm._l((_vm.shopItem[2].prodRos), function(item, index) {
    return _c('li', [_c('a', {
      attrs: {
        "href": 'detail.html?id=' + item.prodPk
      },
      on: {
        "click": function($event) {
          _vm.look(item)
        }
      }
    }, [_c('img', {
      directives: [{
        name: "view",
        rawName: "v-view",
        value: (item.imgUrl),
        expression: "item.imgUrl"
      }],
      attrs: {
        "alt": ""
      }
    })]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.nm))]), _vm._v(" "), _c('p', [_vm._v("库存:" + _vm._s(item.stock))]), _vm._v(" "), _c('p', [_vm._v("会员价："), _c('em', [_vm._v(_vm._s(_vm._f("currency")(item.membAmt)))])]), _vm._v(" "), _c('p', [_vm._v("市场价：" + _vm._s(_vm._f("currency")(item.markAmt)))]), _vm._v(" "), (item.stock != 0) ? _c('div', [_c('el-input-number', {
      attrs: {
        "size": "small",
        "min": 1,
        "max": Number(item.stock)
      },
      model: {
        value: (item.number),
        callback: function($$v) {
          item.number = $$v
        },
        expression: "item.number"
      }
    }), _vm._v(" "), _c('ins', {
      attrs: {
        "id": item.prodPk,
        "num": item.number,
        "price": item.membAmt
      },
      on: {
        "click": function($event) {
          _vm.addShop(item, index)
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), (item.stock == 0) ? _c('button', {
      staticClass: "u-button"
    }, [_vm._v("已售罄")]) : _vm._e()])
  }))]) : _vm._e(), _vm._v(" "), (_vm.door) ? _c('div', {
    staticClass: "g-shops"
  }, [(_vm.shopItem[3].prodRos.length) ? _c('h2', {
    staticClass: "u-new2"
  }, [_vm._v("今日上架")]) : _vm._e(), _vm._v(" "), _c('ul', {
    staticClass: "m-shop clearfix"
  }, _vm._l((_vm.shopItem[3].prodRos), function(item, index) {
    return _c('li', [_c('a', {
      attrs: {
        "href": 'detail.html?id=' + item.prodPk
      },
      on: {
        "click": function($event) {
          _vm.look(item)
        }
      }
    }, [_c('img', {
      directives: [{
        name: "view",
        rawName: "v-view",
        value: (item.imgUrl),
        expression: "item.imgUrl"
      }],
      attrs: {
        "alt": ""
      }
    })]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.nm))]), _vm._v(" "), _c('p', [_vm._v("库存:" + _vm._s(item.stock))]), _vm._v(" "), _c('p', [_vm._v("会员价："), _c('em', [_vm._v(_vm._s(_vm._f("currency")(item.membAmt)))])]), _vm._v(" "), _c('p', [_vm._v("市场价：" + _vm._s(_vm._f("currency")(item.markAmt)))]), _vm._v(" "), (item.stock != 0) ? _c('div', [_c('el-input-number', {
      attrs: {
        "size": "small",
        "min": 1,
        "max": Number(item.stock)
      },
      model: {
        value: (item.number),
        callback: function($$v) {
          item.number = $$v
        },
        expression: "item.number"
      }
    }), _vm._v(" "), _c('ins', {
      attrs: {
        "id": item.prodPk,
        "num": item.number,
        "price": item.membAmt
      },
      on: {
        "click": function($event) {
          _vm.addShop(item, index)
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), (item.stock == 0) ? _c('button', {
      staticClass: "u-button"
    }, [_vm._v("已售罄")]) : _vm._e()])
  }))]) : _vm._e(), _vm._v(" "), (_vm.door) ? _c('div', {
    staticClass: "g-shops",
    attrs: {
      "id": "C"
    }
  }, [(_vm.shopItem[4].prodRos.length) ? _c('h2', {
    staticClass: "u-new4"
  }, [_vm._v("免耕专区")]) : _vm._e(), _vm._v(" "), _c('ul', {
    staticClass: "m-shop clearfix"
  }, _vm._l((_vm.shopItem[4].prodRos), function(item, index) {
    return _c('li', [_c('a', {
      attrs: {
        "href": 'detail.html?id=' + item.prodPk
      },
      on: {
        "click": function($event) {
          _vm.look(item)
        }
      }
    }, [_c('img', {
      directives: [{
        name: "view",
        rawName: "v-view",
        value: (item.imgUrl),
        expression: "item.imgUrl"
      }],
      attrs: {
        "alt": ""
      }
    })]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.nm))]), _vm._v(" "), _c('p', [_vm._v("库存:" + _vm._s(item.stock))]), _vm._v(" "), _c('p', [_vm._v("会员价："), _c('em', [_vm._v(_vm._s(_vm._f("currency")(item.membAmt)))])]), _vm._v(" "), _c('p', [_vm._v("市场价：" + _vm._s(_vm._f("currency")(item.markAmt)))]), _vm._v(" "), (item.stock != 0) ? _c('div', [_c('el-input-number', {
      attrs: {
        "size": "small",
        "min": 1,
        "max": Number(item.stock)
      },
      model: {
        value: (item.number),
        callback: function($$v) {
          item.number = $$v
        },
        expression: "item.number"
      }
    }), _vm._v(" "), _c('ins', {
      attrs: {
        "id": item.prodPk,
        "num": item.number,
        "price": item.membAmt
      },
      on: {
        "click": function($event) {
          _vm.addShop(item, index)
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), (item.stock == 0) ? _c('button', {
      staticClass: "u-button"
    }, [_vm._v("已售罄")]) : _vm._e()])
  }))]) : _vm._e(), _vm._v(" "), (_vm.door) ? _c('div', {
    staticClass: "g-shops"
  }, [(_vm.shopItem[5].prodRos.length) ? _c('h2', {
    staticClass: "u-new5"
  }, [_vm._v("天胜丽制")]) : _vm._e(), _vm._v(" "), _c('ul', {
    staticClass: "m-shop clearfix"
  }, _vm._l((_vm.shopItem[5].prodRos), function(item, index) {
    return _c('li', [_c('a', {
      attrs: {
        "href": 'detail.html?id=' + item.prodPk
      },
      on: {
        "click": function($event) {
          _vm.look(item)
        }
      }
    }, [_c('img', {
      directives: [{
        name: "view",
        rawName: "v-view",
        value: (item.imgUrl),
        expression: "item.imgUrl"
      }],
      attrs: {
        "alt": ""
      }
    })]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.nm))]), _vm._v(" "), _c('p', [_vm._v("库存:" + _vm._s(item.stock))]), _vm._v(" "), _c('p', [_vm._v("会员价："), _c('em', [_vm._v(_vm._s(_vm._f("currency")(item.membAmt)))])]), _vm._v(" "), _c('p', [_vm._v("市场价：" + _vm._s(_vm._f("currency")(item.markAmt)))]), _vm._v(" "), (item.stock != 0) ? _c('div', [_c('el-input-number', {
      attrs: {
        "size": "small",
        "min": 1,
        "max": Number(item.stock)
      },
      model: {
        value: (item.number),
        callback: function($$v) {
          item.number = $$v
        },
        expression: "item.number"
      }
    }), _vm._v(" "), _c('ins', {
      attrs: {
        "id": item.prodPk,
        "num": item.number,
        "price": item.membAmt
      },
      on: {
        "click": function($event) {
          _vm.addShop(item, index)
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), (item.stock == 0) ? _c('button', {
      staticClass: "u-button"
    }, [_vm._v("已售罄")]) : _vm._e()])
  }))]) : _vm._e(), _vm._v(" "), (_vm.door) ? _c('div', {
    staticClass: "g-shops",
    attrs: {
      "id": "D"
    }
  }, [(_vm.shopItem[6].prodRos.length) ? _c('h2', {
    staticClass: "u-new6"
  }, [_vm._v("闪送专区")]) : _vm._e(), _vm._v(" "), _c('ul', {
    staticClass: "m-shop clearfix"
  }, _vm._l((_vm.shopItem[6].prodRos), function(item, index) {
    return _c('li', [_c('a', {
      attrs: {
        "href": 'detail.html?id=' + item.prodPk
      },
      on: {
        "click": function($event) {
          _vm.look(item)
        }
      }
    }, [_c('img', {
      directives: [{
        name: "view",
        rawName: "v-view",
        value: (item.imgUrl),
        expression: "item.imgUrl"
      }],
      attrs: {
        "alt": ""
      }
    })]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.nm))]), _vm._v(" "), _c('p', [_vm._v("库存:" + _vm._s(item.stock))]), _vm._v(" "), _c('p', [_vm._v("会员价："), _c('em', [_vm._v(_vm._s(_vm._f("currency")(item.membAmt)))])]), _vm._v(" "), _c('p', [_vm._v("市场价：" + _vm._s(_vm._f("currency")(item.markAmt)))]), _vm._v(" "), (item.stock != 0) ? _c('div', [_c('el-input-number', {
      attrs: {
        "size": "small",
        "min": 1,
        "max": Number(item.stock)
      },
      model: {
        value: (item.number),
        callback: function($$v) {
          item.number = $$v
        },
        expression: "item.number"
      }
    }), _vm._v(" "), _c('ins', {
      attrs: {
        "id": item.prodPk,
        "num": item.number,
        "price": item.membAmt
      },
      on: {
        "click": function($event) {
          _vm.addShop(item, index)
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), (item.stock == 0) ? _c('button', {
      staticClass: "u-button"
    }, [_vm._v("已售罄")]) : _vm._e()])
  }))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "g-items"
  }, [_c('h2', {
    staticClass: "u-jc"
  }, [_vm._v("产品检测")]), _vm._v(" "), _vm._l((_vm.product), function(item) {
    return [_c('a', {
      attrs: {
        "href": item.hrefUrl
      }
    }, [_c('img', {
      directives: [{
        name: "view",
        rawName: "v-view",
        value: (item.srcUrl),
        expression: "item.srcUrl"
      }],
      attrs: {
        "alt": ""
      }
    })])]
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "g-items"
  }, [_c('h2', [_vm._v("农场风采")]), _vm._v(" "), _vm._l((_vm.farm), function(item) {
    return [_c('a', {
      attrs: {
        "href": item.hrefUrl
      }
    }, [_c('img', {
      directives: [{
        name: "view",
        rawName: "v-view",
        value: (item.srcUrl),
        expression: "item.srcUrl"
      }],
      attrs: {
        "alt": ""
      }
    })])]
  })], 2)]), _vm._v(" "), _c('McFoot')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('p', [_vm._v("全部分类")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-nav"
  }, [_c('a', {
    attrs: {
      "href": "#A"
    }
  }, [_vm._v("VIP专区")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "#B"
    }
  }, [_vm._v("预售专区")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "#C"
    }
  }, [_vm._v("免耕专区")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "#D"
    }
  }, [_vm._v("闪送专区")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "../notice/packge.html"
    }
  }, [_vm._v("宅配套餐")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "card.html"
    }
  }, [_vm._v("卡卷专区")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("增值服务")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("科普体验")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "../notice/list.html"
    }
  }, [_vm._v("农场日志")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "supermaket.html"
    }
  }, [_vm._v("产品大全")])])
}]}

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-head clearfix"
  }, [_c('div', {
    staticClass: "m-top clearfix"
  }, [_c('div', {
    staticClass: "m-content"
  }, [(!_vm.login) ? _c('div', {
    staticClass: "m-login"
  }, [_vm._v("\n          欢迎登录天胜农牧，请 "), _c('a', {
    attrs: {
      "href": "login.html"
    }
  }, [_vm._v("登录")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "register.html"
    }
  }, [_vm._v("注册")])]) : _vm._e(), _vm._v(" "), (_vm.login) ? _c('div', {
    staticClass: "m-lev",
    on: {
      "mouseenter": _vm.jLev1,
      "mouseleave": _vm.jLev2
    }
  }, [_c('p', {
    class: {
      'f-active': _vm.lev
    }
  }, [_c('a', {
    attrs: {
      "href": "../center/router.html#/index"
    }
  }, [_c('span', [_vm._v("您好！" + _vm._s(_vm.phone) + " "), _c('i', {
    staticClass: "el-icon-arrow-down"
  })])])]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.lev),
      expression: "lev"
    }],
    staticClass: "u-lev"
  }, [_c('h2', [_vm._v(_vm._s(_vm.phone)), _c('em', {
    on: {
      "click": _vm.exit
    }
  }, [_vm._v("退出")])]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "../center/router.html#/index"
    }
  }, [_c('ul', {
    staticClass: "clearfix"
  }, [_c('li', [_c('h3', [_vm._v("级别")]), _vm._v(" "), _c('h4', [_vm._v(_vm._s(_vm.personInfo.memRankNmCn))])]), _vm._v(" "), _c('li', [_c('h3', [_vm._v("积分")]), _vm._v(" "), _c('h4', [_vm._v(_vm._s(_vm.personInfo.pointQty) + "分（" + _vm._s(_vm._f("currency")(_vm.personInfo.pointQty * _vm.personInfo.pointRule, '')) + "元）")])]), _vm._v(" "), _c('li', [_c('h3', [_vm._v("余额")]), _vm._v(" "), _c('h4', [_vm._v(_vm._s(_vm._f("currency")(_vm.personInfo.balaAmt, '')) + "元")])])])])])])], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "m-address",
    on: {
      "mouseenter": _vm.jAddress1,
      "mouseleave": _vm.jAddress2
    }
  }, [_c('h2', {
    class: {
      'f-active': _vm.address
    }
  }, [_vm._v("基地："), _c('span', [_vm._v(_vm._s(_vm.postion))]), _vm._v(" "), _c('i', {
    staticClass: "el-icon-arrow-down"
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.address),
      expression: "address"
    }]
  }, _vm._l((_vm.addressItem), function(item, index) {
    return _c('span', {
      staticStyle: {
        "margin-right": "20px"
      },
      attrs: {
        "rel": item.nmCn
      },
      on: {
        "click": function($event) {
          _vm.set(item)
        }
      }
    }, [_vm._v(_vm._s(item.desc))])
  }))]), _vm._v(" "), _c('div', {
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
        "src": item.imgUrl,
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "middle"
    }, [_c('p', [_vm._v(" " + _vm._s(item.prodNm) + "   "), _c('span', [_vm._v("￥" + _vm._s(item.membAmt) + " "), _c('em', [_c('ins', [_vm._v("X")]), _vm._v(_vm._s(item.qty))])])]), _vm._v(" "), _c('p')])]), _vm._v(" "), _c('button', {
      attrs: {
        "rel": item.cartPk
      },
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
  }, [_c('p', [_vm._v("共 " + _vm._s(_vm.allNum) + " 件商品 ")]), _vm._v(" "), _c('p', [_c('em', [_vm._v("￥")]), _vm._v(_vm._s(_vm._f("currency")(_vm.allPrice, '')))])]), _vm._v(" "), _vm._m(0)])])]), _vm._v(" "), _c('ul', {
    staticClass: "m-nav"
  }, [_vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('li', {
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
      "src": _vm.codeSrc,
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("关注微信公众号")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "m-bottom"
  }, [_c('div', {
    staticClass: "m-content"
  }, [_vm._m(4), _vm._v(" "), _vm._t("u-search"), _vm._v(" "), _c('div', {
    staticClass: "g-float"
  }, [_c('div', {
    staticClass: "j-time"
  }, [_c('p', [_vm._v("倒计时")]), _vm._v(" "), _c('count-down', {
    attrs: {
      "endTime": _vm.cutTime,
      "callback": _vm.callback,
      "endText": "结束"
    }
  })], 1), _vm._v(" "), _c('ul', [_vm._m(5), _vm._v(" "), _c('li'), _vm._v(" "), _c('li', {
    on: {
      "click": _vm.jTop
    }
  })])])], 2)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "right"
  }, [_c('a', {
    attrs: {
      "href": "../shopping/first.html"
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
      "href": "../notice/active.html"
    }
  }, [_vm._v("最新促销")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('a', {
    attrs: {
      "href": "../center/router.html#/order"
    }
  }, [_vm._v("我的订单")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    attrs: {
      "href": "../home/index.html"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(27),
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('a', {
    attrs: {
      "href": "../shopping/first.html"
    }
  })])
}]}

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(283)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(177),
  /* template */
  __webpack_require__(353),
  /* scopeId */
  "data-v-67420d7e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 47:
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

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(263)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(196),
  /* template */
  __webpack_require__(333),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

},[160]);