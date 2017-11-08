

<template>
<div id="app">
	<!--公用头部组件-->
	<McHead   @child-shop="getShop"  @child-id="getId"  @child-cutTime="getTime"    :lists="carItems" :allPrice="allPrice" :allNum="allNum"  :cutTime="cutTime">
		<div class="m-search" slot='u-search'>
			<input type="text" value="" placeholder="牛肉">
			<i class="el-icon-search"></i>
		</div>
	</McHead>

	<!--导航-->
	<div class="g-nav">
		<div class="content">
			<div class="m-all">
				<ul>
					<li>
						<p>全部分类</p>
					</li>

					<li  v-for="(item,index) in siledItem" @mouseenter="jNav1" @mouseleave="jNav2">
						<p><span>{{item.nmCn}}</span></p>
						<div class="m-float">
							<div class="item" v-for="(val,index) in item.childSysCatDtozList">
								<h2>{{val.nmCn}} <i class="el-icon-arrow-right"></i></h2>
								<a v-for="(atem,index) in  val.childSysCatDtozList" href="">{{atem.nmCn}}</a>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="m-nav">
				<a href="">VIP专区</a>
				<a href="">预售专区</a>
				<a href="">免耕专区</a>
				<a href="">闪送专区</a>
				<a href="">私人订制</a>
				<a href="">卡卷专区</a>
				<a href="">增值服务</a>
				<a href="">科普体现</a>
				<a href="">农场日志</a>
				<a href="">产品大全</a>

			</div>
		</div>
	</div>
	<!--/导航-->

	<!--轮播图-->
	<div class="g-Carousel">
		<el-carousel trigger="click" :interval="5000">
			<el-carousel-item v-for="(item,index) in slide" :key="index" :label="item.cd">
				<a :href="item.hrefUrl">
					<img :src="item.srcUrl" alt="">
				</a>
			</el-carousel-item>
		</el-carousel>
	</div>
	<!--/轮播图-->



	<div class="g-listed" v-if="door">
		<h2 v-if="shopItem[0].prodRos.length">上市货</h2>
		<!--商品-->
		<ul class="m-shop clearfix">
			<li v-for="(item,index) in shopItem[0].prodRos">
				<a :href="'detail.html?id='+item.prodPk"><img v-view="item.imgUrl" alt=""></a>
				<p>{{item.nm}}</p>
				<p>库存:{{item.stock}}</p>
				<p>会员价：<em>{{item.membAmt| currency}}</em></p>
				<p>市场价：{{item.markAmt| currency}}</p>
				<div v-if="index==0||index==3||index==4||index==5">
					<!--计数-->

					<el-input-number size="small" v-model="item.number" :min="1" :max="Number(item.stock)"></el-input-number>
					<!--购物图标-->
					<ins :id="item.prodPk" @click="addShop(item,index)" :num="item.number" :price="item.membAmt"></ins>
				</div>

				<button  class="u-button" v-if="index==1">已售罄</button>

				<button  class="u-button u-time" v-if="index==2"><em>离开始还有 <count-down :endTime="item.time" :callback="callback" endText="0S"></count-down></em></button>

			</li>
		</ul>

	</div>

	<div class="g-content" >

		<!--VIP专区-->

		<div class="g-shops" v-if="door">
			<h2 v-if="shopItem[1].prodRos.length">VIP专区</h2>
			<!--商品-->
			<ul class="m-shop clearfix">
				<li v-for="(item,index) in shopItem[1].prodRos">
					<a href=""><img v-view="item.imgUrl" alt=""></a>
					<p>{{item.nm}}</p>
					<p>库存:{{item.stock}}</p>
					<p>会员价：<em>{{item.membAmt| currency}}</em></p>
					<p>市场价：{{item.markAmt| currency}}</p>
					<div v-if="index==0||index==3||index==4||index==5">
						<!--计数-->

						<el-input-number size="small" v-model="item.number" :min="1" :max="Number(item.stock)"></el-input-number>
						<!--购物图标-->
						<ins :id="item.prodPk" @click="addShop(item,index)" :num="item.number" :price="item.membAmt"></ins>
					</div>

					<button  class="u-button" v-if="index==1">已售罄</button>

					<button  class="u-button u-time" v-if="index==2"><em>离开始还有 <count-down :endTime="item.time" :callback="callback" endText="0S"></count-down></em></button>

				</li>
			</ul>
		</div>



		<!--预售专区-->
		<div class="g-shops" v-if="door">
			<h2 v-if="shopItem[2].prodRos.length" class="u-new3">预售专区</h2>
			<!--商品-->
			<ul class="m-shop clearfix">
				<li v-for="(item,index) in shopItem[2].prodRos">
					<a href=""><img v-view="item.imgUrl" alt=""></a>
					<p>{{item.nm}}</p>
					<p>库存:{{item.stock}}</p>
					<p>会员价：<em>{{item.membAmt| currency}}</em></p>
					<p>市场价：{{item.markAmt| currency}}</p>
					<div v-if="index==0||index==3||index==4||index==5">
						<!--计数-->

						<el-input-number size="small" v-model="item.number" :min="1" :max="Number(item.stock)"></el-input-number>
						<!--购物图标-->
						<ins :id="item.prodPk" @click="addShop(item,index)" :num="item.number" :price="item.membAmt"></ins>
					</div>

					<button  class="u-button" v-if="index==1">已售罄</button>

					<button  class="u-button u-time" v-if="index==2"><em>离开始还有 <count-down :endTime="item.time" :callback="callback" endText="0S"></count-down></em></button>

				</li>
			</ul>
		</div>

		<!--今日上架-->
		<div class="g-shops" v-if="door">
			<h2 v-if="shopItem[3].prodRos.length" class="u-new2">今日上架</h2>
			<!--商品-->
			<ul class="m-shop clearfix">
				<li v-for="(item,index) in shopItem[3].prodRos">
					<a href=""><img v-view="item.imgUrl" alt=""></a>
					<p>{{item.nm}}</p>
					<p>库存:{{item.stock}}</p>
					<p>会员价：<em>{{item.membAmt| currency}}</em></p>
					<p>市场价：{{item.markAmt| currency}}</p>
					<div v-if="index==0||index==3||index==4||index==5">
						<!--计数-->

						<el-input-number size="small" v-model="item.number" :min="1" :max="Number(item.stock)"></el-input-number>
						<!--购物图标-->
						<ins :id="item.prodPk" @click="addShop(item,index)" :num="item.number" :price="item.membAmt"></ins>
					</div>

					<button  class="u-button" v-if="index==1">已售罄</button>

					<button  class="u-button u-time" v-if="index==2"><em>离开始还有 <count-down :endTime="item.time" :callback="callback" endText="0S"></count-down></em></button>

				</li>
			</ul>
		</div>

		<!--免耕专区-->
		<div class="g-shops" v-if="door">
			<h2 v-if="shopItem[4].prodRos.length" class="u-new4">免耕专区</h2>
			<!--商品-->
			<ul class="m-shop clearfix">
				<li v-for="(item,index) in shopItem[4].prodRos">
					<a href=""><img v-view="item.imgUrl" alt=""></a>
					<p>{{item.nm}}</p>
					<p>库存:{{item.stock}}</p>
					<p>会员价：<em>{{item.membAmt| currency}}</em></p>
					<p>市场价：{{item.markAmt| currency}}</p>
					<div v-if="index==0||index==3||index==4||index==5">
						<!--计数-->

						<el-input-number size="small" v-model="item.number" :min="1" :max="Number(item.stock)"></el-input-number>
						<!--购物图标-->
						<ins :id="item.prodPk" @click="addShop(item,index)" :num="item.number" :price="item.membAmt"></ins>
					</div>

					<button  class="u-button" v-if="index==1">已售罄</button>

					<button  class="u-button u-time" v-if="index==2"><em>离开始还有 <count-down :endTime="item.time" :callback="callback" endText="0S"></count-down></em></button>

				</li>
			</ul>
		</div>

		<!--天胜丽制-->
		<div class="g-shops" v-if="door">
			<h2 v-if="shopItem[5].prodRos.length" class="u-new5">天胜丽制</h2>
			<!--商品-->
			<ul class="m-shop clearfix">
				<li v-for="(item,index) in shopItem[5].prodRos">
					<a href=""><img v-view="item.imgUrl" alt=""></a>
					<p>{{item.nm}}</p>
					<p>库存:{{item.stock}}</p>
					<p>会员价：<em>{{item.membAmt| currency}}</em></p>
					<p>市场价：{{item.markAmt| currency}}</p>
					<div v-if="index==0||index==3||index==4||index==5">
						<!--计数-->

						<el-input-number size="small" v-model="item.number" :min="1" :max="Number(item.stock)"></el-input-number>
						<!--购物图标-->
						<ins :id="item.prodPk" @click="addShop(item,index)" :num="item.number" :price="item.membAmt"></ins>
					</div>

					<button  class="u-button" v-if="index==1">已售罄</button>

					<button  class="u-button u-time" v-if="index==2"><em>离开始还有 <count-down :endTime="item.time" :callback="callback" endText="0S"></count-down></em></button>

				</li>
			</ul>
		</div>

		<!--闪送专区-->
		<div class="g-shops"  v-if="door">
			<h2 v-if="shopItem[6].prodRos.length" class="u-new6">闪送专区</h2>
			<!--商品-->
			<ul class="m-shop clearfix">
				<li v-for="(item,index) in shopItem[6].prodRos">
					<a href=""><img v-view="item.imgUrl" alt=""></a>
					<p>{{item.nm}}</p>
					<p>库存:{{item.stock}}</p>
					<p>会员价：<em>{{item.membAmt| currency}}</em></p>
					<p>市场价：{{item.markAmt| currency}}</p>
					<div v-if="index==0||index==3||index==4||index==5">
						<!--计数-->

						<el-input-number size="small" v-model="item.number" :min="1" :max="Number(item.stock)"></el-input-number>
						<!--购物图标-->
						<ins :id="item.prodPk" @click="addShop(item,index)" :num="item.number" :price="item.membAmt"></ins>
					</div>

					<button  class="u-button" v-if="index==1">已售罄</button>

					<button  class="u-button u-time" v-if="index==2"><em>离开始还有 <count-down :endTime="item.time" :callback="callback" endText="0S"></count-down></em></button>

				</li>
			</ul>
		</div>

		<!--产品检测-->
		<div class="g-items">
			<h2 class="u-jc">产品检测</h2>
			<a href="">
				<img src="./assets/images/jc1.png" alt="">
			</a>
			<a href="">
				<img src="./assets/images/jc2.png" alt="">
			</a>
			<a href="">
				<img src="./assets/images/jc3.png" alt="">
			</a>
		</div>

		<!--农场风采-->
		<div class="g-items">
			<h2>农场风采</h2>
			<a href="">
				<img src="./assets/images/pic.png" alt="">
				<div class="m-mask"></div>
			</a>
			<a href="">
				<img src="./assets/images/pic.png" alt="">
				<div class="m-mask"></div>
			</a>
			<a href="">
				<img src="./assets/images/pic.png" alt="">
				<div class="m-mask"></div>
			</a>
		</div>
	</div>



	<!--公用底部组件-->
	<McFoot></McFoot>
