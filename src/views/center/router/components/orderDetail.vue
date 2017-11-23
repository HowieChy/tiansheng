<template>
	<div class="g-detail">
		<div class="m-crumb">
			<a href="../center/router.html#/order">我的订单</a><em>&gt;</em><span>订单详情</span>
		</div>
		<h4>2017年6月22号 15:27 <span></span>订单号:{{info.cd}}<button v-if="info.statNmCn=='待支付'">立即支付</button></h4>
		<div class="img">
			<h5>
				<ins v-if="info.statNmCn=='待支付'">待支付</ins>
				<!--<ins v-if="type!='未付款'">已完成</ins>-->
				<template v-if="info.statNmCn=='待支付'"><count-down :endTime="cutTime" :callback="callback" endText="0S"></count-down>后订单将关闭</template>
			</h5>
			<a href=""  class="clearfix"> <img src="" alt=""><em>XXXXXXXXXXXXXXXXX <i>￥50 X2</i></em></a>

		</div>
		<div class="info">
			<h2>收货信息</h2>
			<p><span>姓名 :</span>{{info.deliRcvr}}</p>
			<p><span>联系电话 :</span>{{info.buyAcctNm}}</p>
			<p><span>收货地址 :</span>{{info.deliAddr}}</p>
		</div>
		<div class="info info2">
			<h2>配送信息</h2>
			<p><span>配送方式 :</span>自提点自提</p>
			<p><span>自提点联系方式 :</span>0574-7853121</p>
			<p><span>最早提货时间 :</span>2017-9-15 15：00</p>
			<p><span>包裹数量 :</span>1包</p>
		</div>
		<ul class="info price ">
			<li class="clearfix"><p><span>商品总价 :</span><ins>{{info.ordAmt|currency('')}}元</ins></p></li>
			<li class="clearfix"><p><span>运费 :</span><ins>0元</ins></p></li>
			<li class="clearfix"><p><span>订单总价 :</span><ins>140元</ins></p></li>
			<li class="clearfix"><p><span>使用积分 :</span><ins>4分(抵0.4元)</ins></p></li>
			<li class="clearfix"><p><span>使用余额 :</span><ins>20</ins></p></li>
			<li class="clearfix"><h5>应付金额:<strong>2199<em>元</em></strong></h5></li>
		</ul>

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
		type:'未付款',
		info:{
            cd:'',
            statNmCn:'',
		},

        //倒计时
        cutTime:'-999'
    }
  },
    components: {
        countDown
    },
  //实例初始化最之前，无法获取到data里的数据
  beforeCreate(){
  	
  	
  },


  //在挂载开始之前被调用
  beforeMount(){
  	
  
  }, 
  //已成功挂载，相当ready()
  mounted(){
		//console.log(this.$route.query);


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

      this.getOrder();
  },


  //相关操作事件
  methods: {

      //获取订单详情
      getOrder(){
          this.axios.get(Lib.C.url_mc+'/mall/bss/ordReqt/details',{
              params:{
                  ordReqtPk:this.$route.query.id,
              }
          })
              .then(res=>{
                  //console.log(res.data.data)
                  this.info=res.data.ordReqtVo;
                  this.cutTime=String(new Date(res.data.ordReqtVo.crtTm).getTime()/1000 +60*15)
              }).catch(err=>{
              console.log(err);
          });
      },

      //开始倒计时
      callback(){
          console.log('结束')
      },

  }
}
</script>

<style lang="less">


	.g-detail{
		width: 880px;
		float: right;
		background: #fff;
		margin-bottom: 150px;
		padding: 40px 50px;
		.m-crumb{
			font-size: 20px;
			margin: 0 0 50px 0;
			color: #666;
		}
		h4{

			border-bottom: 1px solid #ddd;
			padding-bottom: 10px!important;
			height: 28px;
			line-height: 28px;
		span{
			display: inline-block;
			width: 1px;
			height: 12px;
			background: #ddd;
			margin:0 15px ;
			vertical-align: -5%;
		}
		button{
			width: 118px;
			height: 28px;
			line-height: 28px;
			border: 1px solid #ddd;
			background: #30b947;
			cursor: pointer;
			color: #fff;
			float: right;
		}
		}
		.img{
			padding-top: 20px;
			padding-bottom: 30px;
			border-bottom: 1px solid #ddd;
		a{
			display: block;
			margin-bottom: 20px;
			position: relative;
			i{
				float: right;
				font-style: normal;
			}
		}
		a:last-of-type{
			margin-bottom: 0;
		}
		h5{
			margin: 20px 0;
			color: #30b947;

		}
		ins{
			margin-right: 10px;
			font-size: 20px;
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

		}
		.info{
			border-bottom: 1px solid #ddd;
			padding: 30px 0  12px 0;
		h2{
			font-size: 20px;
			margin-bottom: 30px;
		}
		p{
			margin-bottom: 18px;
			color: #999;
		}
		span{
			display: inline-block;
			width: 100px;
		}
		}
		.info2{
		span{
			width: 130px;
		}
		}

		.price{
			border-bottom: none;
		p{
			width: 220px;
			float: right;
		span{
			float: left;
		}
		}
		ins{
			float: right;
		}
		h5{
			margin-top: 30px;
			float: right;
			width: 260px;
			color: #999;
		}
		strong{
			float: right;
			color: #fd4624;
			font-size: 20px;
		}
		em{
			font-size: 16px;
		}
		}
	}




</style>
