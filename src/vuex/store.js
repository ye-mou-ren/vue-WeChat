import Vue from "vue"
import Vuex from "vuex"
import OfficialAccounts from "./official-account" //存放所有关注的公众号
import contact from "./contacts" //存放所有联系人的数据
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"
Vue.use(Vuex)
// 统一管理接口域名
let apiPublicDomain = "//vrapi.snail.com/"
const state = {
  currentLang: "zh", //当前使用的语言 zh：简体中文 en:英文 后期需要
  newMsgCount: 0, //新消息数量
  allContacts: contact.contacts, //所有联系人
  OfficialAccounts: OfficialAccounts, //所有关注的公众号
  currentPageName: "微信", //用于在wx-header组件中显示当前页标题
  //backPageName: "", //用于在返回按钮出 显示前一页名字 已遗弃
  headerStatus: true, //显示（true）/隐藏（false）wx-header组件
  tipsStatus: false, //控制首页右上角菜单的显示(true)/隐藏(false)
  // 所有接口地址 后期需要
  apiUrl: {
    demo: apiPublicDomain + ""
  },
  msgList: {
    stickMsg: [], //置顶消息列表 后期需要
    baseMsg: [
      {
        //普通消息列表
        mid: 1, //消息的id 唯一标识，重要
        type: "friend",
        group_name: "",
        group_qrCode: "",
        read: true, //true；已读 false：未读
        newMsgCount: 1,
        quiet: false, // true：消息免打扰 false：提示此好友/群的新消息
        msg: [
          {
            //对话框的聊天记录 新消息 push 进
            text:
              "长按这些白色框消息，唤醒消息操作菜单，长按这些白色框消息，唤醒消息操作菜单",
            date: 1488117964495,
            name: "李白",
            headerUrl: require("../assets/images/portrait/libai.jpg")
          },
          {
            text: "点击空白处，操作菜单消失",
            date: 1488117964495,
            name: "李白",
            headerUrl: require("../assets/images/portrait/libai.jpg")
          },
          {
            text: "来呀 快活啊",
            date: 1488117964495,
            name: "李白",
            headerUrl: require("../assets/images/portrait/libai.jpg")
          }
        ],
        user: [contact.getUserInfo("wxid_libai")] // 此消息的用户数组 长度为1则为私聊 长度大于1则为群聊
      },
      {
        mid: 2,
        type: "group",
        group_name: "web前端高级研发交流群",
        group_qrCode: "",
        read: false,
        newMsgCount: 1,
        quiet: true,
        msg: [
          {
            text: "长按消息，唤醒消息操作菜单",
            date: 1488117964495,
            name: "达摩",
            headerUrl: require("../assets/images/portrait/damo.jpg")
          },
          {
            text: "点击空白处，操作菜单消失",
            date: 1488117964495,
            name: "李白",
            headerUrl: require("../assets/images/portrait/libai.jpg")
          },
          {
            text: "我试一试",
            date: 1488117964495,
            name: "貂蝉",
            headerUrl: require("../assets/images/portrait/diaochan.jpg")
          }
        ],
        user: [
          contact.getUserInfo("wxid_libai"),
          contact.getUserInfo("wxid_diaochan"),
          contact.getUserInfo("wxid_damo")
        ]
      },
      {
        mid: 3,
        type: "group",
        group_name: "Angular中文社区",
        group_qrCode: "",
        read: true,
        newMsgCount: 1,
        quiet: true,
        msg: [
          {
            text: "冒个泡",
            date: 1488117964495,
            name: "兰陵王",
            headerUrl: require("../assets/images/portrait/lanlingwang.jpg")
          }
        ],
        user: [
          contact.getUserInfo("wxid_libai"),
          contact.getUserInfo("wxid_diaochan"),
          contact.getUserInfo("wxid_damo"),
          contact.getUserInfo("wxid_lanlingwang")
        ]
      },
      {
        mid: 4,
        type: "friend",
        group_name: "",
        group_qrCode: "",
        read: false,
        newMsgCount: 4,
        quiet: false,
        msg: [
          {
            text: "长按消息，唤醒消息操作菜单",
            date: 1488117964495,
            name: "鲁班",
            headerUrl: require("../assets/images/portrait/luban.jpg")
          },
          {
            text: "点击空白处，操作菜单消失",
            date: 1488117964495,
            name: "鲁班",
            headerUrl: require("../assets/images/portrait/luban.jpg")
          },
          {
            text: "容我三思",
            date: 1488117964495,
            name: "鲁班",
            headerUrl: require("../assets/images/portrait/luban.jpg")
          }
        ],
        user: [contact.getUserInfo("wxid_sunquan")]
      },
      {
        mid: 5,
        type: "friend",
        group_name: "",
        group_qrCode: "",
        read: false,
        newMsgCount: 4,
        quiet: false,
        msg: [
          {
            text: "略略略~~~~~~ ",
            date: 1488117964495,
            name: "孙尚香",
            headerUrl: require("../assets/images/portrait/sunshangxaing.jpg")
          }
        ],
        user: [contact.getUserInfo("wxid_sunshangxiang")]
      },
      {
        mid: 6,
        type: "friend",
        group_name: "",
        group_qrCode: "",
        read: false,
        newMsgCount: 4,
        quiet: true,
        msg: [
          {
            text: "悟空 ",
            date: 1488117964495,
            name: "孙悟空",
            headerUrl: require("../assets/images/portrait/sunwukong.jpg")
          }
        ],
        user: [contact.getUserInfo("wxid_sunwukong")]
      }
    ]
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