</div>
</template>

<script>

import Lib from 'assets/js/Lib';

/*头部组件*/
import McHead from 'components/McHead';
/*底部组件*/
import McFoot from 'components/McFoot';
/*倒计时组件*/
import countDown from 'components/Countdown';

import $ from 'jquery';

import Vue from 'vue';
import VueViewload from 'vue-viewload';
//使用VueViewload
Vue.use(VueViewload, {
    threshold: -200,
    effectFadeIn: true,
//    callback: function(ele, src) {
//        console.log(ele.nodeName + '...' + src);
//    }
})

/*商品图*/
import aImg from './assets/images/shop.png'


export default {
  data() {
    return {
        login:false, //登录状态
        userId:'',//用户ID

        siledItem:[],//左侧导航
        slide:[],    //轮播图
        shopItem:[],//模块
        carItems:[],   //购物车列表

        allPrice:0,//商品总价
		allNum:0,//商品总数

		door:false, //模块是否展示

		cutTime:'1510140980' //倒计时
    }
  },
    components: {
        McHead,McFoot,countDown
    },
  //实例初始化最之前，无法获取到data里的数据
  beforeCreate(){


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

      //获取用户ID

//	  if((Math.round(new Date().getTime()/1000))>(Math.round(new Date(Lib.M.store.get('user').e).getTime()/1000))){
//          Lib.M.store.remove('user');
//      };
//      console.log(Lib.C.appname)
	  //左侧导航
      this.axios.get(Lib.C.url_mc+'/mall/sys/sysCat/tree?methCd=9040')
          .then(res=>{
              //console.log(res.data)
			  this.siledItem=res.data;
          }).catch(err=>{
          console.log(err);
      });

      //轮播图
      this.axios.get(Lib.C.url_mc+'/mall/bss/ad/list?statCd=2210.170')
          .then(res=>{
             // console.log(res.data.data)
              this.slide=res.data.data.items;
          }).catch(err=>{
          console.log(err);
      });
      //专区内容

      this.axios.get(Lib.C.url_mc+'/mall/bss/prod/list')

          .then(res=>{
             // console.log(res.data)
              this.shopItem=res.data.data;
              this.door=true;
          }).catch(err=>{
          console.log(err);
      });



      //获取购物车
      this.axios.get(Lib.C.url_mc+'/mall/bss/cart/cartList',{
          params:{
              ipPk:this.userId,
          }
	  })
          .then(res=>{
              this.carItems=res.data.data;
              this.carItems.map(function (item) {
                  this.allNum=this.carItems.length;
                  this.allPrice+=item.membAmt*item.qty;
                  console.log(this.allNum,this.allPrice)
              }.bind(this));
          }).catch(err=>{
          console.log(err);
      });
  },


  //相关操作事件
  methods: {
      getShop(msg){
          this.allNum=msg.number  //获取删除商品后的商品数量
          this.allPrice=msg.price //获取删除商品后的价格
	  },
      getTime(msg){
          this.cutTime='0'
      },

	  //获取删除的ID,数量
	  getId(msg){
          console.log(msg[0],msg[1])
          var This=this;
          //库存
          for(var i=0;i<this.shopItem.length;i++){
              //console.log(this.shopItem[i])
              this.shopItem[i].prodRos.forEach(function (elem,index) {
                 // console.log(elem,index);
                  if(msg[0]==elem.prodPk){
                      elem.stock+=msg[1];
                  }
              })
          }
	  },



	  //导航
      jNav1(e){
          $('.m-float').hide();
          $(e.currentTarget).find('.m-float').show()
	  },
      jNav2(e){
          $('.m-float').hide();
      },

	  //开始倒计时
      callback(){
		console.log('结束')
      },


      //购买商品
      addShop(item,index){
          var Qs = require('qs');
          //this.axios.post('/api/mall/bss/cart/add', Qs.stringify({
         	this.axios.post(Lib.C.url_mc+'/mall/bss/cart/add', Qs.stringify({
              ipPk:this.userId,
              prodPk:item.prodPk,
              prodNum:item.number
          }),{
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
              }
          })
              .then(res=>{
                  console.log(res.data);
                  if(res.data.status==200){

//                      this.$alert('加入购物车成功', '提示', {
//                          confirmButtonText: '确定',
//                          callback: action => {
//
//                          }
//                      });

                      //添加商品
                      function add(e) {
                          e.carItems.push({
                              imgUrl:item.imgUrl,
                              prodNm:item.nm,
                              membAmt:item.membAmt,
                              qty:item.number,
                              prodPk:item.prodPk
                          });
                      };
                      //计算价格
                      function sum(e) {
                          e.allNum=0;
                          e.allPrice=0;
                          e.carItems.map(function (item) {
                              e.allNum=e.carItems.length;//商品总数
                              e.allPrice+=item.membAmt*item.qty//商品价格
                          })
                      }
                      if(this.carItems.length){
                          add(this);
                          var hash={};
                          var newItems=[];
                          this.carItems.map(function (e,i) {
                              if(!hash[e.prodPk]){
                                  newItems.push(e);
                                  hash[e.prodPk]=e;
                              }else{
                                  hash[e.prodPk].qty+=e.qty
                              }
                          })
                          this.carItems=newItems;
                          sum(this);
                      }else{
                          console.log('第一次添加')
                          add(this)
                          sum(this)
                      }


                      //库存
                      for(var i=0;i<this.shopItem.length;i++){
                          this.shopItem[i].prodRos.forEach(function (elem,index) {
                              if(item.prodPk==elem.prodPk){

                                  elem.stock-=item.number;
                              }
                          })
                      }

                      item.number=1;
                      if(item.stock<0){
                          item.stock=0;
                          return false;
                      }

                  }
                  if(res.data.status==400){
                      this.$alert('加入购物车失败', '提示', {
                          confirmButtonText: '确定',
                          callback: action => {

                          }
                      });
                  }
              }).catch(err=>{
              console.log(err);
          });


	  }

  }
}
</script>

