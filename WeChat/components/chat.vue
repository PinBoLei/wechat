<template>
	<div>
		<header class="app-header" style="" _v-c8294afa="">
			<div class="_effect" _v-c8294afa="">
				<div class="_cover-top" _v-60c89da3="" _v-c8294afa="" style="overflow:visible">
					<div class="other" _v-60c89da3="">
						<span @click="changeBool" class="iconfont icon-tips-jia" _v-60c89da3="" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></span>
						<span class="iconfont icon-tips-add-friend" _v-60c89da3="" style="display: none;"></span>
						<ul class="tips-menu tips-close" _v-60c89da3="" :class="{'tips-open':bool}">
							<a href="#/groupChat" style="color: #fff;">
							<li _v-60c89da3=""> <span class="iconfont icon-tips-xiaoxi" _v-60c89da3=""></span>
								<div _v-60c89da3="">发起群聊</div>
							</li>
							</a>
							<a href="#/addfriends" style="color: #fff;">
							<li _v-60c89da3=""> <span class="iconfont icon-tips-add-friend" _v-60c89da3=""></span>
								<div _v-60c89da3="">添加朋友</div>
							</li>
							</a>
							<a href="#/saoyisao" style="color: #fff;">
							<li _v-60c89da3=""> <span class="iconfont icon-tips-saoyisao" _v-60c89da3=""></span>
								<div _v-60c89da3="">扫一扫</div>
							</li>
							</a>
							<li _v-60c89da3=""> <span class="iconfont icon-tips-fukuan" _v-60c89da3=""></span>
								<div _v-60c89da3="">收付款</div>
							</li>
							
						</ul>
						<div class="tips-masker" _v-60c89da3="" style="display: none;"></div>
					</div>
					<div class="center" _v-60c89da3=""> 微信 <span class="parentheses" _v-60c89da3="" style="">12</span> </div>
				</div>
			</div>
		</header>
		<!--<router-view></router-view>-->
		<!--</div>-->

		<section class="app-content" style="" _v-c8294afa="">
			<div class="_full_inner _scroll _effect component-chat" _v-c7cde232="">
				<div class="weui_search_bar" _v-c7cde232="" >
					<form class="weui_search_outer" @click="changeBo">
						<div class="weui_search_inner"  :class="{'weui_search_inner-open':bo}"> 
							<i class="weui_icon_search" ></i> 
							<input type="text" class="weui_search_input" placeholder="搜索" >
							<a href="javascript:" class="weui_icon_clear" style="display: none;"></a>
						</div> 
						<label class="weui_search_text" :class="{'weui_search_text1':bo}">
							<i class="weui_icon_search"></i> 
							<span>搜索</span> 
						</label> 
					</form>
					<a href="javascript:" class="weui_search_cancel" :class="{'weui_search_open':bo}">取消</a>
				</div>
				<ul class="wechat-list" _v-c7cde232="">
					<li class="item _line-fine chat-item-transition" _v-c7cde232="" v-for="a in arr">
						<div class="info" _v-c7cde232="" style="touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
							<div class="ico-box" _v-c7cde232=""> <i _v-c7cde232="" class="_news-count">{{a.num}}</i>
								<div class="ico" _v-c7cde232=""> <img alt="pic" _v-c7cde232="" :src='a.img'> </div>
							</div>
							<div class="desc" _v-c7cde232="" >
								<!--<router-link to="/index/chat/chatWith" >-->
									<a href = "#/index/chat/chatWith" @click= "send(a.chatname)">
									<div class="desc-time" _v-c7cde232="">{{a.chattime}}</div>
									<div class="desc-title" _v-c7cde232="">{{a.chatname}}</div>
									<div class="desc-message" _v-c7cde232="">
										<div class="desc-mute iconfont icon-mute" _v-c7cde232="" title="false" style="display: none;"></div> <span _v-c7cde232="" title="friends">{{a.chatname}}</span> <span _v-c7cde232="">{{a.chatcon}}</span> </div>
									</a>
								<!--</router-link>-->
							</div>
						</div>
						<div class="handle" _v-c7cde232="">
							<div class="handle-unread" _v-c7cde232="" style="display: none; touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">标为未读</div>
							<div class="handle-unread" _v-c7cde232="" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">标为已读</div>
							<div class="handle-del" _v-c7cde232="" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">删除</div>
						</div>
					</li>
					<!--<li class="item _line-fine chat-item-transition" _v-c7cde232="">
						<div class="info" _v-c7cde232="" style="touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
							<div class="ico-box" _v-c7cde232=""> <i _v-c7cde232="" class="_news-dot">1</i>
								<div class="ico" _v-c7cde232=""> <img alt="pic" _v-c7cde232="" src="//ad-gold-cdn.xitu.io/1499913766441c45960d8bd44ed5ffcf0d4a67d0aa317.jpg"> </div>
							</div>
							<div class="desc" _v-c7cde232="">
								<div class="desc-time" _v-c7cde232="">17:30</div>
								<div class="desc-title" _v-c7cde232="">工作群</div>
								<div class="desc-message" _v-c7cde232="">
									<div class="desc-mute iconfont icon-mute" _v-c7cde232="" title="true"></div> <span _v-c7cde232="" title="group" style="display: none;">领导:</span> <span _v-c7cde232="">大家下班的时候记得锁好门</span> </div>
							</div>
						</div>
						<div class="handle" _v-c7cde232="">
							<div class="handle-unread" _v-c7cde232="" style="display: none; touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">标为未读</div>
							<div class="handle-unread" _v-c7cde232="" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">标为已读</div>
							<div class="handle-del" _v-c7cde232="" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">删除</div>
						</div>
					</li>
					<li class="item _line-fine chat-item-transition" _v-c7cde232="">
						<div class="info" _v-c7cde232="" style="touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
							<div class="ico-box" _v-c7cde232=""> <i _v-c7cde232="" class="_news-count">11</i>
								<div class="ico" _v-c7cde232=""> <img alt="pic" _v-c7cde232="" src="//ad-gold-cdn.xitu.io/14999139497307c668d55b4dd5984b6accc6bf41206a8.jpg"> </div>
							</div>
							<div class="desc" _v-c7cde232="">
								<div class="desc-time" _v-c7cde232="">16:26</div>
								<div class="desc-title" _v-c7cde232="">稀土圈</div>
								<div class="desc-message" _v-c7cde232="">
									<div class="desc-mute iconfont icon-mute" _v-c7cde232="" title="false" style="display: none;"></div> <span _v-c7cde232="" title="service" style="display: none;">:</span> <span _v-c7cde232="">挖掘最优质的互联网技术</span> </div>
							</div>
						</div>
						<div class="handle" _v-c7cde232="">
							<div class="handle-unread" _v-c7cde232="" style="display: none; touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">标为未读</div>
							<div class="handle-unread" _v-c7cde232="" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">标为已读</div>
							<div class="handle-del" _v-c7cde232="" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">删除</div>
						</div>
					</li>
					<li class="item _line-fine chat-item-transition" _v-c7cde232="">
						<div class="info" _v-c7cde232="" style="touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
							<div class="ico-box" _v-c7cde232=""> <i _v-c7cde232="" class="_news-count" style="display: none;">0</i>
								<div class="ico" _v-c7cde232=""> <img alt="pic" _v-c7cde232="" src="//tb1.bdstatic.com/tb/cms/ngmis/file_1453447545023.jpg"> </div>
							</div>
							<div class="desc" _v-c7cde232="">
								<div class="desc-time" _v-c7cde232="">16:26</div>
								<div class="desc-title" _v-c7cde232="">饿了么</div>
								<div class="desc-message" _v-c7cde232="">
									<div class="desc-mute iconfont icon-mute" _v-c7cde232="" title="false" style="display: none;"></div> <span _v-c7cde232="" title="service" style="display: none;">:</span> <span _v-c7cde232="">饿了么网上订餐平台</span> </div>
							</div>
						</div>
						<div class="handle" _v-c7cde232="">
							<div class="handle-unread" _v-c7cde232="" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">标为未读</div>
							<div class="handle-unread" _v-c7cde232="" style="display: none; touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">标为已读</div>
							<div class="handle-del" _v-c7cde232="" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">删除</div>
						</div>
					</li>-->
				</ul>
			</div>
		</section>

		<transition :name="transitionName">
			<router-view class="child-view"></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		/*Vuex: {
			modules: {
				a: {
					state: {
						chatTime: "14:00",
						chatName: ""
					}
				}
			}
		},*/
		data() {
			return {
				transitionName: 'slide-left',
				bool: false,
				bo: false,
				arr: [{
					chattime: "14:00",
					chatname: "Tom",
					chatcon: "有空打球去",
					num: 1,
					img: "//ad-gold-cdn.xitu.io/14999138688354f1720f589d2d33db77f026bb07c8f67.jpg"
				}, {
					chattime: "17:30",
					chatname: "工作群",
					chatcon: "下班别忘了关门",
					num: "",
					img: "//ad-gold-cdn.xitu.io/1499913766441c45960d8bd44ed5ffcf0d4a67d0aa317.jpg"
				}, {
					chattime: "09:00",
					chatname: "公众号",
					chatcon: "hello world",
					num: 11,
					img: "//ad-gold-cdn.xitu.io/14999139497307c668d55b4dd5984b6accc6bf41206a8.jpg"
				}, {
					chattime: "07:00",
					chatname: "饿了么",
					chatcon: "网上订餐",
					num: "",
					img: "//tb1.bdstatic.com/tb/cms/ngmis/file_1453447545023.jpg"
				}]
			}
		},
		methods:{
			changeBool: function(){
				this.bool = !this.bool;
			},
			changeBo: function(){
				this.bo = !this.bo;
			},
			send: function(chatname){
				console.log(this.$store.state.chatname)
				this.$store.state.chatname = chatname
			}
		},
		beforeRouteUpdate(to, from, next) {
			let isBack = this.$router.isBack
			console.log(this)
			if(isBack) {
				console.log(isBack + 'h')
				this.transitionName = 'slide-right'
				console.log(this.transitionName)
			} else {
				this.transitionName = 'slide-left'
				console.log(isBack + 'w')
			}
			this.$router.isBack = false
			next()
		}
	}
</script>

<style scoped>
	.app-content {
		padding-top: 45px;
		padding-bottom: 50px;
		overflow: hidden;
		position: relative;
		height: 100%;
	}
	
	.app-content ._full_inner {
		z-index: 2;
	}
	
	.child-view {
		position: absolute;
		width: 100%;
		transition: all .3s cubic-bezier(.55, 0, .1, 1);
	}
	
	.slide-left-enter,
	.slide-right-leave-active {
		opacity: 0;
		-webkit-transform: translate(50px, 0);
		transform: translate(50px, 0);
	}
	
	.slide-left-leave-active,
	.slide-right-enter {
		opacity: 0;
		-webkit-transform: translate(-50px, 0);
		transform: translate(-50px, 0);
	}
	
	.app-header .other .tips-open{
		opacity: 1;
		transform: scale(1);
	}
	
	.weui_search_outer .weui_search_inner-open{
		z-index: 3;
	}
	.weui_search_open{
		display: block;
	}
	.weui_search_text1{
		display: none;
	}
</style>