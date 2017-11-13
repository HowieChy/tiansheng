<template>
<div id="app">
	<!--公用头部组件-->
	<McHead >
		<div class="m-search" slot='u-search'>
			<input type="text" value="" placeholder="牛肉">
			<i class="el-icon-search"></i>
		</div>
	</McHead>

	<div class="g-content">
		<div v-html="content"></div>
		<!--img src="https://pro.modao.cc/uploads3/images/1169/11692305/raw_1502176230.jpeg" alt="">-->
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
        content:''
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

      this.axios.get(Lib.C.url_mc+'/mall/bss/news/DeliveryPackage')
          .then(res=>{
              console.log(res.data.data.cont);
              this.content=res.data.data.cont;
          }).catch(err=>{
          console.log(err);
      });

  },


  //相关操作事件
  methods: {


  }
}
</script>

<style lang="less">

	.g-content{
		width: 1200px;
		margin: 0 auto;
		background: #fff;
		img{
			width: 100%;
		}
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
	.g-detail{
		background: #fff;
		padding: 50px;
		min-height: 800px;
		margin-bottom:60px ;
		.top{
			text-align: center;
		border-bottom: 1px solid #ddd;
			h2{
				font-size: 18px;
			}
			h3{
				margin: 20px 0 30px 0;
				color: #999;
			}
		}
		.bottom{
			padding: 40px 20px;
			color: #666;
			line-height: 30px;
		}
	}

</style>
