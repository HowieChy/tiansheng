<template>
<div id="app">
	<!--公用头部组件-->
	<McHead  @child-shop="getShop"   @child-cutTime="getTime"  :lists="carItems" :allPrice="allPrice" :allNum="allNum"  :cutTime="cutTime">
		<div class="m-search" slot='u-search'>
			<input type="text" value="" placeholder="牛肉">
			<i class="el-icon-search"></i>
		</div>
	</McHead>

	<div class="g-content">
		<!--面包屑-->
		<div class="m-crumb">
			<a href="home.html">首页</a><em>	&gt;</em><span>商城广告</span>
		</div>
		<div class="g-notice">
			<div class="m-tab">
				<el-radio-group v-model="radio">
					<el-radio-button label="最新活动"></el-radio-button>
					<el-radio-button label="往期活动"></el-radio-button>
				</el-radio-group>
			</div>
			<ul class="m-notice">
				<li><a href=""><p>天胜XXXXXXX</p><span>2017-02-26 16:12:20</span></a></li>
				<li><a href=""><p>天胜XXXXXXX</p><span>2017-02-26 16:12:20</span></a></li>
				<li><a href=""><p>天胜XXXXXXX</p><span>2017-02-26 16:12:20</span></a></li>
			</ul>


			<div class="block">
				<el-pagination
								@current-change="handleCurrentChange"
								:page-size="100"
								layout="prev, pager, next, jumper"
								:total="1000">
				</el-pagination>
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
import McHead from 'components/McHead2';
/*底部组件*/
import McFoot from 'components/McFoot';
/*倒计时组件*/
import countDown from 'components/Countdown';


export default {
  data() {
    return {
        radio: '最新活动',
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

        currentPage:1,

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

      getShop(msg){
          this.allNum=msg.number  //获取删除商品后的商品数量
          this.allPrice=msg.price //获取删除商品后的价格
      },
      getTime(msg){
          this.cutTime=0
      },

      handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
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
	.m-tab{
		text-align: center;
		padding-top: 30px;
		span{
			width: 220px;
			height: 58px;
			padding: 0;
			line-height: 58px;

		}
		.el-radio-button__inner{
			border-color: #ddd;
			color: #999;
		}
		.el-radio-button__orig-radio:checked+.el-radio-button__inner{
			background: #30b947;
			border-color: #30b947;
		}
		.el-radio-button__inner:hover{
			color: #999;
			border-color: #30b947;
		}
	}
	.g-notice{
		background: #fff;
		margin-bottom: 50px;
		padding: 0px 50px 50px 50px;

	}
	.m-notice{
		min-height: 800px;
		li{
			border-bottom: 1px solid #ddd;
			height: 100px;
			line-height: 100px;
			p{
				float: left;
				width: 900px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-size: 17px;
			}
			span{
				float: right;
				color: #999;
			}
		}
	}

	.el-icon-arrow-left:before{
		content: "<上一页" !important;
	}
	.el-icon-arrow-right:before{
		content: "下一页>" !important;
	}
	.el-pagination{
		text-align: center;
		button{
			margin-right:10px!important;
			border: 1px solid #ddd!important;
		}
	}
	.el-pager li{
		margin-right:10px!important;
		border: 1px solid #ddd!important;
	}
	.el-pagination__editor{
		width: 60px!important;
	}
	.el-pager li.active{
		background-color: #30b947!important;
	}

</style>
