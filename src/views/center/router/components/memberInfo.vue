<template>
	<div class="g-log">
		<h2><router-link to="/member">我的推荐</router-link> &gt; 订单详情</h2>
		<h3>会员:23113789</h3>
		<el-table
						:data="tableData"
						style="width: 100%">
			<el-table-column
							prop="num"
							label="订单编号"
							width="376"
							align="center">
			</el-table-column>
			<el-table-column
							prop="date"
							label="订单时间"
							width="300"
							align="center">
			</el-table-column>

			<el-table-column
							prop="price"
							label="发生金额"
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
		text:"我的推荐",
        tableData: [{
            num:125151612,
            date: '2016-05-02 13:25:25',
			price:'￥100.00',
        }, {
            num: 125151612,
            date: '2016-05-02 13:25:25',
            price: '￥100.00',

        }]
    }
  },
    components: {

    },
    //实例初始化最之前，无法获取到data里的数据
    beforeCreate(){
        document.title = '余额日志';
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
		a{
			color: #000;
			font-size: 20px;
		}
		h3{
			padding:0 50px 40px 50px;
			font-size: 17px;
			color: #999;
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
