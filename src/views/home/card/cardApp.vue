<template>
<div id="app">
	<!--公用头部组件-->
	<McHead>
		<div class="m-search" slot='u-search'>
			<input type="text" value="" placeholder="牛肉">
			<i class="el-icon-search"></i>
		</div>
	</McHead>

	<div class="g-content">
		<div class="g-notice">
			<div class="m-tab">
				<el-radio-group v-model="radio" @change=jTab>
					<el-radio-button v-for="(item,index) in tab" :label="item"  ></el-radio-button>
				</el-radio-group>
			</div>
		</div>

		<div class="m-info" v-if="tabs[0]">
			<ul class="clearfix">
				<li v-for="(item,index) in type"  :class="{'f-active':iScur==index}" @click="iScur=index">充{{item.rechAmt}}送{{item.giftAmt}}</li>
			</ul>
			<h3><button @click="pay">立即充值</button></h3>
			<h4>充值页面详情</h4>
			<p>用户充值分为实体卡充值和在线购买虚拟卡充值</p>
			<p>详情请拨打服务热线4008610177</p>
			<p>充值卡面值分为500元，1000元，2000元，3000元,5000元，10000元,2000元。详情请浏览会员页面“我要充值</p>
		</div>

		<div class="m-info" v-if="tabs[1]">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item  label="卡号" prop="name">
					<el-input v-model="ruleForm.name" placeholder="请输入卡号" type="text"></el-input>
				</el-form-item>

				<el-form-item label="密码"  prop="pass">
					<el-input v-model="ruleForm.pass" placeholder="请输入密码" type="password"></el-input>
				</el-form-item>

			</el-form>
			<h3><button  @click="submitForm('ruleForm')">立即充值</button></h3>
			<h4>充值页面详情</h4>
			<p>用户充值分为实体卡充值和在线购买虚拟卡充值</p>
			<p>详情请拨打服务热线4008610177</p>
			<p>充值卡面值分为500元，1000元，2000元，3000元,5000元，10000元,2000元。详情请浏览会员页面“我要充值</p>
		</div>

		<div class="m-info" v-if="tabs[2]">
			<el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
				<el-form-item  label="输入兑换码" prop="num">
					<el-input v-model="ruleForm2.num" placeholder="请输入兑换码" type="text"></el-input>
				</el-form-item>

			</el-form>
			<h3><button  @click="submitForm2('ruleForm2')">立即兑换</button></h3>
			<h4>充值页面详情</h4>
			<p>用户充值分为实体卡充值和在线购买虚拟卡充值</p>
			<p>详情请拨打服务热线4008610177</p>
			<p>充值卡面值分为500元，1000元，2000元，3000元,5000元，10000元,2000元。详情请浏览会员页面“我要充值</p>
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
        radio: '优惠充值',
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


        tab:['优惠充值','充值卡','电子卷'],
		tabs:[true,false,false],
		type:[],
		iScur:0,

        ruleForm: {
            name: '',
            pass: '',
        },
        ruleForm2: {
            num: '',
        },
        rules: {
            name: [
                { required: true, message: '请输入卡号', trigger: 'blur' },
            ],
            pass: [
                { required: true, message: '请输入密码', trigger: 'blur' },
            ],
            num: [
                { required: true, message: '请输入兑换码', trigger: 'blur' },
            ],
        },

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
      if(Lib.M.store.get('userInfo')){
          this.userId=Lib.M.store.get('userInfo').ipPk;
          console.log(this.userId)
      }

      //充值方案
      this.axios.get(Lib.C.url_mc+'/mall/bss/walletRule/list')
          .then(res=>{
              // console.log(res.data.data)
              this.type=res.data.data.items;
          }).catch(err=>{
          console.log(err);
      });






  },
  //相关操作事件
  methods: {


      jTab(val){
		  var index=this.tab.indexOf(val);
		  console.log(index)
          this.tabs.forEach(function (elem,i) {
              this.tabs[i]=false;
          }.bind(this));
          this.tabs.splice(index,1,true)
          console.log(this.tabs)
	  },

	  pay(){
          console.log(this.type[this.iScur].ruleWalletRechPk)
          this.axios.get(Lib.C.url_mc+'/mall/bss/walletRule/rech',{
              params:{
                  ipPk:this.userId,
                  rwrPk:this.type[this.iScur].ruleWalletRechPk
			  }
		  })
              .then(res=>{
                  // console.log(res.data.data)
                  //this.type=res.data.data.items;
              }).catch(err=>{
              console.log(err);
          });


      },

      //验证提交
      submitForm(formName) {
          this.$refs[formName].validate((valid) => {
              if (valid) {
                  //电子卷
                  var Qs = require('qs');
                  this.axios.post(Lib.C.url_mc + '/mall/bss/card/ex', Qs.stringify({
                      ipPk:this.userId,
                      cardNumber:this.ruleForm.name,
                      cardPwd:this.ruleForm.pass,
                  }))
                      .then(res=>{
                          if(res.data.status==200){
                              this.$alert(res.data.msg, '提示', {
                                  confirmButtonText: '确定',
                              });
                          }else if(res.data.status==400){
                              this.$alert(res.data.msg, '提示', {
                                  confirmButtonText: '确定',
                                  callback: action => {

                                  }
                              });
                          }
                      }).catch(err=>{
                      console.log(err);
                  });
              } else {
                  console.log('error submit!!');
                  return false;
              }
          });
      },

      submitForm2(formName) {
          this.$refs[formName].validate((valid) => {
              if (valid) {
                  //电子卷
                  var Qs = require('qs');
                  this.axios.post(Lib.C.url_mc + '/mall/bss/ordCoup/ex', Qs.stringify({
                      ipPk:this.userId,
                      coupNumber:this.ruleForm2.num
                  }))
                      .then(res=>{
                          if(res.data.status==200){
                              this.$alert(res.data.msg, '提示', {
                                  confirmButtonText: '确定',
                              });
                          }else if(res.data.status==400){
                              this.$alert(res.data.msg, '提示', {
                                  confirmButtonText: '确定',
                                  callback: action => {

                                  }
                              });
                          }
                      }).catch(err=>{
                      console.log(err);
                  });
              } else {
                  console.log('error submit!!');
                  return false;
              }
          });
      },

	  //开始倒计时
      callback(){
		console.log('结束')
      },

  },
  updated(){

  }
}
</script>

