import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import teacher from '@/components/teacher/teacher'
import course from '@/components/course/course'
import courseLearn from '@/components/course/learn/courseLearn'
import startTest from '@/components/course/startTest/startTest'
import explore from '@/components/course/explore/explore'
import article from '@/components/articlenav/article/article'
import artPage from '@/components/articlenav/article/artPage/pagination'
import detail from '@/components/articlenav/detail/detail'
import settings from '@/components/settings/settings'
import avatar from '@/components/settings/avatar/avatar'
import notFound from '@/components/notfound/notfound'
import Login from '@/components/login/login'
import resetpassword from '@/components/resetpassword/resetpassword'
import findpassword from '@/components/resetpassword/findpassword'
import user from '@/components/user/user'
import mylearn from '@/components/my/course/mylearn'
import myquestion from '@/components/my/course/myquestion'
import mytest from '@/components/my/course/mytest'
import test from '@/components/test/test'
import result from '@/components/test/result'
import { getToken } from '@/utils/auth'


Vue.use(Router)
// 页面刷新时，重新赋值token
const router = new Router({
  routes: [

    { path: '/', redirect: 'home' },
    { path: '/home', component: Home, name: 'Home' },
    { path: '/teacher', component: teacher, name: 'teacher' },
    { path: '/courseLearn', component: courseLearn, name: 'courseLearn' },
    { path: '/startTest', component: startTest, name: 'startTest' },
    { path: '/test/:id', component: test, name: 'test' },
    { path: '/result', component: result, name: 'result' },
    { path: '/artPage', component: artPage, name: 'artPage' },
    {
      path: '/course/:id',
      component: course,
      name: 'course',

    },
    {
      path: '/detail/:id',
      component: detail,
      name: 'detail',
    },
    {
      path: '/user/:id',
      component: user,
      name: 'user',
    },
    {
      path: '/explore/:id',
      component: explore,
      name: 'explore'
    },
    {
      path: '/article/:id',
      component: article,
      name: "article"
    },
    { path: '/settings', component: settings, name: "settings" },
    { path: '/avatar', component: avatar, name: 'avatar' },
    { path: '/login', component: Login, name: 'Login' },
    { path: '/mylearn', component: mylearn, name: 'mylearn' },
    { path: '/myquestion', component: myquestion, name: 'myquestion' },
    { path: '/mytest', component: mytest, name: 'mytest' },
    { path: '/resetpassword', component: resetpassword, name: 'resetpassword' },
    { path: '/findpassword', component: findpassword, name: 'findpassword' },
    { path: '*', component: notFound },

  ],

})

router.beforeEach((to,from,next)=>{
    // console.log(to); //目标路由对象
    if( to.path==='/login'
        ||to.path==='/resetpassword'
        ||to.path==='/findpassword'){
        // 需要验证您是否已经登录
        next();
        
    }else{
        
        if(true){
            // console.log("已经登录了");
            next();
        }else{
            // console.log("判断没有登录,所以会跳转到Login页面");
            next({path: '/login'});
        }

    if (getToken()) {
      // console.log("已经登录了");
      next();
    } else {
      // console.log("判断没有登录,所以会跳转到Login页面");
      next({ path: '/login' });
    }
  router.afterEach((to, from) => {
    // console.log("路由跳转完成");
  })
}
})

export default router;