<style lang="less">
	body{
		background: #fff!important;
	}
	/*导航*/
	.g-nav{
		width:100%;
		background: #30b947;
		height: 40px;
		line-height: 40px;
		.content{
			width: 960px;
			margin: 0 auto;
			padding-left: 240px;
			position: relative;
			a{
				color: #fff;
				display: inline-block;
				padding: 0 18.3px;
			}
			a:hover{
				background: url("./assets/images/bg3.png");
			}
		}
		/*分类*/
		.m-all{
			position: absolute;
			left: 0;
			top: 0;
			background: url("./assets/images/bg3.png");
			z-index: 999;
			width: 240px;

			p:hover{
				background: url("./assets/images/bg2.png");
				cursor: pointer;
			};
			span{
				display: inline-block;
				text-indent: 0;
				line-height: normal;
				width: 240px;
				height: 47px;
				line-height: 47px;
				text-indent: 74px;
			}
			li{
				color: #fff;
			}
			li:first-child{
				height: 40px;
				line-height: 40px;
				text-indent: 74px;
				background: #2ba63e;
				p{
					background: url("./assets/images/p1.png") no-repeat 30px 50%;
				}
			}
			li:nth-of-type(2){
				margin-top: 14px;
				span{
					background: url("./assets/images/p2.png") no-repeat 30px 50%;
				}
			}
			li:nth-of-type(3){
				span{
					background: url("./assets/images/p3.png") no-repeat 30px 50%;
				}
			}
			li:nth-of-type(4){
				span{
					background: url("./assets/images/p4.png") no-repeat 30px 50%;
				}
			}
			li:nth-of-type(5){
				span{
					background: url("./assets/images/p5.png") no-repeat 30px 50%;
				}
			}
			li:nth-of-type(6){
				span{
					background: url("./assets/images/p6.png") no-repeat 30px 50%;
				}
			}
			li:nth-of-type(7){
				span{
					background: url("./assets/images/p7.png") no-repeat 30px 50%;
				}
			}
			li:nth-of-type(8){
				span{
					background: url("./assets/images/p8.png") no-repeat 30px 50%;
				}
			}
			li:last-of-type{
				margin-bottom: 14px;
				span{
					background: url("./assets/images/p9.png") no-repeat 30px 50%;
				}
			}
			/*悬浮分类*/
			.m-float{
				display: none;
				width: 770px;
				min-height: 354px;
				background: #fff;
				position: absolute;
				top: 40px;
				left: 240px;
				line-height: normal;
				color: #000;
				text-indent: 0;
				box-shadow: 0 3px 5px #ccc;
				padding: 25px 40px ;
				.item{
					margin-bottom: 30px;
					i{
						margin-left: 12px;
						font-size: 18px;
					}
				}
				a{
					color: #666;
					display: inline-block;
					padding-left: 0;
					padding-right: 50px;
					margin-bottom: 20px;
				}
				a:hover{
					color: #2ba63e;
					background: #fff;
				}
				h2{
					font-size: 20px;
					margin-bottom: 20px;
				}

			}


		}
	}

	/*轮播图*/
	.g-Carousel{
		height: 404px;
		width: 1200px;
		margin: 0 auto;
		img{
			width: 1200px;
			height: 100%;
		}
		.el-carousel__indicators--labels{
			padding-left: 230px;
		}
		.el-carousel__button{
			background: url("./assets/images/bg1.png") no-repeat;
			opacity: 1;
		}
		.el-carousel__indicators--labels .el-carousel__button{
			width: 183px;
			height: 40px;
		}
		.el-carousel__indicators--labels .el-carousel__indicator{
			padding: 6px 2px;
		}
		.el-carousel__indicator.is-active button{
			background: url("./assets/images/bg2.png") no-repeat;
			color: #fff;
		}
		.el-carousel__container{
			height: 404px;
		}
		.el-carousel__arrow--left{
			left: 256px;
		}
		.el-carousel__arrow--right{
			right: 16px;
		}
	}

	.g-content{
		background: #f4f4f4;
		margin-top: 30px;
		padding-bottom: 10px;
	}
	/*农场风采*/
	.g-items{
		width: 1200px;
		margin: 0 auto;
		padding: 10px 0 ;
		font-size: 0;
		a{
			width: 386px;
			height: 380px;
			display: inline-block;
			margin-right: 20px;
			position: relative;
		}
		img{
			width: 100%;
			height: 100%;
		}
		a:last-child{
			margin: 0;
		}
		h2{
			font-size: 20px;
			padding:  20px 0;
			background: url("./assets/images/item1.png") no-repeat 4px 50%;
			padding-left: 46px;
			font-weight: bold;
		}
		.u-jc{
			background: url("./assets/images/item2.png") no-repeat 4px 50%;
		}
		.m-mask{
			width: 386px;
			height: 380px;
			position: absolute;
			left: 0;
			top: 0;
			background: url("./assets/images/mask.png") no-repeat 50% 50%;
		}
	}

	/*上市货*/
	.g-listed{
		width: 1200px;
		margin: 0 auto;
		h2{
			font-size: 20px;
			padding:  20px 0;
			background: url("./assets/images/item0.png") no-repeat 4px 50%;
			padding-left: 46px;
			font-weight: bold;
		}
	}

	/*商品*/
	.m-shop{
		li{
			float: left;
			margin-right: 20px;
			width: 224px;
			height: 407px;
			margin-bottom: 20px;
		}
		li:nth-child(5n){
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
		input{
			font-size: 15px;
		}
		ins{
			display: inline-block;
			width: 32px;
			height: 32px;
			background: url("./assets/images/cart.png") no-repeat;
			float: right;
			margin-right: 10px;
			cursor: pointer;
			margin-top: 13px;
		}
		.el-input__inner{
			border: none;
		}
		.el-input-number__decrease, .el-input-number__increase{
			border: none;
			width: 18px!important;
			height: 18px;
			i{
				vertical-align: 30%;

			}
			.el-icon-minus:before{
				content: '';
			}
			.el-icon-plus:before{
				content: '';
			}
		}

		.el-input-number{
			margin-left: 20px;
			margin-top: 20px;
		}
		.el-input-number .el-input__inner{
			padding: 0;
			width: 60px;
			text-align: center;
			height: 20px;

		}
		.el-input-number--small{
			width: 60px;
		}
		.el-input-number__decrease{
			left: -20px;
			background: url("./assets/images/sum2.png") no-repeat;
			&.is-disabled{
				 background: url("./assets/images/sum4.png") no-repeat;
			}
		}
		.el-input-number__increase{
			right: -20px;
			background: url("./assets/images/sum1.png") no-repeat;
			&.is-disabled{
				 background: url("./assets/images/sum3.png") no-repeat;
			 }
		}
		.u-button{
			background: #fff;
			width: 200px;
			height: 38px;
			border: 1px solid #ccc;
			border-radius: 4px;
			margin-top: 11px;
			cursor: pointer;
		}
		.u-time{
			background: #fe3000;
			border-color:#fe3000 ;
			span{
				vertical-align: -1px;
			}
			em{
				display: inline-block;
				background: url("./assets/images/time.png") no-repeat ;
				padding-left: 25px;
				color: #fff;
			}
		}

	}

	.g-shops{
		.m-shop .el-input-number .el-input__inner{
			background: none;
		}
		width: 1200px;
		margin: 0 auto;
		h2{
			font-size: 20px;
			padding:  20px 0;
			background: url("./assets/images/item3.png") no-repeat 4px 50%;
			padding-left: 46px;
			font-weight: bold;
		}
		.u-new2{
			background: url("./assets/images/item4.png") no-repeat 4px 50%;
		}
		.u-new3{
			background: url("./assets/images/item5.png") no-repeat 4px 50%;
		}
		.u-new4{
			background: url("./assets/images/item6.png") no-repeat 4px 50%;
		}
		.u-new5{
			background: url("./assets/images/item7.png") no-repeat 4px 50%;
		}
		.u-new6{
			background: url("./assets/images/item8.png") no-repeat 4px 50%;
		}
		.u-ad{
			float: left;
			margin-right: 20px;
			width: 224px;
			height: 407px;
			img{
				width: 100%;
				height: 100%;
			}
		}

		li:nth-of-type(5n){
			margin-right: 0;
		}

	}
</style>
