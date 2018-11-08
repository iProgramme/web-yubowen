<template>
  <div class="about">
    <h1>网站建设中。。。</h1>
    <br>
    <h3>{{time}} 后自动返回首页</h3>
    <br>
    <router-link to="/">返回首页</router-link>
  </div>
</template>
<script>
import { setInterval } from 'timers';
export default {
    data(){
        return {
            time:5,
        }
    },
    activated(){
        this.time = 5
    },
    mounted() {
        setInterval(()=>{
            this.time--
            this.time<=0?this.$router.push({path:'/'}):''
        },1000)
    },
};
</script>