<template>
    <div> <!-- If the id is not added in the parametres
            then we do render the list -->
        <ul v-if="!$route.params.id"> 
            <li v-for="(item, i) in list" :key="i">
               <router-link :to="'/students/'+item.id"> {{item.name}} </router-link>
            </li>
        </ul>
            <!-- If we do have this id in the parametres
            then we do render this block 'printStudentData' -->

    <div v-if="$route.params.id">User data: {{ printStudentData() }}</div>
        </div>
</template>

<script>

export default {
    data() {
        return {
            list: [
                {name: 'Emils', id: 1},
            ]
        };
    }, 
    //'printStudentData' takes our list that we defined
    // in our data above and try to find the student which id 
    //  matched the same id that we pass in our parametres

    // and if it does it wil convert our list with json.stringify
     methods: {
         printStudentData() {
             const student = this.list
                .find (({ id }) => this.$route.params.id == id);
             return JSON.stringify(student);
         },
     },
     watch: {
         $route(newValue, oldValue) {
            console.log('new: ', newValue.params);
            console.log('old: ', oldValue.params);

         }
     }  
};
</script>