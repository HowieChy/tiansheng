<template>
<div id="app">

	<div class="g-content">
		<div class="g-head">
			<p><img src="./assets/images/logo.png" alt=""></p>
		</div>
		<div class="m-login">

			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<h3>账号登录</h3>
				<el-form-item  prop="name">
					<el-input v-model="ruleForm.name" placeholder="请输入用户名" type="text"></el-input>
				</el-form-item>

				<el-form-item  prop="pass">
					<el-input v-model="ruleForm.pass" placeholder="请输入密码" type="password"></el-input>
				</el-form-item>
					<span class="m-button m-button2"  @click="">{{ruleForm.tyzm}}</span>
				</el-form-item>

				<el-form-item>
					<el-button style="background:#30b947 " type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
				</el-form-item>
				<el-form-item>
					<el-checkbox v-model="checked"  @change="jAuto">记住密码</el-checkbox> <p><a href="register.html">立即注册</a><a href="find.html">忘记密码？</a></p>
				</el-form-item>

			</el-form>
		</div>
	</div>

	<!--公用底部组件-->
	<McFoot></McFoot>
</div>
</template>

<script>

import Lib from 'assets/js/Lib';

/*底部组件*/
import McFoot from 'components/McFoot';

export default {
  data() {

    return {
        checked:false,
        ruleForm: {
            name: '',
            pass: '',
        },
        rules: {
            name: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
            ],
            pass: [
                { required: true, message: '请输入密码', trigger: 'blur' },
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




      if(Lib.M.store.get('check')){
          this.checked=true;
          this.ruleForm.name=Lib.M.store.get('user').name;
          this.ruleForm.pass=Lib.M.store.get('user').pass;
	  }else{
          this.checked=false;
          this.ruleForm.name='';
          this.ruleForm.pass='';
	  }

  },
  //相关操作事件
  methods: {
      jAuto(){


	  },

      //验证提交
      submitForm(formName) {
          this.$refs[formName].validate((valid) => {
              if (valid) {

                  this.axios.get(Lib.C.url_mc+'/mall/sys/appDoor/loginForPc',{
                      params:{
                          username:this.ruleForm.name,
                          password:this.ruleForm.pass,
                          rememberMe:true
                      }
                  })
                      .then(res=>{
                          console.log(res.data);
                          if(res.data.status==400){
                              this.$alert(res.data.msg, '提示', {
                                  confirmButtonText: '确定',
                              });
						  }else if(res.data.status==200){

                              //是否保存账号密码
                              if(this.checked){
                                  Lib.M.store.set('user', {name:this.ruleForm.name,pass:this.ruleForm.pass});

                                  Lib.M.store.set('check', true);
                              }else{
                                  Lib.M.store.set('check', false);
                                  Lib.M.store.remove('user');
                              };

							  	Lib.M.store.set('login', true);
                             	Lib.M.store.set('userInfo', {ipPk:res.data.data.userInfo.ipPk});
                          		window.location.href='index.html';
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
	.g-head{
		background: #fff;
		height: 100px;
		p{
			width: 1200px;
			margin: 0 auto;
		}
		img{
			margin-top: 20px;
		}
	}
	.m-login{
		background: url("./assets/images/bg.png") no-repeat;
		height: 590px;

		position: relative;
		form{
			background: #fff;
			padding: 45px 60px;
			width: 610px;
			height: 380px;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-50%);
		}
		h3{
			text-align: center;
			font-size: 25px;
			color: #30b947;
			margin-bottom: 40px;
		}
		.el-form-item{
			margin-bottom: 30px;
		}
		.el-form-item__content{
			margin-left: 0!important;
			input{

				height: 60px;
				padding-left: 40px;
				font-size: 18px;
				border-radius: 0;
			}
		}
		button{
			height: 60px;
			width: 100%;
			border-radius: 0;
			margin-top: 40px;
			font-size: 18px;
		}
		.el-checkbox__input.is-checked .el-checkbox__inner{
			background:  #30b947;;
		}
		.el-checkbox__label{
			margin-left: 8px;
		}
		.el-form-item__content{
			p{
				float: right;
				a{
					margin-left: 20px;
				}
			}
		}
	}


</style>
