import React, { Fragment } from 'react';
import { Link } from 'dva/router';
import DocumentTitle from 'react-document-title';
import { Icon } from 'antd';
import GlobalFooter from 'components/GlobalFooter';
import styles from './UserLayout.less';
import logo from 'assets/logo1.svg';
import { getRouterData } from 'common/router';

const links = [
  // {
  //   key: 'help',
  //   title: '帮助',
  //   href: '',
  // },
  // {
  //   key: 'privacy',
  //   title: '隐私',
  //   href: '',
  // },
  // {
  //   key: 'terms',
  //   title: '条款',
  //   href: '',
  // },
];

const copyright = (
  <Fragment>
    Copyright <Icon type="copyright" /> 2018 PELO 出品
  </Fragment>
);
const routerData = getRouterData({});
class UserLayout extends React.PureComponent {
  getPageTitle() {
    const {  location } = this.props;

    const { pathname } = location;
    let title = 'PELO代理系统';
    if (routerData[pathname] && routerData[pathname].name) {
      title = `${routerData[pathname].name} - PELO代理系统`;
    }
    return title;
  }
  render() {
    const { children } = this.props;
    return (
      <DocumentTitle title={this.getPageTitle()}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.header}>
                <Link to="/">
                  <img alt="logo" className={styles.logo} src={logo} />
                  <span className={styles.title}>Pelo</span>
                </Link>
              </div>
              <div className={styles.desc}>Pelo代理商管理系统</div>
            </div>
              {children}
          </div>
          <GlobalFooter links={links} copyright={copyright} />
        </div>
      </DocumentTitle>
    );
  }
}

export default UserLayout;
