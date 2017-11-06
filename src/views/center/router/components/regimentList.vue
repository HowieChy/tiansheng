<template>
	<div class="g-log">
		<h2>我的团 &gt; 团员订单流水</h2>

		<el-table
						:data="tableData"
						style="width: 100%">
			<el-table-column
							prop="num"
							label="订单编号"
							width="230"
							align="center">
			</el-table-column>
			<el-table-column
							prop="name"
							label="用户"
							width="180"
							align="center">
			</el-table-column>
			<el-table-column
							prop="date"
							label="下单时间"
							width="200"
							align="center">
			</el-table-column>
			<el-table-column
							prop="type"
							label="商品"
							align="center">
			</el-table-column>

			<el-table-column
							prop="price"
							label="订单金额"
							width="150"
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
		num:1, //账号类别
		text:"我的团员",
        tableData: [{
            num:876857657,
			name:123213,
            date: '2016-05-02 13:25:25',
			type:'白菜5斤',
			price:'￥100.00',
        },{
            num:876857657,
            name:123213,
            date: '2016-05-02 13:25:25',
            type:'白菜5斤',
            price:'￥100.00',
        }]

    }
  },
    components: {

    },
    //实例初始化最之前，无法获取到data里的数据
    beforeCreate(){
        document.title = '我的团';
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
