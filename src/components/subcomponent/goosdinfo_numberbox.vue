<template>
  <div class="goodsinfo_numberbox">
    <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox">
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>
<script>
import mui from '../../static/vendor/mui/dist/js/mui.min.js'
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    mui('.mui-numbox').numbox() //初始化
  },
  methods: {
    countChanged(){
      //console.log(this.$refs.numbox.value)
      this.$emit('getcount',parseInt(this.$refs.numbox.value))
    }
  },
}
</script>
<style>
.goodsinfo_numberbox{
  display: inline-block;
}
</style>
