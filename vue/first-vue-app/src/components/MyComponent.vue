<template>
    <div>
        <h3>{{ msg }}</h3>
    </div>
</template>

<script>
    export default {
        name: "MyComponent",
        props: {
            msg: {
                type: String,
                required: true
            }
        }
    }
</script>

<style>
    h3 {
        color: #80cbc4;
    }
</style>