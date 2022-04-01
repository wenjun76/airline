<template>
  <div class="register">
      <h2>会员注册</h2>
      <div class="register-from">
          <div class="input-info flex1">
              <h5>姓名：</h5>
              <input type="text" placeholder="请输入姓名" class="input" id="name" @blur="inser" v-model="name">
          </div>
          <div class="input-info flex1">
              <h5>身份证号：</h5>
              <input type="text" placeholder="请输入身份证号" class="input" id="identity" @blur="inser" v-model="id">
          </div>
          <div class="input-info flex1">
              <h5>手机号：</h5>
              <input type="text" placeholder="请输入手机号" class="input" id="phone" @blur="inser" v-model="phone">
          </div>
          <div class="input-info flex1">
              <h5>邮箱号：</h5>
              <input type="text" placeholder="请输入邮箱号" class="input" id="email" @blur="inser" v-model="email">
          </div>
          <div class="input-info flex1">
              <h5>登录密码：</h5>
              <input type="password" placeholder="请输入登录密码" class="input" id="password" v-model="password">
          </div>
          <div class="input-info flex1">
              <h5>确认登录密码：</h5>
              <input type="password" placeholder="请再次输入登录密码" class="input" id="againpassword" @blur="inser" v-model="againpassword">
          </div>
          <div class="input-info radio flex">
              <input type="checkbox" name="" id="">
              <h5>已阅读并同意《航空行规则和条款》《隐私协议》</h5>
          </div>
          <div class="input-info ">
              <button type="button" class="input button" @click="register">注册</button>
          </div>
      </div>
  </div>
</template>

<script>
import {request} from '../../network/request'
export default {
    data() {
        return {
            name: '',
            id: '',
            phone: '',
            email: '',
            password: '',
            againpassword: '',
        }
    },
    methods: {
        //表单失焦事件 检查表单输入是否符合规则
        inser(e) {

            //符合输入规则添加样式
            function addpass(password) {
                e.target.className = "input pass";
                if (password) {
                    password.className = "input pass";
                }
            }

            //不符合添加样式
            function addfail(password) {
                e.target.className = "input fail";
                if (password) {
                    password.className = "input fail";
                }
            }

            //判断失焦的DOM元素
            switch (e.target.id) {
                case 'name':
                    if(this.name != ''){
                        addpass()
                    }else {
                        addfail()
                    }
                    break;
                case 'identity':
                    if(this.id.length == 18){
                        addpass()
                    }else {
                        addfail()
                    }
                    break;
                case 'phone':
                    if(this.phone.length == 11){
                        addpass()
                    }else {
                        addfail()
                    }
                    break;
                case 'email':
                    //邮箱验证正则表达式
                    const regEmail = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
                    //console.log(regEmail.test(this.email));
                    if(regEmail.test(this.email)){
                        addpass()
                    }else {
                        addfail()
                    }
                    break;
                case 'againpassword':
                    //获取首次输入密码DOM元素 传入添加样式函数中
                    const password = document.getElementById('password')
                    if(this.password === this.againpassword && this.password != ''){
                        addpass(password)
                    }else {
                        addfail(password)
                    }
                    break;
                default:
                    break;
            }
            
        },
        //注册按钮点击事件
        register() {
            request({
                url: '/index.php/index/register',
                params: {
                    name: this.name,
                    id: this.id,
                    phone: this.phone,
                    email: this.email,
                    password: this.password
                }
            }).then(res => {
                console.log(res);
                if (res) {
                    alert('注册成功！')
                    this.$router.push('/login')
                }else {
                    alert('手机号已存在！')
                }
            })
        }
        // identity() {
        //     const name = document.getElementById('identity')
        //     if(this.id.length == 18){
        //         name.className = "input pass";
        //     }else {
        //         name.className = "input fail";
        //     }
        // },
        // iphone() {
        //     const name = document.getElementById('identity')
        //     if(this.id.length == 18){
        //         name.className = "input pass";
        //     }else {
        //         name.className = "input fail";
        //     }
        // },
        // iemail() {
        //     const name = document.getElementById('identity')
        //     if(this.id.length == 18){
        //         name.className = "input pass";
        //     }else {
        //         name.className = "input fail";
        //     }
        // },
        // ipassword() {
        //     const name = document.getElementById('identity')
        //     if(this.id.length == 18){
        //         name.className = "input pass";
        //     }else {
        //         name.className = "input fail";
        //     }
        // },
        // iagainpassword() {
        //     const name = document.getElementById('identity')
        //     if(this.id.length == 18){
        //         name.className = "input pass";
        //     }else {
        //         name.className = "input fail";
        //     }
        // }
    },
}
</script>

<style scoped>
.register {
    width: 1200px;
    padding: 50px 0;
    margin: 0 auto;
    background-color: #fff;
    text-align: center;
    color: #223b61;
}


.register-from {
    width: 500px;
    margin: 50px auto;
}

.input {
    width: 300px;
    height: 40px;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #223b61;
    box-sizing: border-box;
}

.input-info {
    margin: 30px 0;
}

.radio {
    justify-content: center;
    align-items: center;
}


.button {
    margin-top: 20px;
    background-color: #cb1e36;
    border: none;
    color: #fff;
}

.button:hover {
    background-color: #e7112d;
}

.pass {
    border: 2px solid green;
}

.fail {
    border: 2px solid #e7112d;
}

</style>