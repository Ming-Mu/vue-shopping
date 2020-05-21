<template>
    <div style="background-color:#efefef;min-height:100vh">
        <!-- 导航 -->
        <van-nav-bar
            title="商品详情页面"
            left-text="返回"
            left-arrow
            @click-left="$router.go(-1)"
            />
        <!-- 商品轮播图 -->
        <div class="goods-images">
            <van-swipe class="my-swipe" autoplay="5000">
                <van-swipe-item v-for="(img,i) in swipeImages" :key="i">
                    <img :src="img">
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- 商品详情 -->
        <div class="goods-name">{{goodsInfo.name}}</div>
        <div class="goods-info">
            <!-- 显示规格视图 -->
            <div class="cell" @click="show=true">
                <div class="cell-title">规格:</div>
                <div class="cell-value">请选择规格</div>
                <div class="cell-icon">
                    <van-icon name="arrow" />
                </div>
            </div>
            <!-- 显示收货地址 -->
            <div class="cell" @click="change">
                <div class="cell-title">收货地址:</div>
                <div class="cell-value">请选择规格</div>
                <div class="cell-icon">
                    <van-icon name="arrow" />
                </div>
            </div>
        </div>
        <!-- 商品规格 -->
        <van-sku
            v-model="show"
            :sku="goodsInfo.props"
            :goods="goodsInfo"
            :goods-id="goodsInfo.id"
            :quota="goodsInfo.quota"
            :quota-used="goodsInfo.quotaUsed"
            @buy-clicked="onBuyClicked"
            @add-cart="onAddCartClicked"
            />
        <!-- 商品地址编辑 -->
        <van-address-edit
            id="hidden"
            class="show"
            show-postal
            show-delete
            show-set-default
            show-search-result
            :search-result="searchResult"
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"
            />
        <!-- 展示html内容 -->
        <div style="height:100px"></div>
        <!-- 底部 -->
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服"/>
            <van-goods-action-icon icon="cart-o" text="购物车"/>
            <van-goods-action-button type="warning" text="加入购物车"/>
            <van-goods-action-button type="danger" text="立即购买"/>
        </van-goods-action>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    name:"Detail",
    data(){
        return{
            // 当前显示商品规格为隐藏
            show:false,
            searchResult:[],
            // 商品轮播图
            swipeImages:[
                "https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/109103/32/11093/99807/5e84a8bdE79711031/495466743a50ea00.jpg!q70.dpg.webp",
                "https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/93464/38/17360/101995/5e84a8bcE761a8d39/8ee90356ba765852.jpg!q70.dpg.webp",
                "https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/87220/33/17296/98760/5e84a8bcE37f74de7/b3068f4462056002.jpg!q70.dpg.webp",
                "https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/99376/10/17290/100479/5e84a8bcEa794721c/282077414d32455b.jpg!q70.dpg.webp"
            ],
            // 商品详情信息
            goodsInfo:{
                picture:'https://img.yzcdn.cn/1.jpg',
                id:10,
                quota:100,
                quotaUsed:2000,
                name:"古莱登新品秋装纯色衬衫男士韩版潮大码印花工装宽松衬衣青少年学生外套 C2023卡其色 XL",
                props:{
                    tree: [
                        {
                            k: '颜色', // skuKeyName：规格类目名称
                            v: [
                                {
                                    id: '1215', // skuValueId：规格值 id
                                    name: '白色', // skuValueName：规格值名称
                                
                                },
                                {
                                    id: '1216',
                                    name: '黑色',
                                }
                            ],
                            k_s: 'color' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                        },
                        {
                            k: '尺寸', // skuKeyName：规格类目名称
                            v: [
                                {
                                    id: '1217', // skuValueId：规格值 id
                                    name: 'M', // skuValueName：规格值名称
                                
                                },
                                {
                                    id: '1218',
                                    name: 'ML',
                                }
                            ],
                            k_s: 'size' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                        }
                    ],
                    // 矩阵对应的值
                    list: [
                        // 红色M的数据
                        {
                        id: 2259, // skuId，下单时后端需要
                        price: 15000, // 价格（单位分）
                        color: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
                        size: '1217',
                        stock_num: 110 // 当前 sku 组合对应的库存
                        },
                        // 红色ML的数据
                        {
                        id: 2259, // skuId，下单时后端需要
                        price: 18000, // 价格（单位分）
                        color: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
                        size: '1218',
                        stock_num: 110 // 当前 sku 组合对应的库存
                        },
                        // 蓝色M的数据
                        {
                        id: 2259, // skuId，下单时后端需要
                        price: 15000, // 价格（单位分）
                        color: '1216', // 规格类目 k_s 为 s1 的对应规格值 id
                        size: '1217',
                        stock_num: 110 // 当前 sku 组合对应的库存
                        },
                        // 蓝色ML的数据
                        {
                        id: 2259, // skuId，下单时后端需要
                        price: 18000, // 价格（单位分）
                        color: '1216', // 规格类目 k_s 为 s1 的对应规格值 id
                        size: '1218',
                        stock_num: 110 // 当前 sku 组合对应的库存
                        }
                    ],
                    price: '100~200', // 默认价格（单位元）
                    stock_num: 227, // 商品总库存
                    collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                },
                
                messages:{},
                // 在当前页面展示html
            }
        };
    },
    methods:{
        // 立刻购买的处理
        onBuyClicked(){

        },
        // 加入购物车的处理
        onAddCartClicked(){

        },
        // 商品地址
        onSave() {
            Toast('save');
        },
        onDelete() {
            Toast('delete');
        },
        onChangeDetail(val) {
            if (val) {
                this.searchResult = [{
                name: '黄龙万科中心',
                address: '杭州市西湖区'
                }];
            } else {
                this.searchResult = [];
            }
        },
        change(){
            var x=document.getElementById("hidden");
            if(x.value==null){
                x.style.display="block";
            }else if(x.value!=null){
                x.style.display="none";
            }
        }
    }

}
</script>
<style lang="less" scoped>
// 轮播图效果
    .goods-images{
    width:100%;
    }
    .my-swipe img{
    width: 100%;
    height: 80%;
    background-size:over;
    }
// 商品详情效果
    .cell{
        display: flex;
        color: #333;
        font-size: 14px;
        padding:10px 10px 0 0;
        :last-child{
            padding-bottom: 10px;
        }
        .cell-title{
            font-weight: bold;
            width: 70px;
            text-align: right;
        }
        .cell-value{
            flex: 1;
            margin-left: 10px;
        }
    }
// 页面背景
    .goods-info{
        padding: 10px;
        background-color: #fff;
    }
    .goods-name{
        padding:10px;
        background-color: #fff;
        margin-bottom: 5px;
    }
    .van-swipe .van-swipe-item img{
        display: block;
    }
.show{
    display: none;
}
</style>