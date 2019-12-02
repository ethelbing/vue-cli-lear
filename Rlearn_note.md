## npm 学习网站：https://www.npmjs.com/
## nodejs 下载安装：https://nodejs.org/en/
## 测试 node -v 测试版本 是否安装成功
## vue 下载安装：npm install vue
## vue-cli 下载安装：npm install @vue/cli /npm ## ## install -g @vue/cli  安装脚手架/全局安装脚手架

## 项目安装选择项配置
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In package.json
? Save this as a preset for future projects? (y/N) 是否保存现有模板？ N

## 安装成功：
## $ cd vue-cli-learn
## $ npm run serve

## 如何关闭服务：ctrl+C 关闭服务
## 终止批处理操作吗(Y/N)? y

## ----git 创建更新同步
## ----create git repository
## create a new repository on the command line
## echo "# vue-cli-lear" >> README.md
## git init
## git add README.md/ git add -A
## git commit -m "first commit"
## git remote add origin https://github.com/ethelbing/vue-cli-lear.git
## git push -u origin master
## ----update
## or push an existing repository from the command line
## git remote add origin https://github.com/ethelbing/vue-cli-lear.git
## git push -u origin master
## import code from another repository
## ---- You can initialize this repository with code from a Subversion, Mercurial, or TFS project.
## vscode ->extension ->pull 下载更新  /push 上传更新 / commite 提交到本地仓

凡是修改了package.json都需要重启
babel.config.js 是对babel 进行配置
favicon.ico 是浏览器标签上的图标，可以换成自己公司的图标
assets 包含的是静态文件--图片等
components 包含的是组件

# 官方学习文档：
vue-cli documentation：https://cli.vuejs.org
babel：https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel
Core Docs：https://vuejs.org
Forum：https://forum.vuejs.org"
Community Chat：https://chat.vuejs.org
Twitter：https://twitter.com/vuejs
News：https://news.vuejs.org
vue-router：https://router.vuejs.org
vuex：https://vuex.vuejs.org
vue-devtools：https://github.com/vuejs/vue-devtools#vue-devtools
vue-loader：https://vue-loader.vuejs.org
awesome-vue：https://github.com/vuejs/awesome-vue


## lesson 25 main .js注册全局组件
1.引入全局组件
import Users from ''
2.注册全局组件
Vue.component('user',Users);
3.App.vue调用
<user></user>
4.注意：由于全局组件在任何地方都使用，除非有特殊用途否则不建议使用


## 局部组件
在App.vue中使用User
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 使用调用组件 -->
    <User></User>
  </div>
</template>

<script>
//局部调用组件
import User from './components/User.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
    //注册组件
    User
  }
}
</script>

其中components = Vue.components
User=User:User
如果 components: {
    // HelloWorld
    user:User
  }
那么使用< /User>

# 数组遍历 User.vue中
<li v-for="(user,index) in users" :key="index">{{ user }} </li>
所有的素组遍历都要有key  如果有有ID设置为ID，如果没有设置为index
不加key 编辑会报错，不会影响页面输出

# 样式讲解--scoped
app.vue 
  <h5>app-vue</h5>
<style>
h5{
  color:green
}
</style>

user.vue
 <h5>user-vue</h5>
<style>
h5{
    color: purple
}
</style>
运行结果：
页面显示app-vue 和user-vue 都是绿色的
想让样式只针对当前组件：
使用 <style scoped> 相当于一个域：只针对当前你的组件进行渲染
修改为：
<style scoped>
h5{
    color: purple
}
</style>
那么 app-vue 是绿色 ，user-vue 是紫色

# lesson 26 嵌套多个组件  header.vue/footer.vue
# main.js
import Vue from 'vue'
import App from './App.vue'
// 注册全局组件
// 1、引入组件
// import User from './components/User.vue'

// 2.注册全局组件
// Vue.component('user', User);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

//如果public->不是ID="app" 那么此处的也就不是#app($mount('#app'))
//如果public->不是class="app" 那么此处的也就不是.app

