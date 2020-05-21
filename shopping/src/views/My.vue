<template>
  <div class="wrapper">
    <div class="NavBar">
      <van-nav-bar
        title="我的"
        left-text="返回"
        right-text="设置"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <div class="my">
      <div class="head-image">
        <div class="head-background">
          <van-uploader :after-read="afterRead"/>
          <div class="account">
            <a href="">设置昵称</a>
          </div>
        </div>
        <div class="vip-background">
          <span>开通vip尊享<br>畅享1000礼包</span>
          <van-button round size="small" type="info">立刻开通</van-button>
        </div>
      </div>
      <div class="money">
        <van-grid :column-num="2">
          <van-grid-item icon="paid" text="我的钱包" />
          <van-grid-item icon="like-o" text="我的收藏" />
          <van-grid-item icon="shop-o" text="我的小店" />
          <van-grid-item icon="ellipsis" text="更多" />
        </van-grid>
      </div>
    </div>
    <div class="order">
      <van-grid>
        <van-grid-item icon="logistics" text="发货中" />
        <van-grid-item icon="completed" text="已接收订单" />
        <van-grid-item icon="failure" text="删除的订单" />
        <van-grid-item icon="exchange" text="退/换货物" />
      </van-grid>
    </div>
    <div class="pay">
      <van-grid :column-num="1">
        <van-grid-item icon="shopping-cart-o" text="是空的，马上去挑选合适的商品吧！" />
      </van-grid>
      <div style="height:60px;padding-bottom:2px"></div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant';
export default {
  methods:{
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
  }
}
</script>
<style lang="less" scoped>
.my{
  display: flex;
  height: 170px;
  padding:2px;
  background-color: #eee;
}
.head-image{
  width: 100%;
  height: 160px;
  flex: 1.5;
}
.money{
  flex: 2;
}
.head-background{
  width: 100%;
  height: 75%;
  background-color: #e2231A;
}
.van-uploader{
  padding: 5% 20% 0% 25%;
}
.account a{
  padding:0% 28%;
  color: #fff;
}
.vip-background{
  display: flex;
  background-color: #232331;
}
.vip-background span{
  flex: 2;
  font-weight: bold;
  padding:6% 0%;
  padding-left: 5%;
  color: #f4ca3a;
  font-size: 10px;
}
.van-button{
  margin:5% 0%;
  margin-right: 3px;
  flex: 1.2;
}
.money{
  margin-top: 2px;
}
.order{
  padding:5px 0px;
  background-color: #eee;
}
.pay{
  background-color: #eee;
}
.pay .van-grid-item{
  height: 300px;
  padding-top: 5px;
}
</style>
