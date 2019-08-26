<template>
  <div class="home">
    <el-container>
      <div class="nav-container">
        <Nav @selectMenu="selectMenu"></Nav>
      </div>
      <el-main>
        <el-header>
          <Header></Header>
        </el-header>
        <tab :data="data" @tabPro="tabPro"></tab>
        <!--避免重新加载 -->
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Nav from '../../examples/components/nav/nav'
  import Header from '../../examples/components/header/header'
  import tab from '../../examples/components/tag/tab'

  export default {
    name: 'home',
    data(){
      return{
        menuList:{},
        data:{}
      }
    },
    created(){
    },
    components: {
      Nav,
      Header,
      tab
    },
    watch:{
    },
    methods:{
      //获取菜单
      selectMenu(menu){
        console.log('获取菜单**********')
        this.data = menu
      },
      //获取默认的值
      tabPro(data){
        console.log(data)
        this.$set(this.data,'currentMenu',data.data.currentMenu)
        this.$set(this.data,'menuList',data.data.menuList)
        console.log(this.data)
        this.menuList = this.data.menuList[0]
      }
    }
  }
</script>
<style scoped lang="scss">
  .home,.nav-container,.el-container{
    height: 100%;
  }
  /*.nav-container{*/
  /*  width: 21%;*/
  /*  float: left;*/
  /*}*/
  /*.el-main{*/
  /*  width: 79%;*/
  /*  float: left;*/
  /*}*/

  .el-header{
    padding: 0;
  }
  .container{
    height: calc(100% - 130px) !important;
  }
  .el-main{
    padding: 0;
  }
  .aside-wrapper {
    height: 100%;
    position: relative;
  }
</style>
