
<template>
<div id="app">

  <!--公用头部组件-->
  <CarHead  :cutTime="cutTime">
    <!--步骤-->
    <div style="float: right" slot='u-search'>
      <img src="./assets/images/first.png" alt="">
    </div>
  </CarHead>

  <div class="g-car">
    <div class="g-content">
      <h2>我的购物车 <ins>剩余时间 :<count-down :endTime="cutTime" :callback="callback" endText="0S"></count-down></ins></h2>
      <div class="m-car">
        <h3>配送说明</h3>
        <table>
          <tr><th><el-checkbox v-model="checked">全选</el-checkbox></th><th>商品名称</th><th>会员价</th><th>市场价</th><th>数量</th><th>小计</th><th>操作</th></tr>
          <tr v-for="(item,index) in cars">
            <td><el-checkbox v-model="item.isCheck"></el-checkbox></td>
            <td><img :src="item.aPic" alt=""><em>{{item.title}}</em></td>
            <td><span>{{ item.price | currency }}</span></td>
            <td><span>{{ item.price2 | currency }}</span></td>
            <td> <el-input-number @change="changeNum(item)"   v-model="item.num1" :min="1" ></el-input-number></td>
            <td><span>{{ item.price*item.num1 | currency }}</span></td>
            <td><i class="el-icon-close" @click="del(item)"></i></td>
          </tr>
        </table>

        </div>
        <div class="m-all">
          <div class="m-left">
            <a href="../home/index.html">继续购物</a><i>|</i> <p>共<em>{{carList}}</em>件商品，已选择<em>{{carCheck}}</em>件 </p>
          </div>
          <div class="m-right">
            <p>合计（不含运费）： <strong>{{carPrice|currency}}</strong>元 <span>积分：{{carNum}}分</span><a href="javascript:;" @click="go">去结算</a></p>
          </div>
      </div>

      <div class="g-look">
        <h2><span>最近预览的商品</span></h2>
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
  </div>

	<!--公用底部组件-->
	<McFoot></McFoot>
</div>
</template>

<script>

import Lib from 'assets/js/Lib';

/*头部组件*/
import CarHead from 'components/CarHead';

/*底部组件*/
import McFoot from 'components/McFoot';

/*倒计时组件*/
import countDown from 'components/Countdown';

/*商品图*/
import aImg from './assets/images/shop.png'

