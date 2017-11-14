<script src="../../../../json/a.js"></script>
<template>
<div id="app">

	<div class="g-content">
		<div class="g-head">
			<img src="./assets/images/logo.png" alt="">
			<h2>会员注册</h2>
		</div>

		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

			<el-form-item  prop="phone">
				<el-input v-model="ruleForm.phone" placeholder="请输入手机号码" type="number"></el-input>
			</el-form-item>

			<el-form-item  prop="yzm">
				<el-input  style="width: 226px"  v-model="ruleForm.yzm" placeholder="请输入验证码" type="text"></el-input>
				<span class="m-button m-button2"  @click="jTyzm">{{ruleForm.tyzm}}</span>
			</el-form-item>

			<el-form-item  prop="yzm2">
				<el-input  style="width: 226px"  v-model="ruleForm.yzm2" placeholder="请输入验证码" type="text"></el-input>
				<span class="m-button m-sendm"  @click="yzm">获取验证码</span>
			</el-form-item>

			<el-form-item  prop="pass">
				<el-input type="password" v-model="ruleForm.pass" auto-complete="off" placeholder="请输入密码" ></el-input>
			</el-form-item>

			<el-form-item  prop="checkPass">
				<el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="请再次输入密码"></el-input>
			</el-form-item>

			<el-form-item>
				<el-input v-model="ruleForm.tjm" placeholder="请输入推荐码" type="text"></el-input>
			</el-form-item>

			<h3>完善收货信息，地址审核通过才可以进行购买</h3>

			<el-form-item  prop="name">
				<el-input v-model="ruleForm.name" placeholder="请输入联系人姓名" type="text"></el-input>
			</el-form-item>

			<el-form-item  prop="phone2">
				<el-input v-model="ruleForm.phone2" placeholder="请输入收货人联系方式" type="text"></el-input>
			</el-form-item>


			<el-form-item  prop="address">
				<el-cascader  	placeholder="请选择地区"
								:options="options"
								v-model="selectedOptions"
							  	@change="handleChange"
				></el-cascader>
			</el-form-item>


			<el-form-item  prop="address2">
				<el-input v-model="ruleForm.address2" placeholder="请输入详细地址" type="text"></el-input>
			</el-form-item>

			<el-form-item  prop="type">
				<el-checkbox-group v-model="ruleForm.type">
					<el-checkbox checked  label="我已阅读并同意天胜农牧商城用户注册协议" name="type"></el-checkbox>
				</el-checkbox-group>
			</el-form-item>

			<el-form-item>
				<el-button style="background:#30b947 " type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
			</el-form-item>
			<h5><a href="login.html">已注册？立即登录</a></h5>
		</el-form>
	</div>

	<!--公用底部组件-->
	<McFoot></McFoot>
</div>
</template>

<script>

import Lib from 'assets/js/Lib';

import $ from 'jquery';
/*底部组件*/
import McFoot from 'components/McFoot';



