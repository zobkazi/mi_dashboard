const { AppstoreOutlined, MailOutlined, SettingOutlined } = require('@ant-design/icons');

exports.menuItems = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: AppstoreOutlined,
    children: [
      {
        key: 'create_post',
        label: 'Create New Post',
        link: '/create-post',
      },
      {
        key: 'all_posts',
        label: 'All Posts',
        link: '/all-posts',
      },
    ],
  },
  {
    key: 'media',
    label: 'Media',
    icon: MailOutlined,
    children: [
      {
        key: 'upload_media',
        label: 'Upload New Media',
        link: '/upload-media',
      },
      {
        key: 'library',
        label: 'Library',
        link: '/media-library',
      },
    ],
  },
  {
    key: 'pages',
    label: 'Pages',
    icon: AppstoreOutlined,
    children: [
      {
        key: 'all_pages',
        label: 'All Pages',
        link: '/all-pages',
      },
      {
        key: 'add_new_page',
        label: 'Add New',
        link: '/add-new-page',
      },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: SettingOutlined,
    children: [
      {
        key: 'general_settings',
        label: 'General',
        link: '/general-settings',
      },
      {
        key: 'writing_settings',
        label: 'Writing',
        link: '/writing-settings',
      },
      {
        key: 'reading_settings',
        label: 'Reading',
        link: '/reading-settings',
      },
      {
        key: 'permalink_settings',
        label: 'Permalinks',
        link: '/permalink-settings',
      },
    ],
  },
];
