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