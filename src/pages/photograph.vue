<template>
  <div class="container">
	<div class="box">
		<img class="myImg" src="../images/bg.jpg">
		<p class="logo"></p>
		<p class="hi"></p>
		<p class="font">我在校长邦TOWER教育创新大会现场<br>我为TOWER代言</p>
		<p class="qrcode"><img src="../images/qrcode.png"></p>
	</div>
	<transition name="fade" mode="out-in">
		<div class="other" v-if="btnShow">
			<p class="des">我们是教育行业的耕耘者，我们为教育挥洒青春拍照上传为教育创业者代言</p>
			<p class="myBtn" @click="selectPhoto"></p>		
		</div>
		<p class="saveBtn" v-else>长按图片保存到手机分享朋友圈嘚瑟一下</p>
	</transition>
	<div class="box1"></div>
  </div>
</template>

<script>
import '../config/html2canvas.js'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
    	btnShow: true
    }
  },
  methods: {
  	selectPhoto () {
  		const $this = this;		

		wx.chooseImage({
			count: 1, // 默认9
			sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有
			sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
			success: function(res) {
				var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
				wx.uploadImage({
					localId: localIds[0], // 需要上传的图片的本地ID，由chooseImage接口获得
					isShowProgressTips: 1, // 默认为1，显示进度提示
					success: function(res) {
						var serverId = res.serverId; // 返回图片的服务器端ID
						const w = $('.box').outerWidth(),
							h = $('.box').outerHeight();
						// alert("图片地址：" + localIds[0]);
						// alert("myImg的src：" + $('.myImg').attr('src'));
						$('.myImg').attr('src', localIds[0]);

						setTimeout(function() {
							html2canvas($(".box"), {
								allowTaint: true,
								taintTest: false,
								width: w,
								height: h,
								scale: window.devicePixelRatio,
								onrendered: function(canvas) {
									var dataUrl = canvas.toDataURL("image/png", 1.0);
									var newImg = document.createElement("img");
									newImg.src = dataUrl;
									$('.box').empty().append(newImg);
									newImg.style.width = '100%';
								}
							});
							Toast({
								message: '已生成照片海报',
								duration: 2000,
								iconClass: 'mint-toast-icon mintui mintui-success'
							});
							$this.btnShow = !$this.btnShow;							
						}, 200)
					},
					fail: function(err) {
						alert(err);
					}
				});
			}
		});
  	},
	doShot() {
		const $this = this,
			w = $('.box').outerWidth(),
			h = $('.box').outerHeight();		

		html2canvas($(".box"), {
			allowTaint: true,
			taintTest: false,
			width: w,
			height: h,
			scale: window.devicePixelRatio,
			onrendered: function(canvas) {
				var dataUrl = canvas.toDataURL("image/png", 1.0);
				var newImg = document.createElement("img");
				newImg.src = dataUrl;
				$('.box').empty().append(newImg);
				newImg.style.width = '100%';
			}
		});
	}
  }
}
</script>

<style lang="less" scoped>
.container {
	text-align: center;
	color: #fff;
	.box {
		width: 100%;
		height: 10rem;
		position: relative;
		overflow: hidden; 
		display: flex;
		flex-direction: column;
		align-items: center;
		.myImg {
			width: 100%;
			position: absolute;
			left: 0;
			top: 0;
			z-index: -1;
		}
		.logo {
			width: 1.49rem;
			height: .84rem;
			background: url('../images/logo.png') 0 0 no-repeat;
			background-size: 100%;
			margin-top: .35rem;
			margin-left: -5.2rem;
		}
		.hi {
			width: 1.66rem;
			height: 1.57rem;
			background: url('../images/hi.png') 0 0 no-repeat;
			background-size: 100%;	
			margin-top: 4rem;		
		}
		.font {
			font-size: .32rem;
			line-height: .5rem;
			text-shadow: 0 0 8px #000;
		}
		.qrcode {
			margin-top: .2rem;
			img {
				width: 1.86rem;
				height: 1.71rem;
			}
		}
	}
	.other {
		.des {
			width: 5.5rem;
			margin: .1rem auto 0;
			font-size: .26rem;
			line-height: .4rem;
			color: #999;
		}
		.myBtn {
			width: 1.5rem;
			height: .97rem;
			margin: .1rem auto 0;
			background: url('../images/camara.png') 0 0 no-repeat;
			background-size: 100%;
		}		
	}
	.saveBtn {
		width: 6rem;
		height: .8rem;
		background: #00CCFF;
		margin: .6rem auto;
		font-size: .3rem;
		line-height: .8rem;
	}
	.fade-enter, .fade-leave-to {
		transform: scale(0.6);
		opacity: 0;
	}
	.fade-enter-active, .fade-leave-active {
		transition: all .8s ease;
	}	
}
</style>