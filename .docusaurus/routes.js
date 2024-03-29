import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'd1b'),
    exact: true,
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '65f'),
    exact: true,
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'fd0'),
    exact: true,
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'fb1'),
    exact: true,
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'db4'),
    exact: true,
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '5ee'),
    exact: true,
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'cfd'),
    exact: true,
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '813'),
    exact: true,
  },
  {
    path: '/',
    component: ComponentCreator('/', '949'),
    exact: true,
  },
  {
    path: '/',
    component: ComponentCreator('/', '60d'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '8de'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '113'),
            routes: [
              {
                path: '/faq/',
                component: ComponentCreator('/faq/', '0b4'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/faq/equipment-faq',
                component: ComponentCreator('/faq/equipment-faq', '7a5'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/intro',
                component: ComponentCreator('/intro', '283'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/recipes/',
                component: ComponentCreator('/recipes/', '38c'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/recipes/starter-recipes',
                component: ComponentCreator('/recipes/starter-recipes', '075'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/resources/',
                component: ComponentCreator('/resources/', 'ef3'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/resources/equipment',
                component: ComponentCreator('/resources/equipment', '751'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
