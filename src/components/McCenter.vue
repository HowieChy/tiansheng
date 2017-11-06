<template>

  <div class="g-left">
    <!--社会会员-->
    <ul>
      <li v-for="(item,index) in items[type]"><a :href="item.aHref" :class="{'f-active':iScur==index}">{{item.title}}</a></li>
    </ul>
  </div>


</template>
<script>
    export default {
        data(){
            return {
                iScur:'',
                items:[[{
                    title:'个人中心',
                    aHref:'index.html'
                },{
                    title:'我的订单',
                    aHref:'order.html'
                },{
                    title:'收货地址',
                    aHref:''
                },{
                    title:'我的推荐',
                    aHref:''
                },{
                    title:'余额日志',
                    aHref:''
                },{
                    title:'积分日志',
                    aHref:''
                }],

                    [{
                    title:'个人中心',
                    aHref:''
                },{
                    title:'收货地址',
                    aHref:''
                },{
                    title:'我的团员',
                    aHref:''
                }],

                    [{
                        title:'个人中心',
                        aHref:''
                    },{
                        title:'我的订单',
                        aHref:''
                    },{
                        title:'收货地址',
                        aHref:''
                    },{
                        title:'我的团',
                        aHref:''
                    }]
                ]
            }
        },

        mounted () {
            console.log(this.type,this.info);
            this.items[this.type].forEach(function (elem,i) {
                if(this.info==elem.title){
                    this.iScur=i;
                }
            }.bind(this))
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