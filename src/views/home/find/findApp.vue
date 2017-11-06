<template>
<div id="app">

	<div class="g-content">
		<div class="g-head">
			<img src="./assets/images/logo.png" alt="">
			<h2>找回密码</h2>
		</div>

		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

			<el-form-item  prop="phone">
				<el-input v-model="ruleForm.phone" placeholder="请输入手机号码" type="number"></el-input>
			</el-form-item>

			<el-form-item  prop="yzm">
				<el-input  style="width: 226px"  v-model="ruleForm.yzm" placeholder="请输入验证码" type="text"></el-input>
				<span class="m-button m-button2"  @click="">{{ruleForm.tyzm}}</span>
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
				<el-button style="background:#30b947 " type="primary" @click="submitForm('ruleForm')">确认</el-button>
			</el-form-item>
			<h5><a href="">返回登录</a></h5>
		</el-form>
	</div>

	<!--公用底部组件-->
	<McFoot></McFoot>
</div>
</template>

<script>

import Lib from 'assets/js/Lib';

/*底部组件*/
import McFoot from 'components/McFoot';

import $ from 'jquery'

export default {
  data() {
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
    return {
        options: [{
            value: 'zhejiang',
            label: '浙江',
            children: [{
                value: 'hangzhou',
                label: '杭州',
                children: [{
                    value: 'xihu',
                    label: '西湖区'
                }, {
                    value: 'binjiang',
                    label: '滨江区'
                }]
            }, {
                value: 'ningbo',
                label: '宁波',
                children: [{
                    value: 'zhenhai',
                    label: '镇海区'
                }, {
                    value: 'jiangbei',
                    label: '江北区'
                }]
            }]
        }],
        selectedOptions: ['zhejiang','ningbo','jiangbei'],
        ruleForm: {
            phone: '',
            yzm:'',
			tyzm:'123',//图形验证码
            yzm2:'',
            pass: '',
            checkPass: '',
        },
        rules: {
            phone: [
                { required: true, message: '请输入手机号码', trigger: 'blur' },
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
            ]
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

  },
  //相关操作事件
  methods: {
      //选择地区
      handleChange(value){
          console.log(value);
	  },

      //验证提交
      submitForm(formName) {
          this.$refs[formName].validate((valid) => {
              if (valid) {
                  //alert('submit!');
                  console.log(this.ruleForm)
              } else {
                  console.log('error submit!!');
                  return false;
              }
          });
      },
	  yzm(){
          var count =60;
          var curCount;
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
              $.ajax({
                  type: "POST", //用POST方式传输
                  dataType: "", //数据格式:JSON
                  url: '', //目标地址
                  data: "",
                  error: function (XMLHttpRequest, textStatus, errorThrown) { },
                  success: function (msg){

                  }
              });

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
