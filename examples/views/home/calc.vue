<template>
  <div class="wapper-container about">
    <h1>This is a calc page</h1>
<!--    <el-dropdown>-->
<!--      123<i class="el-icon-arrow-down"></i>-->
<!--      <el-dropdown-menu size="small" slot="dropdown">-->
<!--        <el-dropdown-item command="other">关闭其他</el-dropdown-item>-->
<!--        <el-dropdown-item command="all">关闭所有</el-dropdown-item>-->
<!--      </el-dropdown-menu>-->
<!--    </el-dropdown>-->

    <el-dropdown>
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
  // import { fetchList } from '@/api/indexHttp'
  export default {
    name: 'demo',
    data () {
      return {}
    },
    created () {
      // this.getData()
    },
    methods: {
      getData () {
        // fetchList().then(response => {
        //   this.list1 = response.data.items.splice(0, 5)
        //   this.list2 = response.data.items
        // })
      },
    },
    components: {}
  }
</script>
