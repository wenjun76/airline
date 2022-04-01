<template>
  <div id="login">
      <div class="login" :class="{'err': err}">
          <div class="login-top">
              <h3>账号密码登录</h3>
          </div>
          <div class="login-from">
            <div class="name flex2">
                <h5>登录名：</h5>
                <input type="text" name="account" placeholder="输入手机号、邮箱号" id="account" class="input" v-model="account">
            </div>
            <div class="password flex2">
                <h5>密码：</h5>
                <input type="password" name="password" placeholder="输入密码" id="password" class="input" v-model="password">
            </div>
            <div class="forget">
                <a href="">忘记密码？</a>
            </div>
            <input type="button" value="立即登录" class="button" @click="login">
          </div>
          <div class="login-bottom flex1">
              <span></span>
              <span>注册用户</span>
          </div>
      </div>
  </div>
</template>

<script>
import {request} from '../../network/request'
export default {
    name: 'login',
    data() {
        return {
            account: '',
            password: '',
            userinfo: {},
            err: false
        }
    },
    methods: {
        login() {
            request({
                url: '/index.php/index/login',
                params: {
                    ac: this.account,
                    ps: this.password
                }
            }).then(res => {
                
                //判断是否存在该用户
                if (res === null) {
                    const taht = this
                    taht.err = true
                    setTimeout(function(){
                        taht.err = false
                        console.log(taht);
                    },2000)
                }else {
                    //存在该用户
                    console.log(res);
                    this.userinfo = res
                    this.$store.commit('login', this.userinfo)
                    this.$store.commit('ustrue')
                    localStorage.setItem('id', this.userinfo.user_Id)
                    localStorage.setItem('token', this.userinfo.user_token)
                    this.$router.push('/home')
                }
            }).catch(err => {
                console.log(err);
            })
        }
    },
}
</script>

<style scoped>

.login {
    width: 450px;
    background-color: #fff;
    padding: 30px 30px 10px 30px;
    box-sizing: border-box;
    border-radius: 2px;
    margin: 100px auto;
    border: 2px solid #223b61;
    position: relative;
}


.login-from {
    margin: 40px 0;
}

.input {
    width: 250px;
    height: 25px;
    border: 1px solid #223b61;
    padding: 0 10px;
    margin: 10px 0;
}

.button {
    width: 100%;
    height: 40px;
    margin-top: 70px;
    background-color: #cb1e36;
    border: none;
    color: #fff;
}

.button:hover {
    background-color: #e7112d;
}

.forget {
    float: right;
}

.err {
    border: 2px solid #e7112d;
}

.err:before {
    content: '请输入正确账号密码！';
    position: absolute;
    top: -20px;
    left: 0;
    color: #e7112d;
    transition: all 1s ease-in .1s,
}
</style>