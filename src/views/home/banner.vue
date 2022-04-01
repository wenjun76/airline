 <template>
  <div class="banner">
      <div class="flightsearch">
        <div class="fstitle">
            <h3>嗨，想去哪里呢？</h3>
        </div>
        <div class="tab-input">
            <tabinput @city="tabinoutvalue" :bannercity="from">
                <template v-slot>
                    <h6>出发</h6>
                    <input type="text" name="from" id="from"  class="tab-text" disabled v-model="from">
                </template>
            </tabinput>
            <tabinput @city="tabinoutvalue1" :bannercity="to"> 
                <template v-slot>
                    <h6>到达</h6>
                    <input type="text" name="from" id="from"  class="tab-text" disabled v-model="to">
                </template>
            </tabinput>
            <div class="from-input">
                <h6>日期</h6>
                <input type="date" name="from" id="time" class="tab-text" :min="mintime" v-model="time">
            </div>
        </div>
        <div class="tab-search">
            <input type="button" value="搜索" class="search-bt" @click="tkinfolink" >
        </div>
      </div>
  </div>
</template>

<script>
import tabinput from '../../components/TabInput.vue'
import {request} from '../../network/request'
export default {
    name: 'banner',
    data() {
        return {
            from: '南宁',
            to: '北京',
            mintime: '',
            time: '',
            state: 0
        }
    },
    components: {
        tabinput
    },
    mounted() {
        this.mintime = this.convertToLateDate()
        this.time = this.convertToLateDate()
        console.log(this.time);
    },
    methods: {
        tabinoutvalue(val) {
            if(val === this.to){
                alert('不能相同')
            }else{
                this.from = val
            }
        },
        tabinoutvalue1(val) {
            if(val === this.from){
                alert('不能相同')
            }else{
                this.to = val
            }
        },
        convertToLateDate() {
            // const data = new Date()
            // const Da = new Date(data.getTime() + 24 * 60 * 60 * 1000 * 30)
            // 以上两行代码为关键代码，若想要返回一天后的时间，则可以将第二行代码更换为下面代码
            // var Da = new Date(data.getTime() + 24 * 60 * 60 * 1000);
            // 若是想要返回值为当前时间，则上面两行代码可以直接修改为下面代码即可。
            const Da = new Date()
            const y = Da.getFullYear()
            let m = Da.getMonth() + 1
            let d = Da.getDate()
            // let H = Da.getHours()
            // const mm = Da.getMinutes()
            m = m < 10 ? '0' + m : m
            d = d < 10 ? '0' + d : d
            //  H = H < 10 ? '0' + H : H
            return y + '-' + m + '-' + d// + H + ':' + mm
        },
        tkinfolink() {

            console.log(this.$store.state.userstate);
            if (!this.$store.state.userstate) {
                confirm('请先登录！')
                return
            }

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
                if (res.length != 0) {
                    // console.log(res.length);
                    // confirm(this.state)
                    this.$router.push('/ticketinfo/' + this.from+ '/' + this.to + '/' + this.time)
                }else {
                    confirm('没有票哦！')
                }
            }).catch(err => {
                console.log(err);
            })
        },
    }
}
</script>

<style scoped>

.banner {
    height: 600px;
	background-image: url('~assets/img/banner-bg.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
    padding-top: 10px;
}

.flightsearch {
    width: 1000px;
    border: 1px solid #000;
    background-color: #fff;
    margin: 400px auto;
    padding: 10px;
}

.tab-input {
    display: flex;
    justify-content: space-around;
    margin: 60px 0;
    
}

.fstitle {
    border-bottom: 1px solid #ccc;
    text-align: left;
    padding: 5px 10px;
}

.search-bt {
    width: 200px;
    height: 50px;
    font-size: 20px;
    color: #fff;
    border-radius: 5px;
    background-color: #223b61;
}

.tab-search {
    display: flex;
    justify-content: center;
}

@media (max-width: 400px) {

    .banner {
        height: 200px;
    }

    .tab-input {
        flex-wrap: wrap;
        margin: 0px 0;
    }

    .tab-input>div {
        margin: 10px 0;
    }

    .flightsearch {
        width: 300px;
        margin: 120px auto;
    }
    
    .search-bt {
        width: 200px;
        height: 30px;
        font-size: 10px;
    }


}

</style>