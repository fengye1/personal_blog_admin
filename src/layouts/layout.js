import { Layout, Menu, Icon } from 'antd';
import React, { Component } from 'react';
import style from './layout.css';
import router from 'umi/router';


const { Header, Sider, Content, Footer } = Layout;

class BaseLayout extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  menuClick=(item)=>{
    router.push(item.key);
  }
  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className={style.logo} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['/user']} onClick={this.menuClick}>
            <Menu.Item key="/user">
              <Icon type="user" />
              <span>用户</span>
            </Menu.Item>
            <Menu.Item key="/categories">
              <Icon type="video-camera" />
              <span>分类</span>
            </Menu.Item>
            <Menu.Item key="/article">
              <Icon type="upload" />
              <span>文章</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className={style.top_header}>
            <Icon
              className={style.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 600,
            }}
          >
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default BaseLayout;
