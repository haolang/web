# html5 修改默认提示
```html
<!--oninput 必不可少-->
<input oninvalid="setCustomValidity('请输入孩子年龄！')" oninput="setCustomValidity('')" placeholder="孩子年龄:" type="text" required/>
```


# form 提交不刷新页面
```html
必须返回 false 才不会提交
<form onsubmit="return false">
</form>
```

# 当使用 input+ul>li 模拟下拉框时，记得禁用输入提示

```html
<input autocomplete="off"/>
```


```css
p {
    /*word-spacing只在词中间插入间隔中文字符间添加空格也会使得word-spacing有效*/
    word-spacing: 4px;  
    /*会在每个字符后插入间隔，最后一个字符后也会有空白间隔*/
    letter-spacing: 4px;
}
```

# video
iss 服务器使用video标签无法播放map4类型视频,添加MIME解决
[参考链接](https://blog.csdn.net/lihuang319/article/details/7228888?fps=1&locationNum=7)
