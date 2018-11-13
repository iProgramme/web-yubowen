export default {
    data () {
        return {
            headers:[
                {id:0,icon:"ios-navigate",name:"动态"},
                {id:1,icon:"md-images",name:"我的简介"},
                {id:2,icon:"ios-paper",name:"简历pdf",routerPath:"/yubowen-webEngineer.pdf"},
                {id:3,icon:"ios-list-box-outline",name:"代码合集",routerPath:""},
                {id:4,icon:"ios-list-box-outline",name:"博客",routerPath:""},
                {id:5,icon:"ios-images",name:"视频图库",routerPath:""},
                {id:6,icon:"ios-navigate",name:"常用导航",routerPath:""},
                {id:7,icon:"ios-navigate",name:"非技术关注",routerPath:""},
            ],
            value0: false,
            value1: false,
        }
    },
    methods:{
        toPage(item){
            switch (item.id) {
                case 0:
                    this.value0 = true
                    break;
                case 1:
                    this.value1 = true
                    break;
                case 2:
                    window.open('/yubowen-webEngineer.pdf')
                    break;
                default:
                    this.$router.push({path:'/about'})
                    break;
            }
            if ([]) {
                console.log(1);
            }
            if (![]) {
                console.log(2);
            }
            [] == ![]
        }
    },
}