<template>
<div id="app">
	<!--公用头部组件-->
	<McHead>
		<div class="m-search" slot='u-search'>
			<input type="text" value="" placeholder="牛肉">
			<i class="el-icon-search"></i>
		</div>
	</McHead>

	<div class="g-content">
		<!--商品-->
		<ul class="m-shop clearfix">
			<li v-for="(item,index) in shopItem">
				<a :href="'../home/detail.html?id='+item.prodPk"><img v-view="item.imgUrl" alt=""></a>
				<p>{{item.prodNm}}</p>
				<p>库存:{{item.stock}}</p>
				<p>会员价：<em>{{item.membAmt| currency}}</em></p>
				<p>市场价：{{item.markAmt| currency}}</p>
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




export default {
  data() {
    return {



        //商品列表
        shopItem:[],
    }
  },
    components: {
        McHead,McFoot
    },
  //实例初始化最之前，无法获取到data里的数据
  beforeCreate(){
  	
  	
  },  
  //在挂载开始之前被调用
  beforeMount(){
  	
  
  }, 
  //已成功挂载，相当ready()
  mounted(){
      var id= Lib.M.getUrlQuery('id',Lib.C.url_host);
      //获取全部商品
      this.axios.get(Lib.C.url_mc+'/mall/bss/prod/listByCat',{
          params:{
              catCd:id
          }
      })
          .then(res=>{
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
