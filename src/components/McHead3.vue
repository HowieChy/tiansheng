
<template>
  <div class="g-head clearfix">

      <div class="m-top clearfix">
        <div class="m-content">
          <!--等级状态-->
          <div class="m-login" v-if="!login">
            欢迎登录天胜农牧，请 <a href="login.html">登录</a> <a href="register.html">注册</a>
          </div>
          <div class="m-lev" v-if="login"  @mouseenter="jLev1" @mouseleave="jLev2">
            <p :class="{'f-active':lev}"><span>您好！{{phone}} <i class="el-icon-arrow-down"></i></span></p>
            <div class="u-lev" v-show="lev">
              <h2>{{phone}}<em @click="exit">退出</em></h2>
              <ul class="clearfix">
                <li>
                  <h3>级别</h3>
                  <h4>{{personInfo.memRankNmCn}}普通会员</h4>
                  <strong></strong>
                </li>
                <li>
                  <h3>积分</h3>
                  <h4>45分（4.5元）</h4>
                  <strong></strong>
                </li>
                <li>
                  <h3>余额</h3>
                  <h4>500.00元</h4>
                </li>
              </ul>
            </div>
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
                  <a href="">去购物车结算</a>
                </div>
              </div>
            </div>
          </div>

          <!--右侧导航-->
          <ul class="m-nav">
            <li><a href="">商城公告</a></li>
            <li><a href="">最新活动</a></li>
            <li><a href="">我的订单</a></li>
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
          <img src="../assets/images/logo.png" alt="">

          <!--搜索-->

          <slot name="u-search"></slot>

          <!--悬浮导航-->
          <div class="g-float">
            <div  class="j-time">
              <p>剩余时间</p>
              <count-down :endTime="cutTime" :callback="callback" endText="0S"></count-down>
            </div>
            <ul>
              <li></li>
              <li></li>
              <li @click="jTop"></li>
            </ul>
          </div>
        </div>
      </div>


    <!--导航-->
    <div class="g-nav">
      <div class="content">
        <div class="m-all" @mouseleave="jOpen2" v-show="open" >
          <ul>
            <li>
              <p>全部分类</p>
            </li>
            <li @mouseenter="jNav1" @mouseleave="jNav2">
              <p><span>天生好菜</span></p>
              <div class="m-float">
                <div class="item">
                  <h2>蔬菜 <i class="el-icon-arrow-right"></i></h2>
                  <a href="home.html#aaa">青菜</a><a href="">萝卜</a>
                </div>
                <div class="item">
                  <h2>蔬菜 <i class="el-icon-arrow-right"></i></h2>
                  <a href="">青菜</a><a href="">萝卜</a><a href="">西瓜</a>
                </div>
              </div>
            </li>
            <li @mouseenter="jNav1" @mouseleave="jNav2">
              <p><span>天滋美肉</span></p>
              <div class="m-float">
                <div class="item">
                  <h2>蔬菜 <i class="el-icon-arrow-right"></i></h2>
                  <a href="">新西兰柠檬</a><a href="">青菜</a><a href="">萝卜</a><a href="">西瓜</a><a href="">新西兰柠檬</a><a href="">青菜</a><a href="">萝卜</a>
                </div>
                <div class="item">
                  <h2>蔬菜 <i class="el-icon-arrow-right"></i></h2>
                  <a href="">青菜</a><a href="">萝卜</a><a href="">西瓜</a>
                </div>
              </div>
            </li>
            <li @mouseenter="jNav1" @mouseleave="jNav2">
              <p><span>天天有鱼</span></p>
              <div class="m-float">
                <div class="item">
                  <h2>蔬菜 <i class="el-icon-arrow-right"></i></h2>
                  <a href="">青菜</a><a href="">萝卜</a><a href="">西瓜</a>
                </div>
              </div>
            </li>
            <li @mouseenter="jNav1" @mouseleave="jNav2">
              <p><span>原生好蛋</span></p>
              <div class="m-float">
                <div class="item">
                  <h2>蔬菜 <i class="el-icon-arrow-right"></i></h2>
                  <a href="">青菜</a><a href="">新西兰柠檬</a><a href="">青菜</a><a href="">萝卜</a><a href="">西瓜</a><a href="">新西兰柠檬</a><a href="">青菜</a><a href="">萝卜</a><a href="">西瓜</a><a href="">新西兰柠檬</a><a href="">青菜</a><a href="">萝卜</a>
                </div>
                <div class="item">
                  <h2>蔬菜 <i class="el-icon-arrow-right"></i></h2>
                  <a href="">青菜</a><a href="">萝卜</a><a href="">西瓜</a>
                </div>
                <div class="item">
                  <h2>蔬菜 <i class="el-icon-arrow-right"></i></h2>
                  <a href="">青菜</a><a href="">萝卜</a><a href="">西瓜</a>
                </div>
              </div>
            </li>
            <li @mouseenter="jNav1" @mouseleave="jNav2">
              <p><span>天赐好粮</span></p>
              <div class="m-float">
                <div class="item">
                  <h2>蔬菜 <i class="el-icon-arrow-right"></i></h2>
                  <a href="">青菜</a><a href="">新西兰柠檬</a><a href="">青菜</a><a href="">萝卜</a><a href="">西瓜</a><a href="">新西兰柠檬</a><a href="">青菜</a><a href="">萝卜</a><a href="">西瓜</a><a href="">新西兰柠檬</a><a href="">青菜</a><a href="">萝卜</a>
                </div>
                <div class="item">
                  <h2>蔬菜 <i class="el-icon-arrow-right"></i></h2>
                  <a href="">青菜</a><a href="">萝卜</a><a href="">西瓜</a>
                </div>
                <div class="item">
                  <h2>蔬菜 <i class="el-icon-arrow-right"></i></h2>
                  <a href="">青菜</a><a href="">萝卜</a><a href="">西瓜</a>
                </div>
              </div>
            </li>
            <li @mouseenter="jNav1" @mouseleave="jNav2">
              <p><span>果色天香</span></p>
              <div class="m-float">
                <div class="item">
                  <h2>蔬菜 <i class="el-icon-arrow-right"></i></h2>
                  <a href="">青菜</a><a href="">新西兰柠檬</a><a href="">青菜</a><a href="">萝卜</a><a href="">西瓜</a><a href="">新西兰柠檬</a><a href="">青菜</a><a href="">萝卜</a><a href="">西瓜</a><a href="">新西兰柠檬</a><a href="">青菜</a><a href="">萝卜</a>
                </div>
                <div class="item">
                  <h2>蔬菜 <i class="el-icon-arrow-right"></i></h2>
                  <a href="">青菜</a><a href="">萝卜</a><a href="">西瓜</a>
                </div>
              </div>

            </li>
            <li @mouseenter="jNav1" @mouseleave="jNav2">
              <p><span>天生丽制</span></p>
              <div class="m-float" >
                <div class="item">
                  <h2>蔬菜 <i class="el-icon-arrow-right"></i></h2>
                  <a href="">青菜</a><a href="">萝卜</a><a href="">西瓜</a><a href="">新西兰柠檬</a><a href="">青菜</a><a href="">萝卜</a>
                </div>
                <div class="item">
                  <h2>蔬菜 <i class="el-icon-arrow-right"></i></h2>
                  <a href="">青菜</a><a href="">萝卜</a><a href="">西瓜</a>
                </div>
              </div>
            </li>
            <li @mouseenter="jNav1" @mouseleave="jNav2">
              <p><span>天作之盒</span></p>
              <div class="m-float" >
                <div class="item">
                  <h2>蔬菜 <i class="el-icon-arrow-right"></i></h2>
                  <a href="">青菜</a><a href="">新西兰柠檬</a><a href="">青菜</a><a href="">萝卜</a><a href="">西瓜</a><a href="">新西兰柠檬</a><a href="">青菜</a><a href="">萝卜</a><a href="">西瓜</a><a href="">新西兰柠檬</a><a href="">青菜</a><a href="">萝卜</a>
                </div>
                <div class="item">
                  <h2>蔬菜 <i class="el-icon-arrow-right"></i></h2>
                  <a href="">青菜</a><a href="">萝卜</a><a href="">西瓜</a>
                </div>
                <div class="item">
                  <h2>蔬菜 <i class="el-icon-arrow-right"></i></h2>
                  <a href="">青菜</a><a href="">萝卜</a><a href="">西瓜</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="m-nav">
          <a @mouseenter="jOpen1" ><p>全部分类</p></a>
          <a href="">VIP专区</a>
          <a href="">预售专区</a>
          <a href="">免耕专区</a>
          <a href="">闪送专区</a>
          <a href="">私人订制</a>
          <a href="">卡卷专区</a>
          <a href="">增值服务</a>
          <a href="">科普体现</a>
          <a href="">农场日志</a>
          <a href="">产品大全</a>
        </div>
      </div>
    </div>
    <!--/导航-->


  </div>
