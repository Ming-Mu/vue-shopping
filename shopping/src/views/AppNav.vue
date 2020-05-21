<template>
    <!-- 通用底部的框架页面 -->
    <div>
        <!-- 显示渲染子路由的视图组件 -->
        <router-view/>
        <van-tabbar>
            <van-tabbar-item to="/home" name="home" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item to="/list" name="new_goods" icon="bag-o">新品推荐</van-tabbar-item>
            <van-tabbar-item to="/cart" name="cart" icon="shopping-cart-o" badge="10">购物车</van-tabbar-item>
            <van-tabbar-item to="/my" name="my" icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>