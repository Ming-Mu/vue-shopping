 <template>
    <div class="goods-list" :class="{'row-2':mode=='two'}">
        <router-link to="/detail" v-for="g in data" class="goods-item" :key="g.id">
            <div class="goods-img"> 
                <img :src="g.picture">
            </div>
            <div class="goods-info">
                 <div class="g-title">{{g.title}}</div>
                 <div class="g-price">￥<span>{{g.price}}</span>.00</div>
                 <div class="g-sold"><span>9226</span>人付款</div>
            </div>
        </router-link>
     </div>
 </template>
<script>
export default {
    //自定义组件属性 --使用是和data的值一样
    props:['mode','data'],
}
</script>
<style lang="less">
 .goods-img img{
    width: 100%;
    height: 200px;
    background-size: over;
}
 .goods-item{
    display: flex;
    border-bottom: solid 1px #ccc;
    padding: 10px;
}
.goods-img{
    width: 100px;
}
.goods-info{
    flex: 1;
    padding-left: 10px;
    font-size: 13px;
    color: #999;
    line-height: 20px;

}
.g-title{
    color: #222;
    font-size: 14px;
    height: 40px;
    overflow: hidden;
}
.g-price{
    color: #ee0c00;
    margin-top: 10px;
}
.g-price span{
    font-size: 20px;
}
/* 一行2个的样式 */
.row-2{
    display: flex;
    /* 强制换行 */
    flex-wrap: wrap;
    background: #efefef;
}
.row-2 .goods-item{
    flex: 1;
    display: block;
    min-width: 40%;
    max-width: calc(50%-30px);
    border: none;
    background: #fff;
    margin: 5px;
}
.row-2 .goods-img{
    width: 100%;
}
</style>