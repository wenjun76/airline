<template>
  <div class="purchase-box">
      <div class="purchase-bg"></div>
      <div class="purchase flex">
          <div class="purchase-left">
              <div class="passengers">
                  <div class="passengers-text flex">
                      <h4>选择乘机人</h4>
                      <h5>{{adult}}成人，{{children}}儿童，{{baby}}婴儿</h5>
                  </div>
                  <div class="add flex" >
                      <div class="passengers-info flex" v-for="(item, index) in passengers" :key="index">
                          <div class="info  flex">
                              <span>{{item.passenger_name}}</span>
                              <h6>{{item.passenger_type}}</h6>
                          </div>
                      </div>
                      <div class="passengers-add flex" @click="addpassengers">
                          <span>+</span>
                          <span>新增乘机人</span>
                      </div>
                  </div>
              </div>
              <div class="passengers-input addpassengers" v-if="show">
                  <div class="input-top flex">
                      <div class="input-top-text flex1">
                          <h3>新增乘机人</h3>
                          <h6>成人</h6>
                          <span>请确认您的证件在所有航班起飞时间后仍有效，以免影响登机。</span>
                      </div>
                      <div class="empty" @click="preservation">
                          <span >保存</span>
                      </div>
                      <div class="empty" @click="addpassengers">
                          <span >取消</span>
                      </div>
                  </div>
                  <div class="input-center flex">
                    <div class="input-text">
                        <div class="input">
                            <h6>*姓名</h6>
                            <input type="text" class="allinput" key="name" v-model="name">
                        </div>
                    </div>
                    <div class="input-text">
                        <div class="input">
                            <h6>*身份证</h6>
                            <input type="text" class="allinput" key="id" v-model="id">
                        </div>
                    </div>
                    <div class="input-text">
                        <div class="input">
                            <h6>*手机</h6>
                            <input type="text" class="allinput" key="phone" v-model="phone">
                        </div>
                    </div>
                    <div class="input-text">
                        <div class="input">
                            <h6>*邮箱地址</h6>
                            <input type="text" class="allinput" key="email" v-model="email">
                        </div>
                    </div>
                    <div class="input-text">
                        <div class="input">
                            <h6>*类型</h6>
                            <select name="type" class="allinput"  v-model="type">
                                <option value="成人">成人</option>
                                <option value="儿童">儿童</option>
                                <option value="婴儿">婴儿</option>
                            </select>
                        </div>
                    </div>
                  </div>
                  
              </div>
              <div class="passengers-input" v-for="(item, index) in passengers" :key="index">
                  <div class="input-top flex">
                      <div class="input-top-text flex1">
                          <h3>{{item.name}}</h3>
                          <h6>{{item.type}}</h6>
                          <span>请确认您的证件在所有航班起飞时间后仍有效，以免影响登机。</span>
                      </div>
                      <div class="empty" @click="empty(index)">
                          <span >清空</span>
                      </div>
                  </div>
                  <div class="input-center flex">
                    <div class="input-text">
                        <div class="input">
                            <h6>*姓名</h6>
                            <input type="text" class="allinput" disabled :value="item.passenger_name">
                        </div>
                    </div>
                    <div class="input-text">
                        <div class="input">
                            <h6>*身份证</h6>
                            <input type="text" class="allinput" disabled :value="item.passenger_userid">
                        </div>
                    </div>
                    <div class="input-text">
                        <div class="input">
                            <h6>*手机</h6>
                            <input type="text" class="allinput" disabled :value="item.passenger_phone"> 
                        </div>
                    </div>
                    <div class="input-text">
                        <div class="input">
                            <h6>*邮箱地址</h6>
                            <input type="text" class="allinput" disabled :value="item.passenger_email">
                        </div>
                    </div>
                    <div class="input-text">
                        <div class="input">
                            <h6>*类型</h6>
                            <select name="type" class="allinput" disabled :value="item.passenger_type">
                                <option value="成人">成人</option>
                                <option value="儿童">儿童</option>
                                <option value="婴儿">婴儿</option>
                            </select>
                        </div>
                    </div>
                  </div>
                  
              </div>
          </div>
          <div class="purchase-right">
              <div class="tk-info">
                  <div class="tk-top flex1">
                      <h4>{{flight.from}}</h4>
                      <span>-----------</span>
                      <h4>{{flight.to}}</h4>
                  </div>
                  <div class="tk-center flex1">
                      <div style="text-align: left">
                          <h5>{{flight.flight_date}}</h5>
                      </div>
                      <div>
                          <span>HX{{flight.flight_Id}}</span>
                      </div>
                      <div style="text-align: right">
                          <h5>{{room}}</h5>
                      </div>
                  </div>
                  <div class="tk-bottom flex1">
                      <div>
                          <h5>{{flight.from_time}}</h5>
                      </div>
                      <div>
                          <span>直达</span> 
                          <span>时长：2h20m</span>
                      </div>
                      <div>
                          <h5>{{flight.to_time}}</h5>
                      </div>
                  </div>
              </div>
              <div class="price">
                  <div class="ticketprice">
                      <h4>票价：</h4>
                      <ul>
                          <li class="flex1" v-if="adult > 0"> 
                              <h4>成人 X {{adult}}</h4>
                              <h4>{{adultmoney}}</h4>
                          </li>
                          <li class="flex1" v-if="children > 0"> 
                              <h4>儿童 X {{children}}</h4>
                              <h4>{{childrenmoney}}</h4>
                          </li>
                      </ul>
                  </div>
                  <div class="ticketprice flex1">
                      <h4>机建费：</h4>
                      <h4>￥{{mcc}}</h4>
                  </div>
                  <div class="ticketprice flex1">
                      <h4>燃油费：</h4>
                      <h4>￥{{fc}}</h4>
                  </div>
                  <div class="ticketprice flex1">
                      <h3>总价：</h3>
                      <h3 id="total" v-if="adult > 0 || children > 0">{{totalprice}}</h3>
                  </div>
                  <button type="button" id="next">
                      <span>下一步</span>
                  </button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import {request} from 'network/request.js'
