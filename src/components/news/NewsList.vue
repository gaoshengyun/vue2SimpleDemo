<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(item, index) in newsList" :key="item.id">
        <router-link :to="'/home/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间:{{item.add_time | dataFormat('YYYY-MM-DD')}}</span>
              <span>点击: {{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui"
export default {
  data(){
    return {
      newsList : this.getNewsList()
    }
  },
  created(){
    this.getNewsList()
  },
  methods:{
    getNewsList(){
      this.axios.get('api/newslist').then(result => {
        //console.log(result)
        if(result.status === 200){
          this.newsList = result.data.message
        } else {
          Toast("加载列表失败");
        }
      })
    }
  }
};
</script>


<style>
.mui-table-view li h1{
  font-size: 14px;
}
.mui-ellipsis{
  font-size: 12px;
  color: #226aff;
  display: flex;
  justify-content: space-between
}
</style>

