<template>
<div id="app">
	<!--公用头部组件-->
	<McHead   @child-shop="getShop"    @child-cutTime="getTime"    :lists="carItems" :allPrice="allPrice" :allNum="allNum"  :cutTime="cutTime">
		<div class="m-search" slot='u-search'>
			<input type="text" value="" placeholder="牛肉">
			<i class="el-icon-search"></i>
		</div>
	</McHead>

	<div class="g-content">
		<!--面包屑-->
		<div class="m-crumb">
			<a href="home.html">首页</a><em>	&gt;</em><span>{{text}}</span>
		</div>
		<div class="g-personal clearfix">

			<McCenter :type="num" :info="text"></McCenter>

			<router-view @child-type="getType"  @child-text="getText"></router-view>

		</div>

	</div>


	<!--公用底部组件-->
	<McFoot></McFoot>
</div>
</template>

<script>

import Lib from 'assets/js/Lib';
/*头部组件*/
import McHead from 'components/McHead2';
/*底部组件*/
import McFoot from 'components/McFoot';
/*倒计时组件*/
import countDown from 'components/Countdown';

import McCenter from 'components/McCenter2';



export default {
  data() {
    return {
		num:'', //账号类别
		text:"",
		icon:1, //0为无标识  1为VIP标识  2为团标识
        //购物车列表
        carItems:[{
            price:'300.00',
			num:1,
			id:'1'
		},
            {
                price:'300.00',
                num:1,
                id:'2'
            }],

        allPrice:'600.00',//商品总价
		allNum:2,//商品总数

		//倒计时
		cutTime:'1504256400'
    }
  },
    components: {
        McHead,McFoot,countDown,McCenter
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
  //相关操作事件
  methods: {

      getShop(msg){
          this.allNum=msg.number  //获取删除商品后的商品数量
          this.allPrice=msg.price //获取删除商品后的价格
      },
      getTime(msg){
          this.cutTime=0
      },

      getType(msg){
        this.num=msg;
	  },
      getText(msg){
          this.text=msg;
      },

	  //开始倒计时
      callback(){
		console.log('结束')
      },

  }
}
</script>

<style lang="less">

	.g-content{
		width: 1200px;
		margin: 0 auto;
	}
	.m-crumb{
		margin: 20px 0;
		a,span{
			color: #999;
		}
		em{
			color: #999;
			margin:  0 6px 0 4px;
		}
	}

</style>
