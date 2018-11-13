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
                {
                    id:1,
                    company:'1. 浙江车国网络科技有限公司',
                    details:[
                        "1. KPI绩效考核从零搭建前后端分离项目",
                        "2. 采用vue作为框架，elementUI作为组件库",
                        "3. 使用路由（router），状态管理（vuex），axios",
                        "4. 负责项目前期环境搭建和配置，公共组件提取，页面功能开发，迭代"
                    ]
                },
                {
                    id:2,
                    company:'2. 北京大杰致远科技有限公司（外派至阿里影业）',
                    details:[
                        "1. 电影云项目迭代",
                        "2. 项目采用AngularJS的前后端不分离项目",
                        "3. freeMarker作为模板，bootstrap结构，后台配置路由",
                        "4. 具体规范请参照 https://shimo.im/doc/z4tAnJKPGAUwrbbp",
                        "5. 负责迭代",
                    ]
                },
                {
                    id:3,
                    company:'3. 北京宇信科技集团股份有限公司',
                    details:[
                        "1. 中国农业银行官方网站（响应式）",
                        "2. 页面采用jQuery1的展示类网站，模板由后台配置",
                        "3. 应行方要求必须兼容到ie6，响应式兼容到ie8",
                        "4. 负责静态响应式页面（电子银行版块）的开发工作",
                        "5. 负责IE6-8的兼容性及兼容移动端"
                    ]
                },
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