# app.vue
<template>
  <div id="app">
     <Header />
    <img alt="Vue logo" src="./assets/logo.png">
    <h5>app-vue</h5>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <User></User>
    <Footer />
  </div>
</template>

<script>
import User from './components/User.vue'
import Header from './components/Header.vue'
import HelloWorld from './components/HelloWorld.vue'
import Footer from  './components/Footer.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
    Header,
    User,
    Footer
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h5{
  color:green
}
</style>

# header.vue
<template>
    <div class="header">
      <h4>{{ title }} </h4>
    </div>
</template>


<script>
export default {
    data(){
        return {
            title:"Vue Components Demo"
        }
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

# footer.vue
<template>
    <div class="footer">
      <h5>{{copyright}}</h5>
    </div>
</template>


<script>
export default {
   data(){
       return{
           copyright:'Copyright 2020 Vue Demo'
       }
   }
}
</script>


<style scoped>
.footer{
    background: green;
    padding: 10px;
}
h5{
    color:rgb(168, 164, 164);
    text-align:center;
}
</style>

# lesson 27 组件属性传值 把父组件的值传给子组件
调用其他组件的组件叫父组件--app.vue
唯一header 和footer 一直的地方是app.vue
辨别方法，等号左边是定义的名字(sbqUser)随便起的名字，等号右边是你取付的值(passValData)---父类中的数据

例子：PassVal.vue+app.vue
passval.vue
<template>
<div class="user">
    <h5>user-vue</h5>
    <!-- 1、传值 -->
    <!-- <h5>{{ sbqUser }}</h5> -->
    <ul>
        <li @click="sbqUser.show =! sbqU.show" v-for="(context,ids) in sbqUser" :key="ids">
            {{context.id}}---{{context.test}}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    // props: ["sbqUser"],  props两种表达方式 第一种
    //props 表达方式第二种
    props: {
        sbqUser: {
            type: Array, //父类传过来是什么属性此处就定义什么属性，否则报错
            required: true //此出定义了request如果app.vue页面中 <passVal :sbqUser="passValDate"></passVal> "：sbqUser~"没定义页面会报错的
        }
    },
    data() {},
    methods: {
        test() {
            console.log(this.sbqUser);
        }
    }
}
</script>

<style scoped>
/* h5 {
    color: purple
} */
.users {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}

ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0
}

