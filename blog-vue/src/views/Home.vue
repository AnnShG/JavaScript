<template>
  <div>
    <h1>The most recent posts</h1>
    <div>
        <ul class="cards-list">
          <div
            class="article-card"
            v-for="article in articleArray"
            :title="article.title"
            :img="article.img"
            :key="article.title"
            :v-on:click="clicker"
          >
          
            <h3 class="article-title">{{ title }}</h3>
          </div>
        </ul>
      </div>
<!-- :style="{ backgroundImage: `url(${img})` }" -->
    <Article  />
  </div>
</template>

<script>
import Article from '../components/Article.vue';

export default {
  name: 'Home',
  data() {
    return {
       articleArray: [
        {
          title: 'Book 1',
          img:
            'https://upload.wikimedia.org/wikipedia/commons/5/5a/Books_HD_%288314929977%29.jpg',
        },
        {
          title: 'Book 2',
          img:
            'https://cdn.pixabay.com/photo/2018/02/18/21/21/book-3163563_1280.jpg',
        },
        {
          title: 'Book 3',
          img:
            'https://upload.wikimedia.org/wikipedia/commons/7/74/Open_books_stacked.jpg',
        },
      ],
      components: {
        Article,
      },
      methods: {
        clicker () {
      console.log('clickerino works!')
    },
    },
      
    };
  },
};
</script>

<style>
h1 {
  color: black;
  text-align: center;
}
</style>
