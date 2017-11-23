<template>
<div id="app">

  <!--公用头部组件-->
  <CarHead>
    <!--步骤-->
    <div style="float: right" slot='u-search'>
      <img src="./assets/images/third.png" alt="">
    </div>
  </CarHead>

  <div class="g-car">
    <div class="g-content">
    <h2>提交订单 <p><a href="../center/router.html#/order">查看订单</a><a href="../home/index.html">返回首页</a></p></h2>
    <div class="m-info">
      <img src="./assets/images/true.png" alt="">
      <p><a href="../center/router.html#/order">支付成功，查看订单</a></p>
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




export default {
  data() {

    return {


	}
  },
    components: {
        CarHead,McFoot,
    },
  //实例初始化最之前，无法获取到data里的数据
  beforeCreate(){
  	
  	
  },  
  //在挂载开始之前被调用
  beforeMount(){
  	
  
  }, 
  //已成功挂载，相当ready()
  mounted(){


  },
  computed:{

  },

  watch:{

  },
  //相关操作事件
  methods: {



      //倒计时
      callback(){
          console.log('结束1')
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
        span:first-child{
          margin-right: 100px;
        }
        img{
          margin: 50px 0 30px 0;
        }
        p{
          font-size: 25px;
          padding-bottom: 60px;
        }
      }


    }



</style>