export default {
  data() {

    return {
        //购物车列表
        cars:[],
        checked:false, //是否全选
        carList:0,    //商品总数
        carCheck:0,   //已选择数量
        carPrice:0,   //合计价格
        carNum:0,     //积分
        rule:0,       //积分规则
        //倒计时
        cutTime:'-999',

        //商品列表
        shopItem:[],
	}
  },
    components: {
        CarHead,McFoot,countDown
    },
  //实例初始化最之前，无法获取到data里的数据
  beforeCreate(){
  	
  	
  },  
  //在挂载开始之前被调用
  beforeMount(){
  	
  
  }, 
  //已成功挂载，相当ready()
  mounted(){
      //是否登录
      if(!Lib.M.store.get('login')){
          this.$alert('请先登录账号', '提示', {
              confirmButtonText: '确定',
              callback: action => {
                  window.location.href = '../home/index.html';
              }
          });
      }
      if(Lib.M.store.get('userInfo')){
          this.userId=Lib.M.store.get('userInfo').ipPk;
      }


      //获取购物车
      this.axios.get(Lib.C.url_mc+'/mall/bss/cart/cartList?t=' + Date.now(),{
          params:{
              ipPk:this.userId,
          }
      })
          .then(res=>{
              //console.log(res.data.data)
              var data=[];
              res.data.data.forEach(function (elem,i) {
                  data.push({
                      isCheck:false,
                      id:elem.prodPk,
                      aPic:elem.imgUrl,
                      title:elem.prodNm,
                      price:elem.membAmt,
                      price2:elem.markAmt,
                      num1:elem.qty,
                      stock:elem.stock,
                      cartPk:elem.cartPk
                  })
              })
              this.cars=data;
              this.carList=this.cars.length;
              this.cutTime=String(res.data.data[0].effectiveTime/1000);
          }).catch(err=>{
          console.log(err);
      });

      //获取积分规则
      this.axios.get(Lib.C.url_mc+'/mall/bss/ip/asset',{
          params:{
              ipPk:this.userId,
          }
      })
          .then(res=>{
              console.log(res.data.data.rule)
              this.rule=res.data.data.rule;
          }).catch(err=>{
          console.log(err);
      });

      //获取最近游览
      this.axios.get(Lib.C.url_mc+'/mall/bss/prod/prodBHList',{
          params:{
              ipPk:this.userId,
              count:5
          }
      })
          .then(res=>{
              //console.log(res.data.data.items)
              this.shopItem=res.data.data.items;
          }).catch(err=>{
          console.log(err);
      });


  },

/*  filters:{
      //过滤价格
      formatMoney:function (value) {
          return "¥ " + value.toFixed(2) ;
      }
  },*/
  watch:{

      //全选
      checked:function (val,oldval) {
          if(val==true){
              this.carList=this.cars.length;
              this.carCheck=this.cars.length;
              this.cars.forEach(function (item,index) {
                  item.isCheck=true;
              })
          }else{
              this.carCheck=0;
              this.carPrice=0;
              this.cars.forEach(function (item,index) {
                  item.isCheck=false;
              })
          }
      },

      //积分计算
      carPrice:function (val) {
          this.carNum=parseInt(val)*this.rule;
          this.carNum=Math.floor(parseInt(val)/10)
      },

      //总价计算
      cars: {
          handler: function (newVal) {
              var _this = this;
              this.carPrice = 0;
              this.carCheck=0;
              newVal.forEach(function (item,index) {
                  if(item.isCheck){
                      _this.carPrice+=item.num1*item.price;
                      _this.carCheck+=1
                  }
              });
          },
          deep: true
      }
  },
  //相关操作事件
  methods: {


      //删除商品
      del(item){

          this.axios.get(Lib.C.url_mc+'/mall/bss/cart/del',{
              params:{
                  ipPk:this.userId,
                  prodPk:item.id
              }
          })
              .then(res=>{
                  this.cars.splice(this.cars.indexOf(item),1);   //删除商品
                  var str=0;
                  var str2=0;
                  this.carList.map(function (item) {
                      str=this.carList.length;
                      str2+=item.price*item.num1;
                      this.carPrice=str2;
                      this.carList=str;
                  }.bind(this));

                  if(!this.carList.length){
                      console.log('清空了');
                      this.cutTime='0';
                  }
              }).catch(err=>{
              console.log(err);
          });
      },

      //倒计时
      callback(){
          console.log('结束1')
      },


      //修改购物车
      changeNum(item){
          var This=this;
          var oldVal=item.num1;
          setTimeout(function () {
              var newVal=item.num1;
              var Qs = require('qs');
              const loading = This.$loading({
                  lock: true,
                  text: '修改数量中，请稍等',
                  spinner: 'el-icon-loading',
                  background: 'rgba(0,0,0,0.7)'
              });
              This.axios.post(Lib.C.url_mc + '/mall/bss/cart/edit', Qs.stringify({
                  cartPk:item.cartPk,
                  num:newVal-oldVal
              }))
                  .then(res => {
                      console.log(res.data);
                      if (res.data.status == 200) {
                          loading.close();
                          This.$alert('修改成功', '提示', {
                              confirmButtonText: '确定',
                              callback: action => {

                              }
                          });
                      }
                      if (res.data.status == 400) {
                          This.$alert(res.data.msg, '提示', {
                              confirmButtonText: '确定',
                              callback: action => {

                              }
                          });
                      }
                      if (res.data.status == 301) {
                          loading.close();
                          This.$alert(res.data.msg, '提示', {
                              confirmButtonText: '确定',
                              callback: action => {
                                  //获取购物车
                                  This.axios.get(Lib.C.url_mc+'/mall/bss/cart/cartList?t=' + Date.now(),{
                                      params:{
                                          ipPk:This.userId,
                                      }
                                  })
                                      .then(res=>{
                                          console.log(res.data.data)
                                          var data=[];
                                          res.data.data.forEach(function (elem,i) {
                                              data.push({
                                                  isCheck:false,
                                                  id:elem.prodPk,
                                                  aPic:elem.imgUrl,
                                                  title:elem.prodNm,
                                                  price:elem.membAmt,
                                                  num1:elem.qty,
                                                  stock:elem.stock,
                                                  cartPk:elem.cartPk
                                              })
                                          })
                                          This.cars=data;
                                          This.carList=this.cars.length;
                                      }).catch(err=>{
                                      console.log(err);
                                  });
                              }
                          });
                      }
                  }).catch(err => {
                  console.log(err);
              });
          })
      },

      //去结算
      go(){
          var str='';
          //console.log( this.cars)
          this.cars.forEach(function (item) {
              if(item.isCheck){
                 str+=item.id+','
              }
          })
          console.log(str)
          var Qs = require('qs');
          this.axios.post(Lib.C.url_mc + '/mall/bss/ordReqt/add', Qs.stringify({
              ipPk:this.userId,
              pks:str
          }))
              .then(res=>{
                  console.log(res.data)
                  if(res.data.status==200){
                      console.log(res.data)
                      Lib.M.store.set('orderInfo', {id:res.data.data.ordReqtPk,time:res.data.data.paySurplusTm});
                      window.location.href='second.html';
                  }
                  if (res.data.status == 400) {
                      this.$alert(res.data.msg, '提示', {
                          confirmButtonText: '确定',
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
      background: #f5f5f5;
    }
    .el-loading-mask{
      background-color: rgba(0,0,0,0.7)!important;
    }
    .g-content{
      width: 1200px;
      margin: 0 auto;
      margin-bottom: 20px;
      h2{
        margin: 30px 0;
        font-size: 20px;
      }
      ins{
        border: 1px solid #ff3002;
        padding:4px ;
        color: #ff3002;
        margin-left: 20px;
        font-size: 14px;
        vertical-align: middle;
      }
      h3{
        background: url("./assets/images/table.png") no-repeat;
        margin-bottom: 30px;
        padding-left: 50px;
        color: #999;
      }
    }
    .m-car{
      padding: 30px 40px;
      background: #fff;
    }
    table{
      border-top: 1px solid #ddd;
      width: 100%;
      th{
        padding: 20px 0;
        text-align: center;
      }
      th:nth-of-type(1){
        width: 70px;
        text-align: right;
        .el-checkbox__input{
          margin-right: 6px;
        }

      }
      th:nth-of-type(2){
        width: 450px;
        text-align: left;
        text-indent: 160px;
      }
      th:nth-of-type(3){
        width: 120px;
      }
    th:nth-of-type(4){
      width: 120px;
    }
    th:nth-of-type(5){
      width: 160px;
    }
    th:nth-of-type(6){
      width: 130px;
    }
      td{
        padding: 28px 0;
        border-top: 1px solid #ddd;
        text-align: center;
        position: relative;
        span{
          color: #ff3002;
          font-size: 16px;
        }
        i{
          font-size: 10px;
          cursor: pointer;
        }
        img{
          width: 136px;
          height: 136px;
          border: 1px solid #ddd;
          float: left;
        }
        em{
          font-size: 16px;
          width: 250px;
          display: inline-block;
          position: absolute;
          left: 158px;
          top: 50%;
          transform: translateY(-50%);
          text-align: left;
        }
        .el-checkbox__input{
          margin-left: 20px;
        }
      }
      td:first-child{
        text-align: left;
        .el-checkbox__input{
          margin-left: 12px;
        }
      }
      .el-input-number__decrease{
        left: -37px;
        top: 0;
      }
      .el-input-number__increase{
        right: -37px;
        top: 0;
      }
      .el-input-number__decrease, .el-input-number__increase{
        border: 1px solid #bfcbd9;
        background: #ededed;
      }
      input{
        border: 1px solid #000;
        text-align: center;
      }
      .el-input-number .el-input__inner{
        padding: 0;
        width: 60px;
        border-radius: 0;
      }
      .el-input-number{
        width: 60px;
      }
      .el-checkbox__input.is-checked .el-checkbox__inner{
        border-color: #33ba44;
        background: #33ba44;
        border-radius: 0;
      }
      .el-checkbox__inner{
        border-radius: 0;
      }
    }
    .m-all{
      height: 53px;
      line-height: 53px;
      background: #fff;
      margin: 30px 0;
      .m-left{
        float: left;
        color: #999;
        p{
          display: inline-block;
        }
        a{
          display: inline-block;
          padding:0 30px;
          color: #999;
        }
        i{
          margin-right: 30px;
          font-style: normal;
        }
        em{
          color: #33ba44;
          font-weight: bold;
          margin: 0 2px;
        }
      }
      .m-right{
        float: right;
        p{
          color: #ff3002;
        }
        strong{
          font-size: 18px;
        }
        span{
          margin:0 20px ;
        }
        a{
          color: #fff;
          display: inline-block;
          text-align: center;
          font-size: 18px;
          width: 210px;
          background: #33ba44;

        }
      }
    }


    /*最近预览商品*/
    .g-look{
      h2{
        margin-top:60px ;
        position: relative;
        height: 1px;
        background: #ccc;
        span{
          position: absolute;
          font-size: 22px;
          color: #999;
          width: 300px;
          height:50px ;
          line-height: 50px;
          background: #f5f5f5;
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
