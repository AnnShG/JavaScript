<template>
  <div class="app-container">
    <Header />

      <!-- </ul> -->
      <!-- <Login /> -->
      <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  data () {
    return {
      authType: "/register"
    }  
  },
  
 components: {
    Header,
  },
  methods: {
    // clicker () {
    //   console.log('Clickerino works')
    // },
    // submitFn () {
    //   console.log('logged in!')
    // },
    // authSwitcher () {
    // const navUrl = "/register";

    // if (navUrl === "/register") {
    //   return this.authType = {
    //     title: "Login",
    //     callBack: this.submitFn
    //   }
    // }
//   }
// },
//   mounted() {
//     this.authSwitcher()
  }
}
</script>

<style>

body {
  background-color: rgb(227, 233, 236);
  margin: 0;
  padding: 0;
  width: 100%;
}


.app-container {
  /* width: 1200px; */
  margin: 0 auto;
  padding: 15px 20px 32px 20px;

  flex: 1 1 auto;
  display: flex;
  flex-direction: column; 
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* justify-content: center; */
    /* align-items: center; */

    /* flex: 0 1 auto; */
    
    /* justify-content: space-between; */
    /* list-style: none; */
/* white-space: nowrap; */

</style>