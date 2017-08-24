import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const companyProfile = r => require.ensure([], () => r(require('../page/companyProfile/companyProfile')), 'companyProfile')
const causeContent = r => require.ensure([], () => r(require('../page/causeContent/causeContent')), 'causeContent')
const recruitmentInformation = r => require.ensure([], () => r(require('../page/recruitmentInformation/recruitmentInformation')), 'recruitmentInformation')
const businessCase = r => require.ensure([], () => r(require('../page/businessCase/businessCase')), 'businessCase')
const contactUs = r => require.ensure([], () => r(require('../page/contactUs/contactUs')), 'contactUs')
const protectPersonalInformation = r => require.ensure([], () => r(require('../page/protectPersonalInformation/protectPersonalInformation')), 'protectPersonalInformation')
const linkAddress = r => require.ensure([], () => r(require('../page/linkAddress/linkAddress')), 'linkAddress')

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home'
        },
        //首页城市列表页
        {
            path: '/home',
            component: home
        },
        //公司简介
        {
          path: '/companyProfile',
          component: companyProfile
        },
        //事业内容
        {
          path: '/causeContent',
          component: causeContent
        },
        //招聘信息
        {
          path: '/recruitmentInformation',
          component: recruitmentInformation
        },
        //业务案例
        {
          path: '/businessCase',
          component: businessCase
        },
        //联系我们
        {
          path: '/contactUs',
          component: contactUs
        },
        //保护个人信息
        {
          path: '/protectPersonalInformation',
          component: protectPersonalInformation
        },
        //链接
        {
          path: '/linkAddress',
          component: linkAddress
        }

    ]
}]
