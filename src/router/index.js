import Vue from "vue"
import Router from "vue-router"
const weixin = resolve => require(["../components/wechat/wechat.vue"], resolve) // 微信
const friendChat = resolve =>
  require(["../components/wechat/dialogue.vue"], resolve) // 好友聊天页面
const addFriends = resolve =>
  require(["../components/contact/add-friend.vue"], resolve) // 添加好友页面
const groupChatInfo = resolve =>
  require(["../components/wechat/dialogue-info.vue"], resolve) // 群聊的聊天信息页面
const friendChatInfo = resolve =>
  require(["../components/wechat/dialogue-detail.vue"], resolve) // 好友的聊天信息页面
const addressBook = resolve =>
  require(["../components/contact/contact.vue"], resolve) // 通讯录
const dataDetail = resolve =>
  require(["../components/contact/details.vue"], resolve) // 个人资料页面
const addressBookFriends = resolve =>
  require(["../components/contact/mobile-contacts.vue"], resolve) // 通讯录朋友（入口：通讯录-新的朋友-添加手机联系人）
const thePublicList = resolve =>
  require(["../components/contact/official-accounts.vue"], resolve) // 我的公众号页面
const groupChatList = resolve =>
  require(["../components/contact/group-list.vue"], resolve) // 我的群聊页面
const newFriends = resolve =>
  require(["../components/contact/new-friends.vue"], resolve) // 新的朋友页面
const tags = resolve => require(["../components/contact/tags.vue"], resolve) // 标签页面
Vue.use(Router)
//app整体由店面页和店内页组成 暂时并没有用到嵌套路由
const routes = [
  {
    path: "/",
    name: "微信",
    component: weixin
  },
  {
    path: "/wechat/dialogue",
    name: "",
    components: {
      default: weixin,
      subPage: friendChat
    }
  },
  {
    path: "/wehchat/add-friend",
    name: "",
    components: {
      default: weixin,
      subPage: addFriends
    }
  },
  {
    path: "/wechat/dialogue/dialogue-info",
    name: "",
    components: {
      subPage: groupChatInfo
    }
  },
  {
    path: "/wechat/dialogue/dialogue-detail",
    name: "",
    components: {
      subPage: friendChatInfo
    }
  },
  {
    path: "/contact",
    name: "通讯录",
    component: addressBook
  },
  {
    path: "/contact/add-friend",
    name: "",
    components: {
      default: addressBook,
      subPage: addFriends
    }
  },
  {
    path: "/contact/details",
    name: "",
    components: {
      default: addressBook,
      subPage: dataDetail
    }
  },
  {
    path: "/contact/new-friends/mobile-contacts",
    name: "通讯录朋友",
    components: {
      subPage: addressBookFriends
    }
  },
  {
    path: "/contact/official-accounts",
    name: "",
    components: {
      default: addressBook,
      subPage: thePublicList
    }
  },
  {
    path: "/contact/group-list",
    name: "",
    components: {
      default: addressBook,
      subPage: groupChatList
    }
  },
  {
    path: "/contact/new-friends",
    name: "",
    components: {
      default: addressBook,
      subPage: newFriends
    }
  },
  {
    path: "/contact/tags",
    name: "新的朋友",
    components: {
      default: addressBook,
      subPage: tags
    }
  },
  {
    path: "/explore",
    name: "发现",
    component: resolve =>
      require(["../components/explore/explore.vue"], resolve)
  },
  {
    path: "/explore/moments",
    name: "朋友圈",
    components: {
      default: resolve =>
        require(["../components/explore/explore.vue"], resolve),
      subPage: resolve =>
        require(["../components/explore/moments.vue"], resolve)
    }
  },
  {
    path: "/self",
    name: "我",
    component: resolve => require(["../components/self/self.vue"], resolve)
  },
  {
    path: "/self/album",
    components: {
      default: resolve => require(["../components/self/self.vue"], resolve),
      subPage: resolve => require(["../components/common/album.vue"], resolve)
    }
  },
  {
    path: "/self/settings",
    components: {
      default: resolve => require(["../components/self/self.vue"], resolve),
      subPage: resolve => require(["../components/self/settings.vue"], resolve)
    }
  },
  {
    path: "/self/settings/security",
    components: {
      subPage: resolve =>
        require(["../components/self/settings/security.vue"], resolve)
    }
  },
  {
    path: "/self/settings/notice",
    components: {
      subPage: resolve =>
        require(["../components/self/settings/notice.vue"], resolve)
    }
  },
  {
    path: "/self/settings/privacy",
    components: {
      subPage: resolve =>
        require(["../components/self/settings/privacy.vue"], resolve)
    }
  },
  {
    path: "/self/settings/common",
    components: {
      subPage: resolve =>
        require(["../components/self/settings/common.vue"], resolve)
    }
  },
  {
    path: "/self/profile",
    components: {
      default: resolve => require(["../components/self/self.vue"], resolve),
      subPage: resolve => require(["../components/common/profile.vue"], resolve)
    }
  },
  {
    path: "/self/profile/my-qrcode",
    components: {
      subPage: resolve => require(["../components/self/my-qrcode.vue"], resolve)
    }
  },
  {
    path: "/self/settings",
    components: {
      subPage: resolve =>
        require(["../components/settings/settings.vue"], resolve)
    }
  },
  {
    path: "/self/settings/common",
    components: {
      subPage: resolve =>
        require(["../components/settings/common/common.vue"], resolve)
    }
  },
  {
    path: "/self/settings/common/language",
    components: {
      subPage: resolve =>
        require(["../components/settings/common/language.vue"], resolve)
    }
  }
]
export default new Router({
  base: "/vue-wechat/",
  routes
  // scrollBehavior(to, from, savedPosition) {
  //     if (savedPosition) {
  //         return savedPosition
  //     } else {
  //         return { x: 0, y: 0 }
  //     }
  // }
})
