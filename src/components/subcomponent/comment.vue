<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea name="" id="" cols="30" rows="10" placeholder="最多120字"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">第1楼 &nbsp;&nbsp; 用户：匿名用户 &nbsp;&nbsp; 发表时间：2018-10-27 12:12:12</div>
        <div class="cmt-body">二十四桥明月夜,玉人何处教吹箫(莫名脸红)</div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">第1楼 &nbsp;&nbsp; 用户：匿名用户 &nbsp;&nbsp; 发表时间：2018-10-27 12:12:12</div>
        <div class="cmt-body">二十四桥明月夜,玉人何处教吹箫(莫名脸红)</div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">第1楼 &nbsp;&nbsp; 用户：匿名用户 &nbsp;&nbsp; 发表时间：2018-10-27 12:12:12</div>
        <div class="cmt-body">二十四桥明月夜,玉人何处教吹箫(莫名脸红)</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  created() {
    this.getComments()
  },
  methods:{
    getComments() {
      // ...略,懒得写接口了
      //alert(this.id)
    }
  },
  props:["id"]
}
</script>
<style>
  .cmt-container h3{
    font-size: 18px;
  }
  .cmt-container textarea{
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list{
    margin: 5px 0;
  }
  .cmt-item{
    font-size: 13px;
  }
  .cmt-title{
    background-color: #ccc;
    line-height: 30px;
  }
  .cmt-body{
    line-height: 35px;
    text-indent: 2em;
  }
</style>