<template>
  <div class="header-container">
    <span class="show-menu" @click="toggleSideBar">三</span>
    <div class="project-name">
      项目名称
    </div>
    <div class="project-user-info">
      <el-dropdown trigger="click" >
        <span class="el-dropdown-link">
<!--          <img src="../../assets/images/user.gif"/>-->
          用户名称<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'headerName',
    props: {},
    data () {
      return {
        collapse:false
      }
    },
    computed:{

    },
    methods: {
      toggleSideBar(){
        console.log(this.collapse)
        this.collapse = !this.collapse
        this.$store.dispatch('changeCollapse',this.collapse)
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .show-menu{
    display: inline-block;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  .header-container {
    background: #409EFF;
    height: 60px;
    width: 100%;
    padding: 0 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    box-sizing: border-box;
  }
  .el-header{
    padding: 0;
  }
  .project-name {
    color: #ffffff;
    font-size: 24px;
  }
  .el-dropdown-link{
    color: #ffffff;
    cursor: pointer;
    img{
      display: inline-block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      vertical-align: middle;
      margin-right: 10px;
    }
  }
</style>
