<template>
    <div class="cart-page">
        <van-nav-bar  title="购物车" right-text="编辑"/>
        <div class="goods-list">
            <goods-item class="cart-item-wrapper"
                v-for="i in goodsList"
                :key="i.id"
                :goods="i"
            />
            <div style="height:100px;"></div>
        </div>
        <van-submit-bar :price="totalPrice" button-text="结算">
            <van-checkbox @change="checkChange" v-model="selectAll">全选</van-checkbox>
        </van-submit-bar>
        
    </div>
</template>
<script>
import goodsItem from '../components/GartGoodsItem.vue'
export default {
  //引用组件
  components:{goodsItem},
  data(){
    return{
      //默认selectAll（不全选）---有问题
      selectAll:false,
      //要导入的数据
      goodsList:[
                {
                    id: 1,
                    picture:
                        "https://img14.360buyimg.com/cms/jfs/t1/56617/17/1177/72633/5cee2b3fE593f7a14/7faa2b84748e11e5.jpg",
                    title: "花花公子（PLAYBOY）衬衫男外套长袖衬衣工装2019新款秋冬新款韩版潮流宽松休闲男装 灰色 L",
                    price: 159,
                    count: 1,
                    checked: false
                },
                {
                    id: 2,
                    picture:
                        "https://img14.360buyimg.com/n7/jfs/t1/98113/15/7368/304176/5dfa2f8cE3ee64930/bc493ae912de2e52.jpg",
                    title:
                        "牛仔外套男装春季衣服男春装夹克修身休闲男生潮牌工装潮流头号青年春秋棒球服男 7705浅蓝常规 XL",
                    price: 127,
                    count: 1,
                    checked: false
                },
                {
                    id: 3,
                    picture:
                        "https://img14.360buyimg.com/n7/jfs/t1/41789/15/8649/149019/5d24a0d3E7e1b5648/c7607575345ca2f2.jpg",
                    title:"图片中鞋底蓝色条纹为创意效果，实物为纯色，无蓝色条纹建议下单钱仔细比对",
                    price: 168,
                    count: 1,
                    checked: false
                }
      ]
    }
  },
  computed:{
    totalPrice(){
      //初始价格为0
      let price=0;
      var that=this;
      this.goodsList.forEach(function(item){
        if(item.checked){
          //让总价格等于单价*数量
          price += item.price * item.count;
        }else{
          that.selectAll=false;
        }
      });
      //步进器里面价格默认为分
      return price * 100;
    }
  },
  methods:{
    checkChange(){
      // 选中selectAll，赋值给checked
      var checked=this.selectAll;
      this.goodsList.forEach(function(item){
        item.checked=checked;
      })
    }
  }
};
</script>
<style lang="less" scoped>
.cart-page {
    background: #eee;
    min-height: 100vh;
}
.cart-item-wrapper {
    background: #fff;
    border-radius: 5px;
    margin: 10px;
}
.van-submit-bar{
    bottom: 50px;
    border-bottom: solid 1px #eee;
}
</style>