export default {
    data() {
        return {
            passengers: [
                {
                    name: '何文俊',
                    id: 450821199905205837,
                    phone: 18260867836,
                    email: '835693039@qq.com',
                    type: '成人'
                },
                {
                    name: '何文文',
                    id: 450821199905205837,
                    phone: 18260867836,
                    email: '835693039@qq.com',
                    type: '儿童'
                }
            ],
            show: false,
            name: '',
            id: '',
            phone: '',
            email: '',
            type: '',
            adult: 1,
            children: 1,
            baby: 0,
            mcc: 50,
            fc: 20,
            flight: '',
            room: '',
            money: ''

        }
    },
    computed: {
        adultmoney: function () {
            return '￥' + this.adult * this.money
        },
        childrenmoney: function () {
            return '￥' + this.children * (this.money/2)
        },
        totalprice: function() {
            return '￥' + (this.children * (this.money/2) + this.adult * this.money + this.mcc + this.fc)
        }
    },
    methods: {
        empty(index) {
            //console.log(this.passengers[index].type)
            const type = this.passengers[index].type
            if (type == '成人') {
                this.adult--
            }else if(type == '儿童'){
                this.children--
            }else if(type == '婴儿'){
                this.baby--
            }
            this.passengers.splice(index, 1)
        },
        preservation() {
            const pg = {
                passenger_name: this.name,
                passenger_userid: this.id,
                passenger_phone: this.phone,
                passenger_email: this.email,
                passenger_type: this.type
            }

            if (this.type == '成人') {
                this.adult++
            }else if(this.type == '儿童'){
                this.children++
            }else if(this.type == '婴儿'){
                this.baby++
            }

            this.name = ''
            this.id = ''
            this.phone = ''
            this.email = ''
            this.type = ''

            
            this.passengers.push(pg)
            this.show = !this.show
        },
        addpassengers() {
            this.show = !this.show
        }
    },
    //页面加载前
    created() {
        

        //获取航班信息
        request({
            url: 'index.php/index/flight',
            params: {
                stype: 2,
                flightid: this.$route.params.flightid
            }
        }).then(res => {
            this.flight = res
            const fr = this.$route.params.room 
            console.log(this.flight);
            if( fr == 'eco' ){
                this.room = '经济舱'
                this.money = this.flight.economy_price
            }else if( fr == 'business' ){
                this.room = '商务舱'
                this.money = this.flight.business_price
            }else if( fr == 'first' ){
                this.room = '头等舱'
                this.money = this.flight.first_price
            }
            console.log(res);
        }).catch(res => {

        })


        //获取乘机人信息
        const userid = localStorage.getItem('id')
            request({
                url: 'index.php/index/passengers',
                params: {
                    userid: userid
                }
            }).then(res => {
                console.log(res);
                this.passengers = res

                this.adult = 0
                this.children = 0
                this.baby = 0
                for (let index = 0; index < this.passengers.length; index++) {
                    console.log(1);
                    if(this.passengers[index].passenger_type === '成人'){
                        this.adult++
                    }else if(this.passengers[index].passenger_type === '儿童'){
                        this.children++
                    }else if (this.passengers[index].passenger_type === '婴儿'){
                        this.baby++
                    }
                }
            }).catch(res => {
                console.log(res);
            })



        
    },
}
</script>

