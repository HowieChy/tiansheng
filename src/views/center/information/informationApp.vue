<template>
<div id="app">
	<!--公用头部组件-->
	<McHead @child-number="get"   @child-price="get2"  @child-cutTime="get3" :lists="carItems" :allPrice="allPrice" :allNum="allNum"  :cutTime="cutTime">
		<div class="m-search" slot='u-search'>
			<input type="text" value="" placeholder="牛肉">
			<i class="el-icon-search"></i>
		</div>
	</McHead>

	<div class="g-content">

		<a class="u-back" href="">返回 &gt;</a>

		<ul class="m-info">
			<li><ins>用户名：</ins>XXX</li>
			<li><ins>密码：</ins>*********** <a href="">更改</a></li>
			<li><ins>真实姓名：</ins>
				<div><input type="text"></div>
			</li>
			<li><ins>性别：</ins>
				<div>
					<el-radio class="radio" v-model="radio" label="1">男</el-radio>
					<el-radio class="radio" v-model="radio" label="2">女</el-radio>
				</div>
			</li>
			<li><ins></ins><button>保存</button></li>
		</ul>

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

import McCenter from 'components/McCenter';



export default {
  data() {
    return {

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

        radio: '1',

      		//倒计时
		cutTime:'1504256400'
    }
  },
    components: {
        McHead,McFoot,countDown
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

      get(msg){
          this.allNum=msg
      },
      get2(msg){
          this.allPrice=msg
      },
      get3(msg){
          this.cutTime='0'
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
	.u-back{
		display: inline-block;
		margin: 20px 0;
	}
	.m-info{
		padding: 60px;
		background: #fff;
		color: #999;
		margin-bottom: 150px;
		li{
			margin-bottom: 50px;
			a{
				margin-left: 20px;
			}
			ins{
				display: inline-block;
				width: 80px;
			}
			div{
				display: inline-block;
				border-bottom: 1px solid #ddd;
				width: 290px;
				padding: 10px;
			}
			input{
				border: none;
			}
		}
		.el-radio{
			margin-right: 50px;
		}
		.el-radio__input.is-checked .el-radio__inner{
			background: #30b947;
		}
		button{
			background: #30b947;
			color: #fff;
			width: 310px;
			height: 55px;
			border-radius: 4px;
			border: none;
			margin-top: 60px;
			cursor: pointer;
		}
	}
</style>
