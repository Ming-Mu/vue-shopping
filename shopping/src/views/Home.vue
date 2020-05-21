<template>
  <div class="home">
    <div class="find">
      <van-search placeholder="请输入搜索关键词" />
      <van-grid>
        <van-grid-item icon="manager-o" />
      </van-grid>
    </div>
    <div class="swipe">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="https://img14.360buyimg.com/da/jfs/t1/64206/8/2446/53620/5d0c9b08E31e31cdc/4d3656daed5366c5.jpg"></van-swipe-item>
        <van-swipe-item><img src="https://img30.360buyimg.com/da/jfs/t1/94042/25/15629/105167/5e7308f1Ee90826f9/0393082d0dfe4124.jpg"></van-swipe-item>
        <van-swipe-item><img src="https://img14.360buyimg.com/da/jfs/t1/102461/1/15239/100235/5e6e328fE9a179fb5/4411c0387a6df3a0.jpg"></van-swipe-item>
        <van-swipe-item><img src="https://img14.360buyimg.com/da/jfs/t1/59402/20/5415/153057/5d37b3f4E565eee1d/b3818446414de902.jpg"></van-swipe-item>
      </van-swipe>
    </div>
    <div class="logo">
      <van-grid>
        <van-grid-item icon="new-arrival-o" text="新品" />
        <van-grid-item icon="shop-collect-o" text="店铺" />
        <van-grid-item icon="underway-o" text="抢购" />
        <van-grid-item icon="more-o" text="更多" />
      </van-grid>
    </div>
    <div class="content">
      <!-- 3.直接当成标签使用即可 -->
        <GoodsList mode="two" :data="goods" />
        <div style="height:40px"></div>
    </div>
  </div>
</template>

<script>
//在页面中引用组件的步骤
//1.导入
import GoodsList from '../components/GoodsList.vue'
export default {
  name: 'Home',
  components:{
      //2.引入组件
      GoodsList
  },
  data(){//数据仓库
    return{
      goods:[
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
          title:"牛仔外套男装春季衣服男春装夹克修身休闲男生潮牌工装潮流头号青年春秋棒球服男 7705浅蓝常规 XL",
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
        },
        {
          id: 4,
          picture:
              "https://img13.360buyimg.com/n7/jfs/t1/59127/5/9195/233200/5d6a49c5E83ef42d6/eae5d4b6ac777b5e.jpg",
          title:"低帮英伦复古透气百搭板鞋子男士休闲工装马丁靴 米色 41",
          price: 138,
          count: 1,
          checked: false
        },
        {
          id: 5,
          picture:
              "https://img13.360buyimg.com/n7/jfs/t1/111765/21/822/183839/5e909914E03677dca/b8a14dec60caa234.jpg",
          title:"南星点点风衣女外套小个子chic中长款韩版春秋2020新款学生宽松百搭工装时尚上衣 1822孔雀蓝【尺码偏大】 S",
          price: 159,
          count: 1,
          checked: false
        },
        {
          id: 6,
          picture:
              "https://img14.360buyimg.com/n7/jfs/t1/101336/38/6885/169735/5df7a30dEff8aad5f/44b12c05f5f43bfe.jpg",
          title:"韩卡婷 短袖  学生韩版2020新款春夏季宽松衣服慵懒风白色t恤 潮上衣体恤闺蜜",
          price: 168,
          count: 1,
          checked: false
        },
        {
          id: 7,
          picture:
              "https://img10.360buyimg.com/n7/jfs/t1/115282/18/811/179404/5e91280eE68ef5077/e52f18b08355db01.jpg",
          title:"依伦（EREN）超薄简约石英表时尚商务皮带 男防水 8140玫瑰金黑带黑面",
          price: 168,
          count: 1,
          checked: false
        },
        {
          id: 8,
          picture:
              "https://img10.360buyimg.com/n7/jfs/t1/102704/30/17046/72223/5e815841E6c77dd2c/725a597d450c052d.jpg",
          title:"理光（RICOH） Theta SC 360度全景相机/VR看房720度全景/支持安居客 米色 官方标配",
          price: 1599,
          count: 1,
          checked: false
        },
        {
          id: 9,
          picture:
              "https://img13.360buyimg.com/n7/jfs/t1/109667/29/11822/160810/5e8db178E2a9ab91b/1938416c78ad07eb.jpg",
          title:"创维酷开（coocaa）Live-3 家庭影院 客厅电视音响回音壁5.1无线重低音炮3D环绕壁挂蓝牙音箱套装",
          price: 168,
          count: 1,
          checked: false
        },
        {
          id: 10,
          picture:
              "https://img11.360buyimg.com/n7/jfs/t1/48612/19/5581/205667/5d32f888E83efd11b/5208442f56470dd8.jpg",
          title:"爱乐优 智能机器人 冬奥会火炬手同款教育商用迎宾导购导览服务送餐",
          price: 688888,
          count: 1,
          checked: false
        }
      ]
    }
  }
};
</script>
<style lang="less" scoped>
.swipe{
  width:100%;
}
.my-swipe img{
  width: 100%;
  background-size:over;
  height:150px;
}
.find{
  display: flex;
}
.van-search{
  flex: 9;
}
.van-grid{
  flex: 1;
}
</style>
