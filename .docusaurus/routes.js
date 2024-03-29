import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'd1b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '65f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'fd0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'fb1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'db4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '5ee'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'cfd'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '813'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '949'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'fc5'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '205'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'd7e'),
            routes: [
              {
                path: '/category/tutorial---basics',
                component: ComponentCreator('/category/tutorial---basics', '72e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/tutorial---extras',
                component: ComponentCreator('/category/tutorial---extras', '3d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faq/',
                component: ComponentCreator('/faq/', '0b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intro',
                component: ComponentCreator('/intro', '283'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-basics/congratulations',
                component: ComponentCreator('/tutorial-basics/congratulations', '4b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/tutorial-basics/create-a-blog-post', '93c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-basics/create-a-document',
                component: ComponentCreator('/tutorial-basics/create-a-document', '58e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-basics/create-a-page',
                component: ComponentCreator('/tutorial-basics/create-a-page', 'e6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/tutorial-basics/deploy-your-site', '317'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-basics/markdown-features',
                component: ComponentCreator('/tutorial-basics/markdown-features', '04e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/tutorial-extras/manage-docs-versions', '975'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-extras/translate-your-site',
                component: ComponentCreator('/tutorial-extras/translate-your-site', 'ac7'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
