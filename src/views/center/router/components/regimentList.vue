<template>
	<div class="g-log">
		<h2>我的团 &gt; 团员订单流水</h2>

		<el-table
						:data="tableData"
						style="width: 100%">
			<el-table-column
							prop="ordCode"
							label="订单编号"
							width="230"
							align="center">
			</el-table-column>
			<el-table-column
							prop="acctNm"
							label="用户"
							width="180"
							align="center">
			</el-table-column>
			<el-table-column
							prop="ordTm"
							label="下单时间"
							width="200"
							align="center">
			</el-table-column>
			<el-table-column
							prop="prodNms"
							label="商品"
							align="center">
			</el-table-column>

			<el-table-column
							prop="totOrdAmt"
							label="订单金额"
							width="150"
							align="center">
				<template scope="scope">
					{{scope.row.totOrdAmt|currency}}
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

      console.log(this.$route.query);

      if(Lib.M.store.get('userInfo')){
          this.userId=Lib.M.store.get('userInfo').ipPk;
      }
      //获取个人信息
      this.axios.get(Lib.C.url_mc+'/mall/bss/ip/user',{
          params:{
              ipPk:this.userId,
          }
      })
          .then(res=>{
              console.log(res.data.data)
              switch (res.data.data.catCd){
                  case '3090.100': //VIP
                      this.num=0;
                      this.icon=1;
                      break;
                  case '3090.110':
                      this.num=2;//团员
                      this.icon=0;
                      break;
                  case '3090.120': //团长
                      this.num=1;
                      this.icon=2;
                      break;
              }
              console.log(this.icon)
              this.info=res.data.data;

              this.$emit('child-type',this.num);
              this.$emit('child-text',this.text)
          }).catch(err=>{
          console.log(err);
      });


      //获取
      this.axios.get(Lib.C.url_mc+'/mall/bss/ip/ordList',{
          params:{
              ipPk:this.$route.query.id,
          }
      })
          .then(res=>{
              console.log(res.data.data)
              this.tableData=res.data.data;
          }).catch(err=>{
          console.log(err);
      });
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
