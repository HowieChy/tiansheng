<template>
  <div class="g-head clearfix">

      <div class="m-top clearfix">
        <div class="m-content">
          <!--等级状态-->
          <div class="m-login" v-if="!login">
            欢迎登录天胜农牧，请 <a href="../home/login.html">登录</a> <a href="../home/register.html">注册</a>
          </div>
          <div class="m-lev" v-if="login"  @mouseenter="jLev1" @mouseleave="jLev2">
            <p :class="{'f-active':lev}"><a href="../center/router.html#/index"><span>您好！{{phone}} <i class="el-icon-arrow-down"></i></span></a></p>
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


          <!--右侧导航-->
          <ul class="m-nav">
            <li><a href="">商城公告</a></li>
            <li><a href="../notice/active.html">最新活动</a></li>
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


        </div>
      </div>





  </div>
</template>

<script>
    import Lib from 'assets/js/Lib';
    import countDown from 'components/Countdown';

    export default {
        name: 'g-head',
        data () {
            return {
                login:false, //登录状态
                lev:false,
                address:false,
                cart:false,
                code:false,
                open:false,
                float:false,
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
                window.location.href = '../home/index.html';
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
        },


        props:['lists','allNum','allPrice','cutTime'],
        components: {
            countDown
        },
    }

</script>


<style scoped lang="less" >
  @active-color:#30b947;
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
    left: 143px;
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
          left: -243px;
          border:1px solid #ddd;
          background: #fff;
          text-align: center;
          top:40px;
          z-index:9;
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


</style>
