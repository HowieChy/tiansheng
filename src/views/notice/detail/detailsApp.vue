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
			<a href="home.html">首页</a><em>	&gt;</em><span><a :href="aHref.src">{{aHref.title}}</a></span><em>	&gt;</em><span>{{aHref.title2}}</span>
		</div>
		<div class="g-detail">
			<div class="top">
				<h2>{{items.nm}}</h2>
				<h3>{{items.releTm}}</h3>
			</div>
			<div class="bottom">
				<p v-html="items.cont">

				</p>
			</div>
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
    return {
       items:[],
		aHref:{
            src:'',
			title:''
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

      var prodId= Lib.M.getUrlQuery('id',Lib.C.url_host);
	  if(prodId){
          console.log(prodId)
          this.axios.get(Lib.C.url_mc+'/mall/bss/news/details',{
              params:{
                  newsPk:prodId
              }
          })
              .then(res=>{
                  console.log(res.data.data.newsVo);
                  this.items=res.data.data.newsVo;
                  this.aHref={
                      title:'农场日志',
                      title2:'公告详情',
					  src:'list.html'
				  }
				  document.title='公告详情'
              }).catch(err=>{
              console.log(err);
          });
	  }



      var activId= Lib.M.getUrlQuery('activeId',Lib.C.url_host);
	  if(activId){
          console.log(activId)
          this.axios.get(Lib.C.url_mc+'/mall/bss/farm/details',{
              params:{
                  farmActivePk:activId
              }
          })
              .then(res=>{
                  console.log(res.data.data.farmActiveVo);
                  this.items=res.data.data.farmActiveVo;
                  this.aHref={
                      title:'农场活动',
					  title2:'活动详情',
                      src:'active.html'
                  }
                  document.title='活动详情'
              }).catch(err=>{
              console.log(err);
          });
	  }

  },
  //相关操作事件
  methods: {

      handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
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
		img{
			width: 100%;
		}
	}

</style>
