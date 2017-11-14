<template>
	<div class="g-log">
		<h2>我的推荐</h2>
		<div class="m-select">
			<el-select v-model="value" @change="changeOreder">
				<el-option
								v-for="item in options"
								:key="item.value"
								:label="item.label"
								:value="item.value">
				</el-option>
			</el-select>
			<p>会员总数：{{info.memTotal }}人，其中一级会员{{info.memOneTotal  }}人，二级会员{{info.memTwoTotal  }}人</p>
		</div>


		<!--<el-popover-->
						<!--ref="popover"-->
						<!--placement="right"-->
						<!--width="400"-->
						<!--trigger="click">-->
			<!--<el-table :data="gridData">-->
				<!--<el-table-column width="150" property="name" label="订单编号"></el-table-column>-->
				<!--<el-table-column width="100" property="date" label="订单时间"></el-table-column>-->
				<!--<el-table-column width="300" property="price" label="订单金额"></el-table-column>-->
			<!--</el-table>-->
		<!--</el-popover>-->
		<!--<el-button v-popover:popover>click 激活</el-button>-->
		<div class="g-table">

			<div class="head">
				<span>会员账号</span><span>返利积分</span><span>最后下单时间</span><span>下单总金额</span><span>会员级别</span><span>下线会员</span>
			</div>


			<div class="table" v-for="(item,index) in tableData">

				<p><span>{{item.num}}</span><span>{{item.num2}}</span><span>{{item.date}}</span><span><button type="button" >{{item.price}}</button></span><span>{{item.type}}</span><span style="cursor: pointer" @click="togger(item)" :class="{'u-show':item.son}" >{{item.member}} <i  v-show="item.son" class="el-icon-arrow-up"> </i><i v-show="!item.son" class="el-icon-arrow-down"> </i>
		<div class="u-san"></div></span></p>

				<!--二级-->
				<div v-show="item.son" class="table2" v-for="(atem,index) in item.data">
					<p><span>{{atem.num}}</span><span>{{atem.num2}}</span><span>{{atem.date}}</span><span><button  >{{atem.price}}</button></span><span>{{atem.type}}</span>
						<span>{{atem.member}}</span></p>
				</div>

			</div>

		</div>


	</div>
</template>

<script>

import Lib from 'assets/js/Lib';


