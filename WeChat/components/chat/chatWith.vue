<template>
	<!--<transition name="fade">-->
	<div class="_full_router component-chat-dialogue cover-transition" _v-afd9c2a0="" _v-c7cde232="">
		<div class="_full_inner" _v-afd9c2a0="">
			<div class="_cover-top" _v-f50d4fca="" _v-afd9c2a0="">
				<div class="top-back" _v-f50d4fca="">
					<div class="_ellipsis iconfont icon-return-arrow v-link-active" @click="goback" _v-f50d4fca="">微信</div>
				</div>
				<div class="top-other" _v-f50d4fca="">
					<a href="#/chatperson" style="color: #fff;">
					<div class="_align-right" _v-f50d4fca="">
						
							<span class="iconfont icon-chat-friends" _v-f50d4fca=""></span>
						
					</div>
					</a>
				</div>
				<div class="top-title _effect" _v-f50d4fca="">
					<p class="_effect" slot="center" _v-afd9c2a0="">
						<span class="top-title__text _ellipsis" _v-afd9c2a0="">{{chatname}}</span>
						<span class="top-title__num parentheses" _v-afd9c2a0="" style="display: none;">1</span>
						<span class="iconfont icon-mute" _v-afd9c2a0="" style="display: none;"></span> </p>
				</div>
			</div>
			<div class="_cover-content _effect" _v-afd9c2a0="">
				<section class="dialogue-section" _v-afd9c2a0="">
					<div class="dialogue-section-inner" _v-afd9c2a0="">
						<div class="dialogue-item dialogue-item--others" _v-afd9c2a0=""> </div>
						<div class="dialogue-item dialogue-item--time" _v-afd9c2a0=""> </div>
						<div class="dialogue-item dialogue-item--self" _v-afd9c2a0=""> </div>
					</div>
				</section>
				<footer class="dialogue-footer app-footer" _v-afd9c2a0="">
					<div class="component-dialogue-bar-person" _v-afd9c2a0="">
						<span class="iconfont icon-dialogue-jianpan" style="display: none; touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></span>
						<span class="iconfont icon-dialogue-voice" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></span>
						<div class="chat-way" style="display: none;">
							<div class="chat-say" style="touch-action: auto; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
								<span class="one">按住 说话</span> <span class="two">松开 结束</span>
							</div>
						</div>
						<div class="chat-way">
							<input class="chat-txt" type="text">
						</div>
						<span class="expression iconfont icon-dialogue-smile"></span>
						<span class="more iconfont icon-dialogue-jia"></span>
						<div class="recording" style="display: none;">
							<div class="recording-voice" style="display: none;">
								<div class="voice-inner">
									<div class="voice-icon"></div>
									<div class="voice-volume"> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> </div>
								</div>
								<p>手指上划,取消发送</p>
							</div>
							<div class="recording-cancel" style="display: none;">
								<div class="cancel-inner"></div>
								<p>松开手指,取消发送</p>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
	</div>
	<!--</transition>-->
</template>

<script>
	export default {

		name: 'chatWith',
		methods: {
			goback() {
				this.$router.goBack()
			}
		},
		computed: {
			chatname: function() {
				return this.$store.state.chatname
			}
		}
	}
</script>

<style scoped="scoped">
	/*.fade-enter-active,
.fade-leave-active{
	transition: all 0.5s;
}
.fade-enter,
.fade-leave-to{
	right:-100%
}

.fade-enter-to,
.fade-leave{
	right: 0;
}*/
	
	.app-footer {
		bottom: 0;
		left: 0;
		width: 100%;
		position: absolute;
		z-index: 3;
	}
</style>