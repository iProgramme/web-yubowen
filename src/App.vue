<template>
    <div id="app">
<!--         
        <div id="nav">
            <router-link to="/">首页</router-link> |
            <router-link to="/home">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/index">index</router-link> |
            <router-link to="/weibo/trace">trace</router-link> |
        </div> -->
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>


<script>
import app from "./app";
export default {
  ...app
};
</script>
<style lang="less" scoped>
@import url('./app.less');
</style>
