<template>

	<div class="g-right">
		<div class="top clearfix">
			<div class="img">
				<img src="../assets/images/p1.png" alt="">
				<span :class="{'vip':icon==1,'tuan':icon==2}"></span>
			</div>
			<div class="middle">
				<h2>135068464123</h2>
				<h3>您好~</h3>
				<!--<router-link :to="/"></router-link>-->
				<a href="">修改个人信息 &gt;</a>
				<p class="u-share">分享至： <span><img src="../assets/images/qq.png" alt=""></span><span><img src="../assets/images/wx.png" alt=""></span></p>
			</div>
			<div class="info">
				<p>会员级别：VIP用户 <span>会员类别：个人用户</span></p>
				<p>VIP到期时间：2017.9.30 23:00 <span>账户余额：￥20.00</span></p>
				<p>我的积分：20（价值￥2.00）<span>消费总额：￥30000</span></p>
				<p>推荐码：aaa123456</p>
			</div>
		</div>

		<div class="g-look">
			<h2><span>最近浏览</span></h2>
			<!--商品-->
			<ul class="m-shop clearfix">
				<li v-for="(item,index) in shopItem">
					<a href=""><img :src="item.aImg" alt=""></a>
					<p>{{item.title}}</p>
					<p>库存:{{item.store}}</p>
					<p>会员价：<em>￥{{item.newPrice}}</em></p>
					<p>市场价：￥{{item.oldPrice}}</p>
				</li>
			</ul>
		</div>

	</div>

</template>

<script>

import Lib from 'assets/js/Lib';

/*商品图*/
import aImg from '../assets/images/shop.png'

export default {
  data() {
    return {
        num:0, //账号类别
        text:"个人中心",
		icon:1, //0为无标识  1为VIP标识  2为团标识

        //商品列表
        shopItem:[{
            title:"四川凯特芒果",
            store:10,
            newPrice:'300.00',
            oldPrice:'400.00',
            id:'1',
            numer: 1,
            aImg:aImg,
        },
            {
                title:"四川凯特芒果",
                store:5,
                newPrice:'200.50',
                oldPrice:'300.00',
                id:'5',
                numer: 1,
                aImg:aImg,
            },
            {
                title:"四川凯特芒果",
                store:2,
                newPrice:'700.00',
                id:'2',
                numer: 1,
                aImg:aImg,
            },
            {
                title:"四川凯特芒果",
                store:200,
                newPrice:'500.05',
                oldPrice:'600.00',
                id:'7',
                numer: 1,
                aImg:aImg,
            }],

    }
  },

  //实例初始化最之前，无法获取到data里的数据
  beforeCreate(){
      document.title = '个人中心';
  },  
  //在挂载开始之前被调用
  beforeMount(){


  },
	created:function(){
		this.$emit('child-type',this.num);
		this.$emit('child-text',this.text)
	},
  //已成功挂载，相当ready()
  mounted(){


  },
  //相关操作事件
  methods: {

      get(msg){
          this.allNum=msg
      },
      get2(msg){
          this.allPrice=msg
      },
      get3(msg){
          this.cutTime='0'
      },
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
