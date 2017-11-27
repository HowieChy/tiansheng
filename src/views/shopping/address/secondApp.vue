<template>
<div id="app">

  <!--公用头部组件-->
  <CarHead  :cutTime="cutTime">
    <!--步骤-->
    <div style="float: right" slot='u-search'>
      <img src="./assets/images/second.png" alt="">
    </div>
  </CarHead>

  <div class="g-car">
    <div class="g-content">
      <h2>核对订单 <ins>剩余时间 :<count-down :endTime="cutTime" :callback="callback" endText="0S"></count-down></ins></h2>
      <div class="g-check">

        <div class="m-address">
          <!--收货地址-->
          <h2>收货地址</h2>
          <ul class="clearfix">
            <li v-for="(item,index) in addressOption" :class="{'f-active':iScur==index}" @click="tab(item,index)">
              <h1><span>{{item.rcvr}}</span> <em v-if="item.auditStatNmCn!='待审核'">审核通过可使用</em> <em v-if="item.auditStatNmCn=='待审核'">正在审核</em></h1>
              <p>{{item.mob}}</p>
              <p>{{item.fullAddr}}</p>
              <!--<h3><span @click="hideAddress(item,index)">隐藏</span></h3>-->
            </li>
            <!--<li v-for="(item,index) in addressOption" :class="{'f-active':iScur==index}" @click="tab(item,index)">-->
              <!--<h1><span>{{item.name}}</span> <em v-if="item.through">审核通过可使用</em> <em v-if="!item.through">正在审核</em></h1>-->
              <!--<p>{{item.phone}}</p>-->
              <!--<p>{{item.address}}</p>-->
              <!--&lt;!&ndash;<h3><span>修改</span></h3>&ndash;&gt;-->
            <!--</li>-->
            <!--<li class="u-add">-->
              <!--<img src="./assets/images/add.png" alt="">-->
            <!--</li>-->
          </ul>
        </div>

        <div class="m-middle">
          <h3> <em>配送方式</em><strong>{{exType}}</strong></h3>
          <h3> <em>运费</em><span v-if="freight">{{freight|currency}}</span><strong v-if="!freight">免费</strong></h3>
          <h3 v-if="false">
            <em>收货时间</em>
            <el-date-picker
                  v-model="value"
                  type="date"
                  placeholder="请选择收货时间"
                  :picker-options="pickerOptions0">
            </el-date-picker>
          </h3>
        </div>

        <div class="m-bottom">
          <table>
            <tr class="top">
              <th>商品</th><th>市场价</th><th>结算价</th><th>小计</th>
            </tr>
            <tr v-for="(item,index) in cars">
              <td><a  href=""><img :src="item.prodImgUrl" alt=""><em>{{item.nm}} X {{item.prodQty}}</em> </a></td>
              <td><span>{{ item.prodAmtMark | currency }} </span></td>
              <td><span>{{ item.prodAmtMemb | currency }} </span></td>

              <td><span>{{ item.prodAmtMemb*item.prodQty | currency }}</span></td>
            </tr>
          </table>

          <div class="m-info ">
            <div class="clearfix" style="border-bottom: 1px solid #ddd;margin-bottom: 20px">
              <div class="left ">
                <p v-if="subFirst" style="margin-left:24px;color: #fe3000 ">{{subFirst.discountDesc}}</p>
                <p>   <el-radio v-model="checked1" label="1">订单满￥100.00赠送三斤小黄瓜，折合市场价￥20.00</el-radio></p>
                <p>   <el-radio v-model="checked1" label="2">订单满￥100.00赠送三斤小黄瓜，折合市场价￥20.00</el-radio></p>

              </div>
              <div class="right">
                <p> <span>总计： {{allPrice|currency}}</span></p>
              </div>
            </div>
            <div class="clearfix">
              <div class="left ">

                <p><el-checkbox @change="change2" v-model="checked2">使用积分 <input type="number" v-model.lazy="score"  min="0"> 分 当前账号总积分为{{integral}}分，最多可用{{integral}}分，抵扣{{score*rule}}元</el-checkbox></p>
                <p><el-checkbox @change="change3" v-model="checked3">使用账户余额 当前账号余额为{{balance | currency}}</el-checkbox></p>
              </div>
              <div class="right">
                <p>商品市场价总和： <span>{{allPrice2|currency}}</span></p>
                <p>商品结算价总和： <span>{{allPrice|currency}}</span></p>
                <p>运费： <span>{{freight|currency}}</span></p>
                <p>订单总计： <span>{{allPrice+freight|currency}}</span></p>
                <p>积分支付： <span>{{score2}}分（抵{{rule2|currency}}）</span></p>
                <p>余额支付： <span>{{balance2| currency}}</span></p>
                <p>还需支付： <span><strong>{{payPrice|currency}}</strong></span></p>
              </div>
            </div>
            <div class="submit">
              <p>支付成功后可得积分：{{rPrice}}分 <button @click="pOrder">提交订单</button></p>
            </div>
          </div>

        </div>

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



