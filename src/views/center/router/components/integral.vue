<template>
	<div class="g-log">
		<h2>积分日志</h2>

		<el-table
						:data="tableData"
						style="width: 100%">
			<el-table-column
							prop="crtTm"
							label="日期"
							width="220"
							align="center">
			</el-table-column>
			<el-table-column
							prop="catNmCn"
							label="类型"
							width="120"
							align="center">
			</el-table-column>
			<el-table-column
							prop="cd"
							label="单号"
							width="160"
							align="center">
			</el-table-column>
			<el-table-column
							prop="ipNm"
							label="用户"
							width="150"
							align="center">
			</el-table-column>
			<el-table-column
							prop="amountHappen"
							label="发生积分"
							width="150"
							align="center">
			</el-table-column>
			<el-table-column
							prop="givePointQty"
							label="当前积分余额"
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
        tableData: []

    }
  },
    components: {

    },
    //实例初始化最之前，无法获取到data里的数据
    beforeCreate(){
        document.title = '积分日志';
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
              pageSize:999999999
          }
      })
          .then(res=>{
              switch (res.data.data.catCd){
                  case '3090.100': //VIP
                      this.num=0;
                      break;
                  case '3090.110':
                      this.num=2;//团员
                      break;
                  case '3090.120': //团长
                      this.num=1;
                      break;
              }
              this.$emit('child-type',this.num);
              this.$emit('child-text',this.text)
          }).catch(err=>{
          console.log(err);
      });


      this.axios.get(Lib.C.url_mc+'/mall/bss/pointLog/list',{
          params:{
              ipPk:this.userId,
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
