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
					<el-checkbox v-model="checked"  @change="jAuto">记住密码</el-checkbox> <p><a href="">立即注册</a><a href="">忘记密码？</a></p>
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
      (function(s) {

          /**
           * 判断是否支持localStorage本地存储
           */
          if (!s.enabled) {
              console.error('localStorage is not supported by your browser.')
              return;
          }

          /**
           * 规定日期格式
           * 比如：yyyy年MM月dd日 HH:mm:ss S、yyyy-MM-dd HH:mm:ss S......
           */
          function _checkFormat(fmt) {
              if (!/^y+[\u5e74-]?M+[\u6708-]?(d+)[\u65e5]? H+[\u65f6:]?m+[\u5206:]?s+[\u79d2]?(( S)?)$/.test(fmt)) {
                  throw new Error('"' + fmt + '" is not supported by the format.');
                  return false;
              }
              return true;
          }

          /**
           * 时间格式化：时间毫秒数、Date对象 ---> 时间字符串 默认格式化格式：yyyy-MM-dd HH:mm:ss
           */
          function _date2str(str, fmt) {
              if (fmt === undefined) {
                  fmt = 'yyyy-MM-dd HH:mm:ss';
              }
              _checkFormat(fmt);
              var date;
              if (typeof str === 'number') {
                  date = new Date(str);
              } else if (_isValidDate(str)) {
                  date = str;
              }
              var o = {
                  'M+' : date.getMonth() + 1, // 月
                  'd+' : date.getDate(), // 日
                  'H+' : date.getHours(), // 小时（24小时制）
                  'm+' : date.getMinutes(), // 分
                  's+' : date.getSeconds(), // 秒
                  'S' : date.getMilliseconds() // 毫秒
              };
              if (/(y+)/.test(fmt)) {
                  fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '')
                      .substr(4 - RegExp.$1.length));
              }
              for ( var k in o) {
                  if (new RegExp('(' + k + ')').test(fmt)) {
                      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
                          : (('00' + o[k]).substr(('' + o[k]).length)));
                  }
              }
              return fmt;
          }

          /**
           * 时间格式化：将时间字符串 ---> Date对象 默认格式化格式：yyyy-MM-dd HH:mm:ss，使用中文不能格式化
           */
          function _str2date(str, fmt) {
              if (fmt === undefined) {
                  fmt = 'yyyy-MM-dd HH:mm:ss';
              }
              _checkFormat(fmt);
              var o = [
                  'y+', // 年
                  'M+', // 月
                  'd+', // 日
                  'H+', // 小时（24小时制）
                  'm+', // 分
                  's+', // 秒
                  'S' // 毫秒
              ];
              var date = new Date();
              for (var k = 0; k < o.length; k++) {
                  var s = o[k];
                  if (new RegExp('(' + s + ')').test(fmt)) {
                      var r = RegExp.$1;
                      var rl = RegExp.$1.length;
                      var si = fmt.indexOf(RegExp.$1);
                      var ei = si + rl;
                      var n = 0;
                      if (r.indexOf('S') > -1) {
                          n = parseInt(str.substr(si));
                          date.setMilliseconds(n); // 设置 Date 对象中的毫秒 (0 ~ 999)。
                      } else {
                          n = parseInt(str.substring(si, ei));
                          if (r.indexOf('y') > -1) {
                              date.setFullYear(n); // 设置 Date 对象中的年份（四位数字）。
                          } else if (r.indexOf('M') > -1) {
                              date.setMonth(n - 1); // 设置 Date 对象中月份 (0 ~ 11)。
                          } else if (r.indexOf('d') > -1) {
                              date.setDate(n); // 设置 Date 对象中月的某一天 (1 ~ 31)。
                          } else if (r.indexOf('H') > -1) {
                              date.setHours(n); // 设置 Date 对象中的小时 (0 ~ 23)。
                          } else if (r.indexOf('m') > -1) {
                              date.setMinutes(n); // 设置 Date 对象中的分钟 (0 ~ 59)。
                          } else if (r.indexOf('s') > -1) {
                              date.setSeconds(n); // 设置 Date 对象中的秒钟 (0 ~ 59)。
                          }
                      }
                  }
              }
              return date;
          }

          /**
           * 转换：毫秒 ---> 天时分秒毫秒
           */
          function _ms2s(ms) {
              var s = parseInt(ms / 1000);// 秒
              var m = 0;// 分
              var h = 0;// 小时
              var d = 0;// 天
              if (s >= 60) {
                  m = parseInt(s / 60);
                  s = parseInt(s % 60);
                  if (m >= 60) {
                      h = parseInt(m / 60);
                      m = parseInt(m % 60);
                      if (h >= 24) {
                          d = parseInt(h / 24);
                          h = parseInt(h % 24);
                      }
                  }
              }
              var str = '';
              if (s > 0)
                  str = '' + parseInt(s) + '\u79d2' + str;
              if (m > 0)
                  str = '' + parseInt(m) + '\u5206' + str;
              if (h > 0)
                  str = '' + parseInt(h) + '\u5c0f\u65f6' + str;
              if (d > 0)
                  str = '' + parseInt(d) + '\u5929' + str;
              return str;
          }

          /**
           * 设置有效时间，返回对象
           */
          function VConstructor(val, exp) {
              var item = {};
              // 创建时间、有效时间
              var createTime = (new Date()).getTime(), effectiveTime;
              if (typeof exp === 'number') {
                  effectiveTime = new Date(createTime + exp * 60000);
              } else if (typeof exp === 'string') {
                  effectiveTime = _str2date(exp);
              }
              if (effectiveTime && !_isValidDate(effectiveTime)) {
                  throw new Error('effectiveTime cannot be converted to a valid Date instance');
              }
              effectiveTime = effectiveTime.getTime();
              item['c'] = _date2str(createTime);
              item['e'] = _date2str(effectiveTime);
              item['t'] = _ms2s(effectiveTime - createTime);
              item['v'] = val;
              return item;
          }

          /**
           * 判断是否是Date对象
           */
          function _isValidDate(date) {
              return Object.prototype.toString.call(date) === '[object Date]'
                  && !isNaN(date.getTime());
          }

          /**
           * 判断是否设置了有效时间
           */
          function _hasEffective(item) {
              if (item) {
                  if (typeof item === 'object' && 'c' in item && 'e' in item
                      && 'v' in item) {
                      return true;
                  }
              }
              return false;
          }

          /**
           * 判断是否是有效
           */
          function _isEffective(item) {
              var ntime = (new Date()).getTime();
              return ntime < _str2date(item.e);
          }

          /**
           * 判断key是否是字符串，如果不是，则转换成字符串
           */
          function _keyAsString(key) {
              if (typeof key !== 'string') {
                  console.warn(key + ' used as a key, but it is not a string.');
                  key = String(key);
              }
              return key;
          }

          /**
           * exp 失效时间：默认为0（单位：分钟）
           */
          s.setExp = function(key, val, exp) {
              key = _keyAsString(key);
              if (exp === undefined) {
                  exp = 0;
              }
              s.set(key, new VConstructor(val, exp));
          };
          s.getExp = function(key) {
              key = _keyAsString(key);
              var item = null;
              try {
                  item = s.get(key);
              } catch (e) {
                  return null;
              }
              if (_hasEffective(item)) {
                  if (_isEffective(item)) {
                      return item.v;
                  } else {
                      s.remove(key);
                      return null;
                  }
              } else {
                  return item;
              }
          };
          s.getAllExp = function() {
              var ret = {};
              s.forEachExp(function(key, val) {
                  ret[key] = val;
              })
              return ret;
          };
          s.forEachExp = function(callback) {
              var storage = s.getAll();
              for ( var key in storage) {
                  callback(key, s.getExp(key));
              }
          };
      })(Lib.M.store);



      if(Lib.M.store.get('check')){
          this.checked=true;
          this.ruleForm.name=Lib.M.store.get('user').name;
          this.ruleForm.pass=Lib.M.store.get('user').pass;
		  // this.ruleForm.name=Lib.M.store.get('user').v.name;
          //this.ruleForm.pass=Lib.M.store.get('user').v.pass;
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
                                 // Lib.M.store.setExp('user', {name:this.ruleForm.name,pass:this.ruleForm.pass}, 0.2);
                                  Lib.M.store.set('check', true);
                              }else{
                                  Lib.M.store.set('check', false);
                                  Lib.M.store.remove('user');
                              };

							  	Lib.M.store.set('login', true);
                             	Lib.M.store.set('userInfo', {ipPk:res.data.data.userInfo.ipPk});
                          		//window.location.href='index.html';
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
