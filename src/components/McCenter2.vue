<template>

  <div class="g-left">
    <!--社会会员-->
    <ul>
      <li v-for="(item,index) in items[type]">
        <router-link :to='item.aHref'  :class="{'f-active':iScur==index}">{{item.title}}</router-link>
       <!-- <a :href="item.aHref" :class="{'f-active':iScur==index}">{{item.title}}</a>-->
      </li>
    </ul>
  </div>


</template>

<script>
    import Lib from 'assets/js/Lib';
    export default {
        data(){
            return {
                iScur:'',
                items:[[{
                    title:'个人中心',
                    aHref:'/index'
                },{
                    title:'我的订单',
                    aHref:'/order'
                },{
                    title:'收货地址',
                    aHref:'/address'
                },{
                    title:'我的推荐',
                    aHref:'/member'
                },{
                    title:'余额日志',
                    aHref:'/log'
                },{
                    title:'积分日志',
                    aHref:'/intergral'
                }],

                    [{
                    title:'个人中心',
                    aHref:'/index'
                },{
                    title:'收货地址',
                    aHref:'/address'
                },{
                    title:'我的团员',
                    aHref:'/regiment'
                }],

                    [{
                        title:'个人中心',
                        aHref:'/index'
                    },{
                        title:'我的订单',
                        aHref:'/order'
                    },{
                        title:'收货地址',
                        aHref:'/address'
                    },{
                        title:'我的团',
                        aHref:'/regiment'
                    },{
                        title:'余额日志',
                        aHref:'/log'
                    },{
                        title:'积分日志',
                        aHref:'/intergral'
                    }]
                ]
            }
        },
        watch:{
            info(val,oldval){

              this.items[this.type].forEach(function (elem,i) {
                  if(this.info==elem.title){
                      this.iScur=i;
                  }
              }.bind(this))
          }
        },
        mounted () {
            //是否登录
            console.log(Lib.M.store.get('login'))
            if(!Lib.M.store.get('login')){
                this.$alert('请先登录账号', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        window.location.href = '../home/index.html';
                    }
                });
            }
        },
        props:['type','info']
    }
</script>

<style scoped lang="less" >
  .g-left{
    float: left;
    background: #fff;
    width: 140px;
    padding: 40px 30px;
    a{
      font-size: 16px;
      margin-bottom: 40px;
      color: #999;
      display: inline-block;
    }
    .f-active{
      font-size: 20px;
      color: #30b947;
    }
  }
</style>