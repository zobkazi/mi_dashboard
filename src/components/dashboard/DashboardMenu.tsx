'use client';

import React, { useState } from 'react';
import { Button, Menu } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { MenuItem, items } from '@/config/menuItems';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const { SubMenu } = Menu;





const renderMenuItems = (items: MenuItem[]) => {
  return items.map((item) => {
    if (item.children) {
      return (
        <SubMenu key={item.key} title={item.label} icon={item.icon}>
          {renderMenuItems(item.children)}
        </SubMenu>
      );
    }else if (item.type === 'divider') {
      return <Menu.Divider key={item.key} />;
    }
    
    else {
      return (
        <Menu.Item key={item.key} icon={item.icon}>
          {item.label}
        </Menu.Item>
      );
    }
  });
};

const DashboardMenu: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClick = ({key}: {key: string}) => {
    router.push(key)
  }

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item) => {
      if (item.children) {
        return (
          <SubMenu key={item.key} icon={item.icon} title={item.label}>
            {renderMenuItems(item.children)}
          </SubMenu>
        );
      } else if (item.type === 'divider') {
        return <Menu.Divider key={item.key} />;
      } else {
        return (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link href={item.key}>
              {item.label}
            </Link>
          </Menu.Item>
        );
      }
    });
  };

  return (
    <div className='h-screen'>

      <Menu
        className='h-screen flex flex-col min-w-0'
        onAuxClick={toggleCollapsed}
      onClick={onClick}
        defaultSelectedKeys={['dashboard']}
        defaultOpenKeys={['posts']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        {renderMenuItems(items)}
      </Menu>
    </div>
  );
};

export default DashboardMenu;



