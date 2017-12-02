<template>
	<section class="app-content" style="" _v-c8294afa="">
		<div class="_full_router component-new-friends cover-transition" _v-2747733a="" _v-32554b3e="">
			<div class="_full_inner" _v-2747733a="">
				<div class="_cover-top" _v-f50d4fca="" _v-2747733a="">
					<div class="top-back" _v-f50d4fca="">
						<a href="#/index/contact" style="color:#fff">
						<div class="_ellipsis iconfont icon-return-arrow v-link-active" _v-f50d4fca="">通讯录</div>
						</a>
					</div>
					<a href="#/addfriends" style="color: #fff;">
					<div class="top-other" _v-f50d4fca="">
						<div slot="right" class="_align-right" _v-2747733a=""> <span _v-2747733a="">添加朋友</span> </div>
					</div></a>
					<div class="top-title _effect" _v-f50d4fca="">
						<p _v-f50d4fca=""> <span _v-f50d4fca="">新的朋友</span> </p>
					</div>
				</div>
				<div class="_cover-content _effect _full _scroll" _v-2747733a="">
					<div style="margin-top:-1px" _v-2747733a="">
						<div class="weui_search_bar" _v-2747733a="">
							<form class="weui_search_outer">
								<div class="weui_search_inner"> <i class="weui_icon_search"></i> <input type="search" class="weui_search_input" placeholder="搜索">
									<a href="javascript:" class="weui_icon_clear" style="display: none;"></a>
								</div> <label class="weui_search_text"> <i class="weui_icon_search"></i> <span>搜索</span> </label> </form>
							<a href="javascript:" class="weui_search_cancel">取消</a>
						</div>
					</div>
					<div class="weui_cells margin-top-0" _v-2747733a="">
						<div class="weui_cell" _v-2747733a="">
							<dl class="add-tel-address" _v-2747733a=""> <dt _v-2747733a=""><span class="iconfont icon-iphone-address" _v-2747733a=""></span></dt>
								<dd _v-2747733a="">添加手机联系人</dd>
							</dl>
						</div>
					</div>
					<div class="weui_cells message-list" _v-2747733a="">
						<div class="weui_cell" _v-2747733a="" v-for="a in arr">
							<div class="weui_cell_hd" _v-2747733a=""> <img src="//ad-gold-cdn.xitu.io/14999140634069b6825290779221783b3b59fbba0addd.jpg" alt="" style="width:40px;margin-right:5px;display:block" _v-2747733a=""> </div>
							<div class="weui_cell_bd weui_cell_primary" _v-2747733a="">
								<p _v-2747733a=""><b _v-2747733a="">{{a.name}}</b></p>
								<p _v-2747733a=""><span _v-2747733a="">{{a.desc}}</span><span _v-2747733a="">{{a.name}}</span></p>
							</div>
							<div class="weui_cell_ft" _v-2747733a=""><a href="javascript:;" :class="a.type">{{a.states}}</a></div>
						</div>
						<!--<div class="weui_cell" _v-2747733a="">
							<div class="weui_cell_hd" _v-2747733a=""> <img src="//ad-gold-cdn.xitu.io/14999140634069b6825290779221783b3b59fbba0addd.jpg" alt="" style="width:40px;margin-right:5px;display:block" _v-2747733a=""> </div>
							<div class="weui_cell_bd weui_cell_primary" _v-2747733a="">
								<p _v-2747733a=""><b _v-2747733a="">陌生人</b></p>
								<p _v-2747733a=""><span _v-2747733a="">我是群聊""的</span><span _v-2747733a="">陌生人</span></p>
							</div>
							<div class="weui_cell_ft" _v-2747733a="">已添加</div>
						</div>
						<div class="weui_cell" _v-2747733a="">
							<div class="weui_cell_hd" _v-2747733a=""><img src="//ad-gold-cdn.xitu.io/14999140634069b6825290779221783b3b59fbba0addd.jpg" alt="" style="width:40px;margin-right:5px;display:block" _v-2747733a=""></div>
							<div class="weui_cell_bd weui_cell_primary" _v-2747733a="">
								<p _v-2747733a=""><b _v-2747733a="">陌生人</b></p>
								<p _v-2747733a=""><span _v-2747733a="">我是群聊""的</span><span _v-2747733a="">陌生人</span></p>
							</div>
							<div class="weui_cell_ft" _v-2747733a="">已拒绝</div>
						</div>
						<div class="weui_cell" _v-2747733a="">
							<div class="weui_cell_hd" _v-2747733a=""><img src="//ad-gold-cdn.xitu.io/14999140634069b6825290779221783b3b59fbba0addd.jpg" alt="" style="width:40px;margin-right:5px;display:block" _v-2747733a=""></div>
							<div class="weui_cell_bd weui_cell_primary" _v-2747733a="">
								<p _v-2747733a=""><b _v-2747733a="">陌生人</b></p>
								<p _v-2747733a=""><span _v-2747733a="">我是群聊""的</span><span _v-2747733a="">陌生人</span></p>
							</div>
							<div class="weui_cell_ft" _v-2747733a="">
								<a href="javascript:;" class="weui_btn weui_btn_mini weui_btn_primary" _v-2747733a="">接受</a>
							</div>
						</div>-->
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				arr:[{
					name:'陌生人',
					desc:'我是群聊""的',
					states:'已添加',
					type:"aa"
				},{
					name:'陌生人',
					desc:'我是群聊""的',
					states:'已拒绝',
					type:"aa"
				},{
					name:'陌生人',
					desc:'我是群聊""的',
					states:'接受',
					type:"weui_btn weui_btn_mini weui_btn_primary"
				}]
			}
		}
	}
</script>

<style scoped>
	.weui_cell_ft .aa{
		display: inline-block;
		color:#888;
	}
	.add-tel-address {
		margin: 0 auto;
		text-align: center;
	}
	
	.add-tel-address dt .iconfont {
		font-size: 35px;
		color: #4bb94b;
	}
	
	.add-tel-address dd {
		font-size: 14px;
		color: #929292;
	}
	
	.message-list .weui_cell_primary p b {
		font-size: 18px;
		font-weight: normal;
	}
	
	.message-list .weui_cell_primary p span {
		font-size: 14px;
		color: #888888;
	}
</style>