<style scoped>

    .purchase-box {
        width: 100%;
        position: relative;
        padding-top: 200px;
        text-align: center;
    }

    .purchase-bg {
        position: absolute;
        width: 100%;
        top: 0;
        z-index: -1;
        background-image: url('~assets/img/banner-bg.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        
    }

    .purchase {
        width: 1200px;
        margin:  0 auto;
        justify-content: space-between;
        align-items: flex-start;
        
    }

    .purchase-left {
        width: 67%;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 3px;
        background-color: #fff;
    }

    .add {
        border-bottom: 1px solid #223b61;
        padding: 40px 0;
    }

    .info, .passengers-add{
        width: 140px;
        height:30px;
        align-items: center;
        border: 1px solid #223b61;
        justify-content: space-around;
        padding: 0 10px;
        box-sizing: border-box;
        margin-right: 20px;
    }

    .passengers-add {
        border: 1px dashed #223b61;
    }

    .passengers-text {
        justify-content: space-between;
    }

    .input-top {
        margin: 20px 0;
        justify-content: space-between;
        align-items: center;
    }

    .allinput {
        width: 200px;
        height: 40px;
        border: 1px solid #223b61;
        padding: 10px;
        box-sizing: border-box;
        font-size: 14px;
    }

    .input-center {
        flex-wrap: wrap;
        border-bottom: 1px solid #223b61;
        padding-bottom: 30px;
    }

    .input-text {
        margin: 20px 20px 20px 0;
    }

    .input-top-text {
        width: 65%;
        align-items: flex-end;
    }

    .input-top-text span {
        font-size: 12px;
        color: #aaa;
    }


    .purchase-right {
        width: 32%;
        background-color: #fff;
        padding: 20px;
        box-sizing: border-box;
    }

    .ticketprice ul {
        padding-left: 50px;
    }

    .ticketprice {
        margin: 30px 0;
    }

    .tk-center>div {
        width: 30%;
    }

    .tk-info>div {
        margin-bottom: 10px;
    }

    #total {
        color: #cb1e36;
    }

    #next {
        width: 100%;
        height: 55px;
        background-color: #cb1e36;
        border: none;
        color: #fff;
    }

    #next:hover {
        background-color: #e7112d;
    }
</style>