<template>
<div>
    <h1>Morning ToDo List!!!</h1>

    <div>
        <form v-on:submit.prevent="addNewToDo"> <!--we call method 'addNewToDo' -->
        <label for="ToDo">Add new ToDo item: </label>

        <!-- here we call the array with ToDo items --> 
        <input 
        v-model="newToDoText"   
        id= "ToDo"
        placeholder="E.g.Take a shower"
        >
        <button>Add</button>
        </form>
    </div>
    <div>
        <ul>
            <li v-for="(myToDoList, index) in myToDoList" :key="`object-list-item-${index}`">
                {{myToDoList.ToDo}}
                
                <button href="#" v-on:click.prevent="deleteObject(index)">Remove</button>
               <p v-for="(ToDo) in myToDoList"
                v-bind:key="ToDo.id"
                v-bind:title="ToDo.title"> </p>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            newToDoText: '',
             myToDoList: [
             {
                 id: 1,
                ToDo: 'Wake up at 8 am',
             },
             {id: 2,
                ToDo: 'Brush teeth',
             },
             {
                 id: 3,
                ToDo: 'Face care',
             },
             {
                 id: 4,
                ToDo: 'Morning exercises',
             },
             {
                 id: 5,
                ToDo: 'Have breakfast'
            }
            ],
            nextToDoId: 6
        }
    },

    methods: {
        addNewToDo() {
            this.myToDoList.push({
                id: this.nextToDoId++,
                ToDo: this.newToDoText
            })
            this.newToDoText = ''
        },

        // handleCheck(event) {
        //     const { checked, id } = event.target;
        //     this.myToDoList = this.myToDoList.map((ToDo) => {
        //         if (ToDo.id != id) {
        //             return ToDo;
        //         }
        //         return {
        //             ...ToDo,
        //             done: checked,
        //         };
        //     });
        // },

        deleteObject(index) {
            this.$delete(this.myToDoList, index)
        }
    }

}

</script>

<style>
body {
    background: #2e2e2e;
    color: #f9f9f9;
}
</style>