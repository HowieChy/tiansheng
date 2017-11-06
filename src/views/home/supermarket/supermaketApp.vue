<template>
<div id="app">
	<!--公用头部组件-->
	<McHead  @child-shop="getShop"   @child-cutTime="getTime"  :lists="carItems" :allPrice="allPrice" :allNum="allNum"  :cutTime="cutTime">
		<div class="m-search" slot='u-search'>
			<input type="text" value="" placeholder="牛肉">
			<i class="el-icon-search"></i>
		</div>
	</McHead>

	<div class="g-content">
		<!--商品-->
		<ul class="m-shop clearfix">
			<li v-for="(item,index) in shopItem">
				<a href=""><img v-view="item.aImg" alt=""></a>
				<p>{{item.title}}</p>
				<p>库存:{{item.store}}</p>
				<p>会员价：<em>￥{{item.newPrice}}</em></p>
				<p>市场价：￥{{item.oldPrice}}</p>
			</li>
		</ul>

	</div>



	<!--公用底部组件-->
	<McFoot></McFoot>
</div>
</template>

<script>

import Lib from 'assets/js/Lib';
/*头部组件*/
import McHead from 'components/McHead2';
/*底部组件*/
import McFoot from 'components/McFoot';
/*倒计时组件*/
import countDown from 'components/Countdown';

import Vue from 'vue';
import VueViewload from 'vue-viewload';
//使用VueViewload
Vue.use(VueViewload, {
    threshold: -200,
    effectFadeIn: true,
    callback: function(ele, src) {
        console.log(ele.nodeName + '...' + src);
    }
})

/*商品图*/
import aImg from './assets/images/shop.png'


export default {
  data() {
    return {

        //购物车列表
        carItems:[{
            price:'300.00',
			num:1,
			id:'1'
		},
            {
                price:'300.00',
                num:1,
                id:'2'
            }],

        allPrice:'600.00',//商品总价
		allNum:2,//商品总数

		//倒计时
		cutTime:'1504256400',

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
            },
            {
                title:"四川凯特芒果",
                store:200,
                newPrice:'500.05',
                oldPrice:'600.00',
                id:'7',
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
            },
            {
                title:"四川凯特芒果",
                store:200,
                newPrice:'500.05',
                oldPrice:'600.00',
                id:'7',
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
            },
            {
                title:"四川凯特芒果",
                store:200,
                newPrice:'500.05',
                oldPrice:'600.00',
                id:'7',
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
            },
            {
                title:"四川凯特芒果",
                store:200,
                newPrice:'500.05',
                oldPrice:'600.00',
                id:'7',
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
            },
            {
                title:"四川凯特芒果",
                store:200,
                newPrice:'500.05',
                oldPrice:'600.00',
                id:'7',
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
            },
            {
                title:"四川凯特芒果",
                store:200,
                newPrice:'500.05',
                oldPrice:'600.00',
                id:'7',
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
            },
            {
                title:"四川凯特芒果",
                store:200,
                newPrice:'500.05',
                oldPrice:'600.00',
                id:'7',
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


      


  },
  //相关操作事件
  methods: {
      getShop(msg){
          this.allNum=msg.number  //获取删除商品后的商品数量
          this.allPrice=msg.price //获取删除商品后的价格
      },
      getTime(msg){
          this.cutTime=0
      },


	  //开始倒计时
      callback(){
		console.log('结束')
      },

  }
}
</script>

<style lang="less">

	.g-content{
		width: 1200px;
		margin: 0 auto;
		padding-top: 40px;
	}
	.m-shop{
	li{
		float: left;
		margin-right: 20px;
		width: 224px;
		height: 370px;
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

	}

</style>
