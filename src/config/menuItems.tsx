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
  SkinOutlined,
  UserOutlined,
  ToolOutlined,
  SettingOutlined,
} from '@ant-design/icons';


export interface MenuItem {
  type: string;
  key: string;
  label: string;
  icon: JSX.Element | string | null; 
  children?: MenuItem[];
}

export const items: MenuItem[] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: 'home', label: 'Home', icon: <DesktopOutlined />,
        type: ''
      },
      {
        key: 'update_latest', label: 'Update Latest', icon: <PieChartOutlined />,
        type: ''
      },
    ],
    type: ''
  },
  {
    key: 'post',
    label: 'Post',
    icon: <FileAddOutlined />,
    children: [
      {
        key: 'create_post', label: 'Create Post', icon: <MenuOutlined />,
        type: ''
      },
      {
        key: 'list_all_post', label: 'List All Post', icon: <UnorderedListOutlined />,
        type: ''
      },
    ],
    type: ''
  },
  {
    key: 'media',
    label: 'Media',
    icon: <UploadOutlined />,
    children: [
      {
        key: 'upload_images', label: 'Upload Images', icon: <MailOutlined />,
        type: ''
      },
    ],
    type: ''
  },
  {
    key: 'pages',
    label: 'Pages',
    icon: <SnippetsOutlined />,
    children: [
      {
        key: 'create_new_page', label: 'Create New Page', icon: <ContainerOutlined />,
        type: ''
      },
    ],
    type: ''
  },
  {
    key: 'comments',
    label: 'Comments',
    icon: <MessageOutlined />,
    children: [
      {
        key: 'individual_post_comment', label: 'Individual Post Comment', icon: <MenuOutlined />,
        type: ''
      },
    ],
    type: ''
  },
  {
    key: 'appearance',
    label: 'Appearance',
    icon: <SkinOutlined />,
    children: [
      {
        key: 'themes', label: 'Themes', icon: <SettingOutlined />,
        type: ''
      },
    ],
    type: ''
  },
  {
    key: 'user',
    label: 'User',
    icon: <UserOutlined />,
    children: [
      {
        key: 'user_list', label: 'User List', icon: <ToolOutlined />,
        type: ''
      },
      {
        key: 'admin', label: 'Admin', icon: <SettingOutlined />,
        type: ''
      },
      {
        key: 'auth_user', label: 'Auth User', icon: <SettingOutlined />,
        type: ''
      },
    ],
    type: ''
  },
  {
    key: 'tools',
    label: 'Tools',
    icon: <ToolOutlined />,
    type: ''
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: <SettingOutlined />,
    type: ''
  },
];
