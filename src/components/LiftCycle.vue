<template>
    <div @click="changeTitle(show)" ref="title" class="header">
      <h4>{{ headerVal }} {{ title }} </h4>
    </div>
</template>


<script>
export default {
    props:{
        title:{
            type:String
        }
    },
    data(){
        return {
            show:true,
            headerVal:"Vue Components Demo",
            oldtitle:String
        }
    },
    watch:{
        title(newVal, oldVal) {
             this.oldtitle=oldVal;
        }
    },
    methods:{
        changeTitle(signshow){
            this.$emit("titleCange","hello change the title success")
        }
    },
    //生命周期函数
    beforeCreate(){
        alert("这是实例还没有被创建，所以你无法知道data，也不能用watch监听");
    },
    created(){
        alert("这是实例已经创建，可以得到data，调用watch，但是页面还是空白的");
    },
   beforeMount(){
       alert("页面挂载前，此时页面依然是空白的。这时render函数首次被调用");
   },
   mounted(){
       alert("页面挂载了，这时你可以看到页面的内容，也可以访问到DOM");
   },
   beforeUpdate(){
       alert("数据更新前，也就是虚拟dom打补丁之前");
   },
   updated(){
       alert("数据已经更新完毕")
   },
   beforeDestroy(){
       alert("页面离开之前被调用，清除定时器或者第三方的一些dom结构");
   },
   destroyed(){
       alert("实例被完全销毁");
   }
}
</script>


<style scoped>
.header{
    background: lightgreen;
    padding: 10px;
}
h4{
    color:#222;
    text-align:center;
}
</style>