<template>
	<div>
		<header class="app-header" style="" _v-c8294afa="">
			<div class="_effect" _v-c8294afa="">
				<div class="_cover-top" _v-60c89da3="" _v-c8294afa="" style="overflow:visible">
					<div class="other" _v-60c89da3="">
						<span class="iconfont icon-tips-jia" _v-60c89da3="" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: none;"></span>
						<a href="#/addfriends" style="color:#fff">
							<span class="iconfont icon-tips-add-friend" _v-60c89da3="" style=""></span></a>
						<ul class="tips-menu tips-close" _v-60c89da3="">
							<li _v-60c89da3=""> <span class="iconfont icon-tips-xiaoxi" _v-60c89da3=""></span>
								<div _v-60c89da3="">发起群聊</div>
							</li>
							<li _v-60c89da3=""> <span class="iconfont icon-tips-add-friend" _v-60c89da3=""></span>
								<div _v-60c89da3="">添加朋友</div>
							</li>
							<li _v-60c89da3=""> <span class="iconfont icon-tips-saoyisao" _v-60c89da3=""></span>
								<div _v-60c89da3="">扫一扫</div>
							</li>
							<li _v-60c89da3=""> <span class="iconfont icon-tips-fukuan" _v-60c89da3=""></span>
								<div _v-60c89da3="">收付款</div>
							</li>
						</ul>
						<div class="tips-masker" _v-60c89da3="" style="display: none;"></div>
					</div>
					<div class="center" _v-60c89da3=""> 通讯录 <span class="parentheses" _v-60c89da3="" style="display: none;">12</span> </div>
				</div>
			</div>
		</header>

		<section class="app-content" style="" _v-c8294afa="">
			<div class="_full_inner _effect component-contact" _v-32554b3e="">
				<div class="weui_search_bar" _v-32554b3e="">
					<form class="weui_search_outer">
						<div class="weui_search_inner"> <i class="weui_icon_search"></i> <input type="search" class="weui_search_input" placeholder="搜索" id="">
							<a href="javascript:" class="weui_icon_clear" style="display: none;"></a>
						</div> <label class="weui_search_text" for=""> <i class="weui_icon_search"></i> <span>搜索</span> </label> </form>
					<a href="javascript:" class="weui_search_cancel">取消</a>
				</div>
				<div class="weui_cells_contact-head weui_cells weui_cells_access" style="margin-top:-1px" _v-32554b3e="">
					<a class="weui_cell" href="#/newfriends" _v-32554b3e="">
						<div class="weui_cell_hd" _v-32554b3e=""> <img class="img-obj-cover" src="../resource/images/contact_top-friend-notify.f6191d2.png" _v-32554b3e=""> </div>
						<div class="weui_cell_bd weui_cell_primary" _v-32554b3e="">
							<p _v-32554b3e="">新的朋友</p>
						</div>
					</a>
					<a class="weui_cell" href="#/groupChat" _v-32554b3e="">
						<div class="weui_cell_hd" _v-32554b3e=""> <img class="img-obj-cover" src="../resource/images/contact_top-addgroup.5d99a15.png" _v-32554b3e=""> </div>
						<div class="weui_cell_bd weui_cell_primary" _v-32554b3e="">
							<p _v-32554b3e="">群聊</p>
						</div>
					</a>
					<a class="weui_cell" href="#/newfriends" _v-32554b3e="">
						<div class="weui_cell_hd" _v-32554b3e=""> <img class="img-obj-cover" src="../resource/images/contact_top-tag.7218970.png" _v-32554b3e=""> </div>
						<div class="weui_cell_bd weui_cell_primary" _v-32554b3e="">
							<p _v-32554b3e="">标签</p>
						</div>
					</a>
					<a class="weui_cell" href="#/newfriends" _v-32554b3e="">
						<div class="weui_cell_hd" _v-32554b3e=""><img class="img-obj-cover" src="../resource/images/contact_top-offical.cc0e620.png" _v-32554b3e=""></div>
						<div class="weui_cell_bd weui_cell_primary" _v-32554b3e="">
							<p _v-32554b3e="">公众号</p>
						</div>
					</a>
				</div>
				<div class="contact-friends" v-for="i in arr">
					<p class="contact-alpha" _v-32554b3e="">{{i.team}}</p>
					<a :href="'#/contact/' + i.id" @click="send(i.id,i.name,i.remark,i.phone,i.img)" class="col">
						<div class="weui_cell" _v-32554b3e="" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
							<div class="weui_cell_hd" _v-32554b3e=""> <img _v-32554b3e="" :src="i.img"></div>
							<div class="weui_cell_bd weui_cell_primary" _v-32554b3e="">
								<p _v-32554b3e="">{{i.remark}}</p>
							</div>
						</div>
					</a>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {

		data() {
			return {
				arr: [{
					name: "安可爱的毛驴",
					id: "weid_yantao",
					remark: "安安",
					phone: "1738238395",
					img: "//ad-gold-cdn.xitu.io/14999138688354f1720f589d2d33db77f026bb07c8f67.jpg",
					team: "A"
				}, {
					name: "不可爱的苹果",
					id: "weid_kkk",
					remark: "北北",
					phone: "1738238398",
					img: "//ad-gold-cdn.xitu.io/1499914019068553d2c25d0b33b83481795c552e0b47f.jpg",
					team: "B"
				}, {
					name: "超可爱的草莓",
					id: "weid_111tao",
					remark: "超超",
					phone: "1738238390",
					img: "//ad-gold-cdn.xitu.io/1499913563353063825fa09e5e83359a90c91417e029e.jpg",
					team: "C"
				}, {
					name: "大可爱的羊驼",
					id: "weid_2222tao",
					remark: "大海",
					phone: "1738238391",
					img: "//ad-gold-cdn.xitu.io/14999138688354f1720f589d2d33db77f026bb07c8f67.jpg",
					team: "D"
				}],
			}
		},
		methods: {
			send(id, name, remark, phone, img) {
				this.$store.state.id = id
				this.$store.state.name = name
				this.$store.state.remark = remark
				this.$store.state.phone = phone
				this.$store.state.img = img
			}
		}

	}
</script>

<style scoped>
	.col {
		color: #000000;
	}
	
	.app-content {
		padding-top: 45px;
		padding-bottom: 50px;
		overflow: hidden;
		position: relative;
		height: 100%;
	}
	
	.weui_cell {
		background: #fff;
	}
	
	.app-content ._full_inner {
		z-index: 2;
	}
</style>