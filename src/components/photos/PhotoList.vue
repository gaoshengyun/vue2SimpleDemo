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
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
          >{{item.title}}</a>
          </div>
      </div>
    </div>

    <ul>
      <li v-for="(item,index) in list" :key="index">
        <img v-lazy="item">
      </li>
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
  },
  methods:{
    getCategory(){
      this.axios.get('api/getcategory').then(result => {
        if (result.status === 200) {
          this.category = result.data.message
          console.log(result.data.message)
        }else{
          alert('获取数据失败')
        }
      })
    },
    getPhotoListById(){
      
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
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
