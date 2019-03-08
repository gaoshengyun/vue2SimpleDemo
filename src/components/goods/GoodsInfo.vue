<template>
  <div class="goodsInfoContent">
    <!-- 商品轮播图 -->

    <swiper :lunboList="lunbotu"></swiper>

    <!-- 商品购买 -->
    <div class="mui-card">
      <div class="mui-card-header">商品名称</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="priec">
            市场价:<del>&yen;2399</del>&nbsp;&nbsp;销售价: <span class="nowprice">&yen;5555</span>
          </p>
          <p>购买数量 <numbox></numbox></p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

   
    <!-- 商品参数 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:</p>
          <p>货存情况:</p>
          <p>上架时间:</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain>图文介绍</mt-button>
        <mt-button type="danger" size="large" plain>商品评论</mt-button>
      </div>
    </div>

  </div>
</template>
<script>
import swiper from '../subcomponent/swpier'
import numbox from '../subcomponent/goosdinfo_numberbox'
export default {
  data() {
    return {
      id:this.$route.params.id,
      lunbotu:[]
    }
  },
  created() {
    this.getLunbo()
  },
  methods: {
    getLunbo(){
      this.axios.get('/api/getthumimages/'+this.id).then((result) => {
        if (result.status === 200) {
          this.lunbotu = result.data.message
        }
      })
    }
  },
  components:{
    swiper,
    numbox
  }
}
</script>
<style>
.goodsInfoContent{
  background-color: #eee;
}
.goodsInfoContent .nowprice{
  font-size: 16px;
  color: #f00;
  font-weight: bold;
}
.mui-card-footer{
  display: block;
}
.mui-card-footer button{
  margin: 15px 0;
}
</style>
