import { isUrl } from '../utils/utils';

const menuData = [
//     {
//   name: '统计',
//   icon: 'dashboard',
//   path: 'Dashboard',
//   children:
//   [{
//     name: '统计',
//     path: 'Monitor',
//   }],
// } ,
 {
  name: '财务',
  icon: 'table',
  path: 'List',
  children: [{
    name: '收入明细',
    path: 'TableList',
  }, {
    name: '提现',
    path: 'BasicList',
  }
  ]

}
// , 
// {
//   name: '账户',
//   icon: 'user',
//   path: 'User',
//   authority: 'guest',
//   children: [{
//     name: '登录',
//     path: 'Login',
//   }, {
//     name: '注册',
//     path: 'Register',
//   }, {
//     name: '注册结果',
//     path: 'RegisterResult',
//   }],
// }
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map((item) => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}
//TODO:先去掉了authority，等调试完了再加上
export const getMenuData = () => formatter(menuData);
