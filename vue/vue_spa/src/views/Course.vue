<template>
    <div>
        Course id: {{ name }}
    </div>
</template>

<script>

export default {
    computed: {
        name() {
            return this.$route.params.id;
        }
    }
}

</script>