<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import './styles/_reset.less';
@import './styles/reset.css';

.mintui {
	font-size: .6rem;
}

html, body, #app {
	width: 100%;
	height: 100%;
  	font-family: Helvetica, Tahoma, Arial, 'Microsoft Yahei UI', 'Avenir', sans-serif;
  	-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
  	font-size: .24rem;
}
</style>
