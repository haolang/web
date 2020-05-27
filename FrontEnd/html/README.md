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