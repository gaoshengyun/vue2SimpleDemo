<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a v-for="(item, index) in category" :key="item.id"
            :class="['mui-control-item',item.id == 0 ?'mui-active':'']"
            @click="getPhotoListById(item.id)"
          >{{item.title}}</a>
          </div>
      </div>
    </div>

    <ul class="photo-list">
      <router-link :to="'/home/photoinfo/'+item.id" v-for="(item,index) in list" :key="item.id" tag="li">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{item.title}}</h1>
          <div class="info-body">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
//导入mui的js文件
import mui from '../../static/vendor/mui/dist/js/mui.min.js'
import { Lazyload } from 'mint-ui';

export default {
  data() {
    return {
      category : [],
      list : []
    }
  },
  created() {
    this.getCategory()
    this.getPhotoListById(0)
  },
  methods:{
    getCategory(){
      this.axios.get('api/getcategory').then(result => {
        if (result.status === 200) {
          this.category = result.data.message
          //console.log(result.data.message)
        }else{
          alert('获取数据失败')
        }
      })
    },
    getPhotoListById(id){
      //根据id获取图片分类列表
      this.axios.get('api/getimages/'+id).then((result) => {
        if(result.status === 200){
          console.log(result.data)
          this.list = result.data.message
        }
      })
    }
  },
  mounted() {
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005 
    });
  },
}
</script>
<style>
* {
  touch-action: pan-y
}
.mint-header.is-fixed{
  z-index: 99;
}
.photo-list{
  margin: 0;
  padding: 10px; 
  padding-bottom: 0;
}
.photo-list li{
  list-style: none;
  text-align: center;
  margin-bottom: 10px;
  box-shadow: 0 0 9px #999;
  position: relative;
}
.photo-list li img{
  width: 100%;
  vertical-align: middle;
}
.photo-list li img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.photo-list li .info{
  text-align: left;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color:rgba(0,0,0,.4);
  max-height: 84px;
  overflow: hidden;
}
.photo-list li .info-title{
  color: #fff;
  font-size: 14px;
}
.photo-list li .info-body{
  color: #fff;
  font-size: 12px;
}
</style>
