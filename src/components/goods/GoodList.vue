<template>
  <div class="goodlist">
    <div class="gooditem">
      <img src="//img14.360buyimg.com/mobilecms/s316x316_jfs/t1/2097/27/6065/40109/5ba1cf7dE891db317/a8a31ccc3c16b875.jpg" alt="">
      <h1 class="title">飞利浦电动牙刷钻石智能型 牙刷蓝牙版</h1>
      <div class="goodsinfo">
        <p class="price">
          <span class="now">&yen; 2399</span>
          <span class="old">&yen; 2599</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>

    <div class="gooditem">
      <img src="//img14.360buyimg.com/mobilecms/s316x316_jfs/t1/2097/27/6065/40109/5ba1cf7dE891db317/a8a31ccc3c16b875.jpg" alt="">
      <h1 class="title">飞利浦电动牙刷钻石智能型 充电式声波震动牙刷蓝牙版</h1>
      <div class="goodsinfo">
        <p class="price">
          <span class="now">&yen; 2399</span>
          <span class="old">&yen; 2599</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>

    <div class="gooditem">
      <img src="//img14.360buyimg.com/mobilecms/s316x316_jfs/t1/2097/27/6065/40109/5ba1cf7dE891db317/a8a31ccc3c16b875.jpg" alt="">
      <h1 class="title">飞利浦（PHILIPS）电动牙刷钻石智能型 充电式声波震动牙刷蓝牙版</h1>
      <div class="goodsinfo">
        <p class="price">
          <span class="now">&yen; 2399</span>
          <span class="old">&yen; 2599</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
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
