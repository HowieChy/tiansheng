
<template>
  <div class="g-head clearfix">

      <div class="m-top clearfix">
        <div class="m-content">
          <!--等级状态-->
          <div class="m-login" v-if="!login">
            欢迎登录天胜农牧，请 <a href="login.html">登录</a> <a href="register.html">注册</a>
          </div>
          <div class="m-lev" v-if="login"  @mouseenter="jLev1" @mouseleave="jLev2">
            <p :class="{'f-active':lev}"><a href="../center/router.html#/index"><span>您好！{{phone}} <i class="el-icon-arrow-down"></i></span></a></p>
            <transition name="fade">
              <div class="u-lev" v-show="lev">
                <h2>{{phone}}<em @click="exit">退出</em></h2>
                <a href="../center/router.html#/index">
                  <ul class="clearfix">
                    <li>
                      <h3>级别</h3>
                      <h4>{{personInfo.memRankNmCn}}</h4>
                      <!--<strong></strong>-->
                    </li>
                    <li>
                      <h3>积分</h3>
                      <h4>{{personInfo.pointQty }}分（{{personInfo.pointQty*personInfo.pointRule |currency('')}}元）</h4>
                      <!--<strong></strong>-->
                    </li>
                    <li>
                      <h3>余额</h3>
                      <h4>{{personInfo.balaAmt|currency('')}}元</h4>
                    </li>
                  </ul>
                </a>
              </div>
            </transition>
          </div>

          <!--选择地区-->
          <div  class="m-address"  @mouseenter="jAddress1" @mouseleave="jAddress2">
            <h2 :class="{'f-active':address}">基地：<span>{{postion}}</span>
              <!--<svg class="icon" aria-hidden="true">-->
                <!--<use xlink:href="#icon-moreunfold"></use>-->
              <!--</svg>-->
              <i class="el-icon-arrow-down"></i>
            </h2>
            <div v-show="address">
              <span @click="set(item)" v-for="(item,index) in addressItem" style="margin-right: 20px" :rel="item.nmCn">{{item.desc}}</span>
            </div>
          </div>

          <!--购物车-->
          <div class="g-cart"  @mouseenter="jCart1" @mouseleave="jCart2">
            <h3 :class="{'f-active':cart}"><span>天胜菜篮子（ {{allNum}} ）</span></h3>
            <div class="m-cart" v-show="cart">
              <div class="content">
                <ul>
                  <li class="clearfix" v-for="(item,index) in lists">
                    <a href="">
                      <img :src="item.imgUrl" alt="">
                      <div class="middle">
                        <p> {{item.prodNm}}   <span>￥{{item.membAmt}} <em><ins>X</ins>{{item.qty}}</em></span></p>
                        <p></p>
                      </div>
                    </a>
                    <button :rel="item.cartPk" @click="del(item,index)">删除</button>
                  </li>
                </ul>
              </div>
              <div class="bottom clearfix">
                <div class="left">
                  <p>共 {{allNum}} 件商品 </p>
                  <p><em>￥</em>{{allPrice |currency('')}}</p>
                </div>
                <div class="right">
                  <a href="../shopping/first.html">去购物车结算</a>
                </div>
              </div>
            </div>
          </div>

          <!--右侧导航-->
          <ul class="m-nav">
            <li><a href="">商城公告</a></li>
            <li><a href="../notice/active.html">最新促销</a></li>
            <li><a href="../center/router.html#/order">我的订单</a></li>
            <li :class="{'f-active':code}"  @mouseenter="jCode1" @mouseleave="jCode2" class="m-code">
              <a  href="javascript:;">掌上天胜</a>
              <div  v-show="code">
                <img :src="codeSrc" alt="">
                <p>关注微信公众号</p>
              </div>
            </li>
          </ul>


        </div>
      </div>

      <div class="m-bottom">
        <div class="m-content">
          <!--LOGO-->
          <a href="../home/index.html">  <img src="../assets/images/logo.png" alt=""></a>

          <!--搜索-->

          <slot name="u-search"></slot>

          <!--悬浮导航-->
          <div class="g-float">
            <div  class="j-time">
              <p>倒计时</p>
              <count-down :endTime="cutTime" :callback="callback" endText="结束"></count-down>
            </div>
            <ul>

              <li><a href="../shopping/first.html"></a></li>
              <li></li>
              <li @click="jTop"></li>
            </ul>
          </div>
        </div>
      </div>





  </div>
