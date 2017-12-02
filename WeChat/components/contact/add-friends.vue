<template>
	<section class="app-content" style="" _v-c8294afa="">
		<div class="_full_router component-add-friends cover-transition" _v-018bc8bb="" _v-32554b3e="">
			<div class="_full_inner" _v-018bc8bb="">
				<div class="_cover-top" _v-f50d4fca="" _v-018bc8bb="">
				<!--	<a href="#/index/contact" style="color:#fff">-->
					<div class="top-back" _v-f50d4fca="" @click="goBack">
						<div class="_ellipsis iconfont icon-return-arrow v-link-active" _v-f50d4fca="">通讯录</div>
					</div>
					<!--</a>-->
					<div class="top-other" _v-f50d4fca="">
						<div class="_align-right" _v-f50d4fca=""> <span class="iconfont" _v-f50d4fca=""></span> </div>
					</div>
					<div class="top-title _effect" _v-f50d4fca="">
						<p _v-f50d4fca=""> <span _v-f50d4fca="">添加朋友</span> </p>
					</div>
				</div>
				<div class="_cover-content _effect" _v-018bc8bb="">
					<div class="search-line" _v-018bc8bb=""> <span class="iconfont icon-search" _v-018bc8bb=""></span> <input type="text" placeholder="微信号/手机号" _v-018bc8bb=""> </div>
					<p class="_align-center" style="padding-top:8px" _v-018bc8bb=""> <span _v-018bc8bb="">我的微信号:</span> <span _v-018bc8bb="">yangtao_0215</span> <b _v-018bc8bb="">&nbsp;<img src="../../resource/images/contact_add-friend-my-qr.f280a71.png" style="width:24px" class="_align-middle" alt="" _v-018bc8bb=""></b> </p>
					<div class="weui_cells weui_cells_access add-friends-options" _v-018bc8bb="">
						<a class="weui_cell" href="javascript:;" _v-018bc8bb="">
							<div class="weui_cell_hd" _v-018bc8bb=""><img src="../../resource/images/contact_add-friend-reda.1f47faa.png" _v-018bc8bb=""></div>
							<div class="weui_cell_bd weui_cell_primary" _v-018bc8bb="">
								<p _v-018bc8bb="">雷达加朋友</p>
								<p _v-018bc8bb="">添加身边的朋友</p>
							</div>
							<div class="weui_cell_ft" _v-018bc8bb=""></div>
						</a>
						<a class="weui_cell" href="javascript:;" _v-018bc8bb="">
							<div class="weui_cell_hd" _v-018bc8bb=""><img src="../../resource/images/contact_add-friend-addgroup.5d99a15.png" _v-018bc8bb=""></div>
							<div class="weui_cell_bd weui_cell_primary" _v-018bc8bb="">
								<p _v-018bc8bb="">面对面建群</p>
								<p _v-018bc8bb="">与身边的朋友进入同一个群聊</p>
							</div>
							<div class="weui_cell_ft" _v-018bc8bb=""></div>
						</a>
						<a class="weui_cell" href="javascript:;" _v-018bc8bb="">
							<div class="weui_cell_hd" _v-018bc8bb=""><img src="../../resource/images/contact_add-friend-scanqr.036d33d.png" _v-018bc8bb=""></div>
							<div class="weui_cell_bd weui_cell_primary" _v-018bc8bb="">
								<p _v-018bc8bb="">扫一扫</p>
								<p _v-018bc8bb="">扫描二维码名片</p>
							</div>
							<div class="weui_cell_ft" _v-018bc8bb=""></div>
						</a>
						<a class="weui_cell" href="javascript:;" _v-018bc8bb="">
							<div class="weui_cell_hd" _v-018bc8bb=""><img src="../../resource/images/contact_add-friend-contacts.dfffc2b.png" _v-018bc8bb=""></div>
							<div class="weui_cell_bd weui_cell_primary" _v-018bc8bb="">
								<p _v-018bc8bb="">手机联系人</p>
								<p _v-018bc8bb="">添加通讯录中的朋友</p>
							</div>
							<div class="weui_cell_ft" _v-018bc8bb=""></div>
						</a>
						<a class="weui_cell" href="javascript:;" _v-018bc8bb="">
							<div class="weui_cell_hd" _v-018bc8bb=""><img src="../../resource/images/contact_add-friend-offical.cc0e620.png" _v-018bc8bb=""></div>
							<div class="weui_cell_bd weui_cell_primary" _v-018bc8bb="">
								<p _v-018bc8bb="">公众号</p>
								<p _v-018bc8bb="">获得更多资讯和服务</p>
							</div>
							<div class="weui_cell_ft" _v-018bc8bb=""></div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		methods:{
			goBack(){
				this.$router.goBack()
			}
		}
	}
</script>

<style scoped>
	.search-line {
		position: relative;
		height: 50px;
		padding-left: 30px;
		padding-top: 5px;
		padding-bottom: 5px;
		background-color: #ffffff;
		border-top: 1px solid #d9d9d9;
		border-bottom: 1px solid #d9d9d9;
		margin-top: 20px;
	}
	
	.search-line .icon-search {
		color: #40b938;
	}
	
	.search-line input {
		width: calc(100% - 30px);
		font-size: 16px;
		height: 100%;
		border: 0;
		outline: none;
		vertical-align: middle;
	}
	
	.add-friends-options img {
		width: 35px;
		display: block;
		margin-right: 10px;
	}
	
	.add-friends-options .weui_cell_primary p {
		font-size: 15px;
	}
	
	.add-friends-options .weui_cell_primary p:first-child {
		/* line-height: 1; */
	}
	
	.add-friends-options .weui_cell_primary p:last-child {
		font-size: 12px;
		color: #b7b7b7;
	}
</style>