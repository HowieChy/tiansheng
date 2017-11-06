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
		<!--面包屑-->
		<div class="m-crumb">
			<a href="home.html">首页</a><em>	&gt;</em><span>{{text}}</span>
		</div>
		<div class="g-personal clearfix">
			<McCenter :type="num" :info="text"></McCenter>

			<div class="g-order">
				<h2>{{text}}</h2>
				<div class="top">
					<span>全部订单</span>
					<el-select v-model="value" placeholder="请选择">
						<el-option
										v-for="item in options"
										:key="item.value"
										:label="item.label"
										:value="item.value">
						</el-option>
					</el-select>
				</div>

              <!--订单列表-->
              <ul class="m-order">

                <li v-for="(item,index) in orders">
                  <div class="order-info ">
                    <h3><ins>{{item.type}}</ins><template v-if="item.type=='未付款'" >剩余<count-down :endTime="item.cutTime" :callback="callback" endText="0S"></count-down></template> </h3>
                    <h4>2017年08月28日 16:08 <span>王大锤</span> 订单号：531231354531 <ins>订单金额：<strong>58.00</strong>元</ins></h4>
                  </div>
                  <div class="order-bottom clearfix">
                    <div class="left" >
                      <a href=""> <img src="" alt=""><em>XXXXXXXXXXXXXXXXX</em></a>
                    </div>
                    <div class="right">
                      <button class="f-active" v-if="item.type=='未付款'">立即支付</button>
                      <button v-if="item.type!='已取消'">订单详情</button>
                      <button v-if="item.type=='已取消'" @click='del(item,index)'>删除订单</button>
                    </div>
                  </div>
                </li>

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
		num:0, //账号类别
		text:"我的订单",
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

        options: [{
            value: '选项1',
            label: '最近一星期'
        }, {
            value: '选项2',
            label: '最近一个月'
        }, {
            value: '选项3',
            label: '最近三个月'
        }, {
            value: '选项4',
            label: '最近半年'
        }, {
            value: '选项5',
            label: '最近一年'
        }],
        value: '',

        orders:[{
		    type:'未付款',     //0:未付款 1：已完成 2：已取消
            cutTime:'',   //倒计时
            data:'',       //时间
            num:2314531432121,   //订单号
            price:58,     //金额
            aSrc:'',
            aHref:'',
            title:'XXXXXXXXXXX',
        },{
            type:'已完成',     //0:未付款 1：已完成 2：已取消
            cutTime:'',   //倒计时
            data:'',       //时间
            num:14342134,   //订单号
            price:58,     //金额
            aSrc:'',
            aHref:'',
            title:'XXXXXXXXXXX'
        },{
                type:'已取消',     //0:未付款 1：已完成 2：已取消
                cutTime:'',   //倒计时
                data:'',       //时间
                num:2314531432121,   //订单号
                price:58,     //金额
                aSrc:'',
                aHref:'',
                title:'XXXXXXXXXXX',
        }],


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
   computed:{

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

      handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
      },

      //删除订单
      del(item,index){
          this.orders.splice(index,1)
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

	.g-order{
		width: 950px;
		float: right;
		background: #fff;
		margin-bottom: 150px;
		padding: 40px 15px;
	}
	.el-select-dropdown__item.selected{
		background-color: #30b947!important;
	}
	.el-select-dropdown__item.selected.hover{
		background-color: #30b947!important;
	}
	.top{
		span{
			color: #30b947;
		}
		.el-select{
			float: right;
		}

		input{
			width: 256px;
			border: 1px solid #ddd;
			border-radius: 0;
		}
	}
    .g-order{
      h2{
        font-size: 20px;
        color: #999;
      }
      .top{
      margin:15px 0 ;
        span{
          color: #30b947;
          display: inline-block;
          height: 36px;
          line-height: 36px;
          font-size: 16px;
        }
      }
    }
    .m-order {
      margin-top: 30px;
      li{
        border: 1px solid #30b947;
        margin-bottom: 20px;
      }
    }
    .order-info{
        background: #f9f9f9;
        color: #999;
        border-bottom: 1px solid #ddd;
        padding: 30px;
        h3{
          margin-bottom: 20px;
          ins{
            color: #30b947;
            padding-right: 10px;
            font-size: 16px;
          }
        }
        h4{
          span{
            display: inline-block;
            padding:0 20px ;
            margin:0 20px ;
            border-left: 1px solid #ddd;
            border-right: 1px solid #ddd;
          }
          ins{
            float: right;
          }
          strong{
            font-size: 22px;
            color: #000;
          }
        }
    }
    .order-bottom{
      position: relative;
      padding: 30px;
      .left{
        position: relative;
        float: left;
      }
      img{
        width: 95px;
        height: 95px;
        border: 1px solid #ddd;
        float: left;
      }
      em{
        font-size: 16px;
        width: 500px;
        display: inline-block;
        position: absolute;
        left: 128px;
        top: 50%;
        transform: translateY(-50%);
        text-align: left;
      }
      .right{
        position: absolute;
        right: 40px;
        top: 50%;
        transform: translateY(-50%);
      }
      button{
        display: block;
        width: 118px;
        height: 28px;
        line-height: 28px;
        border: 1px solid #ddd;
        background: #fff;
        cursor: pointer;
      }
      button:nth-child(2){
        margin-top: 20px;
      }
      .f-active{
        background: #30b947;
        border-color: #30b947;
        color: #fff;
      }
    }


    .el-icon-arrow-left:before{
      content: "<上一页" !important;
    }
    .el-icon-arrow-right:before{
      content: "下一页>" !important;
    }
    .el-pagination{
      margin-top: 50px;
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
