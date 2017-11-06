<template>
	<div class="g-log">
		<h2>我的团</h2>

		<div class="m-regiment clearfix">
			<img src="" alt="">
			<div class="info">
				<p>团长名称:XXXXXXXXXX</p>
				<p>团编号:XXXXXXXXXX</p>
				<p>团长电话:XXXXXXXXXX</p>
				<p>收货地址:XXXXXXXXXX</p>
				<p>团长码:XXXXXXXXXX</p>
				<p>拼团购物时间:早上9：00～10：00</p>
			</div>
		</div>

		<el-table
						:data="tableData"
						style="width: 100%"
						v-if="num==1">
			<el-table-column
							prop="name"
							label="我的团员"
							width="130"
							align="center">
			</el-table-column>
			<el-table-column
							prop="num"
							label="团员编号"
							width="100"
							align="center">
			</el-table-column>
			<el-table-column
							prop="price"
							label="余额"
							width="100"
							align="center">
			</el-table-column>
			<el-table-column
							prop="date"
							label="最后一次下单时间"
							width="170"
							align="center">
			</el-table-column>
			<el-table-column
							prop="now"
							label="本月下单频次"
							width="120"
							align="center">
			</el-table-column>
			<el-table-column
							prop="pre"
							label="上月下单频次"
							width="120"
							align="center">
			</el-table-column>
			<el-table-column
							prop="pre2"
							label="上上月下单频次"
							width="130"
							align="center">
			</el-table-column>
			<el-table-column
							label="查看订单"
							href="80"
							align="center">
				<template scope="scope">
					<router-link :to="scope.row.link">查看</router-link>
				</template>
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
            name:658768,
			num:123,
            price:'+￥100.00',
            date: '2016.05.02 13:25:25',
			now:'5次',
			pre:'6次',
            pre2:'3次',
            link: '/regimentList'
        },{
            name:658768,
            num:123,
            price:'+￥100.00',
            date: '2016.05.02 13:25:25',
            now:'5次',
            pre:'6次',
            pre2:'3次',
            link: '/regimentList'
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
		min-height:800px ;
		float: right;
		background: #fff;
		margin-bottom: 150px;
		padding: 40px 0px;
		h2{
			padding:0 50px 40px 50px;
			font-size: 20px;
		}
		p{
			margin-bottom: 30px;
		}
	}
	.el-table{
		border: none;
		margin-bottom: 150px;
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
	.el-table .cell, .el-table th>div{
		padding: 0;
	}
	.m-regiment{
		padding:0 50px 50px 50px;
		.info{
			padding-top: 12px;
			color: #999;
		}
		img{
			float: left;
			width: 290px;
			height: 290px;
			margin-right: 30px;
		}
	}
</style>
