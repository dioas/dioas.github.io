import Vue from 'vue'
import Router from 'vue-router'
import profile from '@/components/profile'
import myprofile from '@/components/myporfile'
import resume from '@/components/resume'
import portofolio from '@/components/portofolio'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'profile',
      component: profile
    },
    {
      path: '/profile',
      name: 'myprofile',
      component: myprofile
    },
    {
      path: '/resume',
      name: 'resume',
      component: resume
    },
    {
      path: '/portofolio',
      name: 'portofolio',
      component: portofolio
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ],
  mode: 'history'
})
