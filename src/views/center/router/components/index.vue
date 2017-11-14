<template>

	<div class="g-right">

		<el-popover
						ref="popover"
						placement="right"
						width="300"
						trigger="hover">
			<img :src="code" alt="">
		</el-popover>

		<div class="top clearfix">
			<div class="img">
				<img src="../assets/images/p1.png" alt="">
				<span :class="{'vip':icon==1,'tuan':icon==2}"></span>
			</div>
			<div class="middle">
				<h2>{{info.nmCn}}</h2>
				<h3>您好~</h3>
				<!--<router-link :to="/"></router-link>-->
				<a href="./information.html">修改个人信息 &gt;</a>
				<p class="u-share">分享至：
					<!--<span><img src="../assets/images/qq.png" alt=""></span>-->
					<span v-popover:popover><img src="../assets/images/wx.png" alt=""></span>
				</p>
			</div>

			<!--VIP用户-->
			<div class="info" v-if="info.catCd=='3090.100'">
				<p>会员级别：{{info.memRankNmCn}} <span>会员类别：{{info.memKindNmCn}}</span></p>
				<p>VIP到期时间：{{info.expirationDate}}<span>账户余额：{{info.balaAmt|currency}}</span></p>
				<p>我的积分：{{info.pointQty*100}}（价值{{info.pointQty |currency}}）<span>消费总额：{{info.cumConsum|currency }}</span></p>
				<p>推荐码：{{info.referralCode }}</p>
			</div>

			<!--团员-->
			<div class="info" v-if="info.catCd=='3090.110'">
				<p>会员级别：{{info.memRankNmCn}} <span>会员类别：{{info.memKindNmCn}}</span></p>
				<p>身份：团员 <span>账户余额：{{info.balaAmt|currency}}</span></p>
				<p>消费总额：{{info.cumConsum|currency }}<span>累计优惠：￥0.00</span></p>
				<p>推荐码：{{info.referralCode }}</p>
			</div>

			<!--团长-->
			<div class="info" v-if="info.catCd=='3090.120'">
				<p>会员级别：{{info.memRankNmCn}} <span>会员类别：{{info.memKindNmCn}}</span></p>
				<p>身份：团长 <span>团员人数：{{info.memberNum }}人</span></p>
				<p>我的积分：{{info.pointQty*100}}（价值{{info.pointQty |currency}}）<span>推荐码：{{info.referralCode }}</span></p>
			</div>
		</div>

		<div class="g-look">
			<h2><span>最近浏览</span></h2>
			<!--商品-->
			<ul class="m-shop clearfix">
				<li v-for="(item,index) in shopItem">
					<a :href="'../home/detail.html?id='+item.prodPk"><img :src="item.prodImg" alt=""></a>
					<p>{{item.prodNm}}</p>
					<p>库存:{{item.stock}}</p>
					<p>会员价：<em>{{item.membAmt| currency}}</em></p>
					<p>市场价：{{item.markAmt| currency}}</p>
				</li>
			</ul>
		</div>





	</div>

</template>

<script>

import Lib from 'assets/js/Lib';



export default {
  data() {
    return {
        num:0, //账号类别
        text:"个人中心",
		icon:1, //0为团员  1为VIP标识  2为团长标识
		info:{
            nmCn:null,// 用户名
            mob :null,
            headPic :null,//头像
            memRankNmCn :null, // 会员级别
            memKindNmCn :null,// 会员类别
            catNmCn :null,// 用户身份 300.120团长   3090.110团员  3090.100会员
            memberNum:null, //团员数量
            memberCos :null, //团员消费总额
            balaAmt  :null, //账户余额
            cumConsum  :null, //累计消费
            pointQty  :null, //积分余额
            pointRule  :null, //积分兑换规则
            expirationDate:null,//会员到期时间
        },
        //商品列表
        shopItem:[],
		code:''//二维码
    }
  },

  //实例初始化最之前，无法获取到data里的数据
  beforeCreate(){
      document.title = '个人中心';
  },  
  //在挂载开始之前被调用
  beforeMount(){


  },

  //已成功挂载，相当ready()
  mounted(){

    

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

              //二维码
              this.code=Lib.C.url_mc+'/mall/bss/ip/QRCode?url=https://www.baidu.com/?id='+this.info.referralCode;
			 // this.num=0;
              this.$emit('child-type',this.num);
              this.$emit('child-text',this.text)
          }).catch(err=>{
          console.log(err);
      });


      //获取最近游览
      this.axios.get(Lib.C.url_mc+'/mall/bss/prod/prodBHList',{
          params:{
              ipPk:this.userId,
              count:4
          }
      })
          .then(res=>{
              console.log(res.data.data.items)
              this.shopItem=res.data.data.items;
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

	.g-right{
		width: 950px;
		float: right;
		background: #fff;
		margin-bottom: 150px;
		padding: 40px 15px;
		.top{
			padding: 20px 66px;
		}
		.img{
			float: left;
			position: relative;
			img{
				width: 208px;
				height: 208px;
				border-radius: 50%;
			}
			span{
				position: absolute;
				width: 49px;
				height: 49px;
				left: 150px;
				top: 150px;
			}
			.vip{
				background: url("../assets/images/vip.png");
			}
			.tuan{
				background: url("../assets/images/tuan.png");
			}
		}
		.middle{
			float: left;
			margin-left: 30px;
			h2{
				font-size: 23px;
				margin-top:40px ;
				color: #666;
			}
			h3{
				color: #999;
				font-size: 18px;
				margin: 20px 0;
			}
			a{
				color: #30b947;
				font-size: 16px;
			}
		}
		.info{
			float: right;
			width: 350px;
			margin-top: 40px;
			p{
				margin-bottom: 20px;
				span{
					float: right;
					width: 140px;
				}
			}
		}
	}

	/*分享*/
	.u-share{
		margin-top: 20px;
		span{
			width: 34px;
			height: 34px;
			display: inline-block;
			vertical-align: middle;
			margin-left: 10px;
			cursor: pointer;
		}
	}


	/*最近预览商品*/
	.g-look{
		h2{
			margin: 100px 60px 60px 60px;
			position: relative;
			height: 1px;
			background: #ddd;
		span{
			position: absolute;
			font-size: 26px;
			width: 220px;
			height:50px ;
			line-height: 50px;
			background: #fff;
			text-align: center;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-50%);
		}
		}
	}
	.m-shop{
		li{
			float: left;
			margin-right: 20px;
			width: 222px;
			height: 370px;
			margin-bottom: 20px;
		}
		li:nth-child(4n){
			margin-right: 0;
		}
		img{
			width: 222px;
			height: 238px;
			border: 1px solid #ddd;
			margin-bottom: 10px;
		}
		p{
			margin-bottom: 7px;
		em{
			color: #fe3000;
		}
		}
		p:nth-of-type(1){
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		p:nth-of-type(2){
			color: #999;
		}

		p:nth-of-type(4){
			color: #999;
		}

	}
</style>
