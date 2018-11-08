
<template>
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
                                    <li v-for="item in outsideArr" :key="item"></li>
                                </ul>
                                <ul class="circle inside-circle">
                                    <li v-for="item in outsideArr" :key="item"></li>
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
                    <Carousel v-model="value1" arrow="always" loop autoplay :autoplay-speed="5000" on-change="carouselChange">
                        <CarouselItem v-for="item in experience" :key="item.id">
                            <div class="demo-carousel">
                                <h3>{{item.company}}</h3>
                                <p v-for="list in item.details" :key="list">{{list}}</p>
                            </div>
                        </CarouselItem>
                    </Carousel>
                </div>
            </div>
            <div class="section section5">
                <div class="section-content">
                    <ul class="mouseMo">
                        <li>
                            <div class='w'>
                                <div class='f'>
                                    <svg viewBox='0 0 180 180'>
                                    <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='../../../assets/mouseMove/img/i-angus.png'></image>
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
                                    <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='../../../assets/mouseMove/img/i-aurora.png'></image>
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
                                    <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='../../../assets/mouseMove/img/i-bride.png'></image>
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
                                    <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='../../../assets/mouseMove/img/i-d.png'></image>
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
                                    <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='../../../assets/mouseMove/img/i-dali.png'></image>
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
                                    <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='../../../assets/mouseMove/img/i-huitzi.png'></image>
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
                                    <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='../../../assets/mouseMove/img/i-man.png'></image>
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
                                    <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='../../../assets/mouseMove/img/i-v.png'></image>
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
                                    <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='../../../assets/mouseMove/img/i-v2.png'></image>
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
                                    <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='../../../assets/mouseMove/img/i-v3.png'></image>
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
                                    <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='../../../assets/mouseMove/img/i-worms.png'></image>
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
                                    <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='../../../assets/mouseMove/img/i-xrays.png'></image>
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
        
    </Content>
</template>

<script>
import vContent from "./v-content";
export default {
  ...vContent
};
</script>
<style lang="less" scoped>
@import url('./v-content.less');
</style>