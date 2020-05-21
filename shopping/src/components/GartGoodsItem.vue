<template>
    <div class="carts-item">
        <!-- 选择框 -->
        <div class="check-box">
            <van-checkbox  v-model="goods.checked"/>
        </div>
        <!-- 商品图片 -->
        <div class="cart-goods-image">
            <img :src="goods.picture">
        </div>
        <!-- 商品信息 -->
        <div class="cart-data">
            <!-- 商品标题 -->
            <div class="title">{{goods.title}}</div>
            <div class="act">
                <!-- 商品价格 -->
                <span class="price">￥{{goods.price}}</span>
                <!-- 步进器 -->
                <div class="jisuan">
                    <van-stepper style="float:right;"  v-model="goods.count"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
// 给GartGoodsItem.vue取名
   name:"CartGoodsItem",
// 创建一个组件  
   props:{
       goods:{
           type:Object,
           required:true
       }
   }
}
</script>
<style lang="less">
 //嵌套
.carts-item{
    display: flex;
    padding:0;
    //css嵌套
    .cart-goods-image{
        width: 100px;
        height: 100px;
        padding: 5px;
        img{
            max-width: 90px;
            max-height: 90px;
        }
    }
    .cart-data{
        padding: 5px 10px 10px;
        display: flex;
        flex-direction: column;
        flex: 1;
        .title{
            font-size: 12px;
            flex: 1;
        }
        .act{
            display: flex;
            .price{
                display: block;
                color: #ff5500;
                font-size: 14px;
            }
        }
        .jisuan{
            flex: 1;
            }
        }
    }
.check-box{
    display: flex;
    align-content: center;
    margin-left: 5px;
}
</style>