li {
    flex-grow: 1;
    flex-basis: 200px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>

<template>
<div id="app">
    <Header />
    <img alt="Vue logo" src="./assets/logo.png">
    <h5>app-vue</h5>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 1、传值 -->
    <passVal :sbqUser="passValDate"></passVal>
    <hr>
    <!-- 2、传引用 -->
    <passVal :sbqUser="passValDate"></passVal>
    <!-- <User ></User> -->
    <Footer />
</div>
</template>

<script>
//26 嵌套多个组件
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
//27 组件属性传值
import passVal from './components/PassVal.vue'
//原始创建页
import HelloWorld from './components/HelloWorld.vue'

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
            ]
        }
    },
    components: {
        //26 嵌套多个组件
        Header,
        // User,
        Footer,
        // 组件属性传值
        passVal
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




# lesson 28 传值和传引用
<!-- 属性传值：值有两种情况 1、传值   2、传引用（对象、数组） -->
传引用，如果删除当前组件的位置数据，那么也会影响其他使用这个地方的引用

<!-- 传引用 -->
app.vue
<template>
<div id="app">
    <!-- 1、传值 -->
    <passVal :sbqUser="passValDate" id = 'p1' ></passVal>  
    <hr>
    <!-- 2、传引用 -->
    <passVal :sbqUser="passValDate" id = 'p2' ></passVal>
    <!-- 调用说明passval.vue 页面一处调用删除, p1,p2两处显示同时修改 -->
</div>
</template>

<script>
//27 组件属性传值
import passVal from './components/PassVal.vue'

export default {
    name: 'app',
    data() {
        return {
            passValDate: [
              {test: '111',id: 1,show: true},
              {test: '222',id: 2,show: true},
              {test: '333',id: 3,show: true},
              { test: '444',id: 4,show: true},
              {test: '444',id: 4,show: true}
            ],
            title:"vue pass value"
        }
    },
    components: {
        passVal
    }
}
</script>

<style>
</style>


passval.vue
<template>
<div class="user">
    <h5>user-vue</h5>
    <!-- 1、传值 -->
    <ul>
        <li @click="sbqUser.show =! sbqU.show" v-for="(context,ids) in sbqUser" :key="ids">
            {{context.id}}---{{context.test}}
        </li>
    </ul>
    <!-- 传引用 -->
    <button @click="deletePassVal">删 值</button>

</div>
</template>

<script>
export default {
    props: {
        sbqUser: {
            type: Array
        }
    },
    data() {return {}},  //注意：如果此处添加了没有数据的data(){ } 也要返回return{} 否则页面F12也会报错；
    methods: {
        deletePassVal() {
            this.sbqUser.pop();
        }
    }
}
</script>
<style scoped>
</style>

<!-- 传值 -->
<!-- 本质上是不允许子类中修改父类中定义的值的 否则会报错 如：localhost-1575009958283.log -->
此处修改header-通过父类传递进来的title的值，同时会发现并不会修改父类中的值，
同为通过父类传递的title的footer页面并不会因此改变值的显示
但通过子类修改父类的值，是不建议采用的，虽然会实现，但也会报错，因为语法规不允许
此处只是为了讲解说明才使用此法，但此方法是不合理的

app.vue
<template>
<div id="app">
    <Header :title="title" />
    <Footer :title="title"/>
</div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
    name: 'app',
    data() {
        return {
            title:"vue pass value"
        }
    },
    components: {
        Header,
        Footer
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

header.vue
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
            if(signshow){
                this.title="hello change the title success";
                this.show=false;
            }else{
                this.title=oldtitle;
                this.show=true;
            }
        }
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

footer.vue
<template>
<div class="footer">
    <h5>{{copyright}} {{ title }}</h5>
</div>
</template>

<script>
export default {
    props:{
        title:{
            type:String
        }
    },
    data() {
        return {
            copyright: 'Copyright 2020 Vue Demo'
        }
    }
}
</script>

<style scoped>
.footer {
    background: green;
    padding: 10px;
}

h5 {
    color: rgb(168, 164, 164);
    text-align: center;
}
</style>

# lesson 29 注册事件
既然上节课说了强行修改父类中的值是不允许的，那么如何修改呢？
通过注册事件来修改title
header.vue
<template>
    <div @click="changeTitle(show)" class="header">
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
    methods:{
        changeTitle(signshow){
            //注册事件 $emit(参数1：事件，参数2：值)
            this.$emit("titleCange","hello change the title success")
            //<div @titleCange="upateTitle" class="header"> 此处的调用的事件名字一定要与注册事件中你定义的是一致的 @titleCange 就与@click是一样的
        }
    }
}
</script>
<style></style>

app.vue
<template>
<div id="app">
    <Header @titleCange="upateTitle"  :title="title" />
    <Footer :title="title"/>
</div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import passVal from './components/PassVal.vue'

export default {
    name: 'app',
    data() {
        return {
            title:"vue pass value"
        }
    },
    components: {
        Header,
        Footer,
        passVal
    },
    methods:{
        upateTitle(inputTitle){  //定义的是header中调用的方法 
        //由于@titleCange 事件有传入的参数值，所以此处需要定义给形参接收参数
        // console.log(inputTitle);     
        this.title=inputTitle;   //此方法修改title header 和 footer都会修改。但不会报错
        // 这是因为：此方法修改，是对当前组件的重新渲染，因此组件值会改变所以上下都会改变
        }
    }
}
</script>
<style></style>

