<template>
<div class="user">
    <h5>user-vue</h5>
    <ul>
        <li @click="user.show =! user.show" v-for="(user,index) in users" :key="index">
            <H6>{{ user.name }} - {{ user.age }} </H6>
            <h6 v-show="user.show">: {{ user.wechat }}</h6>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            users: [{
                    name: 'aa',
                    wechat: '11',
                    age: '21',
                    show: false
                },
                {
                    name: 'bb',
                    wechat: '22',
                    age: '22',
                    show: false
                },
                {
                    name: 'cc',
                    wechat: '33',
                    age: '24',
                    show: false
                },
                {
                    name: 'dd',
                    wechat: '44',
                    age: '23',
                    show: false
                },
                {
                    name: 'ff',
                    wechat: '55',
                    age: '27',
                    show: false
                },
                {
                    name: 'ee',
                    wechat: '66',
                    age: '25',
                    show: false
                },
            ]
        }
    },
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
