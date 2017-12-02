<template>
	

		<section class="app-content" style="" _v-c8294afa="">
			
				<div class="_full_router component-chat-detail cover-transition" _v-100525be="" _v-afd9c2a0="">
					<div class="_full_inner" _v-100525be="">
						<div class="_cover-top" _v-f50d4fca="" _v-100525be="">
							<div class="top-back" _v-f50d4fca="">
								<div class="_ellipsis iconfont icon-return-arrow v-link-active" _v-f50d4fca="" @click="goback">返回</div>
							</div>
							<div class="top-other" _v-f50d4fca="">
								<div class="_align-right" _v-f50d4fca=""> <span class="iconfont" _v-f50d4fca=""></span> </div>
							</div>
							<div class="top-title _effect" _v-f50d4fca="">
								<p _v-f50d4fca=""> <span _v-f50d4fca="">聊天详情</span> </p>
							</div>
						</div>
						<div class="_cover-content _effect" _v-100525be="">
							<div class="_full _scroll" _v-100525be="">
								<ul class="chat-dialogue-entry-collect" _v-100525be="">
									<li _v-100525be="" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
										<router-link to="/contact/personInfo">
										<div class="pic" _v-100525be="" style="background-image: url(&quot;//ad-gold-cdn.xitu.io/14999138688354f1720f589d2d33db77f026bb07c8f67.jpg&quot;);"> </div>
										<p class="username _ellipsis" _v-100525be="">{{chatname}}</p></router-link>
									</li>
									<li _v-100525be="">
										<div class="pic" _v-100525be="">
											<div _v-100525be=""> <span class="iconfont icon-chat-detail-add" _v-100525be=""></span> </div>
										</div>
									</li>
								</ul>
								<div class="weui_cells weui_cells_form" _v-100525be="">
									<div class="weui_cell weui_cell_switch" _v-100525be="">
										<div class="weui_cell_hd weui_cell_primary" _v-100525be="">置顶聊天</div>
										<div class="weui_cell_ft" _v-100525be=""> <input class="weui_switch" type="checkbox" _v-100525be=""> </div>
									</div>
									<div class="weui_cell weui_cell_switch" _v-100525be="">
										<div class="weui_cell_hd weui_cell_primary" _v-100525be="">消息免打扰</div>
										<div class="weui_cell_ft" _v-100525be=""> <input class="weui_switch" type="checkbox" _v-100525be=""> </div>
									</div>
								</div>
								<div class="weui_cells weui_cells_access" _v-100525be="">
									<a class="weui_cell" href="javascript:;" _v-100525be="">
										<div class="weui_cell_bd weui_cell_primary" _v-100525be="">
											<p _v-100525be="">聊天文件</p>
										</div>
										<div class="weui_cell_ft" _v-100525be=""> </div>
									</a>
								</div>
								<div class="weui_cells weui_cells_access" _v-100525be="">
									<a class="weui_cell" href="javascript:;" _v-100525be="">
										<div class="weui_cell_bd weui_cell_primary" _v-100525be="">
											<p _v-100525be="">设置当前聊天背景</p>
										</div>
										<div class="weui_cell_ft" _v-100525be=""> </div>
									</a>
									<a class="weui_cell" href="javascript:;" _v-100525be="">
										<div class="weui_cell_bd weui_cell_primary" _v-100525be="">
											<p _v-100525be="">查找聊天内容</p>
										</div>
										<div class="weui_cell_ft" _v-100525be=""> </div>
									</a>
								</div>
								<div class="weui_cells" _v-100525be="">
									<div class="weui_cell" _v-100525be="">
										<div class="weui_cell_bd weui_cell_primary" _v-100525be="">
											<p _v-100525be="">清空聊天记录</p>
										</div>
									</div>
								</div>
								<div class="weui_cells weui_cells_access" _v-100525be="">
									<a class="weui_cell" href="javascript:;" _v-100525be="">
										<div class="weui_cell_bd weui_cell_primary" _v-100525be="">
											<p _v-100525be="">投诉</p>
										</div>
										<div class="weui_cell_ft" _v-100525be=""> </div>
									</a>
								</div> <br _v-100525be=""> <br _v-100525be=""> </div>
						</div>
					</div>
				</div>
			</div>
		</section>

	
</template>

<script>
	export default {

		name: 'chatperson',
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

<style>

</style>