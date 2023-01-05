<template>
    <div>
        <div>
            <label>Title: </label>
            <input
                label="Title: "
               
                >
                 <!-- v-value="title"
                @input="updateTitle" -->
        </div>
        <div>
            <label>Post: </label>
            <textarea 
            name="com" rows="4" cols="33"></textarea>
        </div>
        <!-- v-value="post"
            @input="updatePost" -->
        <button>Add</button>
    </div>
</template>

<script>
// import { mapGetters } from "vuex"
// import { mutationsIds } from '../store/mutations';
// import mutations from '../store/mutations';


    export default {
        // name: 'AddPost',

        // computed: {
        //     ...mapGetters ({
        //         title: 'getTitle',
        //         post: 'getPost'
        //     })
        // },
        // methods: {
        //     updateNewPostTitle(event) {
        //         const value = event.target.value;
        //         this.$store.commit (mutations.updateNewPostTitle, value);
        //     },
        //     updateNewPost(event) {
        //         const value = event.target.value;
        //         this.$store.commit (mutations.updateNewPost, value);
        //     }

        // }
    }
</script>

<style>

textarea {
    height: 100px;
    resize: none;
}

</style>