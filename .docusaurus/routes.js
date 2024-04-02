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
    component: ComponentCreator('/', '1fd'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '02c'),
        routes: [
          {
            path: '/tags',
            component: ComponentCreator('/tags', 'd7a'),
            exact: true
          },
          {
            path: '/tags/beginner',
            component: ComponentCreator('/tags/beginner', 'b75'),
            exact: true
          },
          {
            path: '/tags/faq',
            component: ComponentCreator('/tags/faq', '845'),
            exact: true
          },
          {
            path: '/tags/recipe',
            component: ComponentCreator('/tags/recipe', '2cd'),
            exact: true
          },
          {
            path: '/',
            component: ComponentCreator('/', '4a5'),
            routes: [
              {
                path: '/faq/',
                component: ComponentCreator('/faq/', '0b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faq/alternative_nutrient_sources',
                component: ComponentCreator('/faq/alternative_nutrient_sources', '25c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faq/basic_problems',
                component: ComponentCreator('/faq/basic_problems', 'f40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faq/chemicals',
                component: ComponentCreator('/faq/chemicals', '8b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faq/getting_started',
                component: ComponentCreator('/faq/getting_started', 'ded'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faq/glass_vs_plastic',
                component: ComponentCreator('/faq/glass_vs_plastic', '956'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faq/headspace',
                component: ComponentCreator('/faq/headspace', '6a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faq/honey',
                component: ComponentCreator('/faq/honey', 'b2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faq/hydrometer',
                component: ComponentCreator('/faq/hydrometer', 'c17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faq/illegal_ingredients',
                component: ComponentCreator('/faq/illegal_ingredients', 'b25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faq/infection',
                component: ComponentCreator('/faq/infection', '410'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faq/ld_carlson_additives',
                component: ComponentCreator('/faq/ld_carlson_additives', '93e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faq/overflow',
                component: ComponentCreator('/faq/overflow', '301'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faq/stabilization_and_backsweetening',
                component: ComponentCreator('/faq/stabilization_and_backsweetening', '238'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faq/stuck_fermentation',
                component: ComponentCreator('/faq/stuck_fermentation', 'c8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faq/yeast_selection',
                component: ComponentCreator('/faq/yeast_selection', 'e4c'),
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
                path: '/recipes/',
                component: ComponentCreator('/recipes/', '38c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/recipes/beginner-recipes/',
                component: ComponentCreator('/recipes/beginner-recipes/', '034'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/recipes/beginner-recipes/cyser',
                component: ComponentCreator('/recipes/beginner-recipes/cyser', '63e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/recipes/beginner-recipes/melomel',
                component: ComponentCreator('/recipes/beginner-recipes/melomel', '893'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/recipes/beginner-recipes/metheglin',
                component: ComponentCreator('/recipes/beginner-recipes/metheglin', 'd86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/recipes/beginner-recipes/traditional',
                component: ComponentCreator('/recipes/beginner-recipes/traditional', '0d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/resources/',
                component: ComponentCreator('/resources/', 'ef3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/resources/equipment',
                component: ComponentCreator('/resources/equipment', '136'),
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