export default {
  data() {
      var validatePhone=(rule, value, callback)=> {
          var re=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
          if(!value||!re.test(value)){
              callback(new Error('请输入正确手机号码'));
          }else {
              callback();
          }
      }
      var validatePass = (rule, value, callback) => {
          if (value === '') {
              callback(new Error('请输入密码'));
          } else {
              if (this.ruleForm.checkPass !== '') {
                  this.$refs.ruleForm.validateField('checkPass');
              }
              callback();
          }
      };
      var validatePass2 = (rule, value, callback) => {
          if (value === '') {
              callback(new Error('请再次输入密码'));
          } else if (value !== this.ruleForm.pass) {
              callback(new Error('两次输入密码不一致!'));
          } else {
              callback();
          }
      };

      var validateYzm=(rule, value, callback)=> {
			if(value!=this.ruleForm.tyzm){
                callback(new Error('请输入正确图形验证码'));
			}else {
                callback();
            }
	  }

      var validateAddress=(rule, value, callback)=> {
          if(!value){
              callback(new Error('请选择地区'));
          }else {
              callback();
          }
      }
    return {
        options: [],
        selectedOptions: [],
        ruleForm: {
            phone: '',
            yzm:'', //图形验证码
			tyzm:'获取验证码',//图形验证码
            yzm2:'',
            pass: '',
            checkPass: '',
			tjm:'',
            name:'',
			phone2:'',
			address2:'',
            type: [],
            receProvCd:'',
            receCityCd:'',
            receDistCd:'',
        },
        rules: {
            phone: [
                { validator: validatePhone, trigger: 'blur' }
            ],
            yzm: [
                { validator:validateYzm, trigger: 'blur' },
            ],
            yzm2: [
                { required: true, message: '请输入验证码', trigger: 'blur' },
            ],
            pass: [
                { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
                { validator: validatePass2, trigger: 'blur' }
            ],
			type: [
                { type: 'array', required: true, message: '请勾选', trigger: 'change' }
            ],
            name: [
                { required: true, message: '请输入联系人姓名', trigger: 'blur' },
            ],
            phone2: [
                { validator: validatePhone, trigger: 'blur' }
            ],
            address: [
                { validator:validateAddress, trigger: 'blur' ,required: true,},
            ],
            address2: [
                { required: true, message: '请输入详细地址', trigger: 'blur' },
            ],
    	}
 	 }
  },
    components: {
        McFoot
    },
  //实例初始化最之前，无法获取到data里的数据
  beforeCreate(){
  	
  	
  },  
  //在挂载开始之前被调用
  beforeMount(){
  	
  
  }, 
  //已成功挂载，相当ready()
  mounted(){
      //获取地区
      var This=this;
      this.axios.get(Lib.C.url_mc+'/mall/sys/sysCat/tree?methCd=9000')
          .then(res=>{
              console.log(res.data);
              var result={};
              res.data.map(function (e) {
                  result={
                      value:e.cd,
                      label:e.nmCn,
                      children:[]
                  };
                  
                  e.childSysCatDtozList.map(function (ev,j) {
                      result.children.push({
                          value:ev.cd,
                          label:ev.nmCn,
                          children:[],
                      });
                      ev.childSysCatDtozList.map(function (evv) {
                          result.children[j].children.push({
                              value:evv.cd,
                              label:evv.nmCn,
                          })
                      })
                  })
                  //console.log(result)
                  This.options.push(result);
              })

          }).catch(err=>{
          console.log(err);
      });
  },
  //相关操作事件
  methods: {
      //图形验证码
      jTyzm(){
          if(!this.ruleForm.phone){
              this.$alert('请先输入手机号码！', '提示', {
                  confirmButtonText: '确定',
              });
		  }else{
              this.axios.get(Lib.C.url_mc+'/mall/bss/sms/sendPicVerifyCode',{
                  params:{
                      mob:this.ruleForm.phone
                  }
              })
                  .then(res=>{
                      this.ruleForm.tyzm=res.data.data.code;
                  }).catch(err=>{
                  console.log(err);
              });
		  }
	  },


      //选择地区
      handleChange(value){
          this.ruleForm.address=value,
          this.ruleForm.receProvCd=value[0],
		  this.ruleForm.receCityCd=value[1],
		  this.ruleForm.receDistCd=value[2]
	  },

      //验证提交
      submitForm(formName) {
          console.log(this.ruleForm.yzm2)

          this.$refs[formName].validate((valid) => {
              if (valid) {

                  var Qs = require('Qs');
                  this.axios.post(Lib.C.url_mc + '/mall/sys/acct/addForPc', Qs.stringify({
                      mob: this.ruleForm.phone,
                      picVerifyCode: this.ruleForm.yzm,//图片验证码
                      smsVerifyCode: this.ruleForm.yzm2,//手机验证码
                      pwd: this.ruleForm.pass,
                      confirmPwd: this.ruleForm.checkPass,
                      recoCode: this.ruleForm.tjm,//推荐码
                      receNm: this.ruleForm.name,//推荐人姓名
                      receMob: this.ruleForm.phone2,
                      receProvCd: this.ruleForm.receProvCd,
                      receCityCd: this.ruleForm.receCityCd,
                      receDistCd: this.ruleForm.receDistCd,
                      fullAddr: this.ruleForm.address2,
                  }), {
                      headers: {
                          'Content-Type': 'application/x-www-form-urlencoded',
                      }
                  })
                      .then(res => {
                          console.log(res.data);
                          if (res.data.status == 200) {
                              this.$alert('注册成功', '提示', {
                                  confirmButtonText: '确定',
                                  callback: action => {
                                      window.location.href = 'login.html';
                                  }
                              });

                          }
                          if (res.data.status == 400) {
                              this.$alert(res.data.msg, '提示', {
                                  confirmButtonText: '确定',
                                  callback: action => {
                                      // window.location.href=Lib.C.url_href+'login.html';
                                  }
                              });
                              //window.location.href=Lib.C.url_href+'login.html';
                          }
                      }).catch(err => {
                      console.log(err);
                  });
              } else {
                  console.log('error submit!!');
                  return false;
              }
          });
      },
	  yzm(){
          var count =60;
          var curCount;
          var This=this;
          function sendMessage() {

              curCount = count;
              var phone=$("#phone").val();//手机号码
              //设置button效果，开始计时
              $(".m-sendm").attr("disabled", "true");
              $(".m-sendm").addClass('disabled');
              $(".m-sendm").html("重新获取  " + "(" +curCount+ ")");
			  var  InterValObj = window.setInterval(function () {
                  if (curCount == 0) {
                      window.clearInterval(InterValObj);//停止计时器
                      $(".m-sendm").removeClass('disabled');
                      $(".m-sendm").addClass('disable')
                      $(".m-sendm").removeAttr("disabled");//启用按钮
                      $(".m-sendm").html("重新获取");
                  }
                  else {
                      curCount--;
                      $(".m-sendm").addClass('disabled')
                      $(".m-sendm").html("重新获取 " + "(" +curCount+ ")");
                  }
              }, 1000); //启动计时器，1秒执行一次
              //向后台发送处理数据
              if(!This.ruleForm.phone){
                  This.$alert('请先输入手机号码！', '提示', {
                      confirmButtonText: '确定',
                  });
              }else{
                  This.axios.get(Lib.C.url_mc+'/mall/bss/sms/sendSmsVerifyCode',{
                      params:{
                          mob:This.ruleForm.phone
                      }
                  })
                      .then(res=>{
                          console.log(res.data)
                      }).catch(err=>{
                      console.log(This.ruleForm.phone);
                  });
			  }
          }
          sendMessage()
	  }
  }
}
</script>

<style lang="less">
	body{
		background: #f9f9f9;
	}
	.g-content{
		width: 370px;
		background: #fff;
		padding:100px 240px;
		margin:90px auto 110px auto;
		.g-head{
			text-align: center;

		}
		h2{
			font-size: 26px;
			margin: 40px 0;
		}
		h3{
			font-size: 18px;
			margin: 50px 0 30px 0;
		}
		.el-checkbox__input.is-checked .el-checkbox__inner{
			background:#30b947 ;
			border-color: #30b947;
		}
		.el-button{
			width: 100%;

			font-size: 18px;
			height: 58px;
			border-radius: 0;
		}

		.el-form-item:last-of-type{
			margin-bottom: 10px;
		}
		h5{
			float: right;
		}
		.el-form-item__content input{
			padding-left: 30px;
		}
	}

	.el-form-item__content{
		margin-left: 0!important;
		margin-bottom: 10px;
		border-radius: 0;
		input{
			height: 58px;
			border: 1px solid #ddd;
			border-radius: 0;
		}
	}
	.el-cascader{

		width: 370px;
	}
	.el-cascader__label{
		line-height: 58px!important;
		padding-left: 30px!important;
	}
	.m-button{
		width: 126px;
		height: 58px;
		background: #30b947;
		vertical-align: middle;
		float: right;
		color: #fff;
		display: inline-block;
		text-align: center;
		line-height: 60px;
		font-size: 16px;
		cursor: pointer;
	}
	.m-button2{
		background: #f7ecf0;
		color: #666;
	}

</style>