export default {
  data() {

    return {
        iScur:0,
        exType:'快递',
        pickerOptions0: {
            disabledDate(time) {
                return time.getTime() < Date.now() - 8.64e7;
            }
        },
        value: '',
        //收货地址
        addressOption:[],
        addrPk:null,//配送地址主键

        //购物车列表
        cars:[],
        carList:0,//商品件数
        allPrice:0,//商品总额
        allPrice2:0,//商品市场总额
        payPrice:0,//应付总额
        freight:0,     //运费
        rule:0,//抵扣规则
        rule2:0,//抵扣分
        checked1:1,
        checked2:false,
        checked3:false,

        integral:0,    //可使用积分
        score:0,       //使用积分
        score2:0,       //使用积分
        balance:0,  //余额
        balance2:0,  //余额
        rPrice:0,//可得积分
        //dialogVisible:false,
        cutTime:'-999',//倒计时

        //满减
        subList:[],
        subFirst:{},
        rebate:1,

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
          //console.log(this.userId)
      }
      this.getAddress('1120.10')


      //获取商品列表
      this.axios.get(Lib.C.url_mc+'/mall/bss/ordReqt/ordItm?t=' + Date.now(),{
          params:{
              ordReqtPk:Lib.M.store.get('orderInfo').id,
          }
      })
          .then(res=>{
              console.log(res.data.data)
              this.cars=res.data.data.items;
              this.cutTime=String(Lib.M.store.get('orderInfo').time/1000);
              this.cars.map(function (item) {
                  this.carList=this.cars.length;
                  this.allPrice+=item.prodAmtMemb*item.prodQty;
                  this.allPrice2+=item.prodAmtMark*item.prodQty;
              }.bind(this));
              this.sum2()
              this.rPrice=Math.floor(parseInt(this.allPrice+this.freight)/10)
          }).catch(err=>{
          //console.log(err);
      });

      //获取积分
      this.axios.get(Lib.C.url_mc+'/mall/bss/ip/asset',{
          params:{
              ipPk:this.userId,
          }
      })
          .then(res=>{
              //console.log(res.data.data.rule)
              this.integral=res.data.data.point;
              this.balance=res.data.data.wallet;
              this.rule=res.data.data.rule;
              this.score=this.integral
          }).catch(err=>{
          //console.log(err);
      })


      //满减
      this.axios.get(Lib.C.url_mc+'/mall/bss/ordReqt/discount',{
          params:{
              ipPk:this.userId,
              //totAmt:this.allPrice
              totAmt:300
          }
      })
          .then(res=>{
              console.log(res.data)
              this.subList=res.data.data.disList;
              this.subFirst=res.data.data.isFirst;
              if(this.subFirst){
                  this.rebate=this.subFirst.rebate;
              }else{
                  this.rebate=1;
              }
          }).catch(err=>{
          //console.log(err);
      })


  },


  watch:{
    score:function () {
        if(this.score>this.integral){
            this.score=this.integral
            this.score2=this.score
        };
        if(!String(this.score).match(/^\d+$/)){
            this.score=''
        }
        if(this.checked2){
            this.score2=this.score
            this.rule2=this.rule*this.score

        }
        if(this.checked3){
            this.sum()
        }
        if(this.allPrice+this.freight-this.score2*this.rule<0){
            this.score=(this.allPrice+this.freight)*100
        }
        this.sum2()
    }
  },

  //相关操作事件
  methods: {
      tab(item,index){
          if(item.auditStatNmCn!='待审核'){
              this.iScur=index;
          }

       // console.log(item,index)
      },

      change1(){

      },
      change2(){
          if(this.checked2){
              this.score2=this.score
              this.rule2=this.rule*this.score

          }else{
              this.score2=0
              this.rule2=0
          }
          if(this.checked3){
              this.sum()
          }
          this.sum2()
      },
      change3(){
          if(this.checked3){
              this.sum()
          }else{
              this.balance2=0
          }
          this.sum2()
      },

      //倒计时
      callback(){
          this.$alert('倒计时结束', '提示', {
              confirmButtonText: '确定',
              callback: action => {
                  window.location.href='../home/index.html';
              }
          });
      },



      //选择地区
      handleChange(value){
          this.ruleForm.address=value
      },

      //获取地址
      getAddress(num){
          this.axios.get(Lib.C.url_mc+'/mall/bss/addr/addrList',{
              params:{
                  ipPk:this.userId,
                  statCd:num
              }
          })
              .then(res=>{
                  if(num=='1120.10'){
                      //console.log(res.data.data.items)
                      this.addressOption=res.data.data.items;
                      this.addrPk=res.data.data.items[0].addrPk;
                  }else{
                      this.addressHide=res.data.data.items;
                      //console.log(res.data.data.items)
                  }
              }).catch(err=>{
              console.log(err);
          });
      },

      //计算使用余额
      sum(){
          if(this.balance>=this.allPrice+this.freight-this.score2*this.rule){
              if(this.allPrice+this.freight-this.score2*this.rule>=0){
                  this.balance2=this.allPrice+this.freight-this.score2*this.rule;
              }else{
                  this.balance2=this.allPrice+this.freight;
                  this.score=(this.allPrice+this.freight)*100
              }
          }else{
              this.balance2=this.balance
          }
      },

      //计算应付
      sum2(){
          //应付总额
          this.payPrice=this.allPrice+this.freight-this.score2*this.rule-this.balance2;

      },

      //提交订单
      pOrder(){
          //新增收货地址
          console.log(Lib.M.store.get('orderInfo').id,this.userId,this.addrPk,this.score2,this.checked3)
          var Qs = require('qs');
//          var boll;
//          this.balance2?boll=true:boll=false;
//          console.log(boll)
          //return false;
          this.axios.post(Lib.C.url_mc + '/mall/bss/ordReqt/subOrd', Qs.stringify({
              ordPk:Lib.M.store.get('orderInfo').id,
              ipPk:this.userId,
              addrPk:this.addrPk,
              discountPk:'',
              fDiscountPk:'',
              usePoint:this.score2,
              useWallet:this.checked3,
          }))
              .then(res => {
                  console.log(res.data);
                  if (res.data.status == 200) {
                     // window.location.href = '../shopping/true.html';
                      this.$alert('订单提交成功', '提示', {
                          confirmButtonText: '确定',
                          callback: action => {
                              window.location.href = '../shopping/true.html';
                              //window.location.href = '../shopping/true.html';
                          }
                      });
                  }
                  if (res.data.status == 400) {
                      this.$alert(res.data.msg, '提示', {
                          confirmButtonText: '确定',
                          callback: action => {

                          }
                      });
                  }
                  if (res.data.status == 308) {
                      Lib.M.store.set('orderPrice',this.allPrice+this.freight);
                      //window.location.href = '../shopping/pay.html';
                      this.$alert('订单提交成功', '提示', {
                          confirmButtonText: '确定',
                          callback: action => {
                              window.location.href = '../shopping/pay.html';
                          }
                      });
                  }
                  if (res.data.status == 302) {
                      //window.location.href = '../shopping/pay.html';
                      this.$alert('订单提交成功', '提示', {
                          confirmButtonText: '确定',
                          callback: action => {
                              //window.location.href = '../shopping/pay.html';
                          }
                      });
                  }

                  if (res.data.status == 312) {
                      this.$alert('订单已取消', '提示', {
                          confirmButtonText: '确定',
                          callback: action => {
//                              window.location.href = '../shopping/pay.html';
                          }
                      });
                  }
              }).catch(err => {
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
    .g-content{
      width: 1200px;
      margin: 0 auto 20px auto;
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
    }

    /*订单地址*/
    .m-address{
        h2{
          margin: 0 0 20px 0 ;
        }
        li{
          border: 1px solid #ddd;
          float: left;
          padding: 20px;
          width: 200px;
          margin-right: 30px;
          height: 120px;
          position: relative;
          margin-bottom: 30px;
          cursor:pointer;
        h1{
          margin-bottom: 20px;
        span{
          font-size: 16px;
        }
        em{
          float: right;
        }
        }
        p{
          line-height: 24px;
        }
        h3{
          span{
            float: right;
            display: none;
          }
        }
      }
      .f-active{
        border-color: #30b947;
      h3{
        span{
          display: block;
          color: #30b947;
        }
      }
      }
      li:nth-of-type(4n){
        margin-right: 0;
      }
        .u-add{

        img{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
        }
      }
    }

    .g-check{
      background: #fff;
      padding: 30px 60px;
      color: #666;
      .m-middle{
          margin-top: 20px;
          h3{
            border-bottom: 1px solid #ddd;
            padding: 25px 0;
            font-size: 16px;
            em{
              display: inline-block;
              width: 150px;
            }
            strong{
              color: #30b947;
              font-weight: normal;
            }
            span{
              color: #fe3000;
            }
          }
      }
      .m-bottom{
        /*订单表格*/
        h3{
          padding:40px 0 25px 0;
          border-bottom: 1px solid #ddd;
          font-size: 16px;
          a{
            float: right;
            color: #999;
          }
        }
        .top{
          th{
            height: 70px;
            line-height: 70px;
            border-bottom: 1px solid #ddd;
            font-size: 16px;
            text-align: center;
          }
          th:first-of-type{
            text-align: left;
          }
        }
        table{
          width: 100%;
          td{
            padding: 28px 0;
            border-bottom: 1px solid #ddd;
            text-align: center;
            position: relative;
            img{
              width: 100px;
              height: 100px;
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
          }
          tr{
            td:first-child{
              width: 535px;
            }
            td:nth-of-type(2){
              font-weight: bold;
            }
            td:last-child{
              font-weight: bold;
              color: #fe3000;
            }
          }
        }
      }
      /*订单金额*/
      .m-info{
        padding: 23px 0;
        label{
          color: #fe3000;
        }
        .left{
          float: left;
          p{
            margin-bottom: 20px;
          }
          input{
            width: 78px;
            height: 33px;
            border: 1px solid #fe3000;
            color: #fe3000;
            text-align: center;
          }
          .el-checkbox__inner{
            border-radius: 50%;
            border-color:#fe3000;
          }
          .el-checkbox__input.is-checked .el-checkbox__inner{
            background: #fe3000;
            border-color:#fe3000
          }
        }
        .right{
          float: right;
          p{
            margin-bottom: 20px;
            width: 250px;
          }
          span{
            color: #fe3000;
            float: right;
          }
          strong{
            font-size: 16px;
          }
        }
        .submit{
          width: 100%;
          border-top: 1px solid #ddd;
          padding:30px 0;
          p{
            float: right;
          }
          button{
            width: 180px;
            height: 56px;
            background: #fe3000;
            border: none;
            border-radius:6px;
            color: #fff;
            margin-left: 20px;
            cursor: pointer;
          }
        }
      }
    }

    .el-dialog__header{
      background: #efefef;
      font-size: 16px;
      padding: 20px!important;
    }
    .el-form-item{
      margin-bottom: 35px!important;
    }
    .el-form-item__label{
      text-align: left!important;
      padding: 0!important;
      line-height: 50px!important;
    }
    .el-input__inner{
      height: 50px!important;
      border-radius: 0!important;
    }
    .g-dialog{
      width: 960px!important;
      .el-cascader__label{
        line-height: 50px;
      }
      .el-cascader{
        width: 250px;
      }
      .el-radio-button{
        margin-right: 30px;
      }
      .el-radio-button__inner{
        border-left:1px solid #bfcbd9;
        border-radius: 0!important;
        width: 160px;
        height: 50px;
        padding: 0;
        line-height: 50px;
      }

    }
    .el-tooltip__popper{
      width: 160px;
    }
    .g-button{
      button{
        width: 240px;
        height: 50px;
        border-radius: 6px;
        font-size: 18px;
      }
      button:first-child{
        background: #30b947;
        color: #fff;

      }

    }
    .m-tip{
      margin: 20px 0 60px 0;
      li{
        padding-bottom: 10px;
      }
      span{
        position: relative;
        display: inline-block;
        width:50px;
      }
    }

    .el-radio__input.is-checked .el-radio__inner{
      border-color: #fe3000!important;
      background: url("assets/images/true.jpg") no-repeat !important;
    }
    .el-radio__inner::after{
      background-color: transparent!important;
    }
</style>
