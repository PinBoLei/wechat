<template>
	<div>
	<div class="_cover-top" _v-f50d4fca="" _v-cada3410="">
			<div class="top-back" _v-f50d4fca="">
				<a href="#/contact/personInfo"><div class="_ellipsis iconfont icon-return-arrow v-link-active" _v-f50d4fca="">返回</div></a>
			</div>
			
			<div class="top-title _effect" _v-f50d4fca="">
				<p _v-f50d4fca=""> <span _v-f50d4fca="">详细资料</span> </p>
			</div>
		</div>
    <div class="_full_router component-xxx">
        <div class="_full_inner">
<!--            <top-handle></top-handle>-->
            <!-- flag -->
            <div class="_cover-content _effect">
                <div class="weui_cells weui_cells_access " >
                    <a class="weui_cell" href="#">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p>设置备注及标签</p>
                        </div>
                        <div class="weui_cell_ft">
                        </div>
                    </a>
                </div>
                <!-- flag -->
                <div class="weui_cells weui_cells_access " >
                    <a class="weui_cell" href="javascript:;">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p>发送他的名片</p>
                        </div>
                        <div class="weui_cell_ft">
                        </div>
                    </a>
                </div>
                <!-- flag -->
                <div class="weui_cells weui_cells_form">
                    <div class="weui_cell weui_cell_switch">
                        <div class="weui_cell_hd weui_cell_primary">设为星标朋友</div>
                        <div class="weui_cell_ft">
                            <input class="weui_switch" type="checkbox">
                        </div>
                    </div>
                </div>
                <!-- flag -->
                <div class="weui_cells weui_cells_form">
                    <div class="weui_cell weui_cell_switch">
                        <div class="weui_cell_hd weui_cell_primary">不让他(她)看我的朋友圈</div>
                        <div class="weui_cell_ft">
                            <input class="weui_switch" type="checkbox">
                        </div>
                    </div>
                    <div class="weui_cell weui_cell_switch">
                        <div class="weui_cell_hd weui_cell_primary">不看他(她)的朋友圈</div>
                        <div class="weui_cell_ft">
                            <input class="weui_switch" type="checkbox">
                        </div>
                    </div>
                </div>
                <!-- flag -->
                <div class="weui_cells weui_cells_access">
                    <div class="weui_cell weui_cell_switch">
                        <div class="weui_cell_hd weui_cell_primary">加入黑名单</div>
                        <div class="">
                            <input class="weui_switch" type="checkbox">
                        </div>
                    </div>
                    <div class="weui_cell">
                        <div class="weui_cell_hd weui_cell_primary">投诉</div>
                        <div class="weui_cell_ft">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- router -->
        <router-view  transition="cover"></router-view>
    </div>
    </div>
</template>
<script>
// import {} from 'getters'

//import topHandle from 'topHandle'
export default {
//  vuex:{
//      getters:{
//
//      },
//      action:{
//
//      }
//  },
//  route:{
//      activate({from,to,next}) {
//          this.$parent.$emit('route-pipe',true)
//          next()
//      },
//      deactivate({from,to,next}){
//          this.$parent.$emit('route-pipe',false)
//          next()
//      }
//  },
//  data() {
//      return {
//          decline:false,
//          topModel:{
//              backText:'',
//              curText:'',
//              nextPath:{poth:''},
//              nextIcon:''
//          }
//      }
//  },
//  methods:{
//      
//  },
//  events:{
//      'route-pipe'(_decline){
//          this.decline = _decline
//      }
//  },
//  created(){
//
//  },
//  ready(){
//
//  },
//  components: {
//      topHandle
//  },
}
</script>
<style scoped>
	a{
		color: #FFFFFF;
	}
    ._full_router {
    position: absolute;
    z-index: 10;
    top: 45px;
    left: 0;
    height: 100%;
    width: 100%;
}
</style>
