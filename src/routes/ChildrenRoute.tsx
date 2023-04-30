import IndexHomeComponents from 'components/homeComponents'
import { TypeViewChildrenRoute } from '../types/types'
import Blog from 'pages/Blog'
import Tech from 'pages/bogPages/Tech'

export const ChildrenRouteHome: TypeViewChildrenRoute[] = [
  {
    collapse: false,
    component: <IndexHomeComponents />,
    icon: undefined,
    name: 'home',
    index: true,
    path: '/',
    roles: ['user'],
    views: undefined,
  },
  {
    collapse: false,
    component: <Blog />,
    icon: undefined,
    name: 'blog',
    index: false,
    path: '/blog',
    roles: ['user'],
    views: [
      {
        collapse: false,
        component: <Tech />,
        icon: undefined,
        name: 'tech',
        path: '/tech',
        roles: ['user'],
      },
    ],
  },
]
