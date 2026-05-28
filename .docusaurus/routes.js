import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '53a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'df0'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'a98'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'd6a'),
            routes: [
              {
                path: '/docs/ez-lidar/',
                component: ComponentCreator('/docs/ez-lidar/', '1ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ez-lidar/almacenamiento',
                component: ComponentCreator('/docs/ez-lidar/almacenamiento', '944'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ez-lidar/carga-baterias',
                component: ComponentCreator('/docs/ez-lidar/carga-baterias', '88f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ez-lidar/planificacion-misiones',
                component: ComponentCreator('/docs/ez-lidar/planificacion-misiones', 'ab3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ez-lidar/playlist-youtube',
                component: ComponentCreator('/docs/ez-lidar/playlist-youtube', 'cd3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ez-lidar/postproceso-lidar/descarga-datos',
                component: ComponentCreator('/docs/ez-lidar/postproceso-lidar/descarga-datos', 'aca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ez-lidar/postproceso-lidar/flujo-geosun',
                component: ComponentCreator('/docs/ez-lidar/postproceso-lidar/flujo-geosun', '1bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ez-lidar/preparacion-equipo/ensamblaje-drone',
                component: ComponentCreator('/docs/ez-lidar/preparacion-equipo/ensamblaje-drone', '4ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ez-lidar/preparacion-equipo/listado-componentes',
                component: ComponentCreator('/docs/ez-lidar/preparacion-equipo/listado-componentes', '2bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hydrosurveyor-v1/',
                component: ComponentCreator('/docs/hydrosurveyor-v1/', '607'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hydrosurveyor-v1/almacenamiento',
                component: ComponentCreator('/docs/hydrosurveyor-v1/almacenamiento', '6cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hydrosurveyor-v1/carga-baterias',
                component: ComponentCreator('/docs/hydrosurveyor-v1/carga-baterias', '842'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hydrosurveyor-v1/planificacion-misiones',
                component: ComponentCreator('/docs/hydrosurveyor-v1/planificacion-misiones', 'd52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hydrosurveyor-v1/playlist-youtube',
                component: ComponentCreator('/docs/hydrosurveyor-v1/playlist-youtube', '56f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hydrosurveyor-v1/postproceso-batimetrico/convertir-bin-csv',
                component: ComponentCreator('/docs/hydrosurveyor-v1/postproceso-batimetrico/convertir-bin-csv', '36f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hydrosurveyor-v1/postproceso-batimetrico/descarga-datos',
                component: ComponentCreator('/docs/hydrosurveyor-v1/postproceso-batimetrico/descarga-datos', 'fbd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hydrosurveyor-v1/postproceso-batimetrico/flujo-reefmaster',
                component: ComponentCreator('/docs/hydrosurveyor-v1/postproceso-batimetrico/flujo-reefmaster', 'c61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hydrosurveyor-v1/preparacion-equipo/configuracion-ecosonda',
                component: ComponentCreator('/docs/hydrosurveyor-v1/preparacion-equipo/configuracion-ecosonda', 'a8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hydrosurveyor-v1/preparacion-equipo/listado-componentes',
                component: ComponentCreator('/docs/hydrosurveyor-v1/preparacion-equipo/listado-componentes', 'bdd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/idi-drone-ops/',
                component: ComponentCreator('/docs/idi-drone-ops/', '663'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/idi-drone-ops/flujo-admin',
                component: ComponentCreator('/docs/idi-drone-ops/flujo-admin', '00c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/idi-drone-ops/flujo-piloto',
                component: ComponentCreator('/docs/idi-drone-ops/flujo-piloto', '402'),
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
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
