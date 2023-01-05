<template>
  <div>
    <header>
      <div class="header-wrapper">
        <div class="route-wrapper">
          <img id="logo" alt="Students logo" src="../assets/student.png" />
          <div class="route">
              <router-link to="/">Home</router-link> |
          </div>
          <div class="route">
            <router-link to="/AllPosts">All Posts</router-link> |
          </div>
        </div>
        
          <div class="button-container">
              <div class="button-container">
                <button 
                    id="plus-btn"
                    v-on:click='openAddPostPage'
                    >➕</button>
                <button
                    id="user-btn"
                    v-on:click="userBtn"
                    >👤</button>
            </div>
            <Dropdown :options="options" v-if="dropdownState"/>
          </div>
      </div>
    </header>
  </div>
</template>

<script>
import Dropdown from './Dropdown.vue';
// import AddPost from './AddPost.vue';

export default {
  name: 'Header',
        props: {},
        data () {
            return {
                options: [
                    {
                        title: "My posts",
                        url: "my-posts"
                    },
                    {
                        title: "Log in",
                        url: "login"
                    }
                ],
                dropdownState: false
            }
        },
        components: {
            Dropdown
        },
        methods: {
         userBtn () {
            return this.dropdownState = !this.dropdownState
        },
        openAddPostPage() {
            this.$router.push('./AddPost');
    },
      }    

    
};
</script>

<style>
.header-wrapper {
    display: flex;
    justify-content: space-between;
}

.route-wrapper {
    display: flex;
}

.route {
    padding: 30px;
}

.route a {
    font-weight: bold;
    color: #2c3e50;
}

.route a.router-link-exact-active {
    color: #42b983;
}

#logo {
  width: 55px;
  height: 55px;
    border: 1px solid #000000;

}

.button-container {
  display: flex;
}

#plus-btn {
  width: 40px;
  height: 40px;
}
#user-btn {
  width: 40px;
  height: 40px;
}

#plus-btn, #user-btn {
  /* border: none; */
  background: rgb(187, 247, 128);
  margin-left: 8px;
}
</style>
