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
		<div class="g-content">

			<a class="u-back" href="../center/information.html">返回 &gt;</a>

			<ul class="m-info">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">

					<el-form-item label="旧密码:"  prop="oldPass">
						<el-input v-model="ruleForm.oldPass" placeholder="请输入旧密码" type="password"></el-input>
					</el-form-item>


					<el-form-item label="新密码:"   prop="pass">
						<el-input type="password" v-model="ruleForm.pass" auto-complete="off" placeholder="请输入新密码" ></el-input>
					</el-form-item>

					<el-form-item label="再次输入密码:"   prop="checkPass">
						<el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="请输入新密码"></el-input>
					</el-form-item>
					<li><ins></ins><button type="button" @click="submitForm('ruleForm')">确定</button></li>
				</el-form>

			</ul>

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


    return {


        ruleForm: {
            oldPass: '',
            pass: '',
            checkPass: '',
        },
        rules: {
            oldPass: [
                { required: true, message: '请输入密码', trigger: 'blur' },
            ],
            pass: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { validator: validatePass2, trigger: 'blur' }
            ]
    	}
 	 }
  },
    components: {
        McHead,McFoot
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
      }
  },
  //相关操作事件
  methods: {


      //验证提交
      submitForm(formName) {
          this.$refs[formName].validate((valid) => {
              if (valid) {

                  var Qs = require('qs');
                  this.axios.post(Lib.C.url_mc + '/mall/sys/acct/modifyPwd', Qs.stringify({
                      ipPk:this.userId,
                      oldPwd:this.ruleForm.oldPass,
                      newPwd:this.ruleForm.pass
                  }))
                      .then(res=>{
                          if(res.data.status==200){
                              this.$alert(res.data.msg, '提示', {
                                  confirmButtonText: '确定',
                              });
                          }else if(res.data.status==400){
                              this.$alert(res.data.msg, '提示', {
                                  confirmButtonText: '确定',
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

  }
}
</script>

<style lang="less">
	body{
		background: #f9f9f9;
	}
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
		label{
			text-align: left;
			width: 120px!important;
		}
		.el-form-item__content{
			margin-bottom: 20px;
			display: inline-block;
			input{
				border: none;
				border-bottom: 1px solid #ddd;
				border-radius: 0;
				width: 310px;
			}
		}
		li{
			margin-bottom: 50px;
		a{
			margin-left: 20px;
		}
		ins{
			display: inline-block;
			width: 120px;
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
