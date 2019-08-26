<template>

  <div class="tags" v-if="showTags">
    <ul>
      <li class="tags-li" v-for="(item,index) in data.menuList" :class="{'active': isActive(item.menuUrl)}" :key="index"
          :style="{width: tagsWidth}"  @click.stop="selectTab(item)">
        <router-link :to="item.menuUrl" class="tags-li-title">
          {{item.name}}
        </router-link>
        <span class="tags-li-icon" @click.stop="closeTags(index)" v-if="lastTag"><i class="el-icon-close"></i></span>
      </li>
    </ul>
    <div class="tags-close-box">
      <el-dropdown @command="handleTags">
        <i class="el-icon-arrow-down"></i>
        <el-dropdown-menu size="small" slot="dropdown">
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      // tagsList: {
      //   type: Array,
      //   default: []
      // },
      data:{}
    },
    data () {
      return {
        lastTag:true,
        showTags:false,//是否显示tab
        tagsWidth:'',//宽度
      }
    },
    computed: {
    },
    watch: {
      $route (newValue, oldValue) {
        console.log('tab路由的变化****')
        // console.log(newValue)
        // console.log(this.data)
        if(this.data.menuList != undefined){
          this.data.menuList.forEach((item)=>{
            if(newValue.path == item.menuUrl){
              window.sessionStorage.setItem("currentTab",JSON.stringify(item))//当前选中的tab
              console.log(item)
            }
          })
        }
      },
      'data.menuList'(newValue, oldValue){
        // console.log('变化值**********')
        if(newValue.length > 0){
          this.showTags = true
          this.tagsWidth = 100 / newValue.length + '%'
        }else{
          this.showTags = false
        }
      }
    },
    created () {
      // console.log(this.data)
    },
    mounted(){
      console.log('初始化的tab*****')
      console.log( window.sessionStorage.getItem('currentTab'))
      let arr =[]
      let obj = window.sessionStorage.getItem('currentTab')
      if(obj != ''){
        arr.push(JSON.parse(obj))
        this.$set(this.data,'menuList',arr)
        this.$set(this.data,'currentMenu',JSON.parse(obj))
        this.$emit('tabPro',{'data':this.data,'currentTab':this.data.currentMenu})
      }
    },
    methods: {
      isActive (path) {
        return path === this.$route.fullPath
      },
      handleTags (command) {
        console.log(command)
        command === 'other' ? this.closeOther() : this.closeAll()
      },
      //关闭当前的tab
      closeTags(index){
        console.log('关闭当前的tab*****')
        this.data.menuList.splice(index,1)
        // console.log(this.data.menuList)
        console.log(window.sessionStorage.getItem('currentTab'))
      },
      //当前选中的tab
      selectTab(tab){
        console.log('当前选中的tab****')
        console.log(tab)
        this.data.currentMenu = tab
        window.sessionStorage.setItem("currentTab",JSON.stringify(this.data.currentMenu))//当前选中的tab
        console.log(this.data.currentMenu)

      },
      //关闭其他
      closeOther(){
        console.log('关闭其他******')
        console.log(this.data.menuList)
        let currentTab = JSON.parse(window.sessionStorage.getItem('currentTab'))
        console.log(currentTab)
        console.log(this.data.menuList)
        let index;
        let list=this.data.menuList
        for (var i=0;i<list.length;i++){
          if(list[i].name == currentTab.name){
            index = i
          }
          if( i !== index){
            list.splice(i--,1)
          }
        }
      },
      //关闭全部
      closeAll(){
        let list=this.data.menuList
        for (var i=0;i<list.length;i++){
          list.splice(i--,1)
        }
        console.log('关闭全部****')
        window.sessionStorage.setItem("currentTab",'')
        this.$router.push('/')//跳转到首页
      },
    },
  }
</script>
<style lang="scss" scoped>
  .tags {
    position: relative;
    top: 0;
    left: 0;
    /*width: calc(100% - 0px);*/
    width: 100%;
    height: 30px;
    overflow: hidden;
    background: #f1f1f1;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 1px solid #d8d8d8;
  }

  .tags ul {
    box-sizing: border-box;
    padding-right: 30px;
    width: 100%;
    height: 100%;
  }

  .tags-li {
    float: left;
    position: relative;
    font-size: 13px;
    overflow: hidden;
    cursor: pointer;
    max-width: 130px;
    height: 30px;
    line-height: 30px;
    background: #f1f1f1;
    border: 1px solid #d8d8d8;
    padding: 0 5px;
    vertical-align: middle;
    color: #666666;
    -webkit-transition: all .3s ease-in;
    -moz-transition: all .3s ease-in;
    transition: all .3s ease-in;
    text-align: center;
    box-sizing: border-box;
  }

  .tags-li-icon {
    position: absolute;
    right: 5px;
  }

  .tags-li:not(.active):hover .tags-li-title {
    color: #000;
  }

  .tags-li.active {
    background: #ffffff;
  }

  .tags-li.active .tags-li-title {
    color: #409eff;
  }

  .tags-li-title {
    display: inline-block;
    width: 75%;
    max-width: 80px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-right: 5px;
    color: #666;
  }


  .tags-close-box {
    position: absolute;
    right: 0;
    top: 0;
    box-sizing: border-box;
    padding-top: 1px;
    text-align: center;
    width: 30px;
    height: 40px;
    border-left: 1px solid #d8d8d8;
    z-index: 10;
  }

  .el-dropdown {
    width: 100%;
    height: 40px;

  }

  .el-icon-arrow-down {
    width: 100%;
    height: 30px;
    line-height: 30px;
  }
</style>
