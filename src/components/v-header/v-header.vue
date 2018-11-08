
<template>
    <Header :style="{position: 'fixed', width: '100%'}">
        <ul class="Header-ul fr">
            <li v-for="item in headers" :key="item.id">
                <a type="text" ghost @click="toPage(item)">
                    <Icon :type="item.icon"></Icon>
                    {{item.name}}
                </a>
            </li>
        </ul>
        <!-- 左边的抽屉 -->
        <Drawer title="Basic Drawer" placement="left" :closable="false" v-model="value0">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
        <!-- 右边的信息展示抽屉 -->
        <Drawer class="drawer-right" :closable="false" width="640" v-model="value1">
            <p class="pStyle">User information</p>
            <p class="pStyle">basic information</p>
            <div class="demo-drawer-profile">
                <Row>
                    <Col span="12">
                        Full Name: 喻博文
                    </Col>
                    <Col span="12">
                        Email: yubowen2003@yubowen2003.com
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        City: 杭州
                    </Col>
                    <Col span="12">
                        Country: 中国
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        Birthday: 1993-02-08
                    </Col>
                    <Col span="12">
                        Website: <a href="https://www.yubowen2003.com" target="_blank">https://www.yubowen2003.com</a>
                    </Col>
                </Row>
                Message: Hello, Developer
            </div>
            <Divider />
            <p class="pStyle">me</p>
            <div class="demo-drawer-profile">
                <Row>
                    <Col span="12">
                        Position: 前端开发工程师
                    </Col>
                    <Col span="12">
                        Responsibilities:Coding
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        Department: 
                    </Col>
                </Row>
                Skills:JavaScript，HTML5，CSS3，Vue，less，Angular，ES6，git，node.js，Python
            </div>
            <Divider />
            <p class="pStyle">Contacts</p>
            <div class="demo-drawer-profile">
                <Row>
                    <Col span="12">
                        Email: yubowen2003@yubowen2003.com
                    </Col>
                    <Col span="12">
                        Phone Number: +86 18888888888
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        GitHub: <a href="https://github.com/iProgramme" target="_blank">https://github.com/iProgramme</a>
                    </Col>
                </Row>
            </div>
        </Drawer>
    </Header>
</template>

<script>
import vHeader from "./v-header";
export default {
  ...vHeader
};
</script>
<style lang="less" scoped>
@import url('./v-header.less');
</style>