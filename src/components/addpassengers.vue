<template>
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
                          <h3>{{item.passenger_name}}</h3>
                          <h6>{{item.passenger_type}}</h6>
                          <span>请确认您的证件在所有航班起飞时间后仍有效，以免影响登机。</span>
                      </div>
                      <div class="empty" @click="empty(item.passenger_id)">
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
</template>

<script>
import {request} from 'network/request'
export default {
    data() {
        return {
            passengers: [],
            show: false,
            name: '',
            id: '',
            phone: '',
            email: '',
            type: '',
            adult: 0,
            children: 0,
            baby: 0,
            mcc: 50,
            fc: 20
        }
    },
    created() {
        this.passenger()
    },
    //计算属性
    computed: {
        adultmoney: function () {
            return '￥' + this.adult * 1200
        },
        childrenmoney: function () {
            return '￥' + this.children * 600
        },
        totalprice: function() {
            return '￥' + (this.children * 600 + this.adult * 1200 + this.mcc + this.fc)
        }
    },
    methods: {
        //从数据库获取乘客
        passenger(){
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
            })

            

        },
        //删除乘客
        empty(id) {
            console.log(id);
            request({
                url: 'index.php/index/rovmepassengers',
                params: {
                    passengerid: id
                }
            }).then(res => {
                console.log(res);
                this.passenger()
            })
        },
        //添加乘客
        preservation() {
            const pg = {
                passenger_name: this.name,
                passenger_id: this.id,
                passenger_phone: this.phone,
                passenger_email: this.email,
                passenger_type: this.type
            }
            const userid = localStorage.getItem('id')
            request({
                url: 'index.php/index/addpassengers',
                params: {
                    userid: userid,
                    name: this.name,
                    id: this.id,
                    phone: this.phone,
                    email: this.email,
                    type: this.type
                }
            }).then(res => {
                this.passenger()
                this.show = !this.show
            })

            this.name = ''
            this.id = ''
            this.phone = ''
            this.email = ''
            this.type = ''
        },
        addpassengers() {
            this.show = !this.show
        }
    },
}
</script>

<style>
.purchase-bg {
    height: 400px;
	background-image: url('~assets/img/banner-bg.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
    padding-top: 10px;
}

.purchase {
    width: 1200px;
    margin: 200px auto 0 auto;
    justify-content: space-between;
    align-items: flex-start;
}

.purchase-left {
    width: 100%;
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


/* .purchase-right {
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
} */
</style>