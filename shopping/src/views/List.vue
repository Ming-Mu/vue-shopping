<template>
  <div class="about">
    <div class="NavBar">
      <van-nav-bar
        title="商品推荐列表"
        left-text="返回"
        right-text="设置"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <GoodsList mode="one" :data="[0,1,2,3]"/>
    <div style="height:50px;"></div>
  </div>
</template>
<script>
import GoodsList from '../components/GoodsList.vue'
export default {
  components:{GoodsList},
  methods:{
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    }
  }
}
</script>
