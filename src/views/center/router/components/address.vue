<template>
	<div class="g-detail">
		<div class="m-address">
			<!--收货地址-->
			<h2>收货地址</h2>
			<ul class="clearfix">
				<li v-for="(item,index) in addressOption" :class="{'f-active':iScur==index}" @click="tab(item,index)">
					<h1><span>{{item.rcvr}}</span> <em v-if="item.auditStatNmCn!='待审核'">审核通过可使用</em> <em v-if="item.auditStatNmCn=='待审核'">正在审核</em></h1>
					<p>{{item.mob}}</p>
					<p>{{item.fullAddr}}</p>
					<h3><span @click="hideAddress(item,index)">隐藏</span></h3>
				</li>
				<li class="u-add" @click="jAdd">
					<img src="../assets/images/add.png" alt="">
				</li>
			</ul>
		</div>

		<div class="m-address">
			<h3 @click="toggle">隐藏的收货地址 <i :class="[hide?'el-icon-arrow-down':'el-icon-arrow-up']"></i></h3>
			<ul class="clearfix" v-if="!hide">

				<li v-for="(item,index) in addressHide" :class="{'f-active':iScur2==index}" @click="tab2(item,index)">
					<h1><span>{{item.rcvr}}</span> <em v-if="item.auditStatNmCn!='待审核'">审核通过可使用</em> <em v-if="item.auditStatNmCn=='待审核'">正在审核</em></h1>
					<p>{{item.mob}}</p>
					<p>{{item.fullAddr}}</p>
					<h3><span @click="showAddress(item,index)">显示</span></h3>
				</li>
			</ul>
		</div>


		<!--修改收货地址-->
		<el-dialog title="修改收货地址" :visible.sync="dialogVisible" custom-class="g-dialog">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="收货人:" prop="name">
					<el-input v-model="ruleForm.name" style="width: 160px;"></el-input>
				</el-form-item>

				<el-form-item  label="所在地区:"  prop="address">
					<el-cascader    placeholder="请选择地区"
									:options="options"
									v-model="selectedOptions"
									@change="handleChange"
					></el-cascader>
				</el-form-item>

				<el-form-item label="详细地址:" prop="address2">
					<el-input v-model="ruleForm.address2" style="width: 560px;"></el-input>
					<el-tooltip class="item" effect="dark" content="请选择地区请选择地区请选择地区请选择地区请选择地区请选择地区请选择地区请选择地区" placement="right">
						<span style="margin-left: 20px;color: #ff3002;cursor: pointer">配送说明</span>
					</el-tooltip>
				</el-form-item>

				<el-form-item label="手机号码:" prop="phone">
					<el-input v-model="ruleForm.phone" style="width: 400px;"></el-input>
				</el-form-item>

				<el-form-item label="地址类型:" prop="type">
					<el-radio-group v-model="radio" fill="#30b947"  @change="changeId">
						<el-radio-button label="家庭地址" ></el-radio-button>
						<el-radio-button label="公司地址"  ></el-radio-button>
					</el-radio-group>
				</el-form-item>

				<ul class="m-tip">
					<li><span>提示：</span>1.正在审核和审核通过的地址不能修改，删除，只可以隐藏</li>
					<li><span></span>2.提交审核中状态的地址可以修改</li>
					<li><span></span>3.新增地址需要审核通过才可以使用</li>
				</ul>

				<el-form-item class="g-button">
					<el-button  @click="submitForm('ruleForm')">保存</el-button>
					<el-button  @click="dialogVisible = false">取消</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>

	</div>
</template>

<script>

import Lib from 'assets/js/Lib';

/*倒计时组件*/
import countDown from 'components/Countdown';

