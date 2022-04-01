<template>
  <div class="city-box">
      <div class="initials-box">
        <div class="init-info" v-for="(item, index) in init" :key="item" @click="mousclick(index)" :class="{border: acitve == index}">
            {{item}}
        </div>
      </div>
      <div class="city-info" v-for="(item, index) in city" :key="index" v-show="acitve == index">
          <span v-for="item1 in item" :key="item1" @click="cityclick(item1)">{{item1}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'city',
    data() {
        return {
            acitve: 0
		}
    },
    methods: {
        mousclick (index) {
            this.acitve = index
        }
    },
    emits: ["city"],
    setup(props, {emit}) {
        const cityclick = (item1) => {
            emit("city", item1);
        };
        return {
            cityclick
        }
    }
}

</script>

<style>
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