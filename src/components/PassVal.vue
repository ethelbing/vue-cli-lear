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
    <!-- 传引用 -->
    <button @click="deletePassVal">删 值</button>

</div>
</template>

<script>
export default {
    // props: ["sbqUser"],
    props: {
        sbqUser: {
            type: Array, //父类传过来是什么属性此处就定义什么属性，否则报错
            required: true //此出定义了request如果app.vue页面中 <passVal :sbqUser="passValDate"></passVal> "：sbqUser~"没定义页面会报错的
        }
    },
    data() {return {}},
    methods: {
        deletePassVal() {
            this.sbqUser.pop();
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
