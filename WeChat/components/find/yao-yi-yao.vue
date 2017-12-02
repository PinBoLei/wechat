<template>
	<section class="app-content" style="">
		<div class="_full_router component-yao-yi-yao cover-transition">
			<div class="_full_inner">
				<div class="_cover-top">
					<a href="#/index/find" style="color:#fff">
						<div class="top-back">
							<div class="_ellipsis iconfont icon-return-arrow v-link-active">返回</div>
						</div>
					</a>
					<div class="top-other">
						<div class="_align-right"> <span class="iconfont"></span> </div>
					</div>
					<div class="top-title _effect">
						<p> <span>摇一摇</span> </p>
					</div>
				</div>
				<div class="_cover-content _effect">
					<div class="yao-yi-yao-panel">
						<div class="mobile-hand"></div>
					</div>
					<ul class="yao-yi-yao-footer">
						<li v-for="item in menu" @click='chooseItem(item.id)' :class="[item.type,{'current':id==item.id}]">
							<div></div>
							<p v-text="item.name"></p>
						</li>
						<!--<li class="music" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
							<div></div>
							<p>歌曲</p>
						</li>
						<li class="tv current" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
							<div></div>
							<p>电视</p>
						</li>-->
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				bool: false,
				current: 0,
				id: 1,
				menu: [{
					type: 'people',
					name: '人',
					id: 1
				}, {
					type: 'music',
					name: '歌曲',
					id: 2
				}, {
					type: 'tv',
					name: '电视',
					id: 3
				}]
			}
		},
		methods: {
			chooseItem(id) {
				this.id = id;
			}
		}
	}
</script>

<style scoped>
	._cover-content {
		color: #979797;
		background-color: #2d3031;
	}
	
	.yao-yi-yao-panel {
		height: calc(100% - 90px);
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	
	.yao-yi-yao-panel .mobile-hand {
		margin-top: -20%;
		width: 50%;
		padding-top: 50%;
		background-image: url(../../resource/images/yao-yi-yao/mobile-hand.png);
		background-repeat: no-repeat;
		background-position: center center;
		background-size: contain;
	}
	
	.yao-yi-yao-footer {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom: 20px;
		width: 100%;
		left: 0;
	}
	
	.yao-yi-yao-footer li {
		text-align: center;
		padding: 0 20px;
	}
	
	.yao-yi-yao-footer li div {
		width: 40px;
		height: 40px;
		margin-bottom: 5px;
		background-size: contain;
		background-repeat: no-repeat;
	}
	
	.yao-yi-yao-footer li.people div {
		background-image: url(../../resource/images/yao-yi-yao/shake_icon_people.png);
	}
	
	.yao-yi-yao-footer li.music div {
		background-image: url(../../resource/images/yao-yi-yao/shake_icon_music.png);
	}
	
	.yao-yi-yao-footer li.tv div {
		background-image: url(../../resource/images/yao-yi-yao/shake_icon_tv.png);
	}
	
	.yao-yi-yao-footer li.people.current div {
		background-image: url(../../resource/images/yao-yi-yao/shake_icon_people-hl.png);
	}
	
	.yao-yi-yao-footer li.music.current div {
		background-image: url(../../resource/images/yao-yi-yao/shake_icon_music-hl.png);
	}
	
	.yao-yi-yao-footer li.tv.current div {
		background-image: url(../../resource/images/yao-yi-yao/shake_icon_tv-hl.png);
	}
</style>