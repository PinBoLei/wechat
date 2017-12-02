<template>
	<section class="app-content" style="" _v-c8294afa="">
		<div class="_full_router component-group-chat cover-transition" _v-420c9804="" _v-32554b3e="">
			<div class="_full_inner" _v-420c9804="">
				<div class="_cover-top" _v-f50d4fca="" _v-420c9804="">
					<a href="#/index/contact" style="color:#fff">
					<div class="top-back" _v-f50d4fca="">
						<div class="_ellipsis iconfont icon-return-arrow v-link-active" _v-f50d4fca="" @click="goback">返回</div>
					</div>
					</a>
					<div class="top-other" _v-f50d4fca="">
						<div class="_align-right" _v-f50d4fca=""> <span class="iconfont" _v-f50d4fca=""></span> </div>
					</div>
					<div class="top-title _effect" _v-f50d4fca="">
						<p _v-f50d4fca=""> <span _v-f50d4fca="">群聊</span> </p>
					</div>
				</div>
				<div class="_cover-content _effect" _v-420c9804="">
					<div class="_full _scroll" _v-420c9804="">
						<div style="margin-top:-1px" _v-420c9804="">
							<div class="weui_search_bar" _v-420c9804="">
								<form class="weui_search_outer">
									<div class="weui_search_inner"> <i class="weui_icon_search"></i> <input type="search" class="weui_search_input" placeholder="搜索">
										<a href="javascript:" class="weui_icon_clear" style="display: none;"></a>
									</div> <label class="weui_search_text"> <i class="weui_icon_search"></i> <span>搜索</span> </label> </form>
								<a href="javascript:" class="weui_search_cancel">取消</a>
							</div>
						</div>
						<div class="weui_cells group-list" _v-420c9804="">
							<div class="weui_cell" _v-420c9804="" v-for="a in arr">
								<div class="weui_cell_hd" _v-420c9804=""><img src="//ad-gold-cdn.xitu.io/1499913766441c45960d8bd44ed5ffcf0d4a67d0aa317.jpg" alt="" _v-420c9804=""></div>
								<div class="weui_cell_bd weui_cell_primary" _v-420c9804="">
									<p _v-420c9804="">{{a.name}}
										<span _v-420c9804="">{{a.num}}</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		data(){
			return {
				arr:[{
					name:"web前端交流群",
					num:0
				},{
					name:"web前端交流群",
					num:1
				},{
					name:"web前端交流群",
					num:2
				},{
					name:"web前端交流群",
					num:3
				},{
					name:"web前端交流群",
					num:4
				},{
					name:"web前端交流群",
					num:5
				},{
					name:"web前端交流群",
					num:6
				},{
					name:"web前端交流群",
					num:7
				},{
					name:"web前端交流群",
					num:8
				},{
					name:"web前端交流群",
					num:9
				},{
					name:"web前端交流群",
					num:10
				}]
			}
		},
		methods: {
			goback() {
				this.$router.goBack()
			}
		},
	}
</script>

<style scoped>
	.component-group-chat .group-list {
		margin-top: -1px;
	}
	
	.component-group-chat .group-list .weui_cell_hd img {
		width: 35px;
		border: 0;
		margin-right: 10px;
		display: block;
	}
	
	.component-group-chat .group-list .weui_cell_bd {
		font-size: 16px;
	}
</style>