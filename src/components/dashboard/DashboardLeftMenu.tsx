'use client';
import React from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuOutlined,
  PieChartOutlined,
  UploadOutlined,
  FileAddOutlined,
  UnorderedListOutlined,
  SnippetsOutlined,
  MessageOutlined,
  MenuFoldOutlined,
  SkinOutlined,
  UserOutlined,
  ToolOutlined,
  SettingOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

import  { useState } from 'react';
import { Button, Menu, MenuProps } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const { SubMenu } = Menu;

type MenuItem = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
  type?: string;
};

const items: MenuItem[] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: <PieChartOutlined />,
  },

  {
    key: 'Posts',
    label: 'Posts',
    icon: <FileAddOutlined />,
    children: [
      { key: 'create-post', label: 'Create Post', icon: <MenuOutlined /> },
      { key: 'create-news', label: 'Create News', icon: <MenuOutlined /> },
      { key: 'posts', label: 'All Posts', icon: <UnorderedListOutlined /> },
      {
        key: 'blog-menu',
        label: 'Blog Menu',
        children: [
          { key: 'create-blog', label: 'Create Blog' },
          { key: 'comments', label: 'Comments' },
        ],
      },
    ],
  },
    {
    key: 'media',
    label: 'Media',
    icon: <UploadOutlined />,
    children: [
      { key: 'upload-image', label: 'Upload Image' },
      { key: 'upload-video', label: 'Upload Video' },
      { key: 'library', label: 'Library' },
      {
        key: 'all-media',
        label: 'show all media',
        icon: <AppstoreOutlined />,
        children: [
          { key: 'images', label: 'Images' },
          { key: 'videos', label: 'Videos' },
        ],
      },
    ],
  },
  {
    type: 'divider',
    key: '',
    label: ''
  },
   {
    key: 'appearance',
    icon: <SkinOutlined />,
    label: 'Appearance',
    children: [
      { key: 'themes', label: 'Themes', icon: <AppstoreOutlined /> },
    ],
  },
  {
    key: 'users',
    label: 'Users',
    type: 'group',
    icon: <UserOutlined />,
    children: [
      { key: 'admin', label: 'Admin' },
      { key: 'authors', label: 'Authors' },
    ],
  },
  { key: 'tools', icon: <ToolOutlined />, label: 'Tools' },
  {
    key: 'Settings',
    label: 'Settings',
    icon: <SettingOutlined />,
    children: [
      { key: 'general', label: 'General' },
      { key: 'profile', label: 'Profile' },
      { key: 'account', label: ' Account' },
      { key: 'security', label: 'Security' },
    ],
  },
  
];

const App: React.FC = () => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  }

  const onClick: MenuProps['onClick'] = (e) => {
    if (e.key) {
      router.push(e.key);
    }
  };

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item) => {
      if (item.children) {
        return (
          <SubMenu  key={item.key} icon={item.icon} title={item.label}>
            {renderMenuItems(item.children)}
          </SubMenu>
        );
      } else if (item.type === 'divider') {
        return <Menu.Divider key={item.key} />;
      } else {
        return (

          <div className='' style={{ height: '100%' }} key={item.key}>

             <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
              <Menu.Item className='h-screen' key={item.key} icon={item.icon}>
            <Link href={item.key}>
              {item.label}
            </Link>
          </Menu.Item>
          </div>
      
             
     
        );
      }
    });
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      {renderMenuItems(items)}
    </Menu>
  );
};

export default App;