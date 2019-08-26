import MyTab from './src/myTab'

// 为组件添加 install 方法，用于按需引入
MyTab.install = function (Vue) {
  Vue.component(MyTab.name, MyTab)
}

export default MyTab
