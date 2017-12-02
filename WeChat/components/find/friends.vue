<template>
	<section class="app-content" style="">
		<div class="_full_router component-albums-friends cover-transition" >
			<div class="_full_inner" >
				<div class="_cover-top"  >
					<div class="top-back">
						<a href="#/index/find" style="color:#fff" >
							<div class="_ellipsis iconfont icon-return-arrow v-link-active" >返回</div>
						</a>
					</div>
					<div class="top-other" >
						<div class="_align-right" > <span class="iconfont" ></span> </div>
					</div>
					<div class="top-title _effect" >
						<p > <span >朋友圈</span> </p>
					</div>
				</div>
				<div class="_cover-content _effect">
					<div class="drag-reflash" style="top: -40px; transform: rotate(0deg);></div>
					<div class="drag-wrap" id="drag-wrap" >
						<div class="drag-inner" id="drag-inner"  style="transform: translate3d(0px, 0px, 0px);">
							<header class="home-pic" >
								<div class="home-pic-base" >
									<div class="top-pic" >
										<div class="top-pic-inner" style="background-image:url(http://ad-gold-cdn.xitu.io/14999138688354f1720f589d2d33db77f026bb07c8f67.jpg)" > </div>
									</div>
									<div class="top-name _ellipsis">yangtao</div>
								</div>
							</header>
							<section class="home-content">

							</section>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--</transition>-->
</template>

<script>
	
</script>

<style scoped>
	._cover-content {
		width: 100%;
		padding-top: 0;
		overflow: hidden;
	}
	
	.drag-wrap {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: auto;
		background-color: #2e3132;
	}
	
	.drag-inner {
		width: 100%;
		/* height: 1000px; */
		box-shadow: 0px 4px 16px rgba(0, 0, 0, .15);
		background-color: #ffffff;
	}
	
	.home-pic {
		width: 100%;
		margin-top: -90px;
		position: relative;
		height: 370px;
		background: url(../../resource/images/find-bg.png) no-repeat center center;
		background-size: cover;
	}
	
	.home-pic-base {
		position: absolute;
		left: 0;
		bottom: -22px;
		width: 100%;
		height: 70px;
		padding: 0 15px;
	}
	
	.home-pic-base .top-pic {
		width: 140px;
		height: 140px;
		padding: 3px;
		transform: scale(.5);
		transform-origin: 100% 0%;
		background-color: #ffffff;
		border: 1px solid #cccccc;
		float: right;
	}
	
	.home-pic-base .top-name {
		position: absolute;
		left: 20px;
		right: 105px;
		top: 10px;
		font-size: 20px;
		text-align: right;
		color: #ffffff;
		overflow: hidden;
	}
	
	.top-pic-inner {
		width: 100%;
		height: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
	}
	
	.drag-reflash {
		position: absolute;
		left: 20px;
		top: -40px;
		z-index: 2;
		width: 30px;
		height: 30px;
		background: url(../../resource/images/find-album-reflash-icon.png) no-repeat 0 0;
		background-size: contain;
	}
	
	.home-content {
		padding-top: 45px;
		min-height: 500px;
	}
</style>