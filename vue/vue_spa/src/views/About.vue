<template>
  <div class="about">
    <h1>This is an about page</h1>

    <p> {{ printRouteParams() }} </p>
  </div>
</template>

<script>
export default {
  methods: {
        printRouteParams() {
            return JSON.stringify(this.$route.params);
        },
    },
};
</script>