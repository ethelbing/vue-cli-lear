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
h6{
    background:cornflowerblue;
}
</style>
