<template>
  <div id="app" class="user">
      <div>
          <h3>我的航空</h3>
      </div>
      <div class="user-box">
          <div class="user-top">
              您的位置： 首页 > 我的航空
          </div>
          <div class="user-centent flex1">
              <div class="user-left">
                  <ul class="user-menu" v-for="(item, index) in menu" :key="index">
                      <li class="">
                          <div class="menu1 flex1" @click="menucilck(index)">
                            <div>
                                <span id="title1">{{item.name}}</span>
                            </div>
                            <div>
                                <i id="arrow1" class="el-icon-arrow-right"></i>
                            </div>
                          </div>
                          <div class="menu2 trans" :class="{height1: acitve == index }">
                              <ul >
                                  <li 
                                  v-for="(item1, index1) in item.arr" 
                                  :key="index1" 
                                  @click="routecilck(item1.route, index1)" 
                                  :class="{acitve: acitve1 === index1}"
                                  >
                                    {{item1.menuname}}
                                  </li>
                              </ul>
                          </div>
                      </li>
                  </ul>
              </div>
              <div class="user-right">
                   <router-view></router-view>
              </div>
          </div>
          
      </div>
  </div>
</template>

<script>
export default {
    name: 'user',
    data() {
        return {
            menu: {
                menu1: {
                    name: '我的订单',
                    arr: [
                      {
                        menuname: '机票订单',
                        route: '/user/planeticket'  
                      },
                      {
                        menuname: '其他订单',
                        route: '/user/other'  
                      }
                    ],
                },
                menu2: {
                    name: '个人中心',
                    arr: [
                      {
                        menuname: '常用乘客',
                        route: '/user/passenger'  
                      },
                      {
                        menuname: '常用地址',
                        route: '/user/address'  
                      }
                    ],
                }
            },
            acitve: 'menu1',
            acitve1: 0
        }
    },
    created(){
        this.$router.push('/user/planeticket')
    },
    methods: {
        menucilck(index) {
            this.acitve = index
            this.acitve1 = 0
            this.routecilck(this.menu[index].arr[0].route, 0)
        },
        routecilck(route, index) {
            if(this.$route.path === route){
                return 
            }
            this.acitve1 = index
            this.$router.push(route)
        }
    },
}
</script>

<style>
.user {
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    box-sizing: border-box;
}

.user>div {
    padding: 20px 0;
}

.user-top {
    margin: 10px 0;
}

.user-left {
    width: 250px;
}

.user-right {
    width: 940px;
}

.user-menu {
    padding: 0 20px;
}

.menu1 {
    font-size: 18px;
    height: 50px;
    line-height: 50px;
}

.menu2 {
    height: 0px;
    overflow: hidden;
}

.height1 {
    height: 80px;
}


.trans {
    transition: all .2s ease;
}

.menu2>ul>li {
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    position: relative;
}

.menu2>ul>li:hover {
    color: blue;
    background-color: rgba(31, 92, 182, 0.05);
}

.menu2>ul>li:hover:before {
    display: block;
    content: '';
    width: 3px;
    height: 100%;
    background-color: #1f5cb6;
    position: absolute;
    left: 0;
    top: 0;
}

.acitve::before {
    display: block;
    content: '';
    width: 3px;
    height: 100%;
    background-color: #1f5cb6;
    position: absolute;
    left: 0;
    top: 0;
}
</style>