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
