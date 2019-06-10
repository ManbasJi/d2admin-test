/* eslint-disable */
import util from './libs/util.ice'; // 菜单配置
// 侧栏菜单配置
// ice 会在新建页面的时候 push 数据
// ice 自动添加的菜单记录是以下格式：(不会有嵌套)
// {
//   name: 'Nav',
//   path: '/page',
//   icon: 'home',
// },

const asideMenuConfig = [
  //   {
  //   name: '首页',
  //   icon: 'home',
  //   path: '/'
  // },
  {
    name: '业务',
    icon: 'briefcase',
    children: [{
        name: '代理管理',
        icon: 'users',
        path: '/agentsManager/',
      },
      {
        name: '平台管理',
        icon: 'reorder',
        path: '/organsManager/',
      },
      {
        name: '商品类型',
        icon: 'cube',
        path: '/goodsType/',
      },
      {
        name: '商品分类',
        icon: 'th-large',
        path: '/goodsCategory/',
      },
      {
        name: '商品管理',
        icon: 'archive',
        path: '/goodsManager/',
      },
      {
        name: '订单管理',
        icon: 'reorder',
        path: '/ordersManager',
      },
      {
        name: '订单维权',
        icon: 'reorder',
        path: '/rightsProtection',
      },
    ],
  },
  {
    name: '数据',
    icon: 'bar-chart',
    children: [{
        name: '日志记录',
        path: '/log',
        icon: 'reorder',
      },
      {
        name: '接口调用',
        path: '/apiRequest',
        icon: 'reorder',
      },
    ]
  },
  {
    name: '开发',
    icon: 'laptop',
    children: [{
        name: '阿里设置',
        path: '/aliSettings',
        icon: 'reorder',
      },
      {
        name: '数据库模板',
        path: '/dbTemplate',
        icon: 'reorder',
      },
    ]
  },
  {
    name: '设置',
    icon: 'cog',
    children: [{
        name: '功能反馈',
        path: '/feedBack',
        icon: 'reorder',
      },
      {
        name: '账号管理',
        path: '/accountsManager',
        icon: 'reorder',
      },
      {
        name: '黑名单',
        path: '/blackList',
        icon: 'reorder',
      },
    ],
  },
]; // 顶栏菜单配置
// ice 不会修改 headerMenuConfig
// 如果你需要功能开发之前就配置出菜单原型，可以只设置 name 字段
// D2Admin 会自动添加不重复 id 生成菜单，并在点击时提示这是一个临时菜单

const headerMenuConfig = [
  //   {
  //   name: '首页',
  //   icon: 'home',
  //   path: '/',
  // }
];
// 请根据自身业务逻辑修改导出设置，并在合适的位置赋给对应的菜单
// 参考
// 设置顶栏菜单的方法 (vuex)
// $store.commit('d2adminMenuHeaderSet', menus)
// 设置侧边栏菜单的方法 (vuex)
// $store.commit('d2adminMenuAsideSet', menus)
// 你可以在任何地方使用上述方法修改顶栏和侧边栏菜单
// 导出顶栏菜单

export const menuHeader = util.recursiveMenuConfig(headerMenuConfig); // 导出侧边栏菜单

export const menuAside = util.recursiveMenuConfig(asideMenuConfig);