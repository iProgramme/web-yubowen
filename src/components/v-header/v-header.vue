
<template>
    <!-- 以我现在的水平，去小公司，能学到的东西已经不多了，去大公司还能学到很多，产品，业务，技术等等 -->
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
        <Drawer class="drawer-left" title="我的动态" placement="left" :closable="false" v-model="value0">
            <p>我不是工作的奴隶。令狐冲说：如果我们改变不了环境，就改变我们自己。他的意思是，如果你改变不了环境，就提升自己，去到一个更好的环境。 <br> <span class="fr">2018-11-15 17:59:43</span></p>
            <p>我现在，等着查游泳救生员有没有考过呢... <br> <span class="fr">2018-11-09 11:00:01</span></p>
            
        </Drawer>
        <!-- 右边的信息展示抽屉 -->
        <Drawer class="drawer-right" :closable="false" width="640" v-model="value1">
            <p class="pStyle">基本信息</p>
            <div class="demo-drawer-profile">
                <Row>
                    <Col span="12">
                        全名: 喻博文
                    </Col>
                    <Col span="12">
                        Email: yubowen2003@yubowen2003.com
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        城市: 杭州
                    </Col>
                    <Col span="12">
                        GitHub: <a href="https://github.com/iProgramme" target="_blank">https://github.com/iProgramme</a>
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        生日: 1993-02-08
                    </Col>
                    <Col span="12">
                        站点: <a href="https://www.yubowen2003.com" target="_blank">https://www.yubowen2003.com</a>
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        我的格言: 你连坚持都没有，还谈什么未来
                    </Col>
                </Row>
            </div>
            <Divider />
            <p class="pStyle">职业技能</p>
            <div class="demo-drawer-profile">
                <Row>
                    <Col span="12">
                        职位: 前端开发工程师
                    </Col>
                    <Col span="12">
                        责任:Coding
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                        技能:JavaScript，HTML5，CSS3，Vue，less，Angular，ES6，git，node.js，Python
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                        <ul>
                            <li>1. 熟练使用webstorm，vscode，GitHub desktop，source tree，Chrome，terminal，Mac</li>
                            <li>2. 有HTML5、CSS3、Canvas开发经验。</li>
                            <li>3. 熟悉es6语法，熟悉promise，generator/yelid，async/await</li>
                            <li>4. 完整Vue开发经验；完整Angular开发经验（后来不常用了）</li>
                            <li>5. 了解node.js，写过简易爬虫</li>
                            <li>6. 了解Python，用scrapy写过简易爬虫</li>
                        </ul>
                    </Col>
                </Row>
            </div>
            <Divider />
            <p class="pStyle">联系我</p>
            <div class="demo-drawer-profile">
                <Row>
                    <Col span="12">
                        Email: 747137830@qq.com
                    </Col>
                    <Col span="12">
                        电话: +86 18888888888
                    </Col>
                </Row>
            </div>
            <Divider />
            <p class="pStyle">我的简介</p>
            <div class="demo-drawer-profile">
                <Row>
                    <Col span="24">
                        1. 永远喜欢新的事物，不喜欢过时的，学习能力强
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                        2. 有毅力特别能坚持，但只坚持自己认为正确的事情
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                        3. 为人直爽，说话做事单刀直入不拐弯抹角，也因此常常得罪人
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                        4. 言必行，行必果
                    </Col>
                </Row>
            </div>
            <Divider />
            <p class="pStyle">兴趣爱好</p>
            <div class="demo-drawer-profile">
                <Row>
                    <Col span="24">
                        三国（最喜欢的人物：郭嘉），游泳，玩游戏，看电影
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