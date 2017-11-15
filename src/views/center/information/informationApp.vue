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

		<a class="u-back" href="../center/router.html#/index" >返回 &gt;</a>

		<ul class="m-info">
			<li><ins>用户名：</ins>{{nmCn}}</li>
			<li><ins>密码：</ins>*********** <a href="retrieval.html">更改</a></li>
			<li><ins>真实姓名：</ins>
				<div><input type="text" v-model="name"></div>
			</li>
			<li><ins>性别：</ins>
				<div>
					<el-radio class="radio" v-model="radio" label="男">男</el-radio>
					<el-radio class="radio" v-model="radio" label="女">女</el-radio>
				</div>
			</li>
			<li><ins></ins><button @click="save">保存</button></li>
		</ul>

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
    return {
        nmCn:'',
        radio: '男',
		name:'',
	}
  },
    components: {
        McHead,McFoot,
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
      //获取个人信息
      this.axios.get(Lib.C.url_mc+'/mall/bss/ip/user',{
          params:{
              ipPk:this.userId,
          }
      })
		  .then(res=>{
			  console.log(res.data.data)
			  this.nmCn=res.data.data.nmCn;
			  this.radio=res.data.data.sex;
		  }).catch(err=>{
			  console.log(err);
	  	});




  },
  //相关操作事件
  methods: {
		save(){
            //修改个人信息
            var Qs = require('qs');
            this.axios.post(Lib.C.url_mc + '/mall/bss/addr/addAddr', Qs.stringify({
                ipPk:this.userId,
                sex:this.radio,
                realNm:this.name
            }))
                .then(res => {
                    console.log(res.data);
                    if (res.data.status == 200) {
                        this.$alert(res.data.msg, '提示', {
                            confirmButtonText: '确定',
                            callback: action => {

                            }
                        });
                    }
                    if (res.data.status == 400) {
                        this.$alert(res.data.msg, '提示', {
                            confirmButtonText: '确定',
                            callback: action => {

                            }
                        });
                    }
                }).catch(err => {
                console.log(err);
            });
		}
  }
}
</script>

<style lang="less">

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
		li{
			margin-bottom: 50px;
			a{
				margin-left: 20px;
			}
			ins{
				display: inline-block;
				width: 80px;
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
