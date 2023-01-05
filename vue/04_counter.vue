<template>
<div>
    <div>Value: {{ counter }} </div>
    <button v-on:click="incrementCounter">Add</button>
    <button 
    @click="decrementCounter"
    v-bind:disabled="counter === 0"
    v-bind:id="counter"
    >Subtract</button>
</div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0,
        };
    },
    methods: {
        incrementCounter() {
            this.counter += 1;
        },
        methods: {
        decrementCounter() {
            this.counter -= 1;
        }
    }
}
</script>

<style>
body {
  background: #2e2e2e;
  color: #f9f9f9;
}
</style>