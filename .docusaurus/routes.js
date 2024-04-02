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
    component: ComponentCreator('/markdown-page', '94f'),
    exact: true,
  },
  {
    path: '/',
    component: ComponentCreator('/', '2c0'),
    exact: true,
  },
  {
    path: '/',
    component: ComponentCreator('/', '8aa'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '6dc'),
        routes: [
          {
            path: '/tags',
            component: ComponentCreator('/tags', 'd7a'),
            exact: true,
          },
          {
            path: '/tags/beginner',
            component: ComponentCreator('/tags/beginner', 'b75'),
            exact: true,
          },
          {
            path: '/tags/faq',
            component: ComponentCreator('/tags/faq', '845'),
            exact: true,
          },
          {
            path: '/tags/recipe',
            component: ComponentCreator('/tags/recipe', '2cd'),
            exact: true,
          },
          {
            path: '/',
            component: ComponentCreator('/', 'b38'),
            routes: [
              {
                path: '/faq/',
                component: ComponentCreator('/faq/', 'd00'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/faq/alternative_nutrient_sources',
                component: ComponentCreator('/faq/alternative_nutrient_sources', '7ba'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/faq/basic_problems',
                component: ComponentCreator('/faq/basic_problems', '04b'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/faq/chemicals',
                component: ComponentCreator('/faq/chemicals', '6ea'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/faq/getting_started',
                component: ComponentCreator('/faq/getting_started', '44c'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/faq/glass_vs_plastic',
                component: ComponentCreator('/faq/glass_vs_plastic', '007'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/faq/headspace',
                component: ComponentCreator('/faq/headspace', 'e77'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/faq/honey',
                component: ComponentCreator('/faq/honey', 'f08'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/faq/hydrometer',
                component: ComponentCreator('/faq/hydrometer', 'cee'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/faq/illegal_ingredients',
                component: ComponentCreator('/faq/illegal_ingredients', '3ee'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/faq/infection',
                component: ComponentCreator('/faq/infection', 'ae2'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/faq/ld-carlson-additives',
                component: ComponentCreator('/faq/ld-carlson-additives', '91c'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/faq/overflow',
                component: ComponentCreator('/faq/overflow', '563'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/faq/stabilization_and_backsweetening',
                component: ComponentCreator('/faq/stabilization_and_backsweetening', '894'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/faq/stuck_fermentation',
                component: ComponentCreator('/faq/stuck_fermentation', '0f2'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/faq/yeast_selection',
                component: ComponentCreator('/faq/yeast_selection', '74e'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/intro',
                component: ComponentCreator('/intro', '9fa'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/recipes/',
                component: ComponentCreator('/recipes/', 'a4e'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/recipes/beginner-recipes/',
                component: ComponentCreator('/recipes/beginner-recipes/', '00f'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/recipes/beginner-recipes/cyser',
                component: ComponentCreator('/recipes/beginner-recipes/cyser', '120'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/recipes/beginner-recipes/melomel',
                component: ComponentCreator('/recipes/beginner-recipes/melomel', '4f6'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/recipes/beginner-recipes/metheglin',
                component: ComponentCreator('/recipes/beginner-recipes/metheglin', 'd6f'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/recipes/beginner-recipes/traditional',
                component: ComponentCreator('/recipes/beginner-recipes/traditional', 'd76'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/resources/',
                component: ComponentCreator('/resources/', '906'),
                exact: true,
                sidebar: 'tutorialSidebar',
              },
              {
                path: '/resources/equipment',
                component: ComponentCreator('/resources/equipment', '1d1'),
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
