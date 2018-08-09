import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
Vue.use(Router)

const recommend = resolve => {
  import('../view/recommend').then(module => {
    resolve (module)
  })
}
const singer = resolve => {
  import('../view/singer').then(module => {
    resolve(module)
  })
}
const search = resolve => {
  import('../view/search').then((module) => {
    resolve(module)
  })
}
const rank = resolve => {
  import('../view/rank').then((module) => {
    resolve(module)
  })
}
export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/recommend',
    },
    {
      path:'/recommend',
      component:recommend,
      name:'recommend',
    },
    {
      path:'/singer' ,
      component:singer,
      name:'singer'
    },
    {
      path:'/search' ,
      component:search,
      name:'search'
    },
    {
      path:'/rank' ,
      component:rank,
      name:'rank'
    }
  ]
})
