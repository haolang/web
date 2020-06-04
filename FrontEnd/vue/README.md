# vue 学习
[链接](https://cn.vuejs.org/v2/style-guide/#%E8%A7%84%E5%88%99%E5%BD%92%E7%B1%BB)

# vue 未渲染时不加载源代码
```html
<div id="app" v-cloak>

</div>
<style>
/* 当数据加载慢时不显示vue源代码 */
[v-cloak]{
    display: none;
}
</style>
```

# 华为自带浏览器 vue 兼容性问题
可以在ie9中打开，查看控制台是否有兼容性报错，尝试兼容到 ie9 华为自带浏览器的低版本兼容性应该也就解决了
添加以下代码解决
```html
<script src="https://cdn.bootcss.com/babel-polyfill/6.23.0/polyfill.min.js" type="text/javascript" charset="utf-8"></script>
```