</template>

<script>
    import Lib from 'assets/js/Lib';
    import countDown from 'components/Countdown';

    export default {

        data () {
            return {
                login:false, //登录状态
                lev:false,
                address:false,
                cart:false,
                code:false,
                personInfo:[],//个人信息
                codeSrc:'',//二维码
                addressItem:[],//地址定位
                postion:'宁波',

                open:false,
                float:false,
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
            //导航
            jOpen1(){
                this.open=true;
                console.log(this.open)
            },
            jOpen2(){
                this.open=false;
            },
            //导航
            jNav1(e){
                $('.m-float').hide();
                $(e.currentTarget).find('.m-float').show()
            },
            jNav2(e){
                $('.m-float').hide();
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
            this.codeSrc='http://192.168.1.160:8083/mall/bss/ip/QRCode?url=https://www.baidu.com/'

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
                       // console.log(res.data)
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
  /*导航*/
  .g-nav{
    width:100%;
    background: #30b947;
    height: 40px;
    line-height: 40px;
  .content{
    width: 1200px;
    margin: 0 auto;
    position: relative;
  a:first-child{
    width: 240px;
    cursor: pointer;
    padding: 0;
    text-indent: 74px;
    background: #2ba63e;
  p{
    background: url("../assets/images/p1.png") no-repeat 30px 50%;
  }

  }
  a:first-child:hover{
    background: #2ba63e;
  }
  a{
    color: #fff;
    display: inline-block;
    padding: 0 18.2px;
  }
  a:hover{
    background: url("../assets/images/bg3.png");
  }
  }
  /*分类*/
  .m-all{
    position: absolute;
    left: 0;
    top: 0;
    background: url("../assets/images/bg3.png");
    z-index: 999;
    width: 240px;

  p:hover{
    background: url("../assets/images/bg2.png");
    cursor: pointer;
  };
  span{
    display: inline-block;
    text-indent: 0;
    line-height: normal;
    width: 240px;
    height: 47px;
    line-height: 47px;
    text-indent: 74px;
  }
  li{
    color: #fff;
  }
  li:first-child{
    height: 40px;
    line-height: 40px;
    text-indent: 74px;
    background: #2ba63e;
  p{
    background: url("../assets/images/p1.png") no-repeat 30px 50%;
  }
  }
  li:nth-of-type(2){
    margin-top: 14px;
  span{
    background: url("../assets/images/p2.png") no-repeat 30px 50%;
  }
  }
  li:nth-of-type(3){
  span{
    background: url("../assets/images/p3.png") no-repeat 30px 50%;
  }
  }
  li:nth-of-type(4){
  span{
    background: url("../assets/images/p4.png") no-repeat 30px 50%;
  }
  }
  li:nth-of-type(5){
  span{
    background: url("../assets/images/p5.png") no-repeat 30px 50%;
  }
  }
  li:nth-of-type(6){
  span{
    background: url("../assets/images/p6.png") no-repeat 30px 50%;
  }
  }
  li:nth-of-type(7){
  span{
    background: url("../assets/images/p7.png") no-repeat 30px 50%;
  }
  }
  li:nth-of-type(8){
  span{
    background: url("../assets/images/p8.png") no-repeat 30px 50%;
  }
  }
  li:last-of-type{
    margin-bottom: 14px;
  span{
    background: url("../assets/images/p9.png") no-repeat 30px 50%;
  }
  }
  /*悬浮分类*/
  .m-float{
    display: none;
    width: 770px;
    min-height: 354px;
    background: #fff;
    position: absolute;
    top: 40px;
    left: 240px;
    line-height: normal;
    color: #000;
    text-indent: 0;
    box-shadow: 0 3px 5px #ccc;
    padding: 25px 40px ;
  .item{
    margin-bottom: 30px;
  i{
    margin-left: 12px;
    font-size: 18px;
  }
  }
  a{
    color: #666;
    display: inline-block;
    padding-left: 0;
    padding-right: 50px;
    margin-bottom: 20px;
  }
  a:hover{
    color: #2ba63e;
    background: #fff;
  }
  h2{
    font-size: 20px;
    margin-bottom: 20px;
  }

  }


  }
  }
</style>