# lesson 30 生命周期--钩子函数
官网查找
vuejs->起步->vue实例->生命周期图示
视图中红色标记的其实都是--钩子函数
beforeCreate:<!-- 初始化事件&生命周期 后 执行--->  <!-- 初始化注入&校验 前 执行 -->
created:  <!-- 初始化注入&校验 后 执行 --> data 的数据已经拿到了，也可以监听数据的变化，但是页面还看不到
<!-- 解释  mount -->
new Vue({
  render: h => h(App),
}).$mount('#app')
"是否有“el"就是查看
new Vue({
    el:'#app'
    render: h => h(App),
}) 中是否有el:'#..'
如果没有那么是否有.$mount('#app')也可以
如果两者都么没有，那么久挂掉了，不能执行
<!-- 解释完毕 -->
beforMount: 此时是页面准备要挂载了，但是页面也是空白的
mounted: 此函数调用的时候，页面已经挂载了；此函数执行后，页面就可以看到了
beforeUpdate: 但是页面加载，难免会有一些页面的数据加载更新，当页面data被修改了，此时就会执行此函数了(beforeUpdate),这个时候其实就是虚拟DOM重新渲染的时候，beforeUpdate其实就是我们的数据更新之前，然后你的虚拟DOM打补丁了，这时候将要访问到真实DOM的时候，会执行beforeUpdate函数。
updated: 进行到此函数，表示数据已经更新完成了，此时要把页面重新挂载到一个DOM里面去，这个就是此时数据已经加载完成了，再重新挂载到DOM里面去
beforeDestroy: 此函数是离开页面之前会被调用的，这里可以调用一些定时器（把这个定时器干掉）、第三方（离开时候把第三方冗余的东西干掉）,避免内存泄漏
distroyed: 这个就是实例完全被销毁了
例子查看：
app.vue
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

liftcycle.vue
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


# lesson 31 slot插槽的使用 FormHelper.vue
api -> 特殊特性 -> slot 

example 1:
全部标签传递过来，不能分开显示：
app.vue
<template>
<div id="app">
    <FormHelper>
        <!-- 如果只是这样写，并不能传递给formhelper页面 -->
        <h6>this is a title</h6>
        <p>想传递的文本标签前内容</p>
    </FormHelper>
</div>
</template>

<script>
import FormHelper from './components/FormHelper.vue'

export default {
    name: 'app',
    data() {
        return {}
    },
    components: {
        FormHelper
    },
    methods:{}
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

formhelper.vue
<template>
<div class="formHelper">
    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit
        Consequatur, soluta?
    </h5>
    <!-- 只有加入slot app.vue上面家的标签才能正常显示 -->
    <slot></slot> 
    <!-- 但此时是全部的标签都显示在这里<h6>&<p> -->
</div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style scoped>
</style>

example 2:想分分开标签显示
<title>
<h5>
<p>

app.vue
<template>
<div id="app">
    <FormHelper>
        <h6 slot="title">this is a title</h6>
        <p slot = "text">想传递的文本标签前内容</p>
    </FormHelper>
</div>
</template>

<script>
import FormHelper from './components/FormHelper.vue'

export default {
    name: 'app',
    //组件传值添加--
    data() {
        return {}
    },
    components: {
        FormHelper
    },
    methods:{}
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

formhelper.vue
<template>
<div class="formHelper">
    <slot name="title"></slot> 
    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit
        Consequatur, soluta?
    </h5>
    <!-- 只有加入slot app.vue上面家的标签才能正常显示 -->
    <slot name='text'></slot> 
</div>
</template>

<script>
export default {
    data() {
        return {
            copyright: 'Copyright 2020 Vue Demo'
        }
    }
}
</script>
<style scoped>
</style>

想给<slot name="title"></slot> 设置样式
设置给formhelper.vue 可以实现
<style scoped>
h6{
    background:cornflowerblue;
}
</style>
但通常元素标签在哪里就在那里写样式

title 属性值在哪里写？
样式可以在接收方写，但是不建议，但是属性只能在传递方写，接收方是不执行的
可行example 3：
<template>
<div id="app">
    <FormHelper>
        <div slot="title">
            <h6 slot="title">{{ title }}</h6>
        </div>
        <p slot="text">想传递的文本标签前内容</p>
    </FormHelper>
</div>
</template>

<script>
import FormHelper from './components/FormHelper.vue'

export default {
    name: 'app',
    data() {
        return {
            title: 'slot 调用标签'
        }
    },
    components: {

        FormHelper
    },
    methods: {}
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

# lesson 31 components Component.vue & FormOne.vue &FormTwo.vue & App.vue
Component.vue
<template>
<div>
    <h5>填充以下表单内容</h5>
    <form>
        <div id="form-header">
            <slot name="form-header"></slot>
        </div>
        <div id="form-fields">
            <slot name="form-fields"></slot>
        </div>
        <div id="form-controls">
            <slot name="form-controls"></slot>
        </div>
        <div id="useful-links">
            <ul>
                <li>
                    <a href="#">link 1</a></li>
                <li>
                    <a href="#">link 2></a></li>
                <li>
                    <a href="#">link 3</a></li>
                <li>
                    <a href="#">link 4</a></li>
            </ul>
        </div>
    </form>
</div>
</template>
<script>
export default {
    components:{},
    date(){
        return{}
    },
    methods:{}
}
</script>
<style scoped>
h5{
    text-align:center;
}
form{
    width:100%;
    max-width:960px;
    margin:0 auto;
}
#useful-links ul{
    padding:0;
}
#useful-links li{
    display:inline-block;
    margin-right:10px;
}
form > div{
    padding:20px;
    background:#eee;
    margin:20px 0;
}
#form-header{
    background: #ddd;
    border: 1px solid #bbb;
}
</style>

