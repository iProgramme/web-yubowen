export default {
    data () {
        return {
            headers:[
                {id:0,icon:"ios-navigate",name:"动态"},
                {id:1,icon:"md-images",name:"我的简介"},
                {id:2,icon:"ios-images",name:"视频图库",routerPath:""},
                {id:3,icon:"ios-list-box-outline",name:"我的博客",routerPath:""},
                {id:4,icon:"ios-paper",name:"我的简历pdf",routerPath:""},
                {id:5,icon:"ios-navigate",name:"常用导航",routerPath:""},
                {id:6,icon:"ios-navigate",name:"非技术关注",routerPath:""},
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
                default:
                    this.$router.push({path:'/about'})
                    break;
            }
            
        }
    },
}