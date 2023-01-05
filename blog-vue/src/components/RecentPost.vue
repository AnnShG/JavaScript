<template>
    <div>
        <article>
            <h3>{{ title }}</h3>
            <p>
                {{ text }}
                <span>{{ author }}</span>
                <span>{{ cratedAt}}</span>
            </p>
        </article>
    </div>
</template>

<script>
export default {
    name: 'RecentPost',
    props: {
        title: String,
        text: String,
        author: String,
        createdAt: String,
    },
};

</script>

<style>

</style>