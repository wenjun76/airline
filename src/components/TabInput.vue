<template>
<div class="input-box" ref="main">
    <div class="from-input" @mouseover="over" @mouseleave="leave" :style="active" @click="inputclick">
        <slot></slot>
    </div>
    <div class="city-box" v-show="active1">
      <div class="initials-box">
        <div class="init-info" v-for="(item, index) in init" :key="item" @click="mousclick(index)" :class="{border: active2 == index}">
            {{item}}
        </div>
      </div>
      <div class="city-info" v-for="(item, index) in city" :key="index" v-show="active2 == index">
          <span v-for="item1 in item" :key="item1" @click="cityclick(item1)">{{item1}}</span>
      </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'tabinput',
    props: {
        bannercity: {
            type: String
        }
    },
    data() {
        return {
            active: '',
            active1: false, 
            active2: '',
            init: ['ABCD', 'EFGHJ', 'KLMNOP', 'QRSTW', 'XYZ'],
            city: [
                ['北京','成都'],
                ['济南'],
                ['南宁'],
                ['上海'],
                ['厦门']
            ],
        }
    },
    mounted() {

        // 点击弹窗外关闭弹窗
        document.addEventListener("click", this.bodyCloseMenus);
    },
    methods: {
        over () {
            this.active = 'border: 1px solid #000'
        },
        leave () {
            this.active = ''
        },
        inputclick () {
            this.active1 = !this.active1
        },
        mousclick (index) {
            this.active2 = index
        },
        cityclick (item1) {
            this.$emit('city', item1)
            this.active1 = !this.active1
            console.log(item1);
        },

        // 点击弹窗外关闭弹窗
        bodyCloseMenus(e) {
            let self = this;
            // console.log(this.$refs.main.contains(e.target))
            if (this.$refs.main && !this.$refs.main.contains(e.target)) {
                if (self.active1 == true){
                    self.active1 = false;
                }
            }
            },
        beforeDestroy() {
            document.removeEventListener("click", this.bodyCloseMenus);
        },

    },
}
</script>

<style>
.input-box {
    width: 250px;
    height: 60px;
}



.from-input {
    width: 250px;
    height: 60px;
    border: 1px solid #aaa;
    text-align: left;
    padding: 5px;
    box-sizing: border-box;
}

.tab-text {
    width: 230px;
    height: 36px;
    font: 26px;
}

.city-box {
    width: 400px;
    height: 250px;
    border: 1px solid #223b61;
    border-radius: 2px;
    position: relative;
    background-color: #fff;
    z-index: 1;
    top: 15px;
    left: -5px;
    box-shadow: 0 0 3px #223b61;
}

.initials-box {
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #223b61;
    font-size: 12px;
    color: #223b61;
    padding: 0 5px;
    display: flex;
    align-items: flex-end;
    box-sizing: border-box;
}

.init-info {
    padding: 0 10px;
}

.border {
    border-bottom: 2px solid #223b61;
    box-sizing: border-box;
}

.city-info {
    width: 100%;
    padding: 10px;
    font-size: 15px;
}

.city-info span {
    background-color: rgba(0,0,255,.1);
    padding: 0 10px;
    margin-right: 10px;
}
</style>