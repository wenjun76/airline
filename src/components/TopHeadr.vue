<template>
  <div class="top-head">
      <div class="top-box">
        <ul>
            <li class="flex2"><img src="../assets/img/Airplane.png" alt="" srcset="" style="width:30px;"></li>
            <li>首页</li>
            <li>购票</li>
            <li v-if="$store.state.userstate">
                <div class="top-box-user" @mouseover="mouseOver" @mouseleave="mouseOut">
                    <a href="JavaScript:;">
                        {{userinfo.user_name}}
                    </a>
                    <div class="top-box-user-menu"  v-show="acitve">
                        <ul>
                            <li><a href="user">用户中心</a> </li>
                            <li @click="cancellation"><a href="JavaScript:;">注销</a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li v-else>
                <a href="login">登录/</a>
                <a href="register">注册</a>
            </li>
        </ul>
      </div>
  </div>
</template>

<script>
import {request} from 'network/request'
export default {
    name: 'top',
    data() {
        return {
            userinfo: '',
            acitve: false
        }
    },
    created() {
        if(!this.$store.state.userstate){
            const token = localStorage.getItem('token')
            const userid = localStorage.getItem('id')
            if (userid != null) {
                request({
                    url: '/index.php/index/autologin',
                    params: {
                        userid: userid,
                        token: token
                    }
                }).then(res => {
                    console.log(res);
                    this.$store.commit('login', res)
                    this.$store.commit('ustrue')
                    this.userinfo = res
                }).catch(res => {
                    console.log(res);
                })
            }else {
                this.$store.commit('usfalse')
            }
        }
    },
    updated() {
        this.userinfo = this.$store.state.user
    },
    methods: {
        userclick(){
            this.acitve = !this.acitve
        },
        cancellation(){
            this.$store.commit('cancellation')
            localStorage.setItem('id','')
            localStorage.setItem('token','')
        },
        mouseOver(){
            this.acitve = true
        },
        mouseOut(){
            this.acitve = false
        }
    },
}
</script>

<style scoped>

.top-head {
    width: 100%;
    color: #fff;
    background-color: #223b61;
}

.top-box {
    width: 1200px;
    margin: 0 auto;
}

.top-box>ul {
    width: 100%;
    height: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

.top-box>ul>li {
    line-height: 50px;
}


.top-box-user {
    position: relative;
}

.top-box-user-menu {
    width: 120px;
    background-color: #fff;
    border: 1px solid #000;
    color: #000;
    text-align: center;
    position: absolute;
    top: 100%;
    left: -60%;
}

.top-box-user-menu>ul>li>a {
    color: #000;
}


.top-box-user-menu>ul>li:hover,
.top-box-user-menu>ul>li:hover a {
    color: #fff;
    background-color: #223b61;
}


@media (max-width: 400px) {
    .top-box {
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
    }
}
</style>