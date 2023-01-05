<template>
  <div>
    <div class="article-container">

      <div
          class='article-card' 
          :style="{backgroundImage: `url(${img})`}"
          :v-on:click="clicker"
      >
          <h3 class="article-title">{{title}}</h3>
      </div>

      <!-- <div>
        <ul class="cards-list">
          <div
            class="article-card"
            v-for="article in articleArray"
            :title="article.title"
            :img="article.img"
            :key="article.title"
            :v-on:click="clicker"

            :style="{ backgroundImage: `url(${img})` }"

          >
          
            <h3 class="article-title">{{ title }}</h3>
          </div>
        </ul>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: {
    title: String,
    img: String,
  },
  data() {
    return {
      // articleArray: [
      //   {
      //     title: 'Book 1',
      //     img:
      //       'https://upload.wikimedia.org/wikipedia/commons/5/5a/Books_HD_%288314929977%29.jpg',
      //   },
      //   {
      //     title: 'Book 2',
      //     img:
      //       'https://cdn.pixabay.com/photo/2018/02/18/21/21/book-3163563_1280.jpg',
      //   },
      //   {
      //     title: 'Book 3',
      //     img:
      //       'https://upload.wikimedia.org/wikipedia/commons/7/74/Open_books_stacked.jpg',
      //   },
      // ],
    };
  },
  // methods: {
  //   clicker() {
  //     console.log('Clickerino works');
  //   },
  // },
};
</script>

<style>
.article-container {
  /* display: flex;
  flex-direction: row; */
  width: 1000px;
  /* margin-left: 50;
  margin-right: 50; */
  margin: 0 auto;
}

.cards-list {
  display: flex;
  flex-direction: row;
  order: 2;
  padding: 0;
}

.article-card {
  width: 304px;
  height: 304px;
  display: flex;
  flex-direction: row;
  /* flex-flow: row wrap; */
  color: #fff;
  /* align-items: flex-end; */
  /* justify-content: right; */
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background: cover center no-repeat;

  display: inline-block;
  border: 1px solid rgb(0, 0, 0);
}

.article-title {
  color: rgb(250, 250, 250);
  background: rgb(48, 43, 43);
  /* display: block; */
  margin: 0;
  padding: 5px 10px;
  font-size: 18px;
}
.article-card:hover {
  cursor: pointer;
  opacity: 0.6;
}
@media (max-width: 768px) {
  .article-card {
    margin-bottom: 2rem;
  }
}
</style>
