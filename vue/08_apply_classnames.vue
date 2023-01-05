<template>
  <div>
    <ul>
      <li class="highlight">highlighted</li>
      <li :class="{ grayOut: isGrayOut }">grayed out</li>
      
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isGrayOut: true,
    };
  },
};
</script>

<style>
.highlight {
  background: yellow;
}
.grayOut {
  opacity: 0.3;
}
</style>