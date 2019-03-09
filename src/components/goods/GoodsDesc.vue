<template>
  <div class="goodsDescContent">
    <h1>{{info.title}}</h1>
    <hr>
    <div v-html="info.content"> </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id:this.$route.params.id,
      info:{}
    }
  },
  created() {
    this.getGoodsDesc()
  },
  methods: {
    getGoodsDesc(){
      this.axios.get('/api/goods/getdesc/'+this.id).then(result => {
        if(result.status === 200){
          this.info = result.data.message[0]
          //console.log(result.data.message)
        }
      })
    }
  },
}
</script>
<style>
.goodsDescContent h1{
  font-size: 16px;
  color: #226aff;
  text-align: center;
  margin: 15px 0;
}
.goodsDescContent img{
  width: 100%;
}
</style>