</template>

<script>
    import Lib from 'assets/js/Lib';
    import countDown from 'components/Countdown';

    export default {

        data () {
            return {
                num:'',
                login:false, //登录状态
                lev:false,
                address:false,
                cart:false,
                code:false,
                personInfo:[],//个人信息
                codeSrc:'',//二维码
                addressItem:[],//地址定位
                postion:'宁波',
            }
        },
        computed:{
            //手机号加星号
          phone(){
              if(this.personInfo.mob){
                  return this.personInfo.mob.slice(0,2)+'******'+this.personInfo.mob.slice(8,11)
              }
          }
        },
        methods:{
            //登出
            exit(){
                Lib.M.store.set('login', false);
                location.reload()
            },
            //等级事件
            jLev1(){
                this.lev=true;
            },
            jLev2(){
                this.lev=false;
            },
            //地区选择事件
            jAddress1(){
                this.address=true;
            },
            jAddress2(){
                this.address=false;
            },
            set(e){
                console.log(e);
                this.postion=e.nmCn;
                this.address=false;
            },
            //二维码
            jCode1(){
                this.code=true;
            },
            jCode2(){
                this.code=false;
            },
            //购物车
            jCart1(){
                this.cart=true;
            },
            jCart2(){
                this.cart=false;
            },

            //购物车删除
            del(item,index){
                //删除商品
                this.axios.get(Lib.C.url_mc+'/mall/bss/cart/del',{
                    params:{
                        ipPk:this.userId,
                        prodPk:item.prodPk
                    }
                })
                    .then(res=>{
                        this.carItems=res.data.data;
                        this.carItems.map(function (item) {
                            this.allNum=this.carItems.length;
                            this.allPrice+=item.membAmt*item.qty;
                            //console.log(this.allNum,this.allPrice)
                        }.bind(this));

                    }).catch(err=>{
                    console.log(err);
                });
                //console.log(this.lists);
                var delArr=[item.prodPk,item.qty];//获取删除商品的ID，数量
                this.lists.splice(index,1);   //删除商品
                this.$emit('child-shop',{
                    number:0,
                    price:0
                });
                this.$emit('child-id',delArr); //传删除的ID，数量
                var str=0;
                var str2=0;
                this.lists.map(function (item) {
                    str=this.lists.length;
                    //str+=parseInt(item.num)
                    str2+=item.membAmt*item.qty;
                    this.$emit('child-shop',{
                        number:str,
                        price:str2
                    })
                    //传总共多少件商品,购物车总价格
                }.bind(this));

                if(!this.lists.length){
                    console.log('清空了');
                    this.$emit('child-cutTime','0')
                }
            },
            //倒计时结束回调
            callback(){
                console.log('倒计时结束');
                this.lists.splice(0);
                this.$emit('child-shop',{
                    number:0,
                    price:0
                })
            },

            //返回顶部
            jTop(){
                $('body').animate({'scrollTop':0})
            }
        },
        mounted(){
            //获取定位信息
            this.axios.get(Lib.C.url_mc+'/mall/sys/sysCat/listByPrntCd',{
                params:{
                    prntCd:9014,
                }
            })
                .then(res=>{
                    this.addressItem=res.data.data.items;
                }).catch(err=>{
                console.log(err);
            });
            //二维码
            this.codeSrc=Lib.C.url_mc+'/mall/bss/ip/QRCode?url=https://www.baidu.com/';

            //获取uerId
            if(Lib.M.store.get('userInfo')){
                this.userId=Lib.M.store.get('userInfo').ipPk;
               // console.log(this.userId)
            }
            if(Lib.M.store.get('login')){
                this.login=true;
                //获取个人信息
                this.axios.get(Lib.C.url_mc+'/mall/bss/ip/user',{
                    params:{
                        ipPk:this.userId,
                    }
                })
                    .then(res=>{
                        console.log(res.data)
                        switch (res.data.data.catCd){
                            case '3090.100': //VIP
                                this.num=0;

                                break;
                            case '3090.110':
                                this.num=2;//团员

                                break;
                            case '3090.120': //团长
                                this.num=1;

                                break;
                        }

                        Lib.M.store.set('buy', this.num);
                        this.personInfo=res.data.data;
                    }).catch(err=>{
                    console.log(err);
                });
            }
            //悬浮
            function throttle(method, context) {
                clearTimeout(method.tId);
                method.tId = setTimeout(function(){
                    method.call(context);
                },100);
            }
            function myFunc() {
               $('.g-float').animate({'top':$(document).scrollTop()+150})
           }
            $(document).scroll(function () {
                throttle(myFunc);
            })
        },


        props:['lists','allNum','allPrice','cutTime'],
        components: {
            countDown
        },
    }

