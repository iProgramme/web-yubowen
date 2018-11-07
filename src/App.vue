<template>
    <div id="app">
        <div class="layout">
            <Layout>
                <Header :style="{position: 'fixed', width: '100%'}">
                    <Menu mode="horizontal" active-name="1">
                        <div class="layout-logo"></div>
                        <div class="layout-nav">
                            <MenuItem name="1">
                                <div @click="value2 = true">
                                    <Icon type="ios-navigate"></Icon>
                                    动态
                                </div>
                            </MenuItem>
                            <MenuItem name="2">
                                <div @click="value4 = true">
                                    <Icon type="ios-keypad"></Icon>
                                    我的简介
                                </div>
                            </MenuItem>
                            <MenuItem name="3">
                                <div>
                                    <Icon type="md-images" />
                                    视频图库
                                </div>
                            </MenuItem>
                            <MenuItem name="4">
                                <div>
                                    <Icon type="ios-list-box-outline" />
                                    我的博客
                                </div>
                            </MenuItem>
                            <MenuItem name="5">
                                <div>
                                    <Icon type="ios-paper"></Icon>
                                    我的简历pdf
                                </div>
                            </MenuItem>
                            <MenuItem name="6">
                                <div>
                                    <Icon type="ios-paper"></Icon>
                                    常用导航
                                </div>
                            </MenuItem>
                            <MenuItem name="7">
                                <div>
                                    <Icon type="ios-paper"></Icon>
                                    非技术关注
                                </div>
                            </MenuItem>
                        </div>
                    </Menu>
                </Header>
                <Content>
                    <div class="ad" id="dowebok">
                        <div class="section section1">
                            <div class="section-content">
                                <h3>只有努力过的人，才知道天赋多么重要</h3>
                                <p>我叫喻博文</p>
                                <p>一名前端开发工程师</p>
                                <p>yubowen2003@yubowen2003.com</p>
                            </div>
                        </div>
                        <div class="section section2">
                            <div class="section-content">
                                <h3>关于我</h3>
                                <Row :gutter="16">
                                    <Col span="4">
                                        <div>&nbsp;</div>
                                    </Col>
                                    <Col span="4">
                                        <Icon type="ios-battery-full" />
                                        <div>年龄 - 25</div>
                                    </Col>
                                    <Col span="4">
                                        <Icon type="ios-pin" />
                                        <div>坐标 - 杭州</div>
                                    </Col>
                                    <Col span="4">
                                        <Icon type="md-time" />
                                        <div>状态 - 在职</div>
                                    </Col>
                                    <Col span="4">
                                        <Icon type="logo-buffer" />
                                        <div>学历 - 本科</div>
                                    </Col>
                                </Row>
                                <p>三年全职开发经验</p>
                                <p>熟悉模块化，前端构建和编译</p>
                                <p>高效的自学能力,具备独立分析解决问题能力</p>
                                <p>对新东西充满好奇，强大的自我驱动力</p>
                                <p>超强的毅力</p>
                            </div>
                        </div>
                        <div class="section section3">
                            <div class="section-content">
                                <Row :gutter="16">
                                    <Col span="8">
                                        <div class="skills">
                                            <div>&nbsp;</div>
                                            <ul class="circle outside-circle">
                                                <li v-for="item in outsideArr" :key="item">{{item}}</li>
                                            </ul>
                                            <ul class="circle inside-circle">
                                                <li v-for="item in insideArr" :key="item">{{item}}</li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col span="16">
                                        <div class="right">
                                            <h3>技能栈</h3>
                                            <p>基本功：扎实的HTML5，CSS3，js，es6，ajax基础</p>
                                            <p>常用：完整的ng4，vue开发经验，熟练的git，less</p>
                                            <p>提高：熟悉的node.js，Python爬虫小demo</p>
                                        </div>
                                    </Col>
                                </Row>
                                
                            </div>
                        </div>
                        <div class="section section4">
                            <div class="section-content">
                                <Carousel v-model="value1" loop autoplay :autoplay-speed="5000" on-change="carouselChange">
                                    <CarouselItem>
                                        <div class="demo-carousel">
                                            <h3>浙江车国网络</h3>
                                            <p>项目搭建与复用组件的开发</p>
                                            <p>项目技术选型，项目搭建与复用组件的开发</p>
                                            <p>项目技术选型，项目搭建与复用组件的开发</p>
                                            <p>项目技术选型，项目搭建与复用组件的开发</p>
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <div class="demo-carousel">
                                            <h3>广州棒谷科技有限公司</h3>
                                            <p>项目技术选型，项目搭建与复用组件的开发</p>
                                            <p>参与项目技术选型，项目搭建与复用组件的开发</p>
                                            <p>参与项目技术选型，项目搭建与复用组件的开发</p>
                                            <p>参与项目技术选型，项目搭建与复用组件的开发</p>
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <div class="demo-carousel">
                                            <h3>北京宇信科技集团股份有限公司</h3>
                                            <p>配合需求，参与研讨项目技术方案及系统优化</p>
                                            <p>利用AngularJS做前后端交互</p>
                                            <p>参与静态响应式页面的开发工作</p>
                                            <p>调IE6-8的兼容性</p>
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <div class="demo-carousel">4</div>
                                    </CarouselItem>
                                </Carousel>
                            </div>
                        </div>
                        <div class="section section4">
                            <div class="section-content">
                                <ul class="mouseMo">
                                    <li>
                                        <div class='w'>
                                            <div class='f'>
                                                <svg viewBox='0 0 180 180'>
                                                <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='./assets/mouseMove/img/i-angus.png'></image>
                                                </svg>
                                            </div>
                                            <div class='b'>
                                                <h3>
                                                Visualization III
                                                </h3>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class='w'>
                                            <div class='f'>
                                                <svg viewBox='0 0 180 180'>
                                                <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='./assets/mouseMove/img/i-aurora.png'></image>
                                                </svg>
                                            </div>
                                            <div class='b'>
                                                <h3>
                                                Visualization III
                                                </h3>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class='w'>
                                            <div class='f'>
                                                <svg viewBox='0 0 180 180'>
                                                <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='./assets/mouseMove/img/i-bride.png'></image>
                                                </svg>
                                            </div>
                                            <div class='b'>
                                                <h3>
                                                Visualization III
                                                </h3>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class='w'>
                                            <div class='f'>
                                                <svg viewBox='0 0 180 180'>
                                                <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='./assets/mouseMove/img/i-d.png'></image>
                                                </svg>
                                            </div>
                                            <div class='b'>
                                                <h3>
                                                Visualization III
                                                </h3>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class='w'>
                                            <div class='f'>
                                                <svg viewBox='0 0 180 180'>
                                                <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='./assets/mouseMove/img/i-dali.png'></image>
                                                </svg>
                                            </div>
                                            <div class='b'>
                                                <h3>
                                                Visualization III
                                                </h3>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class='w'>
                                            <div class='f'>
                                                <svg viewBox='0 0 180 180'>
                                                <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='./assets/mouseMove/img/i-huitzi.png'></image>
                                                </svg>
                                            </div>
                                            <div class='b'>
                                                <h3>
                                                Visualization III
                                                </h3>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class='w'>
                                            <div class='f'>
                                                <svg viewBox='0 0 180 180'>
                                                <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='./assets/mouseMove/img/i-man.png'></image>
                                                </svg>
                                            </div>
                                            <div class='b'>
                                                <h3>
                                                Visualization III
                                                </h3>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class='w'>
                                            <div class='f'>
                                                <svg viewBox='0 0 180 180'>
                                                <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='./assets/mouseMove/img/i-v.png'></image>
                                                </svg>
                                            </div>
                                            <div class='b'>
                                                <h3>
                                                Visualization III
                                                </h3>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class='w'>
                                            <div class='f'>
                                                <svg viewBox='0 0 180 180'>
                                                <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='./assets/mouseMove/img/i-v2.png'></image>
                                                </svg>
                                            </div>
                                            <div class='b'>
                                                <h3>
                                                Visualization III
                                                </h3>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class='w'>
                                            <div class='f'>
                                                <svg viewBox='0 0 180 180'>
                                                <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='./assets/mouseMove/img/i-v3.png'></image>
                                                </svg>
                                            </div>
                                            <div class='b'>
                                                <h3>
                                                Visualization III
                                                </h3>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class='w'>
                                            <div class='f'>
                                                <svg viewBox='0 0 180 180'>
                                                <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='./assets/mouseMove/img/i-worms.png'></image>
                                                </svg>
                                            </div>
                                            <div class='b'>
                                                <h3>
                                                Visualization III
                                                </h3>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class='w'>
                                            <div class='f'>
                                                <svg viewBox='0 0 180 180'>
                                                <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='./assets/mouseMove/img/i-xrays.png'></image>
                                                </svg>
                                            </div>
                                            <div class='b'>
                                                <h3>
                                                Visualization III
                                                </h3>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    <!-- 左边的抽屉 -->
                    <div>
                        <Drawer title="Basic Drawer" placement="left" :closable="false" v-model="value2">
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Drawer>
                    </div>
                    <!-- 右边的信息展示抽屉 -->
                    <div>
                        <Drawer :closable="false" width="640" v-model="value4">
                            <p :style="pStyle">User information</p>
                            <p :style="pStyle">basic information</p>
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
                            <p :style="pStyle">Company</p>
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
                                        Department: Map visualization
                                    </Col>
                                </Row>
                                Skills:JavaScript，HTML5，CSS3，Vue，Angular，ES6，git，node.js，Python
                            </div>
                            <Divider />
                            <p :style="pStyle">Contacts</p>
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
                    </div>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </div>
        <BackTop :height="80" :width="40" :bottom="50" :right="50">
            <div class="top"></div>
        </BackTop>
        <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/index">index</router-link>
        </div>
        <router-view/> -->
        <!-- 抽屉 -->
        
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
