<template>
  <div class="spec-preview">
    <img :src="img.imgUrl" />
    <div class="event" @mousemove="move"></div>
    <div class="big">
      <img :src="img.imgUrl" ref="big" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    skuImageList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    img() {
      // skuImageList[0]为undefine，undefine.调用会报错
      // 这里让父亲给的数据第0项得有数据，第0项至少是一个对象
      return this.skuImageList[this.currentIndex] || {}
    }
  },
  mounted() {
    this.$bus.$on("changeIndex", (index) => {
      this.currentIndex = index
    })
  },
  methods: {
    move(event) {
      let mask = this.$refs.mask
      let big = this.$refs.big
      // 蒙版移动距离等于鼠标距离绑定事件元素距离 offsetX(Y)减去蒙版元素一半offsetWidth(Height)
      let left = event.offsetX - mask.offsetWidth / 2
      let top = event.offsetY - mask.offsetHeight / 2
      // 使用前要对left和top进行判断
      if (left <= 0) left = 0
      if (left >= mask.offsetWidth) left = mask.offsetWidth
      if (top <= 0) top = 0
      if (top >= mask.offsetHeight) top = mask.offsetHeight
      mask.style.left = left + 'px'
      mask.style.top = top + 'px'
      big.style.left = -2 * left + 'px'
      big.style.top = -2 * top + 'px'
    }
  }
}
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover~.mask,
  .event:hover~.big {
    display: block;
  }
}
</style>