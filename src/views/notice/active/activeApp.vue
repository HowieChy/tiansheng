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
		<!--面包屑-->
		<div class="m-crumb">
			<a href="home.html">首页</a><em>	&gt;</em><span>商城广告</span>
		</div>
		<div class="g-notice">
			<div class="m-tab">
				<el-radio-group v-model="radio" @change="tab">
					<el-radio-button label="最新活动"></el-radio-button>
					<el-radio-button label="往期活动"></el-radio-button>
				</el-radio-group>
			</div>
			<ul class="m-notice">
				<li v-for="(item,index) in items"><a :href="'detail.html?activeId='+item.farmActivePk"><p>{{item.nm}}</p><span>{{item.releTm}}</span></a></li>
			</ul>


			<div class="block">
				<el-pagination
								@current-change="handleCurrentChange"
								:page-size="1"
								:current-page="pageNum"
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
        radio: '最新活动',

		type:true,
        total:0,
        pageNum:1,
        items:[],

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

      //默认列表
	  this.getTotal(this.type);
      this.getList(1,this.type)

  },
  //相关操作事件
  methods: {
      tab(){
		  if(this.radio=='往期活动'){
			  this.getList(1,false)
			  this.total=3;
			  this.pageNum=1;
			  this.type=false;
		  }else{
			  this.getList(1,true)
			  this.getTotal(true);
			  this.pageNum=1;
			  this.type=true;
		  }
	  },
      //获取总页数
	  getTotal(tab){
          this.axios.get(Lib.C.url_mc+'/mall/bss/farm/page',{
              params:{
                  pageNo:'',
                  pageSize:'',
                  statu:tab,
              }
          })
              .then(res=>{
                  this.total=res.data.data.items.length;
              }).catch(err=>{
              console.log(err);
          });
	  },
	  //获取列表数据
      getList(num,tab){
          this.axios.get(Lib.C.url_mc+'/mall/bss/farm/page',{
              params:{
                  pageNo:num,
                  pageSize:1,
                  statu:tab,
              }
          })
              .then(res=>{
                  //console.log(res.data.data.items);
                  this.items=res.data.data.items;
              }).catch(err=>{
              console.log(err);
          });
	  },

	  //分页获取列表数据
      handleCurrentChange(val) {
          this.pageNum=val;
          this.getList(val,this.type)
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
	.m-tab{
		text-align: center;
		padding-top: 30px;
		span{
			width: 220px;
			height: 58px;
			padding: 0;
			line-height: 58px;

		}
		.el-radio-button__inner{
			border-color: #ddd;
			color: #999;
		}
		.el-radio-button__orig-radio:checked+.el-radio-button__inner{
			background: #30b947;
			border-color: #30b947;
		}
		.el-radio-button__inner:hover{
			color: #999;
			border-color: #30b947;
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

	.block{
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
	}

</style>
