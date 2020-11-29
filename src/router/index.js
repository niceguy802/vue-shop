import {createRouter, createWebHistory} from 'vue-router'

const Category = () => import('@/views/category/Category')
const Home = () => import('@/views/home/Home')
const Profile = () => import('@/views/profile/Profile')
const ShopCart = () => import('@/views/shopCart/ShopCart')
const Detail = () => import('@/views/detail/Detail')
const Popular = () => import('@/components/content/category/Popular')
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category,
    children: [
      {
        path: '/category',
        redirect: '/category/popular'
      },
      {
        path: 'popular',
        name: 'Popular',
        component: Popular,
        mate: {title: 'Popular'}
      },
      {
        path: 'coat',
        component: ''
      }
    ]
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
