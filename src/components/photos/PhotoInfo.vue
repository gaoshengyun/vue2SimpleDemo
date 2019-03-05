<template>
  <div class="photoinfo-container">
    <h3>{{photoInfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间:{{photoInfo.add_time | dataFormat}}</span>
      <span>点击次数:{{photoInfo.click}}</span>
    </p>
    <hr>

    <div class="content" v-html="photoInfo.content"></div>

    <!-- 评论子组件 -->
    <cmt-box :id="id"></cmt-box>
  </div>
</template>
<script>
//导入评论子组件
import comment from '../subcomponent/comment'

export default {
  data() {
    return {
      id:this.$route.params.id,
      photoInfo:{}
    }
  },
  created() {
    this.getPhotoInfo()
  },
  methods: {
    getPhotoInfo() {
      this.axios.get('/api/getimageinfo/'+this.id).then((result) => {
        if (result.status === 200) {
          this.photoInfo = result.data.message[0]
          console.log(result.data.message[0])
        }
      })
    }
  },
  components:{
    'cmt-box':comment
  }
}
</script>
<style>
.photoinfo-container{
  padding: 3px;

}
.photoinfo-container h3{
  color: #26a2ff;
  font-size: 15px;
  text-align: center;
  margin: 15px 0;
}
.photoinfo-container .subtitle{
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
.photoinfo-container .content{
  font-size: 13px;
  line-height: 30px;
}
</style>
