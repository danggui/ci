import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { MessageBox } from 'element-ui';


NProgress.configure({ showSpinner: false })// NProgress Configuration


const whiteList = ['/notice','/mobile'] // no redirect whitelist
const token =store.getters.token
router.beforeEach((to, from, next) => {
    if(to.path=="/mobile"){
        next()
    }else{
        NProgress.start() // start progress bar
        if (token) { // determine if there has token
          /* has token*/
          if(Storage.get("isEditting")==1){
            if(from.path == "/apply") {
              MessageBox.confirm('编辑内容未保存，是否离开？','提示',{
              confirmButtonText: '确定',
              cancelButtonText: '取消', }).then(()=>{ next()}).catch( ()=>next(false) ) 
            }else { 
              next() //必须加
              }
            }else{
              next()
            }
        } else {
          if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            next()
          } else {
            next(`/notice`) // 否则全部重定向到登录页
            NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
          }
        }
    }
   
  })
  
  router.afterEach(() => {
    NProgress.done() // finish progress bar
  })
  