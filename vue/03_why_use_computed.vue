<template>
  <div>
    <h1>Current time: {{ time }}</h1>
    <div>{{ message }}</div>
    <div>{{ reverseMessage(message) }}</div>
    <div>{{ reversedMsg }}</div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello World!',
            time: Date.now(), //time is a variable
        };
    },
    methods: {
        reverseMessage(value) {
            console.log("method 'reverseMessage' called");
            return value.split("").reverse().join("");
        }
    },
    computed: { //computed life sycle, in this case once
        reversedMsg() {
            console.log("computed 'reversedMsg' called");
            return this.message.split("").reverse().join("");
        }
    },
    // created, mounted
    //to do self-updated value with an interval
    mounted() {
        setInterval(() => { //do it again and again
            this.time = Date.now();
        }, 1000); //each second
    }

    // created() { //only one as mounted
    //     setTimeout(() => { 
    //         this.time = Date.now();
    //     }, 1000);
    // },

    //create and update work together

    // updated
    // updated() {
    //     setTimeout(() => { //executes it only one time, in a loop
    //         this.time = Date.now();
    //     }, 1000);
    // },
}
</script>

<style>
body {
  background: #2e2e2e;
  color: #f9f9f9;
}
</style>