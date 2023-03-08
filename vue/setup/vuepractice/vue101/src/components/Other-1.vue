<template>
<div>
<h1>{{ cheese }}</h1>
<h2>{{ count }}</h2>
<button v-on:click="addOne">Add One</button>
<ul>
    <li v-for="num of numbers" v-bind:key="num">{{ num }}</li>
</ul>
<input type="text" v-model="input"/>
</div>
</template>

<script>
export default {
    name: "Other-1",
    props: ["cheese"],
    data: function(){

        return{
            count: 0,
            numbers: [1, 2, 3, 4, 5],
            input: ""
        }
    }, 
    methods: {
        addOne: function(){
            alert(this.input)
            this.count += 1
        }
    }
}

</script>

<style>
h1 {
    color: red;
}
</style>