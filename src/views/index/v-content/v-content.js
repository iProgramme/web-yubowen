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
            insideArr:['ES6','git','Vue','Angular','less','h5c3'],
        }
    },
    methods:{
        carouselChange(a,b){
            console.log(a);
            console.log(b);
            
        }
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
}