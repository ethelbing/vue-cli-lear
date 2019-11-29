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
            // if(signshow){
            //     this.title="hello change the title success";
            //     this.show=false;
            // }else{
            //     this.title=oldtitle;
            //     this.show=true;
            // }

            //注册事件 $emit(参数1：事件，参数2：值)
            this.$emit("titleCange","hello change the title success")
            //<div @titleCange="upateTitle" class="header"> 此处的调用的事件名字一定要与注册事件中你定义的是一致的 @titleCange 就与@click是一样的
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