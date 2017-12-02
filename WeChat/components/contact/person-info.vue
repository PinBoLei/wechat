<template>
	<div>

		<div class="_cover-top" _v-f50d4fca="" _v-cada3410="">
			<div class="top-back" _v-f50d4fca="">
				<a href="#/index/contact">
					<div class="_ellipsis iconfont icon-return-arrow v-link-active" _v-f50d4fca="" @click="goback">返回</div>
				</a>
			</div>
			<div class="top-other" _v-f50d4fca="">
				<div class="_align-right" _v-f50d4fca="">
					<a href="#/contact/personInfo/personInfoSet"> <span class="iconfont icon-more" _v-f50d4fca=""></span> </a>
				</div>
			</div>
			<div class="top-title _effect" _v-f50d4fca="">
				<p _v-f50d4fca=""> <span _v-f50d4fca="">详细资料</span> </p>
			</div>
		</div>
		<div class="_full_router component-person-info">
			<div class="_full_inner">

				<div class="_cover-content _effect">
					<div class="_full _scroll">
						<div class="weui_cells">
							<div class="weui_cell">
								<div class="card_pic _left">
									<img :src="img" />
								</div>
								<div class="card_line">
									<div class="remark">
										{{remark}}
										<span>
									
									</span><span class="gender gender-man"></span>
									</div>
									<p class="wxid"><span>微信号:</span><span>{{id}}</span></p>
									<p class="nickname">
										<span>昵称:</span>
										<span>{{name}}</span>
									</p>
								</div>
							</div>
						</div>
						<div class="weui_cells weui_cells_access">
							<div class="weui_cell" href="#">
								<div class="weui_cell_bd weui_cell_primary">
									<p>设置备注和标签</p>
								</div>
								<div class="weui_cell_ft">
								</div>
							</div>
							<div class="weui_cell" href="#">
								<div class="weui_cell_bd weui_cell_primary">
									<div>
										<span>电话号码</span>&nbsp;&nbsp;
										<a class="iphone">{{phone}}</a>

									</div>
								</div>
							</div>
						</div>
						<div class="weui_cells weui_cells_access weui_cells_apm">
							<a class="weui_cell" href="#">
								<div class="weui_cell_bd weui_cell_primary">
									<span class="apm _left">地区</span>
									<div class="apm_content"></div>
								</div>
							</a>
							<a class="weui_cell weui_cells_photos" href="#">
								<div class="weui_cell_bd weui_cell_primary">
									<span class="apm _left">个人相册</span>
									<div class="apm_content"></div>
								</div>
								<div class="weui_cell_ft"></div>
							</a>
							<a class="weui_cell" href="#">
								<div class="weui_cell_bd weui_cell_primary">
									<span class="apm _left">更多</span>
									<div class="apm_content"></div>
								</div>
								<div class="weui_cell_ft"><span></span></div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	
	export default {
		computed: {
			id: function() {
				return this.$store.state.id
			},
			name: function() {
				return this.$store.state.name
			},
			phone: function() {
				return this.$store.state.phone
			},
			remark: function() {
				return this.$store.state.remark
			},
			img: function() {
				return this.$store.state.img
			},

		},
		methods: {
			goback() {
				this.$router.goBack()
			}
		}
	}
</script>

<style scoped>
	a {
		color: #FFFFFF;
	}
	
	._cover-top {
		position: relative;
		z-index: 2;
		overflow: hidden;
		height: 45px;
		padding: 0 15px 0 10px;
		line-height: 45px;
		background: linear-gradient(180deg, #303036, #3c3b40);
		opacity: 1;
		color: #fff;
		user-select: none;
		-webkit-user-select: none;
		transition: all .22s ease;
	}
	
	._cover-top .top-back {
		max-width: 85px;
		float: left;
	}
	
	._cover-top .top-other {
		height: 100%;
		max-width: 75px;
		min-width: 50px;
		width: auto;
		float: right;
	}
	
	._cover-top .top-title {
		padding: 0 8px;
		overflow: hidden;
		font-size: 18px;
		justify-content: center;
		text-align: center;
	}
	
	._cover-top .top-title>p {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	._full_router {
		position: absolute;
		z-index: 10;
		top: 45px;
		left: 0;
		height: 100%;
		width: 100%;
	}
	
	.weui_cells_apm .apm {
		width: 85px;
	}
	
	.weui_cells_apm .apm_content {
		overflow: hidden;
	}
	
	.weui_cells_photos .apm {
		line-height: 60px;
	}
	
	.weui_cells_photos .apm_content {
		height: 60px;
	}
	
	.card_pic img {
		width: 100%;
		height: 100%;
		display: block;
	}
	
	.card_line .remark .gender-man {
		background: url(../../resource/images/contact_male.23d5ba6.png);
		background-size: contain;
	}
	a.iphone{
		color: #000;
	}
</style>