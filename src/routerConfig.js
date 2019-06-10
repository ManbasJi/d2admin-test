/* eslint-disable */
// 工具
import util from '@/libs/util.ice'; // 页面和布局

import Index from './pages/Index';
import Login from './pages/Login';
import Error404 from './pages/Error404';
import AgentsManager from './pages/AgentsManager';
import OrgansManager from './pages/OrgansManager';
import GoodsType from './pages/GoodsType';
import GoodsCategory from './pages/GoodsCategory';
import GoodsManager from './pages/GoodsManager';
import OrdersManager from './pages/OrdersManager';
import RightsProtection from './pages/RightsProtection';
import AccountsManager from './pages/AccountsManager';
import FeedBack from './pages/FeedBack';
import BlackList from './pages/BlackList';
import AliSettings from './pages/AliSettings';
import DbTemplate from './pages/DBTemplate';
import Log from './pages/Log';
import ApiRequest from './pages/ApiRequest';
import HeaderAside from './layouts/HeaderAside'; // 变量名 routerConfig 为 iceworks 检测关键字
// ice 会自动在这个变量下添加路由数据
// 请不要修改名称
// 备注 ice 自动添加的路由记录是以下格式
// {
//   path: '/page4',
//   layout: d2LayoutMain,
//   component: 4
// }
// 如果不指定 name 字段，会根据 path 生成 name = page-demo1
// 转换规则见 util.recursiveRouterConfig 中 path2name 方法
// meta 字段会和默认值使用 Object.assign 合并
// 如果不指定 meta.name 的话，name 字段会使用和上面路由 name 一样的取值逻辑
// 下面两个页面就是对比 你可以分别观察两个页面上显示的路由数据差异

const routerConfig = [{
    path: '/',
    name: 'index',
    layout: HeaderAside,
    component: Index,
    meta: {
      auth: true,
      title: '首页',
    }
  }, {
    path: '/redirect/:route*',
    name: 'redirect',
    layout: HeaderAside,
    hidden: true,
    component: {
      beforeRouteEnter(to, from, next) {
        next(vm => vm.$router.replace(JSON.parse(from.params.route)));
      },

      render: h => h(),
    },
  }, // 刷新页面 必须保留
  {
    path: '/refresh',
    name: 'refresh',
    layout: HeaderAside,
    hidden: true,
    component: {
      beforeRouteEnter(to, from, next) {
        next(vm => vm.$router.replace(from.fullPath));
      },

      render: h => h(),
    },
  }, {
    path: '/goodsManager',
    name: 'goodsManager',
    layout: HeaderAside,
    component: GoodsManager,
    meta: {
      auth: true,
      title: '商品管理',
    },
  },
  {
    path: '/ordersManager',
    name: 'ordersManager',
    layout: HeaderAside,
    component: OrdersManager,
    meta: {
      auth: true,
      title: '订单管理',
    },
  }, // 页面重定向 必须保留

  {
    path: '/agentsManager',
    name: 'agentsManager',
    layout: HeaderAside,
    component: AgentsManager,
    meta: {
      auth: true,
      title: '代理管理',
    },
  },
  {
    path: '/organsManager',
    name: 'organsManager',
    layout: HeaderAside,
    component: OrgansManager,
    meta: {
      auth: true,
      title: '平台管理',
    },
  },
  {
    path: '/goodsType',
    name: 'goodsType',
    layout: HeaderAside,
    component: GoodsType,
    meta: {
      auth: true,
      title: '商品类型',
    },
  }, // 首页 必须 name:index

  {
    path: '/goodsCategory',
    name: 'goodsCategory',
    layout: HeaderAside,
    component: GoodsCategory,
    meta: {
      auth: true,
      title: '商品分类',
    },
  },
  {
    path: '/rightsProtection',
    name: 'rightsProtection',
    layout: HeaderAside,
    component: RightsProtection,
    meta: {
      auth: true,
      title: '订单维权',
    },
  },
  {
    path: '/accountsManager',
    layout: HeaderAside,
    component: AccountsManager,
    meta: {
      auth: true,
      title: '帐号管理',
    }
  },
  {
    path: '/feedBack',
    layout: HeaderAside,
    component: FeedBack,
    meta: {
      auth: true,
      title: '功能反馈',
    },
  },
  {
    path: '/blackList',
    layout: HeaderAside,
    component: BlackList,
    meta: {
      auth: true,
      title: '黑名单',
    },
  },
  {
    path: '/aliSettings',
    layout: HeaderAside,
    component: AliSettings,
    meta: {
      auth: true,
      title: '阿里设置',
    },
  },
  {
    path: '/dbTemplate',
    layout: HeaderAside,
    component: DbTemplate,
    meta: {
      auth: true,
      title: '数据库模板',
    },
  },
  {
    path: '/log',
    layout: HeaderAside,
    component: Log,
    meta: {
      auth: true,
      title: '日志记录',
    },
  },
  {
    path: '/apiRequest',
    layout: HeaderAside,
    component: ApiRequest,
    meta: {
      auth: true,
      title: '接口调用',
    },
  },
]; // 不参与菜单显示的
// ice 不会处理这部分
// 但是这部分路由也会被注册
// 处理规则同 routerConfig

const routerConfigMenuOut = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      auth: false,
    },
  }, // 404
  {
    path: '*',
    component: Error404,
  },
]; // 导出全部路由设置
// 这个数据会在 router.js 中被扁平处理

export default util.recursiveRouterConfig([
  ...routerConfig,
  ...routerConfigMenuOut,
]); // 导出参与多标签页处理的路由设置
// 这个数据会在 mian.js 中使用

export const frameInRoutes = util.recursiveRouterConfig(routerConfig).map(e => {
  const route = e.children ? e.children[0] : e;
  return {
    path: e.path,
    name: route.name,
    hidden: route.hidden,
    meta: route.meta,
  };
});