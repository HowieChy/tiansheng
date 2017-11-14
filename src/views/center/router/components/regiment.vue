<template>
	<div class="g-log">
		<h2>我的团</h2>

		<div class="m-regiment clearfix">
			<img :src="info.headImg" alt="">
			<div class="info">
				<p>团长名称 : {{info.headNm}}</p>
				<p>团编号 : {{info.headNum}}</p>
				<p>团长电话 : {{info.headMob}}</p>
				<p>收货地址 : {{info.headAddr}}</p>
				<p>团长码 : {{info.referralCode}}</p>
				<p>拼团购物时间 : {{info.shopTime}}</p>
			</div>
		</div>

		<el-table
						:data="tableData"
						style="width: 100%"
						v-if="num==1">
			<el-table-column
							prop="userAcct"
							label="我的团员"
							width="130"
							align="center">
			</el-table-column>
			<el-table-column
							prop="userCd"
							label="团员编号"
							width="100"
							align="center">
			</el-table-column>
			<el-table-column
							prop="balaAmt"
							label="余额"
							width="100"
							align="center">
			</el-table-column>
			<el-table-column
							prop="lastOrdTime"
							label="最后一次下单时间"
							width="170"
							align="center">
			</el-table-column>
			<el-table-column
							prop="mouthOrdNum"
							label="本月下单频次"
							width="120"
							align="center">
			</el-table-column>
			<el-table-column
							prop="lMouthOrdNum"
							label="上月下单频次"
							width="120"
							align="center">
			</el-table-column>
			<el-table-column
							prop="llMouthOrdNum"
							label="上上月下单频次"
							width="130"
							align="center">
			</el-table-column>
			<el-table-column
							label="查看订单"
							href="80"
							align="center">
				<template scope="scope">
					<router-link :to="scope.row.userPk">查看</router-link>
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
		info:{},
        tableData: []

    }
  },
    components: {

    },
    //实例初始化最之前，无法获取到data里的数据
    beforeCreate(){
        document.title = '我的团';
    },



  //在挂载开始之前被调用
  beforeMount(){
  	
  
  }, 
  //已成功挂载，相当ready()
  mounted(){
      if(Lib.M.store.get('userInfo')){
          this.userId=Lib.M.store.get('userInfo').ipPk;
          console.log(this.userId)
      }
      //获取个人信息
      this.axios.get(Lib.C.url_mc+'/mall/bss/ip/user',{
          params:{
              ipPk:this.userId,
          }
      })
          .then(res=>{
              switch (res.data.data.catCd){
                  case '3090.100': //VIP
                      this.num=0;
                      break;
                  case '3090.110':
                      this.num=2;//团员
					  this.text='我的团'
                      break;
                  case '3090.120': //团长
                      this.num=1;
                      this.text='我的团员'
                      break;
              }
              this.$emit('child-type',this.num);
              this.$emit('child-text',this.text)
          }).catch(err=>{
          console.log(err);
      });

      this.axios.get(Lib.C.url_mc+'/mall/bss/ip/head',{
          params:{
              ipPk:this.userId,
          }
      })
          .then(res=>{
			  console.log(res.data.data)
			  this.info=res.data.data;
			  var obj=[];
			  if( res.data.data.headUserList){
                  res.data.data.headUserList.forEach(function (item) {
                      obj.push({
                          userPk:item.userPk,             //团员主键
                          userAcct:item.userAcct,         //团员名称
                          userCd:item.userCd,           //团员编号
                          balaAmt:item.balaAmt,       //账户余额
                          lastOrdTime:item.lastOrdTime,   //最后一次下单时间
                          totalOrdNum:item.totalOrdNum,     //下单总频次
                          mouthOrdNum:item.mouthOrdNum,     //本月下单频次
                          lMouthOrdNum:item.lMouthOrdNum,    //上月下单频次
                          llMouthOrdNum:item.llMouthOrdNum,   //上上月下单频次
                          userPk:'/regimentList?id='+item.userPk
                      })
                  })
                  this.tableData=obj;
			  }

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
		.cell{
			a{
				font-size: inherit;
			}
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