export default {
  data() {
      var validatePhone=(rule, value, callback)=> {
          var re=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
          if(!value||!re.test(value)){
              callback(new Error('请输入正确手机号码'));
          }else {
              callback();
          }
      }
      var validateAddress=(rule, value, callback)=> {
          if(!value){
              callback(new Error('请选择地区'));
          }else {
              callback();
          }
      }

    return {
		num:0, //账号类别
		text:"收货地址",

        iScur:0,
        iScur2:0,

        hide:true,
        //收货地址
        addressOption:[],

        //隐藏的收货地址
        addressHide:[],

        ruleForm: {
            name: '',//活动名称
            address:'',//详细地址
            phone:'',//手机号码
        },
        options: [],
        selectedOptions: ['','',''],//默认地址
        radio:'家庭地址',
		radioId:null,
        rules: {

            name: [
                { required: true, message: '请输入收货人姓名', trigger: 'blur' },
            ],
            address: [
                { validator:validateAddress, trigger: 'blur' ,required: true,},
            ],
            address2: [
                { required: true, message: '请输入详细地址', trigger: 'blur' },
            ],
            phone: [
                { validator: validatePhone, trigger: 'blur' }
            ],
        },

        dialogVisible:false, 	//	弹窗
    }
  },

  //实例初始化最之前，无法获取到data里的数据
    beforeCreate(){
        document.title = '收货地址';
    },


    //相关操作事件
    methods: {
        toggle(){
          this.hide=!this.hide
		},
        tab(item,index){
            if(item.auditStatNmCn!='待审核'){
                this.iScur=index;
            }

            //console.log(item,index)
        },

        tab2(item,index){
            this.iScur2=index;

            //console.log(item,index)
        },

        changeId(value){
          if(value=='家庭地址'){
              this.radioId=9090.100
		  }else{
              this.radioId=9090.110
			}
		},
        //地址弹窗
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log(valid);
                    var This=this;
					var str1,str2,str3;
					var provCd,cityCd,distCd;
                    this.axios.get(Lib.C.url_mc+'/mall/sys/sysCat/tree?methCd=9000')
                        .then(res=>{
                            console.log(res.data,This.ruleForm.address);
                            res.data.map(function (e,i) {
                                if(e.cd==This.ruleForm.address[0]){
                                    str1=e.nmCn;
                                    provCd=e.cd;
								}
                                e.childSysCatDtozList.map(function (ev,j) {
                                    if(ev.cd==This.ruleForm.address[1]){
                                        str2=ev.nmCn;
                                        cityCd=ev.cd
                                    }
                                    ev.childSysCatDtozList.map(function (evv) {
                                        if(evv.cd==This.ruleForm.address[2]){
                                            str3=evv.nmCn;
                                            distCd=evv.cd
                                        }
                                    })
                                })

                            })

							//新增收货地址
                            var Qs = require('qs');
                            this.axios.post(Lib.C.url_mc + '/mall/bss/addr/addAddr', Qs.stringify({
                                ipPk:this.userId,
                                rcvr:this.ruleForm.name,
                                mob:this.ruleForm.phone,
                                provCd:provCd,
								cityCd:cityCd,
								distCd:distCd,
								addr:this.ruleForm.address2,
                                catCd: this.radioId
                            }))
                                .then(res => {
                                    console.log(res.data);
                                    if (res.data.status == 200) {
                                        this.addressOption.push({
                                            rcvr:this.ruleForm.name,
                                            mob:this.ruleForm.phone,
                                            fullAddr:str1+' '+str2+' '+str3+' '+this.ruleForm.address2,
                                            auditStatNmCn:"待审核",
                                            type:this.ruleForm.radio,
                                        });
                                        this.dialogVisible=false;
                                    }
                                    if (res.data.status == 400) {
                                        this.$alert('新增地址失败', '提示', {
                                            confirmButtonText: '确定',
                                            callback: action => {

                                            }
                                        });
                                    }
                                }).catch(err => {
                                console.log(err);
                            });


                        }).catch(err=>{
                        console.log(err);
                    });


                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },

        //显示收货地址
        showAddress(item,index){
            var Qs = require('qs');
            this.axios.post(Lib.C.url_mc + '/mall/bss/addr/editAddr', Qs.stringify({
                ipPk:this.userId,
                addrPk:item.addrPk,
                isShow:true
            }))
                .then(res=>{
                    this.getAddress('1120.10')
                    this.getAddress('1120.80')
                    this.iScur=-1;
                    this.iScur2=-1;
                }).catch(err=>{
                console.log(err);
            });

        },
        //隐藏收货地址
        hideAddress(item,index){
            var Qs = require('qs');
            this.axios.post(Lib.C.url_mc + '/mall/bss/addr/editAddr', Qs.stringify({
                ipPk:this.userId,
                addrPk:item.addrPk,
                isShow:false
            }))
                .then(res=>{
                    this.getAddress('1120.10')
                    this.getAddress('1120.80')
                    this.iScur=-1;
                    this.iScur2=-1;
                }).catch(err=>{
                console.log(err);
            });
        },
        //选择地区
        handleChange(value){
            console.log(value)
            this.ruleForm.address=value
        },

        //倒计时
        callback(){
            console.log('结束1')
        },

		//新增地址
		jAdd(){
            this.dialogVisible=true;
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
                        this.addressOption=res.data.data.items;
					}else{
                        this.addressHide=res.data.data.items;

                        console.log(res.data.data.items)
					}
                }).catch(err=>{
                console.log(err);
            });
		}

    },

  //在挂载开始之前被调用
  beforeMount(){
  	
  
  },

  //已成功挂载，相当ready()
  mounted(){

      //地区
      var This=this;
		//console.log(this.$route.query);
      this.axios.get(Lib.C.url_mc+'/mall/sys/sysCat/tree?methCd=9000')
          .then(res=>{
              //console.log(res.data);
              var result={};
              res.data.map(function (e) {
                  result={
                      value:e.cd,
                      label:e.nmCn,
                      children:[]
                  };
                  e.childSysCatDtozList.map(function (ev,j) {
                      result.children.push({
                          value:ev.cd,
                          label:ev.nmCn,
                          children:[],
                      });
                      ev.childSysCatDtozList.map(function (evv) {
                          result.children[j].children.push({
                              value:evv.cd,
                              label:evv.nmCn,
                          })
                      })
                  })
                  //console.log(result)
                  This.options.push(result);
              })

          }).catch(err=>{
              console.log(err);
          });


      if(Lib.M.store.get('userInfo')){
          this.userId=Lib.M.store.get('userInfo').ipPk;
          console.log(this.userId)
      }

      this.getAddress('1120.10')
      this.getAddress('1120.80')



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
              console.log(this.icon)

              this.$emit('child-type',this.num);
              this.$emit('child-text',this.text)
          }).catch(err=>{
          console.log(err);
      });

  },



}
</script>

<style lang="less">


	.g-detail{
		width: 880px;
		float: right;
		background: #fff;
		margin-bottom: 150px;
		padding: 40px 50px;
		.m-crumb{
			font-size: 20px;
			margin: 0 0 50px 0;
			color: #666;
		}
	}

	/*订单地址*/
	.m-address{
		h2{
			margin: 0 0 20px 0 ;
		}
		h3{
			margin: 0 0 20px 0 ;
			cursor: pointer;
		}
		li{
			border: 1px solid #ddd;
			float: left;
			padding: 20px;
			width: 200px;
			margin-right: 60px;
			height: 120px;
			position: relative;
			margin-bottom:50px ;
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
		li:nth-of-type(3n){
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
