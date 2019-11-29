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
