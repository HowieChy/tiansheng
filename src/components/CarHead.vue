<template>
  <div class="g-head clearfix">

      <div class="m-top clearfix">
        <div class="m-content">
          <!--等级状态-->
          <div class="m-lev"  @mouseenter="jLev1" @mouseleave="jLev2">
            <p><span>您好！ 151****8717 <i class="el-icon-arrow-down"></i></span></p>
            <div class="u-lev" style="display: none">
              <h2>151****8717<em>退出</em></h2>
              <ul>
                <li>
                  <h3>级别</h3>
                  <h4>普通会员</h4>
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
            <h2>基地：<span>宁波</span><i class="el-icon-arrow-down"></i></h2>
            <div style="display: none">
              宁波
            </div>
          </div>


          <!--右侧导航-->
          <ul class="m-nav">
            <li><a href="">商城公告</a></li>
            <li><a href="">最新活动</a></li>
            <li><a href="">我的订单</a></li>
            <li  @mouseenter="jCode1" @mouseleave="jCode2" class="m-code">
              <a  href="javascript:;">掌上天胜</a>
              <div  style="display: none">
                <img src="../assets/images/code.png" alt="">
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
    import countDown from 'components/Countdown';

    export default {
        name: 'g-head',
        data () {
            return {

            }
        },
        methods:{

            //等级事件
            jLev1(e){
                $(e.currentTarget).find('p').toggleClass('f-active');
                $('.u-lev').toggle()
            },
            jLev2(e){
                $(e.currentTarget).find('p').toggleClass('f-active');
                $('.u-lev').toggle()
            },
            //地区选择事件
            jAddress1(e){
                $(e.currentTarget).find('h2').toggleClass('f-active');
                $(e.currentTarget).find('div').toggle()
            },
            jAddress2(e){

                $(e.currentTarget).find('h2').toggleClass('f-active');
                $(e.currentTarget).find('div').toggle()
            },
            //二维码
            jCode1(e){
                $(e.currentTarget).addClass('f-active');
                $(e.currentTarget).find('div').show()
            },
            jCode2(e){
                $(e.currentTarget).removeClass('f-active');
                $(e.currentTarget).find('div').hide()
            },



            //返回顶部
            jTop(){
                $('body').animate({'scrollTop':0})
            }
        },
        mounted(){

        },


        props:['lists','allNum','allPrice','cutTime'],
        components: {
            countDown
        },
    }

</script>


<style scoped lang="less" >
  @active-color:#30b947;
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
          li{
            float: left;
            text-align: center;
            padding:  0 25px;
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
