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

# 全局共享配置变量
config.js 文件
```javascript
// eslint-disable-next-line no-unused-vars
const CONFIG = {
  // BASH_API_IP: 'http://123.56.4.137:11005',
  // PROD: 上线前替换为正式接口
  BASH_API_IP: 'http://101.201.75.221:11002',
  BRAND_ID: '24',
  SUB_TAG: 'H5',
  SF_KEYWORD: window.location.href,
  contactPhone: '18428355625'
}
```

index.html 文件中引入(在顶部head中引入)
```html
    <script type="text/javascript" charset="utf-8" src="./js/config.js"></script>
```

在 main.js 中赋值给vue全局变量
```javascript
// eslint-disable-next-line no-undef
Vue.prototype.CONFIG = CONFIG
```
其vue组件中直接 this.CONFIG 使用

若使用 export import 引入 config.js CONFIG 变量虽然也可以全局使用，
但是会被拷贝后直接编译近js文件，编译后生成文件再直接修改CONFIG.js 文件不会生效。


# axios ie 9 兼容性问题
ie 9不支持 ajax跨域请求 使用axios 做数据请求时，ie9 浏览器 控制台显示 
**日志: Error: 拒绝访问。**
