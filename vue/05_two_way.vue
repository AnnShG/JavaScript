<template>
    <div>
        <h1>Hey, {{ name }} {{ lastname }}!</h1>

        <div>
            <span>not the best use case </span>
            <label>Name: </label>
            <input 
                v-bind:value="name" 
                @change="updateName">
        </div>

        <div>
            <span>correct use case </span>
            <label>Lastname: </label>
            <input v-model.trim="lastname"> //input - catch all the updates
        </div> //"Emils      - trim gets rid of extra spaces"

        <div>
            <label>Age: </label>
            <input v-model.number="age">
        </div>

        <div>
            <h4>{{ test_2 }}</h4>
            <div>uses "watch" to update other variable</div>
            <label>Test: </label>
            <input v-model="test">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Emils',
            lastname: 'Test',
            age: 29,
            test: "",
            test_2: "",
        };
    },
    methods: {
        updateName(event) {
            this.name = event.target.value;
        },
    },
    watch: {
        test(newValue, oldValue) { //to change values in test
            console.log(newValue, oldValue);
            this.test_2 = newValue;
        },
    },
};
</script>

<style>
body {
    background: #2e2e2e;
    color: #f9f9f9;
}
</style>
