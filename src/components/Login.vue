<template>
  <div>
    <div style="display: flex;justify-content: center;align-items: center;">
      <el-card style="width: 400px;">
        <div slot="header" >
          <span>登陆</span>

        </div>
        <table>
          <tr>
            <td style="width: 100px">用户名</td>
            <td style="margin-left: 20px">
              <el-input v-model="user.account" placeholder="请输入内容"></el-input>
            </td>
          </tr>
          <tr>
            <td>密码</td>
            <td style="margin-left: 10px">
              <el-input placeholder="请输入密码" v-model="user.password" show-password @keydown.enter.native="doLogin"></el-input>
            </td>
          </tr>

        </table>

            <el-button style="margin-top: 20px"  type="danger" @click="doLogin">登陆</el-button>
            <el-button  type="danger" @click="doReset">重置</el-button>

      </el-card>
    </div>

  </div>

</template>

<script>
  import {postRequest} from "../utils/api";

  export default {
    data(){
      return{
        user:{
          account:'zhangsan',
          password:'123'
        }

      }
    },
    methods:{
      doLogin(){
        postRequest("/doLogin",this.user).then(data=>{
            if(data){
              window.localStorage.setItem("user",JSON.stringify(data.obj));
              this.$router.replace("/home");
            }
          })
      },
      doReset(){
        this.user.account=null;
        this.user.password=null;
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
