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
