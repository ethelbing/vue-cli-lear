<template>
<!-- HTML结构：只能有一个跟标签 -->
<div class="hello">
    <h1>{{ msg }}</h1>
</div>
</template>

<script>
// js 部分 逻辑部分
export default {
    name: 'HelloWorld',
    // props: {
    //   msg: String
    // }
    data() {
        return {
            msg: 'Miss Han'
        }
    },
    methods: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/* css 样式部分 */
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>