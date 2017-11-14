<template>

  <div class="g-foot ">
    <div class="content">
      <ul class="top clearfix">
        <li>
          <img src="../assets/images/f1.png" alt="">
          <h2>两大承诺</h2>
          <p>100%四不用</p>
          <p>100%自产自销</p>
        </li>
        <li>
          <img src="../assets/images/f2.png" alt="">
          <h2>24小时基地直供</h2>
          <p>田头到灶头</p>
          <p>一站式</p>
        </li>
        <li>
          <img src="../assets/images/f3.png" alt="">
          <h2>当天确认</h2>
          <p>免费换货</p>
        </li>
        <li>
          <img src="../assets/images/f4.png" alt="">
          <h2>100元包邮</h2>
          <p>仅限江浙沪</p>
          <p>顺丰速运</p>
        </li>
      </ul>

      <ul class="bottom clearfix">
        <li>
          <h2>帮助中心</h2><a href="">新手指南</a><a href="">支付方式</a><a href="">配送说明</a>
        </li>
        <li>
          <h2>关于天胜</h2><a href="">了解天胜</a><a href="">加入天胜</a><a href="">联系我们</a><a href="../notice/active.html">农场活动</a><a href="">农场餐饮</a>
        </li>
        <li>
          <h2>会员中心</h2><a href="">会员注册</a><a href="">会员类别</a><a href="">积分说明</a>
        </li>
        <li>
          <h2>关注我们</h2><a href="">官方微博</a><a href="">官方微信</a><a href="">媒体报告</a>
        </li>
        <li>
          <h2>联系我们</h2><a href="">联系电话：4008-610-177</a><a href="">会员交流群：216606902</a><a href="">服务时间：6:30-22:00</a>
        </li>
      </ul>
      <h3>Copyright@2016宁波天胜农牧发展有限公司版权所有</h3>
      <h3>营业执照330212000207589</h3>
    </div>
  </div>


</template>
<script>
    export default {
        data(){
            return {

            }
        },

        mounted () {


        },
        methods: {

        }
    }
</script>

<style scoped lang="less" >
  .g-foot{
    width: 100%;
    background: #fff;
    padding-bottom: 40px;
    .content{
      width: 1200px;
      margin: 0 auto;
      .top{
        padding: 56px 0;
        border-bottom: 1px solid #ddd;
        li{
          width: 25%;
          float: left;
          border-right: 1px solid #ddd;
          box-sizing: border-box;

        }
        li:last-of-type{
          border: none;
        }
        li:nth-of-type(2){
          width: 28%;
        }
        li:nth-of-type(3){
          width: 22%;
          h2{
            margin: 8px 0;
          }
        }
        img{
          float: left;
          margin-left: 55px;
          margin-right: 25px;
        }
        h2{
          font-size: 20px;
          margin-bottom: 5px;
        }
        p{
          color: #999;
        }
      }
    }
    .bottom{
      padding: 30px;
      li{
        width: 20%;
        float: left;
        padding-left: 50px;
        box-sizing: border-box;
      }
      h2{
        font-size: 20px;
        margin-bottom: 26px;
      }
      a{
        display: block;
        color: #999;
        padding-bottom: 10px;
      }
      a:hover{
        color: #2ab349;
        text-decoration: none;
      }
    }
    h3{
      text-align: center;
      color: #999;
      margin-bottom: 4px;
    }
  }
</style>