import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Mead-Making-Wiki/',
    component: ComponentCreator('/Mead-Making-Wiki/', '887'),
    exact: true
  },
  {
    path: '/Mead-Making-Wiki/__docusaurus/debug',
    component: ComponentCreator('/Mead-Making-Wiki/__docusaurus/debug', 'bf3'),
    exact: true
  },
  {
    path: '/Mead-Making-Wiki/__docusaurus/debug/config',
    component: ComponentCreator('/Mead-Making-Wiki/__docusaurus/debug/config', '1c5'),
    exact: true
  },
  {
    path: '/Mead-Making-Wiki/__docusaurus/debug/content',
    component: ComponentCreator('/Mead-Making-Wiki/__docusaurus/debug/content', '91c'),
    exact: true
  },
  {
    path: '/Mead-Making-Wiki/__docusaurus/debug/globalData',
    component: ComponentCreator('/Mead-Making-Wiki/__docusaurus/debug/globalData', '33c'),
    exact: true
  },
  {
    path: '/Mead-Making-Wiki/__docusaurus/debug/metadata',
    component: ComponentCreator('/Mead-Making-Wiki/__docusaurus/debug/metadata', '61e'),
    exact: true
  },
  {
    path: '/Mead-Making-Wiki/__docusaurus/debug/registry',
    component: ComponentCreator('/Mead-Making-Wiki/__docusaurus/debug/registry', '2e1'),
    exact: true
  },
  {
    path: '/Mead-Making-Wiki/__docusaurus/debug/routes',
    component: ComponentCreator('/Mead-Making-Wiki/__docusaurus/debug/routes', '523'),
    exact: true
  },
  {
    path: '/Mead-Making-Wiki/markdown-page',
    component: ComponentCreator('/Mead-Making-Wiki/markdown-page', '70b'),
    exact: true
  },
  {
    path: '/Mead-Making-Wiki/',
    component: ComponentCreator('/Mead-Making-Wiki/', '594'),
    routes: [
      {
        path: '/Mead-Making-Wiki/',
        component: ComponentCreator('/Mead-Making-Wiki/', 'ade'),
        routes: [
          {
            path: '/Mead-Making-Wiki/tags',
            component: ComponentCreator('/Mead-Making-Wiki/tags', 'ab4'),
            exact: true
          },
          {
            path: '/Mead-Making-Wiki/tags/beginner',
            component: ComponentCreator('/Mead-Making-Wiki/tags/beginner', 'c8f'),
            exact: true
          },
          {
            path: '/Mead-Making-Wiki/tags/faq',
            component: ComponentCreator('/Mead-Making-Wiki/tags/faq', '755'),
            exact: true
          },
          {
            path: '/Mead-Making-Wiki/tags/recipe',
            component: ComponentCreator('/Mead-Making-Wiki/tags/recipe', 'd7d'),
            exact: true
          },
          {
            path: '/Mead-Making-Wiki/',
            component: ComponentCreator('/Mead-Making-Wiki/', 'cf2'),
            routes: [
              {
                path: '/Mead-Making-Wiki/faq/',
                component: ComponentCreator('/Mead-Making-Wiki/faq/', 'edc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mead-Making-Wiki/faq/alternative_nutrient_sources',
                component: ComponentCreator('/Mead-Making-Wiki/faq/alternative_nutrient_sources', 'ba5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mead-Making-Wiki/faq/basic_problems',
                component: ComponentCreator('/Mead-Making-Wiki/faq/basic_problems', 'e56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mead-Making-Wiki/faq/chemicals',
                component: ComponentCreator('/Mead-Making-Wiki/faq/chemicals', 'e8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mead-Making-Wiki/faq/getting_started',
                component: ComponentCreator('/Mead-Making-Wiki/faq/getting_started', '914'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mead-Making-Wiki/faq/glass_vs_plastic',
                component: ComponentCreator('/Mead-Making-Wiki/faq/glass_vs_plastic', '6e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mead-Making-Wiki/faq/headspace',
                component: ComponentCreator('/Mead-Making-Wiki/faq/headspace', '55c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mead-Making-Wiki/faq/honey',
                component: ComponentCreator('/Mead-Making-Wiki/faq/honey', 'ad6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mead-Making-Wiki/faq/hydrometer',
                component: ComponentCreator('/Mead-Making-Wiki/faq/hydrometer', '36e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mead-Making-Wiki/faq/illegal_ingredients',
                component: ComponentCreator('/Mead-Making-Wiki/faq/illegal_ingredients', 'a4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mead-Making-Wiki/faq/infection',
                component: ComponentCreator('/Mead-Making-Wiki/faq/infection', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mead-Making-Wiki/faq/ld-carlson-additives',
                component: ComponentCreator('/Mead-Making-Wiki/faq/ld-carlson-additives', 'b0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mead-Making-Wiki/faq/overflow',
                component: ComponentCreator('/Mead-Making-Wiki/faq/overflow', 'b75'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mead-Making-Wiki/faq/stabilization_and_backsweetening',
                component: ComponentCreator('/Mead-Making-Wiki/faq/stabilization_and_backsweetening', 'fec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mead-Making-Wiki/faq/stuck_fermentation',
                component: ComponentCreator('/Mead-Making-Wiki/faq/stuck_fermentation', '59b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mead-Making-Wiki/faq/yeast_selection',
                component: ComponentCreator('/Mead-Making-Wiki/faq/yeast_selection', 'cf9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mead-Making-Wiki/intro',
                component: ComponentCreator('/Mead-Making-Wiki/intro', '699'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mead-Making-Wiki/recipes/',
                component: ComponentCreator('/Mead-Making-Wiki/recipes/', 'eaa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mead-Making-Wiki/recipes/beginner-recipes/',
                component: ComponentCreator('/Mead-Making-Wiki/recipes/beginner-recipes/', '74e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mead-Making-Wiki/recipes/beginner-recipes/cyser',
                component: ComponentCreator('/Mead-Making-Wiki/recipes/beginner-recipes/cyser', 'e2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mead-Making-Wiki/recipes/beginner-recipes/melomel',
                component: ComponentCreator('/Mead-Making-Wiki/recipes/beginner-recipes/melomel', 'f1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mead-Making-Wiki/recipes/beginner-recipes/metheglin',
                component: ComponentCreator('/Mead-Making-Wiki/recipes/beginner-recipes/metheglin', '606'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mead-Making-Wiki/recipes/beginner-recipes/traditional',
                component: ComponentCreator('/Mead-Making-Wiki/recipes/beginner-recipes/traditional', '1aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mead-Making-Wiki/resources/',
                component: ComponentCreator('/Mead-Making-Wiki/resources/', '003'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mead-Making-Wiki/resources/equipment',
                component: ComponentCreator('/Mead-Making-Wiki/resources/equipment', '097'),
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
