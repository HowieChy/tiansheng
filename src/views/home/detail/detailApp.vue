<template>
<div id="app">
	<!--公用头部组件-->
	<McHead @child-id="getId"  @child-shop="getShop"   @child-cutTime="getTime"  :lists="carItems" :allPrice="allPrice" :allNum="allNum"  :cutTime="cutTime">
		<div class="m-search" slot='u-search'>
			<input type="text" value="" placeholder="牛肉">
			<i class="el-icon-search"></i>
		</div>
	</McHead>


	<!--微信二维码-->
	<el-popover
					ref="popover"
					placement="right"
					width="300"
					trigger="hover">
		<img :src="code" alt="">
	</el-popover>
	<!--微信二维码-->

	<div class="g-content">
		<!--面包屑-->
		<div class="m-crumb">
			<a href="home.html">首页</a><em>	&gt;</em><span>{{title}}</span>
		</div>
		<div class="m-describe clearfix">
			<!--商品放大镜-->
			<div class="m-glass clearfix">

				<ul>
					<li v-for="(item,index) in imgSrc">
						<img class="cloudzoom-gallery" :src="item"   :data-cloudzoom="'useZoom:\'.cloudzoom\',image:\''+item+'\',zoomImage:\''+item+'\''"/>
					</li>
					<!--<li>
						<img class="cloudzoom-gallery" src="http://www.jq22.com/demo/jQueryJpg201708110048/images/a2.png" data-cloudzoom="useZoom:'.cloudzoom',image:'http://www.jq22.com/demo/jQueryJpg201708110048/images/a2.png',zoomImage:'http://www.jq22.com/demo/jQueryJpg201708110048/images/a2.png'"/>
					</li>
					<li>
						<img class="cloudzoom-gallery" src="http://www.jq22.com/demo/jQueryJpg201708110048/images/a1.png" data-cloudzoom="useZoom:'.cloudzoom',image:'http://www.jq22.com/demo/jQueryJpg201708110048/images/a1.png',zoomImage:'http://www.jq22.com/demo/jQueryJpg201708110048/images/a1.png'"/>
					</li>
					<li>
						<img class="cloudzoom-gallery" src="http://www.jq22.com/demo/jQueryJpg201708110048/images/a2.png" data-cloudzoom="useZoom:'.cloudzoom',image:'http://www.jq22.com/demo/jQueryJpg201708110048/images/a2.png',zoomImage:'http://www.jq22.com/demo/jQueryJpg201708110048/images/a2.png'"/>
					</li>-->
				</ul>
				<div class="jqueryzoom">
					<img id="img" class="cloudzoom" :src="imgSrc[0]"  :data-cloudzoom="'zoomSizeMode:\'image\', startMagnification:2,zoomImage:\''+imgSrc[0]+'\',zoomImage:\''+imgSrc[0]+'\''"/>
				</div>

                <p class="u-share">分享至： <span><a :href="'http://connect.qq.com/widget/shareqq/index.html?url='+host" alt=""><img src="./assets/images/qq.png" alt=""></a></span><span v-popover:popover><img src="./assets/images/wx.png" alt=""></span></p>
			</div>

			<div class="m-right">
				<h1>{{title}}</h1>
				<h2><span><em>￥</em>{{newPrice,''| currency}}</span> <ins>{{oldPrice| currency}}</ins></h2>

				<!--<h3 class="j-size">
					<p>规格：<em>1斤</em></p>
					<ul class="clearfix">
						<li class="f-active">1斤</li><li>2斤</li><li>3斤</li><li>4斤</li>
					</ul>
				</h3>-->
				<h3>

					<p>库存：{{stock}}</p>
					<p style="height: 70px;"></p>
					<div>
						<!--计数-->
						<el-input-number size="small" v-model="number" :min="1" :max="stock"></el-input-number>
					</div>
					<button  @click="addShop" :num="number" :price="newPrice" :id="id">加入购物车</button>
					<h4>配送描述:尊敬的客户:您9:00-19:00的订单，于次日上午10:00前送达，19:00—次日9:00的订单，于次日16:00前送达（预售商品除外）</h4>
				</h3>
			</div>
		</div>
	</div>

    <div class="g-fixed j-fixed">
      <div class="m-margin">
        <a class="f-active" href="#a">商品详情</a>
        <em>|</em>
        <a href="#b">服务保障</a>
      </div>
    </div>

  <!--浮动-->
  <div class="g-fixed g-fixed2">
    <div class="m-margin">
      <a class="f-active" href="#a">商品详情</a>
      <em>|</em>
      <a href="#b" style="margin-right: 200px;">服务保障</a>
		<span style="font-size: 16px;color: #fe3000;margin-right: 30px">会员价：{{newPrice| currency}}</span><span style="font-size: 16px;color: #fe3000">市场价：{{oldPrice| currency}}</span>
      <button  @click="addShop" :num="number" :price="newPrice" :id="id">加入购物车</button>
    </div>
  </div>

  <div class="m-text">
    <h1 id="a">商品详情</h1>
    <div class="m-first" v-html="prodDtl">

    </div>
    <h1 id="b">服务保障</h1>
    <div class="m-last" v-html="serviceQA">

    </div>
  </div>


	<!--公用底部组件-->
	<McFoot></McFoot>