<style lang="less">

	.g-content{
		width: 1200px;
		margin: 50px auto 150px auto ;
		background: #fff;
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
	.m-info{
		padding: 60px;
		li{
			float: left;
			width: 234px;
			height: 64px;
			border: 1px solid #ddd;
			line-height: 64px;
			text-align: center;
			margin-right: 40px;
			margin-bottom: 40px;
			cursor: pointer;
		}
		.f-active{
			background: #30b947;
			border-color: #30b947;
			color: #fff;
		}
		li:nth-of-type(4n){
			margin-right: 0;
		}
		h3{
			text-align: center;
			button{
				width: 530px;
				height: 70px;
				background: #fe3000;
				color: #fff;
				border:none;
				font-size: 18px;
				cursor: pointer;
			}
		}
		h4{
			margin: 80px 0 35px 0;
			font-size: 16px;
		}
		p{
			margin-bottom: 20px;
			color: #999;
		}
		.el-input{

			input{
				height: 70px;
				width:580px ;
				text-indent: 30px;
				border-radius: 0;
				border-color: #ddd;
			}
		}
		.el-form{
			margin-left: 182px;
			width: 660px;
			.el-form-item{
				margin-bottom: 50px;
			}
			label{
				padding: 0;
				line-height: 70px;
				text-align: center;
			}
			.el-form-item:last-of-type{
				margin-bottom: 100px;
			}
		}
	}

</style>
