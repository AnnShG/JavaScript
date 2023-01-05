<template>
  <Header/>
    <div class="page-container">
    <Article 
    v-for="article in articleArray" 
    :title="article.title" 
    :img="arcticle.img"
    :key="article.title"
    v-on:click="clicker"
    >
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Article from './components/Article.vue'

export default {
  name: 'App',
  data () {
    return {
      articleArray: [
        {
        title: 'Duck 1'
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thespruce.com%2Fdo-ducks-have-teeth-4153828&psig=AOvVaw0qEaA_A61i2qAqbuO4lsN-&ust=1629478414357000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIij97vGvfICFQAAAAAdAAAAABAU",
        },
        {
        title: 'Duck 2'
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Friverheadlocal.com%2F2020%2F08%2F14%2Fpandemic-brought-radical-changes-for-long-islands-last-surviving-duck-farm%2F&psig=AOvVaw0qEaA_A61i2qAqbuO4lsN-&ust=1629478414357000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIij97vGvfICFQAAAAAdAAAAABAD",
        },
        {
        title: 'Duck 3'
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.treehugger.com%2Fways-to-help-ducks-385903&psig=AOvVaw0qEaA_A61i2qAqbuO4lsN-&ust=1629478414357000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIij97vGvfICFQAAAAAdAAAAABAe"
        }
      ]
    }   
  },
  components: {
    Header,
    Article
  },
  methods: {
    clicker () {
      console.log('Clickerino works')
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  width: 100%;
  color: #222;
  font-family: Open-sans, sans-serif;
}

.page-container {
  width: 100%;
  max-width: 60rem;
  height: 100%;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
}
</style>