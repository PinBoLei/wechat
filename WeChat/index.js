import Vue from "vue"
import Vuex from "vuex"
import VueRouter from "vue-router"
import $ from "jquery"
//import "weui"
//window.$ = $
import "./resource/css/base.css"

Vue.use(Vuex)
Vue.use(VueRouter)
//引入组件

import xfooter from "./components/xfooter.vue"
import chat from "./components/chat.vue"
import contact from "./components/contact.vue"
import find from "./components/find.vue"
import me from "./components/me.vue"

import chatWith from "./components/chat/chatWith.vue"
import chatperson from "./components/chat/chatperson.vue"
//引入contact中的组件
import newfriends from "./components/contact/new-friends.vue"
import groupChat from "./components/contact/group-chat.vue"
import addfriends from "./components/contact/add-friends.vue"
import personInfo from "./components/contact/person-info.vue"
import personInfoSet from "./components/contact/person-info-set.vue"

//引入find中的组件
import friends from "./components/find/friends.vue"
import saoyisao from "./components/find/sao-yi-sao.vue"
import yaoyiyao from "./components/find/yao-yi-yao.vue"
import driftBottle from "./components/find/drift-bottle.vue"

VueRouter.prototype.goBack = function() {
	this.isBack = true
	this.go(-1);
}

let router = new VueRouter({
	routes: [{
		path: "/index",
		component: xfooter,
		children: [{
			path: "chat",
			component: chat,
			children: [{
				path: "chatWith",
				component: chatWith
			}]
		}, {
			path: "contact",
			component: contact
		}, {
			path: "find",
			component: find
		}, {
			path: "me",
			component: me
		}]
	}, {
		path: "/newfriends",
		component: newfriends
	}, {
		path: "/groupChat",
		component: groupChat
	}, {
		path: "/addfriends",
		component: addfriends
	}, {
		path: "/contact/:num",
		component: personInfo
	}, {
		path: "/contact/personInfo/personInfoSet",
		component: personInfoSet
	}, {
		path: "/friends",
		component: friends
	}, {
		path: "/saoyisao",
		component: saoyisao
	}, {
		path: "/yaoyiyao",
		component: yaoyiyao
	}, {
		path: "/driftBottle",
		component: driftBottle
	}, {
		path: "/chatperson",
		component: chatperson
	}, {
		path: '/',
		redirect: '/index/chat'
	}]
})

let store = new Vuex.Store({
	state: {
		chatname: "Tom",
		name: "可爱的毛驴",
		id: "weid_yantao",
		remark: "杨涛",
		phone: "1738238393",
		img: "//ad-gold-cdn.xitu.io/14999138688354f1720f589d2d33db77f026bb07c8f67.jpg"
	}
})

new Vue({
	el: "#app",
	store,
	router,
	data: {

	},
	template: `
		<router-view></router-view>
	`
})