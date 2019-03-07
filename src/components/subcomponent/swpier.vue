<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in lunboList" :key="index">
        <a :href="item.url">
          <img :src="item.src" alt>
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  props:['lunboList']
}
</script>
<style>
.mint-swipe {
  height: 200px;
}

.mint-swipe-item img {
  width: 100%;
}
</style>

