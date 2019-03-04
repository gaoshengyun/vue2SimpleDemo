<template>
  <div id="app" class="app-container">
    <mt-header fixed title="固定在顶部"></mt-header>
    <transition>
      <router-view/>
    </transition>
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-repair" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-repair" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-repair" to="/shopcar">
				<span class="mui-icon icon-gouwuche"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-repair" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">查找</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.app-container{
  padding-top: 40px;
  overflow-x: hidden;
  padding-bottom: 50px;
}

.v-enter,.v-leave-to{
  opacity: 0;
  transform: translateX(100%);
  position: absolute;
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,.v-leave-active{
  transition: all .8s ease
}

.mui-bar-tab .mui-tab-item-repair.mui-active{
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-repair{
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-repair .mui-icon{
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-repair .mui-icon~.mui-tab-label{
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
