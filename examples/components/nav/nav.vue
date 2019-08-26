<template>
  <div class="aside-wrapper">
    <div class="aside-name">
      <span v-if="!isCollapse">name</span>
    </div>
    <el-menu
      :default-active="$route.path"
      router
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1" v-for="(item,index) in aside" :key="index" :index="(index+1).toString()"
                  v-if="item.menuConfig == 'menu' && item.parentMenuId=='0'">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.menuName}}</span>
        </template>
<!--        subItem.menuUrl-->
        <el-menu-item :index="subItem.menuUrl" v-for="(subItem,index) in aside" :key="index"
                      v-if="subItem.parentMenuName == item.menuName" @click="selectMenu(subItem)">{{subItem.menuName}}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
  export default {
    name: 'navName',
    data () {
      return {
        // isCollapse:false
        menuList:[],//菜单
        num:'0',
      }
    },
    computed: {
      isCollapse () {
        return this.$store.state.collapse
      }
    },
    created () {
      this.aside = JSON.parse(sessionStorage.getItem('aside'))
      // console.log(this.aside)
    },
    activated(){
      console.log(this.$route)
    },
    watch:{
      $route(newValue,oldValue){
        // console.log(newValue)
        // console.log(oldValue)
      }
    },
    mounted () {
      console.log(this.$store.state.collapse)
      console.log(this.$route)
    },
    methods: {
      //向父组件传递选中的菜单
      selectMenu(menu){
        console.log('********')
        console.log(this.$route)
        console.log(menu)
        console.log(this.menuList)
        // if(this.$route.path == menu.menuUrl){
        //   return
        // }

        let selectMenu = {
          title:menu.title,
          menuUrl:menu.menuUrl,
          name:menu.menuName
        }
        let newList = {
          title:menu.title,
          menuUrl:menu.menuUrl,
          name:menu.menuName
        }
        console.log('1')
        //去重
        if(this.menuList.length == 0){
          this.menuList.push(newList)
        }else{
          console.log('2')
          console.log(this.menuList)
          let newObj={}
          for (var i=0;i<this.menuList.length;i++){
            if(this.menuList[i].name != newList.name){
              newObj = newList
            }else{
              return
            }
          }
          this.menuList.push(newObj)
        }
        // window.sessionStorage.setItem("currentMenu",selectMenu)//选中的菜单
        console.log(this.menuList)
        this.$emit('selectMenu',{'menuList':this.menuList,'currentMenu':selectMenu})
      },
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .aside-name {
    height: 60px;
    line-height: 60px;
    font-size: 28px;
    color: #ffffff;
    background: #303133;
    text-align: center;
  }

  .nav-aside {
    height: 100%;
    position: fixed;
    font-size: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
  }

  .aside-wrapper {
    height: 100%;
    position: relative;
  }

  .el-submenu [class^=el-icon-] {
    margin-right: 2px;
  }

  .el-menu {
    border-right: 0;
    height: 100%;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 219px;
    height: 100%;
    overflow: auto;
  }

  /deep/ .el-submenu__title {
    font-size: 16px;
    height: 56px;
    line-height: 56px;
  }

  .el-submenu.is-opened > .el-submenu__title, .el-submenu.is-opened > .el-submenu__title > i {
    color: #409EFF;
  }

  .el-submenu .el-menu-item {
    font-size: 14px;
    height: 50px;
    line-height: 50px;
  }

  /deep/ .el-menu--inline {
    padding: 10px 0;
  }

  .el-menu--inline {
    div {
      .el-menu-item {
        padding-left: 55px !important;
      }
    }
  }

  .aside-wrapper .icon {
    vertical-align: middle;
    margin: 0 5px;
  }

  .aside-wrapper .nav {
    margin-left: 5px;
    vertical-align: middle;
  }

  .el-menu-item a {
    display: block;
    width: 100%;
    height: 100%;
  }

  .el-menu-item.is-active {
    border-left: 3px solid #409EFF;
    background: #f4f5fa;
  }

  .shrink {
    position: absolute;
    right: -12px;
    top: 50%;
    height: 60px;
    line-height: 60px;
    width: 12px;
    z-index: 2;
    background: #409EFF;
    margin-top: -40px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
  }


</style>