</div>
</template>

<script>

import Lib from 'assets/js/Lib';
/*头部组件*/
import McHead from 'components/McHead3';
/*底部组件*/
import McFoot from 'components/McFoot';
/*倒计时组件*/
import countDown from 'components/Countdown';



import $ from 'jquery'

import imagezoom from './assets/cloudzoom.js'

export default {
  data() {
    return {
        userId:'',

        carItems:[],   //购物车列表
        allPrice:0,//商品总价
        allNum:0,//商品总数

        cutTime:'-999' ,//倒计时

        title:'',
        newPrice:'',
        oldPrice:'',
        number:1,
        stock:null,
        id:"",
        imgSrc:'',
		code:'',//二维码
        prodDtl:'',
        serviceQA:'',
		host:''
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
	  this.host=Lib.C.url_host;
      if(Lib.M.store.get('userInfo')){
          this.userId=Lib.M.store.get('userInfo').ipPk;
          console.log(this.userId)
      }



      var prodId= Lib.M.getUrlQuery('id',Lib.C.url_host);
      console.log(prodId)
      //获取商品详情信息
      this.axios.get(Lib.C.url_mc+'/mall/bss/prod/detail?=' + Date.now(),{
          params:{
              prodPk:prodId
		  }
	  })
          .then(res=>{
              console.log(res.data.data)
              this.id=res.data.data.prodDetailRo.prodPk;
              this.title=res.data.data.prodDetailRo.nm;
              this.oldPrice=res.data.data.prodDetailRo.markAmt;
              this.newPrice=res.data.data.prodDetailRo.membAmt;
              this.stock=res.data.data.prodDetailRo.stock;
              this.number=res.data.data.prodDetailRo.number;
              this.imgSrc=res.data.data.prodDetailRo.imgUrl.split(',');
              this.prodDtl=res.data.data.prodDtl.cont;
              this.serviceQA=res.data.data.serviceQA.cont;
              CloudZoom.quickStart();
          }).catch(err=>{
          console.log(err);
      });


      //获取购物车
      this.axios.get(Lib.C.url_mc+'/mall/bss/cart/cartList?t=' + Date.now(),{
          params:{
              ipPk:this.userId,
          }
      })
          .then(res=>{
              this.carItems=res.data.data;
              this.cutTime=String(res.data.data[0].effectiveTime/1000);
              console.log(String(res.data.data[0].effectiveTime/1000))
              this.carItems.map(function (item) {
                  this.allNum=this.carItems.length;
                  this.allPrice+=item.membAmt*item.qty;
              }.bind(this));
          }).catch(err=>{
          console.log(err);
      });


      //悬浮定位
      $(document).scroll(function () {
          if($(document).scrollTop()>=($('.j-fixed').offset().top+$('.j-fixed').outerHeight())){
              $('.g-fixed2').addClass('f-active')
          }else{
              $('.g-fixed2').removeClass('f-active')
          }
      })
      $('.g-fixed2 a').on("click",function () {
          $('.g-fixed2 a').removeClass('f-active');
          $(this).addClass('f-active')
      });
      $(document).scroll(function () {
          if($(document).scrollTop()>($('#b').offset().top)-300){

              $('.g-fixed2 a').removeClass('f-active');
              $('.g-fixed2 a:last').addClass('f-active');
          }else{
              $('.g-fixed2 a').removeClass('f-active');
              $('.g-fixed2 a:first').addClass('f-active');
          }
      })

      //二维码
      this.code=Lib.C.url_mc+'/mall/bss/ip/QRCode?url='+Lib.C.url_host;

      
      //选择规格
      $('.j-size li').on('click',function () {
          $('.j-size li').removeClass('f-active');
          $(this).addClass('f-active');
          $('.j-size em').text($(this).text())
      })

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
          //库存
		  if(msg[0]==this.id){
		      this.stock+=msg[1]
		  }
      },

	  //开始倒计时
      callback(){
		console.log('结束')
      },
      //购买商品
      addShop(item,index){

          if(!Lib.M.store.get('login')){

              this.$alert('请先登录账号', '提示', {
                  confirmButtonText: '确定',
                  callback: action => {

                  }
              });
              return false
          }
          this.buy= Lib.M.store.get('buy');
          console.log(this.buy)
          if(this.buy==1){
              this.$alert('不能购买', '提示', {
                  confirmButtonText: '确定',
                  callback: action => {

                  }
              });
              return false
          }


          var Qs = require('qs');
          //this.axios.post('/api/mall/bss/cart/add', Qs.stringify({
          this.axios.post(Lib.C.url_mc+'/mall/bss/cart/add', Qs.stringify({
              ipPk:this.userId,
              prodPk:this.id,
              prodNum:this.number
          }),{
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
              }
          })
              .then(res=>{
                  console.log(res.data);
                  if(res.data.status==200){
                      this.$alert('加入购物车成功', '提示', {
                          confirmButtonText: '确定',
                      });
                      //添加商品
                      function add(e) {
                          var img=e.imgSrc[0];
                          e.carItems.push({
							  imgUrl:img,
                              prodNm:e.title,
                              membAmt:e.newPrice,
                              qty:e.number,
                              prodPk:e.id
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

                          this.axios.get(Lib.C.url_mc+'/mall/bss/cart/cartList?t=' + Date.now(),{
                              params:{
                                  ipPk:this.userId,
                              }
                          })
                              .then(res=>{
                                  this.cutTime=String(res.data.data[0].effectiveTime/1000);
                              }).catch(err=>{
                              console.log(err);
                          });

                      }


                      //库存
					  this.stock-=this.number;

                      this.number=1;
                      if(this.stock<0){
                          this.stock=0;
                          return false;
                      }

                  }
                  if(res.data.status==301){
                      this.$alert(res.data.msg, '提示', {
                          confirmButtonText: '确定',
                      });
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
	.g-content{
		width: 1200px;
		margin: 0 auto;
	}
	.m-crumb{
		margin: 20px 0;
		a{
			color: #999;
		}
		em{
			color: #999;
			margin:  0 6px 0 4px;
		}
	}

/*放大镜*/
	.cloudzoom-lens {
		border: 3px solid #888;
		width: 100px;
		height: 100px;
		box-shadow: -0px -0px 10px rgba(0,0,0,0.40);
		cursor: crosshair;
		background: #fff;
		z-index: 10;
	}

	.cloudzoom-zoom {
		border: 1px solid #888;
		width: 500px;
		height: 200px;
		box-shadow: -0px -0px 10px rgba(0,0,0,0.40);
		img{
			z-index: 999;
		}
	}

	.cloudzoom-zoom-inside {
		border: none;
		box-shadow: none;
	}

	.cloudzoom-caption {
		display: none;
		text-align: left;
		background-color: #000;
		color: #fff;
		font-weight: bold;
		padding: 10px;
		font-family: sans-serif;
		font-size: 11px;
	}

	.jqueryzoom {
		position: relative;
		padding: 0;
		border: solid 1px #eaeaea;
		width: 470px;
		height: 470px;
		border: 1px solid #ddd;
		overflow: hidden;
		display: inline-block;
	}

	.jqueryzoom img {
		width: 470px;
		height: 470px;
	}
	.m-glass{
		float: left;

        .u-share{
          margin:  20px 0 0 100px;
          span{
            width: 34px;
            height: 34px;
            display: inline-block;
            vertical-align: middle;
            margin-left: 10px;
            cursor: pointer;
          }
        }
		ul{
			float: left;
			margin-right: 30px;
			img{
				width: 69px;
				height: 69px;
				border: 1px solid #ddd;
			}
			.cloudzoom-gallery-active{
				border: 1px solid #30b947;
			}
		}

	}

	.m-right{
		float: right;
		width: 560px;
        margin-top: 10px;
		h1{
			font-size: 26px;
			font-weight: bold;
			padding-bottom: 30px;
			border-bottom:1px solid #ddd ;
		}
		h2{
			padding: 30px 0;
			border-bottom: 1px solid #ddd;
			span{
				font-size: 24px;
				color: #fe3000;
				margin-right: 20px;
			}
			em{
				font-size: 14px;
			}
			ins{
				color: #999;
			}
		}
		h3{
			padding: 30px 0;
			border-bottom: 1px solid #ddd;
			p{
				margin-bottom: 20px;
			}
			li{
				padding: 12px;
				border: 1px solid #ddd;
				margin-right: 30px;
				float: left;
				cursor: pointer;
			}
			.f-active{
				border-color: #30b947;
				color: #30b947;
			}
			.el-input-number{
				margin-left: 20px;
			}
            .el-input-number .el-input{
              margin-left: 20px;
            }
			.el-input-number .el-input__inner{
				padding: 0;
				width: 130px;
				text-align: center;
				height: 40px;
                border: none;
			}
            .el-icon-minus:before{
              content: '';
            }
            .el-icon-plus:before{
              content: '';
            }
			.el-input-number__decrease{
                width: 40px;
                height: 40px;
				border: none;
				left: -20px;
                z-index: auto;
				background: url("./assets/images/s1.png") no-repeat;
			&.is-disabled{
				 background: url("./assets/images/s3.png") no-repeat;
			 }
			}
			.el-input-number__increase{
              z-index: auto;
                width: 40px;
                height: 40px;
				border: none;
				right: -60px;
				background: url("./assets/images/s2.png") no-repeat;
			&.is-disabled{
				 background: url("./assets/images/s4.png") no-repeat;
			 }
			}
			button{
				width: 260px;
				height: 50px;
				background: #fe3000;
				font-size: 16px;
				border: none;
				color: #fff;
				margin: 20px 0;
                cursor: pointer;
			}

		}
		h4{
			color: #fe3000;
			line-height: 24px;
		}
		h3:last-of-type{
			border: none;
		}
	}
    .g-fixed{
      padding: 20px 0;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      .m-margin{
        width: 1200px;
        margin:  0 auto;
        color: #999;
        cursor: pointer;
      }
      em{
        margin: 0 30px;
        font-size: 12px;
      }
      a{
        color: #999;
      }
      .f-active{
        color:#fe3000 ;
      }

    }
    .g-fixed2{
      width: 100%;
      position: relative;
      display: none;
      button{
        width: 260px;
        height: 50px;
        background: #fe3000;
        font-size: 16px;
        border: none;
        color: #fff;
        position: absolute;
        right: 0;
        top: 4px;
        cursor: pointer;
      }
      &.f-active{
        background: #fff;
        z-index: 999;
        position:fixed ;
        top: 0;
        left: 0;
        display: block;
       }
    }

    .m-text{
      width: 1200px;
      margin: 0 auto;
      img{
        width: 100%;
        margin: 20px 0 ;
      }
      h1{
        font-size: 20px;
        margin: 40px 0 10px 0;
      }
    }

</style>
