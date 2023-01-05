<template>
<div>
    <h1>Hey, {{ name }}!</h1>
    <h1>{{ name ? `Hey, ${name}!` : 'Hey!'}}</h1> <!--//JavaScript expression -->
    
    <h2 v-if="name === 'Emils'">Ola, {{ name }}!</h2>
    <h2 v-else-if="name">Hey, {{ name }}!</h2>
    <h2 v-else>Hey!</h2>

    <h3 v-show="name">Hey, {{ name }}!</h3>
    <h3 v-show="!name">Hey!</h3>

    <label>Name: </label>
    <input v-model="name">
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '', //single variable name
        };
    }
}
</script>

<style>
body {
    background: #2e2e2e;
    color: #f9f9f9;
}
</style>