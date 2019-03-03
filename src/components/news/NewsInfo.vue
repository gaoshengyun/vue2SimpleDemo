<template>
  <div class="newsinfo-container">
    <h3 class="title">新闻标题</h3>
    <p class="subtitle">
      <span>发表时间：</span>
      <span>点击：0次</span>
    </p>
    <hr> 
    <div class="content">
      <comment-box :id="this.id"></comment-box>
    </div>        
  </div>
</template>
<script>
import comment from '../subcomponent/comment'
export default {
  data() {
    return {
      id:this.$route.params.id  //获取id
    }
  },
  methods:{
    getNewsInfo(){
      //略,懒得写接口了
      //alert(this.id)
    }
  },
  components:{
    'comment-box':comment
  },
  created() {
    this.getNewsInfo()
  },
}
</script>
<style>
  .newsinfo-container{
    padding: 4px;
  }
  .newsinfo-container .title{
    font-size: 16px;
    text-align: center;
    padding: 10px 0;
    color: #f00;
  }
  .newsinfo-container .subtitle{
    font-size: 14px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
</style>