</script>


<style scoped lang="less" >
  @active-color:#30b947;

  /*字体图标*/
  .icon {
    /* 通过设置 font-size 来改变图标大小 */
    width: 20px;
    height: 20px;
    margin: 0 20px;
    /* 图标和文字相邻时，垂直对齐 */
    vertical-align: -5px;
    /* 通过设置 color 来改变 SVG 的颜色/fill */
    fill: currentColor;
    /* path 和 stroke 溢出 viewBox 部分在 IE 下会显示
       normalize.css 中也包含这行 */
    overflow: hidden;
  }
  .m-login{
    display: inline-block;
    margin-right: 20px;
    a{
      margin-left: 10px;
    }
  }
  .g-head{
    width: 100%;

    .m-content{
      width: 1200px;
      margin: 0 auto;
      position: relative;
    }
    .m-top{
      background:#f1f1f1;
      -moz-user-select:none;/*火狐*/
      -webkit-user-select:none;/*webkit浏览器*/
      -ms-user-select:none;/*IE10*/
      -khtml-user-select:none;/*早期浏览器*/
      user-select:none;

    /*等级*/
  .m-lev{
        height: 40px;
        line-height: 40px;
        display: inline-block;
        position: relative;
        cursor:pointer;
        p{
          text-indent: 14px;
          border-right: 1px solid #f1f1f1;
        }
        span{
          border-right: 1px solid #ddd;
        }
        i{
          font-size: 14px;
          margin:  0 20px 0 8px;
          color: #999;
        }
        .u-lev{
          position: absolute;
          line-height: normal;
          background: #fff;
          z-index: 9999;
          padding: 30px;
          width: 360px;
          border: 1px solid #ddd;
          top: 40px;
          em{
            float: right;
            cursor: pointer;
          }
          ul{
            display: flex;
          }
          li{
            float: left;
            text-align: center;
            flex: 1;
            position: relative;
            strong{
              position: absolute;
              width: 1px;
              height: 40px;
              background: #999;
              left: 110px;
              top: 50px;
            }
          }
          li:nth-child(2){
            strong{
              left: 133px;
              top: 50px;
            }
          }
          h3{
            margin: 30px 0;
            color: #666;
          }
          h4{
            margin-bottom: 20px;
          }
        }
        .f-active{
          background: #fff;
          border-right: 1px solid #ddd;
          border-left: 1px solid #ddd;
          color: @active-color;
          position: relative;
          z-index: 99;
          border-bottom: 1px solid #fff;
          i{
            color: @active-color;
          }
          span{
            border-right: none;
          }
        }
      }
      /*地区*/
      .m-address{
        height: 40px;
        line-height: 40px;
        display: inline-block;
        text-indent: 50px;
        cursor:pointer;
        position: relative;
        h2{
          background: url("../assets/images/address1.png") no-repeat 20px 50%;
        }
        i{
          font-size: 14px;
          margin:  0 20px;
          color: #999;
          text-indent: 0;
        }
        .f-active{
          color: @active-color;
          position: relative;
          z-index: 99;
          border-left: 1px solid #ddd;
          border-right: 1px solid #ddd;
          border-bottom: 1px solid #fff;
          background: url("../assets/images/address2.png") no-repeat 20px 50%;
        }
        div{
          width: 300px;
          height: 100px;
          position: absolute;
          background: #fff;
          border: 1px solid #ddd;
          z-index: 9;
          top: 40px;
        }
      }
      /*右侧导航*/
      .m-nav{
        float: right;
        height: 40px;
        line-height: 40px;
        cursor:pointer;
        a:hover{
          text-decoration: none;
          color: @active-color;
        }
        li{
          float: left;
          a{
            padding: 0 20px;
            border-left: 1px solid #ddd;
          }
        }
        li:first-of-type{
          a{
            border: none;
          }
        }

      }
      /*二维码*/
      .m-code{
        position: relative;
        a{

          position: relative;
          z-index: 99;


        }
        div{
          position: absolute;
          padding: 35px 35px 20px 35px;
          left: -127px;
          border:1px solid #ddd;
          background: #fff;
          text-align: center;
          top:40px;
          z-index:999;
          p{
            font-size: 22px;
          }
          img{
            width: 270px;
            height: 270px;
          }
        }
        &.f-active{
          a{
            height: 40px;
            display: inline-block;
            background: #fff;
            color: @active-color;
            border-left: 1px solid #ddd;
            border-right:  1px solid #ddd;
            border-bottom: 1px solid #fff;
          }
        }
      }
      /*购物车*/
      .g-cart{
        background: #e0e0e0;
        float: right;
        height: 40px;
        width: 174px;
        line-height: 40px;
        text-align: center;
        position: relative;
        color: #999;
        h3{
          cursor:pointer;
          background: url("../assets/images/cart1.png") no-repeat 20px 50%;
          padding-left: 20px;
        }
        .f-active{
            color: @active-color;
            background: url("../assets/images/cart2.png") no-repeat 19px 50%;
            border-bottom: 1px solid #fff;
            z-index: 999;
            position: relative;
            border-left: 1px solid #ddd;
            border-right: 1px solid #ddd;
        }
        .content{
          max-height: 323px;
          overflow: hidden;
        }
        .bottom{
          background: #f6f6f6;
          padding: 25px 30px;
          .left{
            float: left;
            text-align: left;
            em{
              font-size: 12px;
            }
            p:last-child{
              color: #fe3000;
              font-size: 18px;
            }
          }
          .right{
            float: right;
            a{
              margin-top: 20px;
              width: 186px;
              height: 54px;
              background: #fe3000;
              color: #fff;
              line-height: 54px;
              text-align: center;
              display: inline-block;
              font-size: 18px;
              cursor: pointer;
            }
            a:hover{
              text-decoration: none;
            }
          }
        }
        ul{
          max-height: 322px;
          overflow-y: auto;

        }

      }
      .m-cart{
        position: absolute;
        background: #fff;
        z-index: 9999;
        border: 1px solid #ddd;
        width: 510px;
        left: -338px;
        top:40px;
        li{
          padding:  30px;
          border-bottom: 1px solid #ddd;
          .middle{
            display: inline-block;
            width: 220px;
            text-align: left;
          }
          span{
            float: right;
            color:#ff2d03 ;
            em{
              color: #999;
              margin-left: 10px;
            }
            ins{
              font-size: 12px;
            }
          }
          button{
            float: right;
            border: none;
            background: #fff;
            height: 45px;
            border-left: 1px solid #ddd;
            padding-left: 30px;
            margin-top: 20px;
            font-size: 16px;
            cursor: pointer;

          }
        }
        img{
          width: 98px;
          height: 98px;
          border: 1px solid #ddd;
          float: left;
        }
      }
    }
    .m-bottom{
      padding: 25px 0;
      background: #fff;
      .m-search{
        float: right;
        height: 48px;
        border: 1px solid #ddd;
        margin-top: 4px;
        input{
          width: 300px;
          padding-left: 30px;
          border: none;

        }
      }
      i{
        width: 48px;
        height: 48px;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        color: #999;
        border-left: 1px solid #ddd;
        cursor: pointer;
      }
    }

  }
  /*悬浮导航*/
  .g-float{
    position: absolute;
    left: 1300px;
    top: 150px;
    z-index: 999;

    div{
      width: 74px;
      height: 64px;
      border: 1px solid #ff2d03;
      text-align: center;
      color: #ff2d03;
      margin-bottom: 4px;
      background: #fff;
      p{
        margin:10px 0 5px 0;
      }
    }
    li{
      cursor: pointer;
      margin-bottom: 10px;
      width: 76px;
      height: 66px;
      background: url("../assets/images/home1.png") no-repeat ;
  a{
    display: inline-block;
    width: 100%;
    height: 100%;
  }
    }
    li:nth-of-type(2){
      background: url("../assets/images/home2.png") no-repeat ;
    }
    li:nth-of-type(3){
      background: url("../assets/images/home3.png") no-repeat ;
    }
    li:nth-of-type(1):hover{
      background: url("../assets/images/home4.png") no-repeat ;
    }
    li:nth-of-type(2):hover{
      background: url("../assets/images/home5.png") no-repeat ;
    }
    li:nth-of-type(3):hover{
      background: url("../assets/images/home6.png") no-repeat ;
    }
  }
  @media screen and (max-width: 1366px) {
      .g-float{
        left: 1190px;
        top: 150px;
    }
  }


  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to  {
    opacity: 0
  }
</style>
