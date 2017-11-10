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
          <h3> <em>配送方式</em><strong>自提</strong></h3>
          <h3> <em>运费</em><span v-if="freight">{{freight|currency}}</span><strong v-if="!freight">免费</strong></h3>
          <h3> <em>收货时间</em>
            <el-date-picker
                  v-model="value"
                  type="date"
                  placeholder="请选择收货时间"
                  :picker-options="pickerOptions0">
            </el-date-picker>
          </h3>
        </div>

        <div class="m-bottom">
          <h3>商品 <a href="">返回购物车&gt; </a></h3>
          <table>
            <tr v-for="(item,index) in cars">
              <td><a  href=""><img src="" alt=""><em>{{item.title}}</em></a></td>
              <td><span>{{ item.price | currency }} X {{item.num}}</span></td>
              <td><span>{{ item.price*item.num | currency }}</span></td>
            </tr>
          </table>

          <div class="m-info ">
            <div class="clearfix">
              <div class="left ">
                <p> <el-checkbox>订单满￥100.00赠送三斤小黄瓜，折合市场价￥20.00</el-checkbox></p>
                <p><el-checkbox>使用积分 <input type="number" v-model.lazy="score" @blur="maxScore"> 分 当前账号总积分为{{integral}}分，最多可用{{integral}}分，抵扣{{score/10}}元</el-checkbox></p>
                <p><el-checkbox>使用账户余额 当前账号余额为{{balance | currency}}</el-checkbox></p>
              </div>
              <div class="right">
                <p>商品件数： <span>3件</span></p>
                <p>金额合计： <span>￥3520.00</span></p>
                <p>运费： <span>{{freight|currency}}</span></p>
                <p>使用积分： <span>4分（抵￥0.4）</span></p>
                <p>使用余额： <span>3.00</span></p>
                <p>应付总额： <span><strong>￥31880.00</strong></span></p>
              </div>
            </div>
            <div class="submit">
              <p>支付成功后可得积分：4分 <button>提交订单</button></p>
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
        pickerOptions0: {
            disabledDate(time) {
                return time.getTime() < Date.now() - 8.64e7;
            }
        },
        value: '',
        //收货地址
        addressOption:[],

        //购物车列表
        cars:[{
            title:'芒果',
            price:300.30,
            num:2
        },{
            title:'芒果',
            price:200,
            num:1,
        }],
        freight:20,     //运费
        integral:23,    //可使用积分
        score:'',       //使用积分
        balance:3,  //余额

        ruleForm: {
            name: '',//活动名称
            address:'',//详细地址
            phone:'',//手机号码
        },
        options: [{
            value: 'zhejiang',
            label: '浙江',
            children: [{
                value: 'hangzhou',
                label: '杭州',
                children: [{
                    value: 'xihu',
                    label: '西湖区'
                }, {
                    value: 'binjiang',
                    label: '滨江区'
                }]
            }, {
                value: 'ningbo',
                label: '宁波',
                children: [{
                    value: 'zhenhai',
                    label: '镇海区'
                }, {
                    value: 'jiangbei',
                    label: '江北区'
                }]
            }]
        }],
        selectedOptions: ['','',''],//默认地址
        radio:'公司地址',
        rules: {
            name: [
                { required: true, message: '请输入收货人姓名', trigger: 'blur' },
            ],
            address: [
                { required: true, message: '请选择地区', trigger: 'blur' },
            ],
            address2: [
                { required: true, message: '请输入详细地址', trigger: 'blur' },
            ],
            phone: [
                { required: true, message: '请输入手机号码', trigger: 'blur' },
            ],
        },

        //dialogVisible:false,
        cutTime:'1504796400',//倒计时

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
      if(Lib.M.store.get('userInfo')){
          this.userId=Lib.M.store.get('userInfo').ipPk;
          console.log(this.userId)
      }
      this.getAddress('1120.10')
  },

  //相关操作事件
  methods: {
      tab(item,index){
          if(item.through){
              this.iScur=index;
          }

        console.log(item,index)
      },

      //积分
      maxScore(){
          if(this.score>this.integral){
              this.score=this.integral
          };
          if(!String(this.score).match(/^\d+$/)){
              this.score=''
          }
      },

      //地址弹窗表单
      submitForm(formName) {
          this.$refs[formName].validate((valid) => {
              if (valid) {
                  console.log(valid)
                  alert('submit!');
              } else {
                  console.log('error submit!!');
                  return false;
              }
          });
      },

      //倒计时
      callback(){
          console.log('结束1')
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
                      console.log(res.data.data.items)
                      this.addressOption=res.data.data.items;
                  }else{
                      this.addressHide=res.data.data.items;
                      console.log(res.data.data.items)
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
            width: 200px;
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
</style>
