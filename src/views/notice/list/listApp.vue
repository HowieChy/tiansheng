<template>
<div id="app">
	<!--公用头部组件-->
	<!--<McHead   @child-cutTime="getTime"    :cutTime="cutTime">-->
	<McHead>
		<div class="m-search" slot='u-search'>
			<input type="text" value="" placeholder="牛肉">
			<i class="el-icon-search"></i>
		</div>
	</McHead>

	<div class="g-content">
		<!--面包屑-->
		<div class="m-crumb">
			<a href="home.html">首页</a><em>	&gt;</em><span>农产日志</span>
		</div>
		<div class="g-notice">
			<ul class="m-notice">
				<li v-for="(item,index) in items"><a :href="'detail.html?id='+item.newsPk"><p>{{item.nm}}</p><span>{{item.releTm}}</span></a></li>
			</ul>


			<div class="block">
				<el-pagination
								@current-change="handleCurrentChange"
								:page-size="currentPage"
								layout="prev, pager, next, jumper"
								:total="total">
				</el-pagination>
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
        total:null,
        currentPage:1,

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


	  this.axios.get(Lib.C.url_mc+'/mall/bss/news/page',{
          params:{
              pageNo:'',
              pageSize:'',
          }
      })
          .then(res=>{
              this.total=res.data.data.items.length;
          }).catch(err=>{
          console.log(err);
      });

      //日志列表

      this.axios.get(Lib.C.url_mc+'/mall/bss/news/page',{
          params:{
              pageNo:1,
              pageSize:this.currentPage,
          }
	  })
          .then(res=>{
              console.log(res.data.data.items)
              this.items=res.data.data.items;
          }).catch(err=>{
          console.log(err);
      });
      


  },
  //相关操作事件
  methods: {


      handleCurrentChange(val) {
		  this.axios.get(Lib.C.url_mc+'/mall/bss/news/page',{
              params:{
                  pageNo:val,
                  pageSize:1,
              }
          })
              .then(res=>{
                  this.items=res.data.data.items;
              }).catch(err=>{
              console.log(err);
          });
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
	.g-notice{
		background: #fff;
		margin-bottom: 50px;
		padding: 0px 50px 50px 50px;

	}
	.m-notice{
		min-height: 800px;
		li{
			border-bottom: 1px solid #ddd;
			height: 100px;
			line-height: 100px;
			p{
				float: left;
				width: 900px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-size: 17px;
			}
			span{
				float: right;
				color: #999;
			}
		}
	}

	.el-icon-arrow-left:before{
		content: "<上一页" !important;
	}
	.el-icon-arrow-right:before{
		content: "下一页>" !important;
	}
	.el-pagination{
		text-align: center;
		button{
			margin-right:10px!important;
			border: 1px solid #ddd!important;
		}
	}
	.el-pager li{
		margin-right:10px!important;
		border: 1px solid #ddd!important;
	}
	.el-pagination__editor{
		width: 60px!important;
	}
	.el-pager li.active{
		background-color: #30b947!important;
	}

</style>
