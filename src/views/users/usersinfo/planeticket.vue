<template>
  <div>
      <div class="box-top flex">
        <div class="top-left">
          <ul class="flex">
            <li>全部</li>
            <li>待支付</li>
            <li>已支付</li>
          </ul>
        </div>
        <div class="top-right">

        </div>
      </div>

      <div class="box-content" v-for="(item, index) in allorder" :key="index">
        <div class="order-box">
          <div class="flex1">
            <div class="flex2">
              <h3>机票订单</h3>
              <h4>&nbsp&nbsp订单状态</h4>
            </div>
            

            <div>
              总价: <span style="color:red;font-size:24px">￥1500</span>
            </div>
          </div>

          <div class="numberdate flex">
            <h5>订单编号：{{item.order_Id}}</h5>
            <h5>下单日期：{{item.order_data}}</h5>
          </div>

          <div class="flex1">

            <div class="route flex2">
              <div class="left">
                <h3>{{item.from}}</h3>
                <h5>{{item.flight_date}}{{item.from_time}}</h5>
              </div>
              <div>
                <i class="el-icon-caret-right"></i>
                <i class="el-icon-caret-right"></i>
                <i class="el-icon-caret-right"></i>
                <i class="el-icon-caret-right"></i>
              </div>
              
              <div class="right">
                <h3>{{item.to}}</h3>
                <h5>{{item.flight_date}}{{item.to_time}}</h5>
              </div>
            </div>

            <div class="order-info">
              订单详情
            </div>

          </div>

        </div>
      </div>
  </div>
</template>

<script>
import {request} from 'network/request.js'
export default {
  name: 'planeticket',
  data() {
    return {
      allorder: ''
    }
  },
  created() {

    const userid = localStorage.getItem('id')

    request({
      url: '/index.php/index/order',
      params: {
        userid: userid
      }
    }).then( res => {
      console.log(res);
      this.allorder = res 
    }).catch({

    })
  },
}
</script>

<style scoped>

  .box-content{
    margin: 20px 0;
    padding: 5px 20px;
    border-radius: 2px;
    box-shadow: 0 0 5px 2px rgba(31,92,182,.5);
    box-sizing: border-box;
  }
  
  .box-content>div>div {
    margin: 20px 0;
  }

  .order-info {
    width: 100px;
    height: 32px;
    border: 2px solid #223b61;
    text-align: center;
    line-height: 32px;
    font-size: 16px;
  }

  .order-info:hover {
    background-color: #223b61;
    color: #fff;
  }

  .top-left>ul>li {
    width: 90px;
    height: 26px;
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    background-color: 1;
    margin-right: 5px;
  }

  .numberdate>h5 {
    margin-right: 30px;
    color: #666;
  }

  .route {
    width: 40%;

  }
</style>