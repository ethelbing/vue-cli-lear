<template>
<div id="app">
    <!-- 生命周期函数 -->
    <!-- <LiftCycle @titleCange="upateTitle"  :title="title"/> -->
    <!-- <Header @titleCange="upateTitle"  :title="title" /> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <h5>app-vue</h5> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 1、传值 -->
    <!-- <passVal :sbqUser="passValDate"></passVal> -->
    <!-- <hr> -->
    <!-- 2、传引用 -->
    <!-- <passVal :sbqUser="passValDate"></passVal> -->
    <!-- <User ></User> -->
    <!-- <Footer :title="title"/> -->
    <!-- slot -->
    <!-- <FormHelper> -->
        <!-- 如果只是这样写，并不能传递给formhelper页面 -->
        <!-- <div slot="title">
            <h6 slot="title">{{ title }}</h6>
        </div>

        <p slot="text">想传递的文本标签前内容</p>
    </FormHelper> -->
    <!-- <form-one /> -->
    <!-- <form-two /> -->
    <keep-alive>
        <component :is="component"></component>
    </keep-alive>
    <!-- <component :is="component"></component>--> 
     <!-- data 给定component 值默认显示form-two -->
    <button @click="component='form-one'">form-one显示</button>
    <button @click="component='form-two'">from-two显示</button>
    
</div>
</template>

<script>
//25 局部组件
// import User from './components/User.vue'
//26 嵌套多个组件
// import Header from './components/Header.vue'
// import Footer from './components/Footer.vue'
//27 组件属性传值
// import passVal from './components/PassVal.vue'
//原始创建页
// import HelloWorld from './components/HelloWorld.vue'
//30 生命周期函数
// import LiftCycle from './components/LiftCycle.vue'
//31 slot 插槽
// import FormHelper from './components/FormHelper.vue'
//32 components学习
import FormOne from './components/FormOne.vue'
import FromTwo from './components/FormTwo.vue'

export default {
    name: 'app',
    //组件传值添加--
    data() {
        return {
            // passValDate: [{
            //         test: '111',
            //         id: 1,
            //         show: true
            //     },
            //     {
            //         test: '222',
            //         id: 2,
            //         show: true
            //     },
            //     {
            //         test: '333',
            //         id: 3,
            //         show: true
            //     },
            //     {
            //         test: '444',
            //         id: 4,
            //         show: true
            //     },

            //     {
            //         test: '444',
            //         id: 4,
            //         show: true
            //     },
            //     {
            //         test: '444',
            //         id: 4,
            //         show: true
            //     },
            //     {
            //         test: '444',
            //         id: 4,
            //         show: true
            //     },
            //     {
            //         test: '444',
            //         id: 4,
            //         show: true
            //     },
            // ],
            // title:"vue pass value"
            // title: 'slot 调用标签',
            component:'form-two'  
        }
    },
    //----
    components: {
        // HelloWorld
        //26 嵌套多个组件
        // Header,
        // User,
        // Footer,
        // 组件属性传值
        // passVal,
        // LiftCycle
        // FormHelper
        //components 学习
        "form-one":FormOne,
        "form-two":FromTwo        
    },
    methods: {
        // upateTitle(inputTitle){  //定义的是header中调用的方法 
        //由于@titleCange 事件有传入的参数值，所以此处需要定义给形参接收参数
        // console.log(inputTitle);     
        // this.title=inputTitle;       
        // }
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
button{
    margin-right: 10px;
}
</style>
