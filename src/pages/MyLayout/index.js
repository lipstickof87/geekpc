import { Layout, Menu, Popconfirm } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import './index.scss'
import { Outlet,Link,useLocation} from 'react-router-dom'
import { useStore } from '@/store'
import { useEffect } from 'react'


const { Header, Sider } = Layout

const MyLayout = () => {
  const mylocation = useLocation()
  const selectedKey = mylocation.pathname
  const { userStore } = useStore()

  useEffect(() => {
    try {
      userStore.getUserInfo()
    } catch(e) {
     console.log(e.response?.data?.message || 'layout request 失败') 
     }
  },[userStore])
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">userStore.userInfo.name</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            selectedKeys={[selectedKey]}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item icon={<HomeOutlined />} key="/">
              <Link to='/layout/'>数据概览</Link>
            </Menu.Item>
            <Menu.Item icon={<DiffOutlined />} key="/article">
              <Link to='/layout/article'>内容管理</Link>
            </Menu.Item>
            <Menu.Item icon={<EditOutlined />} key="/publish">
              <Link to='/layout/publish'>发布文章</Link>
            </Menu.Item>
             </Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Outlet></Outlet>
        </Layout>
      </Layout>
    </Layout>
  )
}
export default MyLayout
