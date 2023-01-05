<template>
  <div>
    <ul>
      <li v-for="i in 10" :key="`item-${i}`">
        {{ i }}
      </li>
    </ul>

    <ul>
      <li v-for="(item, index) in items" :key="`list-item-${index}`">
        Value: {{ item.name }}, index: {{ index }}
      </li>
    </ul>

    <ul>
      <li v-for="(objValue, index) in obj" :key="`object-list-item-${index}`">
        {{ objValue }}
      </li>
    </ul>
  </div>
</template>

/** for (let k in { name: 'Em', age: 29 }) { console.log(k); } */

<script>
export default {
  data() {
    return {
      items: 
      [{ name: "Test" }, 
      { name: "Summer" },
      { name: "Sea" }],
      obj: {
        name: "Emils",
        age: 29,
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.items.push({ name: "Winter" });
    }, 2000);
  },
};
</script>

<style>
body {
  background: #2e2e2e;
  color: #f9f9f9;
}
</style>