export default {
  data() {
    return {
		num:0, //账号类别
		text:"我的推荐",
        options: [{
            value: '-1',
            label: '全部订单'
        }, {
            value: '0',
            label: '最近一个月'
        }, {
            value: '1',
            label: '最近三个月'
        }, {
            value: '2',
            label: '最近半年'
        }, {
            value: '3',
            label: '最近一年'
        }],
        value: '-1',
		info:{
            memTotal:0,
            memOneTotal:0,
            memTwoTotal:0
		},
        tableData: [],

//		//弹窗层表格
//        gridData: [{
//            name: '131234321',
//            date: '2016-05-02',
//            price: '￥34.00'
//        }, {
//            name: '131234321',
//            date: '2016-05-02',
//            price: '￥34.00'
//        }, {
//            name: '131234321',
//            date: '2016-05-02',
//            price: '￥34.00'
//        }, {
//            name: '131234321',
//            date: '2016-05-02',
//            price: '￥34.00'
//        }]

    }
  },
    components: {

    },
    //实例初始化最之前，无法获取到data里的数据
    beforeCreate(){
        document.title = '我的推荐';
    },



  //在挂载开始之前被调用
  beforeMount(){
  	
  
  }, 
  //已成功挂载，相当ready()
  mounted(){
	  //console.log(this.$route.query);

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

      //获取全部订单
	  this.getInfo('-1');
  },

  //相关操作事件
  methods: {
	togger(item){
	    //console.log(item)
	    item.son=!item.son;
	},

	changeOreder(val){
	    console.log(val)
        this.getInfo(val);
	},

	getInfo(val){
        //获取一级会员
        this.axios.get(Lib.C.url_mc+'/mall/bss/ip/recmOne',{
            params:{
                ipPk:this.userId,
                itm:val
            }
        })
            .then(res=>{
                //console.log(res.data.data);
				if(res.data.status==400){
				    this.tableData=[];
				    return false;
				}
				if(res.data.data){
                    this.info=res.data.data;
                    var arr=[];
                    res.data.data.ipInfoList.forEach(function (item) {
                        arr.push({
                            id:item.ipPk,
                            num:item.acctNm ,
                            num2:item.rebate  ,
                            date: item.lastOrdTime  ,
                            price:item.ordTotalAmt ,
                            type:'一级会员',
                            member: item.memNum  ,
                            son:false,
                            data:[]
                        })
                    })

                    this.tableData=arr;
                    this.getTwo(arr)
				}

            }).catch(err=>{
            console.log(err);
        });
	},

      //获取二级会员
      getTwo(all){
	    var This=this;
	    //console.log(all)
	    all.forEach(function (item) {
	        console.log(item)
            This.axios.get(Lib.C.url_mc+'/mall/bss/ip/recmTwo',{
                params:{
                    ipPk:item.id,
                    itm:This.value
                }
            })
                .then(res=>{
                    var arrObj=[];
                    res.data.data.forEach(function (atem) {
                        arrObj.push({
                            id:atem.ipPk,
                            num:atem.acctNm ,
                            num2:atem.rebate  ,
                            date: atem.lastOrdTime  ,
                            price:atem.ordTotalAmt ,
                            type:'二级会员',
                            member: null,
                        })
                    })
                    item.data=arrObj;
                    console.log(item)
                }).catch(err=>{
                console.log(err);
            });
        })
	  }
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
	.m-select{
		margin-left: 50px;
		input{
			width: 210px;
			height: 40px;
			border: 1px solid #ddd;
			border-radius: 0;

		}
		.el-input{
			display: inline-block;
		}
		p{
			display: inline-block;
			margin-left: 50px;
			color: #999;
		}
	}
	.g-table{
		border: none;
		.head{
			height: 52px;
			background: #ededed;
			color: #999;
			line-height: 52px;
			span{
				display: inline-block;
				text-align: center;
			}
			span:nth-of-type(1){
				width: 170px;
			}
			span:nth-of-type(2){
				width: 140px;
			}
			span:nth-of-type(3){
				width: 180px;
			}
			span:nth-of-type(4){
				width: 180px;
			}
			span:nth-of-type(5){
				width: 120px;
			}
			span:nth-of-type(6){
				width: 180px;
			}
		}
	.table{

			color: #999;
			border-bottom: 1px solid #ddd;
			p{
				padding: 10px 0;
				margin-bottom: 0;
			}
			span{
				display: inline-block;
				text-align: center;
			}
			span:nth-of-type(1){
				width: 170px;
			}
			span:nth-of-type(2){
				width: 140px;
			}
			span:nth-of-type(3){
				width: 180px;
			}
			span:nth-of-type(4){
				width: 180px;
			}
			span:nth-of-type(5){
				width: 120px;
			}
			span:nth-of-type(6){
				width: 180px;
			}
			.table2:last-of-type{
				border-bottom: none;
			}
		}
		button{
			width: 98px;
			height: 36px;
			border: 1px solid #30b947;
			color: #30b947;
			background: #fff;
		}
		.table2{
			border-bottom: 1px solid #ddd;
			background: #f7f7f7;
			button{
				background: #f7f7f7;
			}
		}
		.u-show{
			position: relative;
			cursor: pointer
		}
		.u-san{
			width: 0;
			height: 0;
			border-left: 10px solid transparent;
			border-right: 10px solid transparent;
			border-bottom: 10px solid #f7f7f7;
			position: absolute;
			left: 46%;
			top: 29px;
		}
	}
</style>
