// new ad(document.querySelectorAll('.mouseMo li'))
import $ from "jquery"
import "../../../assets/fullPage/js/jquery.fullPage.d"
export default {
    data () {
        return {
            value1: 0,
            value2: false,
            value4: false,
            pStyle: {
                fontSize: '16px',
                color: 'rgba(0,0,0,0.75)',
                lineHeight: '24px',
                display: 'block',
                marginBottom: '16px'
            },
            outsideArr:['ES6','git','Vue','Angular','less','h5c3'],
            experience:[
                {id:1,company:'浙江车国网络科技有限公司',details:["项目搭建与复用组件的开发0","项目技术选型，项目搭建与复用组件的开发1","项目技术选型，项目搭建与复用组件的开发2","项目技术选型，项目搭建与复用组件的开发3"]},
                {id:2,company:'广州棒谷科技有限公司',details:["项目搭建与复用组件的开发0","项目技术选型，项目搭建与复用组件的开发1","项目技术选型，项目搭建与复用组件的开发2","项目技术选型，项目搭建与复用组件的开发3"]},
                {id:3,company:'北京宇信科技集团股份有限公司',details:["配合需求，参与研讨项目技术方案及系统优化","利用AngularJS做前后端交互","参与静态响应式页面的开发工作","调IE6-8的兼容性"]},
            ]
        }
    },
    methods:{
        carouselChange(a,b){
            console.log(a);
            console.log(b);
        },
    },
    mounted() {
        var ad = require('../../../assets/mouseMove/js/index.d.js')
        $('#dowebok').fullpage({
            sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90','#4BBFC3'],
            // continuousVertical: true,
            // 'navigation': true,
            // fixedElements: '#header, .footer',
        });
        new ad.default(document.querySelectorAll('.mouseMo li'))
    },
    computed:{
        
    }
}