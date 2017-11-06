<template>
	<div class="g-log">
		<h2>积分日志 <span>推荐码:0525522</span></h2>

		<el-table
						:data="tableData"
						style="width: 100%">
			<el-table-column
							prop="date"
							label="日期"
							width="220"
							align="center">
			</el-table-column>
			<el-table-column
							prop="type"
							label="类型"
							width="120"
							align="center">
			</el-table-column>
			<el-table-column
							prop="num"
							label="单号"
							width="160"
							align="center">
			</el-table-column>
			<el-table-column
							prop="name"
							label="用户"
							width="150"
							align="center">
			</el-table-column>
			<el-table-column
							prop="integral"
							label="发生积分"
							width="150"
							align="center">
			</el-table-column>
			<el-table-column
							prop="integral2"
							label="当前总积分"
							align="center">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>

import Lib from 'assets/js/Lib';


export default {
  data() {
    return {
		num:0, //账号类别
		text:"积分日志",
        tableData: [{
            date: '2016-05-02 13:25:25',
			type:'订单完成',
			num:768761,
			name:'用户',
            integral:'+10分',
            integral2:'20分'
        },{
            date: '2016-05-02 13:25:25',
            type:'注册',
            num:null,
            name:'',
            integral:'+10分',
            integral2:'20分'
        },{
            date: '2016-05-02 13:25:25',
            type:'订单完成',
            num:768761,
            name:'87987897',
            integral:'+10分',
            integral2:'20分'
        }]

    }
  },
    components: {

    },
    //实例初始化最之前，无法获取到data里的数据
    beforeCreate(){
        document.title = '积分日志';
    },

    created:function(){
        this.$emit('child-type',this.num);
        this.$emit('child-text',this.text)
    },

  //在挂载开始之前被调用
  beforeMount(){
  	
  
  }, 
  //已成功挂载，相当ready()
  mounted(){
		console.log(this.$route.query);

  },

   computed:{

  },
  //相关操作事件
  methods: {

  }
}
</script>

<style lang="less">


	.g-log{
		width: 980px;
		float: right;
		background: #fff;
		margin-bottom: 150px;
		padding: 40px 0px;
		h2{
			padding:0 50px 40px 50px;
			font-size: 20px;
			span{
				float: right;
				font-size: 16px;
				color: #999;
			}
		}
	}
	.el-table{
		border: none;
	}
	th{
		background: #ededed!important;
		div{
			background: #ededed!important;
		}
	}
	th{
		padding: 15px 0!important;
	}
	td{
		padding: 15px 0!important;
	}
	.el-table--enable-row-hover .el-table__body tr:hover>td{
		background: none;
	}

</style>