FormOne.vue
<template>
<div>
    <components>
        <div slot="form-header">
            <h4>Form One - Contact Us</h4>
            <p>填写以下内容</p>
        </div>
        <div slot="form-fields">
            <input type="text" placeholder="name" required /><br/>
            <label>随便说点啥：</label>
            <textarea></textarea>
        </div>
        <div slot="form-controls">
            <button v-on:click="handlerSubmit">
                发送
            </button>
        </div>
    </components>
</div>
</template>

<script>
import Component from './Component.vue'

export default {
    components: {
        "components": Component
    },
    data() {
        return {}
    },
    methods: {
        handlerSubmit: function () {
            alter("thanks for submitting form one & contacting us");
        }
    }
}
</script>

<style scoped>
</style>

FormOne.vue
<template>
<div>
    <components>
        <div slot="form-header">
            <h4>Form Two - Contact Us</h4>
            <p>随便写点东西</p>
        </div>
        <div slot="form-fields">
            <input type="text" placeholder="username" required /><br/>
            <input type="password" placeholder="password" required />
        </div>
        <div slot="form-controls">
            <button v-on:click="handlerSubmit">
                登入
            </button>
        </div>
    </components>
</div>
</template>

<script>
import Component from './Component.vue'

export default {
    components: {
        "components": Component
    },
    data() {
        return {}
    },
    methods: {
        handlerSubmit: function () {
            alter("thanks for logging in （form two)");
        }
    }
}
</script>

<style scoped>
</style>


App.vue
<template>
<div id="app">
    </FormHelper> -->
    <!-- <form-one /> -->
    <!-- <form-two /> -->
    <component :is="component"></component> <!-- data 给定component 值默认显示form-two -->
    <button @click="component='form-one'">form-one显示</button>
    <button @click="component='form-two'">from-two显示</button>
</div>
</template>

<script>

import FormOne from './components/FormOne.vue'
import FromTwo from './components/FormTwo.vue'

export default {
    name: 'app',
    //组件传值添加--
    data() {
        return {
            component:'form-two'  
        }
    },
    components: {
        "form-one":FormOne,
        "form-two":FromTwo        
    },
    methods: {}
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

# keep-alive 
app.vue
<keep-alive>
        <component :is="component"></component>
</keep-alive>
此时组件中的就会被缓存起来，就不会被点击其他按键返回后重新渲染
