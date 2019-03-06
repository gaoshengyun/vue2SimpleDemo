<template>
  <div class="goodlist">
    <router-link tag="div" :to="'/home/goodsinfo/'+item.id" class="gooditem" v-for="(item, index) in goodsList" :key="item.id">
      <img :src="item.img_url" alt="">
      <h1 class="title">{{item.title}}</h1>
      <div class="goodsinfo">
        <p class="price">
          <span class="now">&yen; {{item.sell_price}}</span>
          <span class="old">&yen; {{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </router-link>

    <mt-button type="danger" size="large" @click="getMore()">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageindex:1,
      goodsList: []
    }
  },
  created() {
    this.getGoodList()
  },
  methods:{
    getGoodList(){  //获取商品列表
      this.axios.get('/api/getgoodlist/'+this.pageindex).then((result)=>{
        //alert(1)
        if(result.status === 200){
          this.goodsList = this.goodsList.concat( result.data.message )
        }
      })
    },
    getMore(){
      this.pageindex++
      this.getGoodList()
    }
  }
}
</script>
<style>
.goodlist{
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  justify-content: space-between;
}
.gooditem{
  width: 49%;
  border: 1px solid #ccc;
  box-shadow: 0 0 9px #999;
  margin: 3px 0;
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 294px;
}
.gooditem .title{
  font-size: 14px;
  padding: 0 3px;
}
.gooditem img{
  width: 100%;
}
.goodsinfo{
  background-color: #eee;
}
.goodsinfo p{
  margin: 0;
  padding: 0 3px;
}
.goodsinfo .price .now{
  color: #f00;
  font-weight: bold;
  font-size: 16px;
}
.goodsinfo .price .old{
  text-decoration: line-through;
  font-size: 12px;
  margin-left: 10px;
}
.goodsinfo .sell{
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
</style>
