<template>
  <div id="app" class="app-container">
    <mt-header fixed title="固定在顶部"></mt-header>
    <router-view/>

    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon icon-gouwuche"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">查找</span>
			</a>
		</nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scope>
.app-container{
  padding-top: 40px;
  overflow-x: hidden;
  padding-bottom: 50px;
}
</style>
