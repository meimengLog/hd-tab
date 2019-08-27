# 前端npm插件：hd-tab

## 安装：
npm install  hd-tab

## 本地运行配置：

main.js
import MyTab from '../packages/index'
Vue.use(MyTab)

## 引入方式：
<tab :data="data" @tabPro="tabPro"></tab>

## 参数方法：
### 1、data：数据对象 
```javascript
{
  currentMenu：{//当前获取的tab
      menuUrl:'/index/shop', //页面路劲

      name:'页面1', //页面名称

  },
   menuList:[//获取的所有的tab里面的list

     { 

      menuUrl:'/index/shop', //页面路劲

      name:'页面1', //页面名称

     }

   ]

}
```
### 2、tabPro：tab方法
获取当前tab的选中值和当前tab里面的所有list








