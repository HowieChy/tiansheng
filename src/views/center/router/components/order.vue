
<template>
	<div>
		<router-view></router-view>
		<div class="g-order" v-show="open">

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
						<h3><ins>{{item.type}}</ins><template v-if="item.type=='待支付'" >剩余<count-down :endTime="item.cutTime" :callback="callback" endText="0S"></count-down></template> </h3>
						<h4>{{item.data}}<span>{{item.title}}</span> 订单号：{{item.num}} <ins>订单金额：<strong>{{item.price|currency}}</strong>元</ins></h4>
					</div>
					<div class="order-bottom clearfix">
						<div class="left" >
							<a v-for="val in item.aSrc" class="clearfix" href="javascript:;"> <img :src="val.prodImgUrl" alt=""><em>{{val.prodNm}} <ins style="float: right">{{val.prodPice|currency}}  X {{val.prodNum}}</ins></em></a>
						</div>
						<div class="right">
							<button class="f-active" v-if="item.type=='待支付'">立即支付</button>
							<button @click="goDetail(item.aHref)" v-if="item.type!='订单关闭'">订单详情</button>
							<button v-if="item.type=='订单关闭'" @click='del(item,index)'>删除订单</button>
						</div>
					</div>
				</li>

			</ul>

			<div class="block" v-if="false">
				<el-pagination
								@current-change="handleCurrentChange"
								:page-size="100"
								layout="prev, pager, next, jumper"
								:total="1000">
				</el-pagination>
			</div>
		</div>




	</div>

</template>

<script>

import Lib from 'assets/js/Lib';

/*倒计时组件*/
import countDown from 'components/Countdown';


export default {
  data() {
    return {
		num:0, //账号类别
		text:"我的订单",
        open:'true',
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

        orders:[],



    }
  },
    components: {
       countDown
    },
  //实例初始化最之前，无法获取到data里的数据
  beforeCreate(){
      document.title = '我的订单';
  },


  //在挂载开始之前被调用
  beforeMount(){
  
  },

  //已成功挂载，相当ready()
  mounted(){

      if(Lib.M.store.get('userInfo')){
          this.userId=Lib.M.store.get('userInfo').ipPk;
          console.log(this.userId)
      }
      //获取个人信息
      this.axios.get(Lib.C.url_mc+'/mall/bss/ip/user',{
          params:{
              ipPk:this.userId,
          }
      })
          .then(res=>{
              switch (res.data.data.catCd){
                  case '3090.100': //VIP
                      this.num=0;
                      break;
                  case '3090.110':
                      this.num=2;//团员
                      break;
                  case '3090.120': //团长
                      this.num=1;
                      break;
              }
              this.$emit('child-type',this.num);
              this.$emit('child-text',this.text)
          }).catch(err=>{
          console.log(err);
      });

      //获取订单
      this.getOrder();
  },

    watch:{
        $route(to,from){
            console.log(to,from)
			if(from.path=='/order/detail'){
                this.open=true;
			}
        }
    },
  //相关操作事件
  methods: {

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
          //获取订单
          this.getOrder();
      },

      goDetail(val){
          console.log(val)
          this.$router.push(val);
		  this.open=false;
	  },

	  //获取订单
	  getOrder(){
          this.axios.get(Lib.C.url_mc+'/mall/bss/ordReqt/list',{
              params:{
                  ipPk:this.userId,
              }
          })
              .then(res=>{
                  console.log(res.data.data)
                  var data=[];
                  res.data.data.forEach(function (item) {
                      data.push({
                          type:item.statNmCn,
                          cutTime:String(item.remTime/1000),   //倒计时
                          data:item.ordTm,       //时间
                          num:item.cd,   //订单号
                          price:item.totOrdAmt,     //金额
                          aSrc:item.prodList,
                          aHref:'order/detail?id='+item.ordReqtPk,
                          title:item.deliRcvr,
                      })
                  })
                  this.orders=data;
                  //console.log(this.orders)
              }).catch(err=>{
              console.log(err);
          });
	  }
  }
}
</script>

<style lang="less">


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
		.el-select{
			float: right;
		}
	input{
		width: 256px;
		border: 1px solid #ddd;
		border-radius: 0;
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
	  a{
		  display: block;
		  position: relative;
		  margin-bottom: 20px;
	  }
	  a:last-of-type{
		  margin-bottom: 0;
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

	.block{
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
	}

</style>
