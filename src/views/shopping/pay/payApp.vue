<template>
<div id="app">

  <!--公用头部组件-->
  <CarHead >
    <!--步骤-->
    <div style="float: right" slot='u-search'>
      <img src="./assets/images/third.png" alt="">
    </div>
  </CarHead>

  <div class="g-car">
    <div class="g-content">
    <h2>提交订单 <p><a href="../center/router.html#/order">查看订单</a><a href="../home/index.html">返回首页</a></p></h2>
    <div class="m-info">
      <h3>订单已提交，请在<count-down :endTime="info.time" :callback="callback" endText="0S"></count-down>内完成支付，逾期将自动取消。</h3>
      <p><span style="margin-right: 100px">订单编号：{{info.cd}}</span><span>订单金额：{{info.price|currency}}</span></p>
    </div>
    <div class="m-type">
      <h3>请选择以下方式付款</h3>
      <h4><span></span><span></span><span></span></h4>
    </div>
    </div>
  </div>

	<!--公用底部组件-->
	<McFoot></McFoot>
</div>
</template>

<script>

import Lib from 'assets/js/Lib';

/*头部组件*/
import CarHead from 'components/CarHead';

/*底部组件*/
import McFoot from 'components/McFoot';

/*倒计时组件*/
import countDown from 'components/Countdown';



export default {
  data() {

    return {
      info:{
          time:'-999'
      }
	}
  },
    components: {
        CarHead,McFoot,countDown
    },
  //实例初始化最之前，无法获取到data里的数据
  beforeCreate(){
  	
  	
  },  
  //在挂载开始之前被调用
  beforeMount(){
  	
  
  }, 
  //已成功挂载，相当ready()
  mounted(){

      //是否登录
      if(!Lib.M.store.get('login')){
          this.$alert('请先登录账号', '提示', {
              confirmButtonText: '确定',
              callback: action => {
                  window.location.href = '../home/index.html';
              }
          });
      }

      this.info=Lib.M.store.get('orderInfo');
      this.info.time=String(Lib.M.store.get('orderInfo').time/1000)
      this.info.price=Lib.M.store.get('orderPrice')
  },


  watch:{

  },
  //相关操作事件
  methods: {



      //倒计时
      callback(){
          this.$alert('订单已取消', '提示', {
              confirmButtonText: '确定',
              callback: action => {
                  window.location.href = '../home/index.html';
              }
          });
      },


  }
}
</script>

<style lang="less">
	body{
      background: #f5f5f5;
    }
    .g-content{
      width: 1200px;
      margin: 0 auto 20px auto;
      h2{
        margin: 20px 0;
        font-size: 18px;
        p{
          float: right;
          font-size: 14px;
        }
        a{
          margin-left: 40px;
        }
      }
      .m-info{
        padding: 40px 0;
        text-align: center;
        background: #fff;
        h3{
          font-size: 22px;
          margin-bottom: 40px;
        }
        span{
          color: #999;
        }

      }
      .m-type{
        padding:0 40px;
        margin-top: 30px;
        margin-bottom: 200px;
        background: #fff;
        h3{
          font-size: 18px;
          padding-bottom: 30px;
          padding-top: 30px;
          border-bottom: 1px solid #ddd;
        }
        span{
          width: 170px;
          border: 1px solid #ddd;
          display: inline-block;
          height: 60px;
          margin: 25px 30px 40px 0;
          cursor: pointer;
        }
        span:nth-of-type(1){
          background: url("./assets/images/wx.png") no-repeat 50% 50%;
        }
        span:nth-of-type(2){
          background: url("./assets/images/zfb.png") no-repeat 50% 50%;
        }
        span:nth-of-type(3){
          background: url("./assets/images/yl.png") no-repeat 50% 50%;
        }
      }
    }



</style>
