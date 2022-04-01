<template>
  <div class="tkinfo">
    <div class="tkinfo-text flex">
        <h2>{{from}}</h2>
        <h5>({{time}})</h5>
        <h2>{{to}}</h2>
      </div>
      <div class="tkinfo-sort">
        <ul class="flex" >
          <li v-for="(item, index) in sorts" :key="index" :class="{active: index == active}" @click="sort(index)">{{item}}</li>
        </ul>
      </div>
      
      <div class="tkinfo-center" v-for="(item, index) in info" :key="index">
        <div class="tkinfo-item">
          <div class="tkinfo-item-left">
            <div class="til-top">
              <h3>飞机型号：{{item.air_model}}</h3>
            </div>
            <div class="til-bottom">
              <div>
                <h2>{{item.from_time}}</h2>
                <h4>{{item.from}}</h4>
              </div>
              <div>
                <ul>
                  <li>直达</li>
                  <li>总时长：2h20m</li>
                </ul>
              </div>
              <div>
                <h2>{{item.to_time}}</h2>
                <h4>{{item.to}}</h4>
              </div>
              <div>
                <h4>详细信息</h4>
              </div>
            </div>
          </div>
          <div class="tkinfo-item-right">
            <div class="economy room" @click="purchase(item.flight_Id, 'eco')">
              <div class="roomtype">
                <h3>经济舱</h3>
              </div>
              <div  class="roomprice">
                <h2>￥{{item.economy_price}}</h2>
                <span>剩余：{{item.economy}}</span>
              </div>
            </div>
            <div class="business room" @click="purchase(item.flight_Id, 'business')">
              <div class="roomtype">
                <h3>商务舱</h3>
              </div>
              <div class="roomprice">
                <h2>￥{{item.business_price}}</h2>
                <span>剩余：{{item.business}}</span>
              </div>
            </div>
            <div class="first room" @click="purchase(item.flight_Id, 'first')">
              <div class="roomtype">
                <h3>头等舱</h3>
              </div>
              <div class="roomprice">
                <h2>￥{{item.first_price}}</h2>
                <span>剩余：{{item.first}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>   
  </div>
</template>

<script scoped>
import {request} from '../../network/request'
export default {
    name: 'ticketinfo',
    data() {
      return {
        to: '',
        from: '',
        time: '',
        active: 0,
        sorts: ['默认排序', '价格优先', '航程时间'],
        info: ''
      }
    },
    methods: {
      sort(index){
        this.active = index
      },
      purchase(id, room){
        this.$router.push('/purchase/'+ id +'/' + room)
      }
    },
    created() {
      this.to = this.$route.params.to
      this.from = this.$route.params.from
      this.time = this.$route.params.time
      request({
        url: '/index.php/index/flight',
        params: {
            stype: 1,
            from: this.from,
            to: this.to,
            time: this.time
        }
      }).then(res => {
        //console.log(res.length == 0);
        this.info = res
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    },
}
</script>

<style>
.tkinfo{
  width: 1200px;
  margin: 40px auto;
  text-align: center;
  background-color: #fff;
}

.tkinfo-item {
  width: 100%;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.tkinfo-item-left, .tkinfo-item-right {
  width: 45%;
  display: flex;
  
}

.tkinfo-item-right {
  justify-content: space-between;
}

.tkinfo-item-left {
  flex-direction: column;
  padding: 20px;
}


.til-top {
  width: 100%;
  text-align: left;
  margin: 0 0 20px 0;
}

.til-bottom {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.room {
  width: 33%;
  border: 1px solid rgba(34, 59, 79, .5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}

.room div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #223b61;
}

.roomtype {
  height: 35%;
  line-height: 40px;
}

.roomprice {
  height: 65%;
  padding: 10px 0;
}


.tkinfo-sort {
  background-color: rgba(34, 59, 79, .3) ;
  margin: 20px 0;
}

.tkinfo-sort ul {
  padding:  10px 20px;
}

.tkinfo-sort ul li {
  padding: 5px 10px;
  font-size: 12px;
  border: 1px solid rgba(34, 59, 79, .1) ;
  border-radius: 3px;
  margin-right: 30px;
  background-color: #fff ;
}

.active {
  color: blue;
  border-color: #223b61 !important; 
}


.tkinfo-text {
  width: 100%;
  height: 60px;
  background-color: #223b61;
  color: #fff;
  align-items: center;
  justify-content: space-around;
}

</style>