<template>
  <div class="carousel">
    <div
      v-for="(item, index) in carousel.index"
      :class="`carousel-item active${item} carousel-item${index}`"
      :key="index"
      @click="carouselClick(index)"
    ></div>
  </div>
</template>

<script>
export default {
  name: "HLCarousel",
  data() {
    return {
      carousel: {
        total: 2,
        index: [],
        autoPlay: true,
        interval: 3000
      }
    };
  },
  mounted() {
    const carouselInit = () => {
      for (let i = 0; i < this.carousel.total; i++) {
        this.carousel.index.push(i);
      }
    };
    carouselInit();
    this.autoPlay();
  },
  methods: {
    setNewIndex(direction) {
      let nowIndex = [].concat(this.carousel.index);
      if (direction > 0) {
        const item = nowIndex.pop();
        nowIndex.unshift(item);
      } else if (direction < 0) {
        const item = nowIndex.shift();
        nowIndex.push(item);
      }
      this.carousel.index = nowIndex;
      console.log(this.carousel.index);
    },
    last() {
      this.setNewIndex(1);
    },
    next() {
      this.setNewIndex(-1);
    },
    autoPlay() {
      if (this.carousel.autoPlay) {
        setInterval(() => {
          if (this.carousel.autoPlay) {
            this.next();
          }
        }, this.carousel.interval);
      }
    },
    carouselClick(index) {
      if (index === 0) {
        console.log(index);
      }
    }
  }
};
</script>

<style lang="scss">
$DEVICE: "WAP";
// 单位转换 rem / px
@function rp($size) {
  @if $DEVICE == "WAP" {
    @return $size * 0.01rem;
  } @else if ($DEVICE == "PC") {
    @return $size * 1px;
  }
}

@keyframes carousel1 {
  from {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  to {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}

@keyframes carousel0 {
  from {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  to {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

.carousel {
  $carouseHeight: rp(423);
  height: $carouseHeight;
  position: relative;
  overflow: hidden;

  .carousel-item {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    height: $carouseHeight;
    background: {
      position: center center;
      size: cover;
    }
    animation-timing-function: linear;
    animation-duration: 1s;

    &.active0 {
      -webkit-animation-name: carousel0;
      animation-name: carousel0;
      z-index: 3;
    }

    &.active1 {
      z-index: 2;
      -webkit-animation-name: carousel1;
      animation-name: carousel1;
    }

    &.carousel-item0 {
      background-color: black;
    }

    &.carousel-item1 {
      background-color: #87cdff;
    }

    &.carousel-item2 {
      background-color: #ffeb33;
    }

    &.carousel-item3 {background-color: #57acff;
    }

    &.carousel-item4 {
      background-color: #ff4470;
    }
  }
}
</style>
