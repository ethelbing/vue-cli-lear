<template>
<div id="app">
    <!-- 生命周期函数 -->
    <LiftCycle @titleCange="upateTitle"  :title="title"/>
    <!-- <Header @titleCange="upateTitle"  :title="title" /> -->
    <img alt="Vue logo" src="./assets/logo.png">
    <h5>app-vue</h5>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 1、传值 -->
    <!-- <passVal :sbqUser="passValDate"></passVal> -->
    <hr>
    <!-- 2、传引用 -->
    <!-- <passVal :sbqUser="passValDate"></passVal> -->
    <!-- <User ></User> -->
    
    <Footer :title="title"/>
</div>
</template>

<script>
//25 局部组件
// import User from './components/User.vue'
//26 嵌套多个组件
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
//27 组件属性传值
// import passVal from './components/PassVal.vue'
//原始创建页
// import HelloWorld from './components/HelloWorld.vue'
//30 生命周期函数
import LiftCycle from './components/LiftCycle.vue'

export default {
    name: 'app',
    //组件传值添加--
    data() {
        return {
            passValDate: [{
                    test: '111',
                    id: 1,
                    show: true
                },
                {
                    test: '222',
                    id: 2,
                    show: true
                },
                {
                    test: '333',
                    id: 3,
                    show: true
                },
                {
                    test: '444',
                    id: 4,
                    show: true
                },

                {
                    test: '444',
                    id: 4,
                    show: true
                },
                {
                    test: '444',
                    id: 4,
                    show: true
                },
                {
                    test: '444',
                    id: 4,
                    show: true
                },
                {
                    test: '444',
                    id: 4,
                    show: true
                },
            ],
            title:"vue pass value"
        }
    },
    //----
    components: {
        // HelloWorld
        //26 嵌套多个组件
        Header,
        // User,
        Footer,
        // 组件属性传值
        // passVal,
        LiftCycle
    },
    methods:{
        upateTitle(inputTitle){  //定义的是header中调用的方法 
        //由于@titleCange 事件有传入的参数值，所以此处需要定义给形参接收参数
        // console.log(inputTitle);     
        this.title=inputTitle;       
        }
    }
}
</script>

<style>
#app {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h5 {
    color: green
}
</style>
