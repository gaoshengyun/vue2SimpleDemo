<template>
  <div>
    <!-- =============轮播图========== -->
    <swiper :lunboList="lunboList"></swiper>
    <!-- ==============轮播图============ -->

    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4">
          <router-link to="/home/newslist">
            <img src="../../static/img/news.png" alt="">
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4">
          <router-link to="/home/photolist">
          <img src="../../static/img/picShare.png" alt="">
          <div class="mui-media-body">图片分享</div></router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4">
          <router-link to="/home/goodslist">
          <img src="../../static/img/goodShow.png" alt="">
          <div class="mui-media-body">商品购买</div></router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4"><a href="#">
          <img src="../../static/img/feedback.png" alt="">
          <div class="mui-media-body">留言反馈</div></a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4"><a href="#">
          <img src="../../static/img/search.png" alt="">
          <div class="mui-media-body">视频专区</div></a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4"><a href="#">
          <img src="../../static/img/callme.png" alt="">
          <div class="mui-media-body">联系我们</div></a>
        </li>
    </ul> 
    <!-- 六宫格 -->
  </div>
</template>
<script>
import { Toast } from "mint-ui"
import swiper from '../subcomponent/swpier'

export default {
  data() {
    return {
      lunboList: []
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      this.axios.get("/api/getlunbo").then(result => {
        if (result.status === 200) {
          this.lunboList = result.data.data;
          
        } else {
          Toast("加载轮播图失败");
        }
      });
    }
  },
  components:{
    swiper
  }
};
</script>
<style >
body{background-color: #fff;}


.mui-grid-view.mui-grid-9{
  background-color: #fff;
  border: none;
}
.mui-grid-view.mui-grid-9 img{
  width: 60px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border:none;
}
.mui-media-body{
  font-size: 14px;
}
</style>
