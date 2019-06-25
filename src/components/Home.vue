<template>

    <el-container>
      <el-header style="background-color: #4c9bff;display: flex;justify-content: space-between;align-items: center;">
        <div style="font-family: 华文行楷;font-size: 30px;">粤通物流管理系统</div>
        <div>


          <el-dropdown>
            <span class="el-dropdown-link" style="cursor: pointer">
              {{ user.username}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item divided >退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px" style="text-align: left;overflow: hidden" >
          <el-menu unique-opened router>
            <el-submenu :index="index+''" v-for="(item,index) in this.$router.options.routes" :key="index" v-if="!item.hidden && item.meta.role.indexOf(user.role.rolename)!=-1" style="padding-left: 0px;" >
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>{{item.name}}</span>
              </template>
              <el-menu-item :index="child.path" v-for="(child,indexj) in item.children" :key="indexj" style="padding-left: 65px;">{{child.name}} </el-menu-item>
            </el-submenu>

          </el-menu>
        </el-aside>
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right" v-if="this.$router.currentRoute.path!='/home'">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item  v-for = "(item,index) in this.$route.matched" :key = "index" >{{item.name}}
            </el-breadcrumb-item>
          </el-breadcrumb>

          <div style="font-size: 40px;font-family: 华文行楷;text-align: center;line-height: 100px" v-if="this.$router.currentRoute.path=='/home'">
              欢迎来到粤通管理系统！
          </div>



          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>


</template>

<script>
    export default {
        name: "Home",
        data() {
          return {
            user: JSON.parse(window.localStorage.getItem("user"))
          }
        }
    }

</script>

<style >

</style>
