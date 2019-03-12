<template>
  <div class="goodsInfoContent">
    <transition 
      @before-enter="beforeEnter" 
      @enter="enter" 
      @after-enter="afterEnher"
    >
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
    
    <!-- 商品轮播图 -->

    <swiper :lunboList="lunbotu"></swiper>

    <!-- 商品购买 -->
    <div class="mui-card">
      <div class="mui-card-header">{{goodsInfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="priec">
            市场价:<del>&yen;{{goodsInfo.marketprice}}</del>&nbsp;&nbsp;销售价: <span class="nowprice">&yen;{{goodsInfo.sell_price}}</span>
          </p>
          <p>购买数量 <numbox @getcount="getSelectedCount" :max="goodsInfo.stock_quantity"></numbox></p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopcar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

   
    <!-- 商品参数 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:{{goodsInfo.goods_no}}</p>
          <p>货存情况:{{goodsInfo.stock_quantity}}</p>
          <p>上架时间:{{goodsInfo.add_time}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
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
      lunbotu:[],
      goodsInfo:{},
      ballFlag:false,  //控制小球是否显示的标识
      selectedCount:1 //保存购买商品数量
    }
  },
  created() {
    this.getLunbo(),
    this.getGoodsInfo()
  },
  methods: {
    getLunbo(){
      this.axios.get('/api/getthumimages/'+this.id).then((result) => {
        if (result.status === 200) {
          this.lunbotu = result.data.message
        }
      })
    },
    getGoodsInfo(){
      this.axios.get('/api/goods/getinfo/'+this.id).then(result => {
        if (result.status === 200) {
          this.goodsInfo = result.data.message[0]
          console.log(result.data.message)
        }
      })
    },
    goDesc(id){
      //alert(1)
      this.$router.push({name:'goodsdesc',params:{id}})
    },
    goComment(id){
      this.$router.push({name:'goodscomment',params:{id}})
    },
    addToShopcar(){
      this.ballFlag = !this.ballFlag
      this.goodsInfo.count = this.selectedCount
      this.$store.commit('addToShopcar',this.goodsInfo)
    },
    beforeEnter(el){
      el.style.transform = 'translate(0,0)'
    },
    enter(el,done){
      el.offsetWidth

      //获取小球在页面中的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      //获取购物车徽标在页面中的位置
      const badgePosition = document.getElementById('badge').getBoundingClientRect()
      const xDist = badgePosition.left - ballPosition.left
      const yDist = badgePosition.top - ballPosition.top

      el.style.transform = `translate(${xDist}px,${yDist}px)`
      el.style.transition = 'all 1s cubic-bezier(.42,-0.4,1,.49)'
      done()
    },
    afterEnher(el){
      this.ballFlag = !this.ballFlag
    },
    getSelectedCount(count){
      this.selectedCount = count
      // console.log('子组件传过来的值是:'+this.selectedCount) 
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
.goodsInfoContent .ball{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #f00;
  position: absolute;
  z-index: 99;
  left: 146px;
  top: 390px;
  
}
</style>
