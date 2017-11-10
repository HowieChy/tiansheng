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
		<!--面包屑-->
		<div class="m-crumb">
			<a href="home.html">首页</a><em>	&gt;</em><span>{{text}}</span>
		</div>
		<div class="g-personal clearfix">

			<McCenter :type="num" :info="text"></McCenter>

			<router-view @child-type="getType"  @child-text="getText"></router-view>

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

import McCenter from 'components/McCenter2';



export default {
  data() {
    return {
		num:'', //账号类别
		text:'',
    }
  },
    components: {
        McHead,McFoot,McCenter
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


      getType(msg){
        this.num=msg;
	  },
      getText(msg){
          this.text=msg;
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

</style>
