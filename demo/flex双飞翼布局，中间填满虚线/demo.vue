<template>
  <div class="main-container">
    <div class="address-unit">
      <div class="address-item">
        <span class="name">地址名地址名地址名地址名</span>
        <span class="dot-dash">
          ........................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        </span>
        <span class="address">地址地址地址地址地址地址地址地址地址</span>
      </div>
      <div class="address-item">
        <span class="name">地址名地址名</span>
        <span class="dot-dash">
          ........................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        </span>
        <span class="address"
        >地址地址地址地址地址地址地址地址地址地址地址地址地址</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "demo"
};
</script>

<style>
.main-container {
  width: 1200px;
  margin: 100px auto;
  background: #87cdff;
}
.address-item {
  width: 100%;
  font-size: 24px;
  box-sizing: border-box;
  display: inline-flex;
  justify-items: stretch;
  justify-content: space-between;  /*两端对齐布局*/
}

.name {
  font-weight: bold;
  color: #ffcb3e;
  -webkit-text-stroke: 1px #fff; /* 文字描边 */
  white-space: nowrap;
}
.dot-dash {
  overflow: hidden; /* 超出部分隐藏*/
  line-height: 24px; /* 使得虚线居中*/
  padding-left: 6px;
}
.address {
  color: #545454;
  text-align: right;
  white-space: nowrap;
  padding-left: 6px;
}
</style>
