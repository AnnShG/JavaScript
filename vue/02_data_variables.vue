//template block should return single DOM node
<template>
<div>
    <div>{{ message }}</div> <!-- it's variable-->
    <div>{{ reverseMessage (message) }}</div> <!--function method with a variable-->
    <div>{{ reversedMsg }}</div> <!--computed variable-->
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello World!',
        };
    },
    methods: {
        reversedMessage(value) {
            return value.split("").reverse().join("");
        }
    },
    //another way to reverse the message
    computed: {
        reverseMsg() {
            return this.message.split("").reverse().join("");
        }
    },
}

</script>

<style>
body {
    background: #2e2e2e;
    color: #f9f9f9;
}
</style>