<template>
    <div>
        <ul>
            <li v-for="name in courses" :key="name" @click="openCourse(name)">
                {{ name }}
            </li>
        </ul>
    </div>
    <router-view />

    <button @click="goBack">Go back</button>
</template>

<script>
export default {
    data() {
        return {
            courses: ['JS', 'PHP']
        };
    }
    methods: {
        openCourse(name) {
            // need to change url programmically
            // this.$route - tells everything about current route
            // this.$router - API for router
            this.$router.push(`/courses/${name}`);
            // this.$router.push ({
            //     path: name,
            //     params: ()
            // })
        }
        gBack() {
            // -1 - one step back
            // -99 - 99 steps back
            // 3 - 3 stepd forward 
            this.$router.go(-1);
        }
        changeCourse() {
            this.$router.replace(`/courses/${name}`);
        }
    },
}
</script>