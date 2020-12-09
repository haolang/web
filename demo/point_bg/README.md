
## 实现原理
1. css3 使用非透明色紧接透明色的径向渐变即可实现圆点背景
2. 渐变半径刚好为背景大小一半时，圆点刚好填满背景大小，即 71% （1 / √2 ≈ 0.71）
3. 圆点边界添加一定距离的过渡模糊，可弱化圆点边界显示锯齿感

## 在线预览
[在线预览(gitee) http://haolang.gitee.io/web/demo/point_bg/](http://haolang.gitee.io/web/demo/point_bg/)

> html 代码
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>径向渐变背景圆点</title>
  <style>
  body {
    text-align: center;
  }
  .point-bg,
  .point-bg2 {
    line-height: 200px;
    text-align: center;
    width: 200px;
    height: 200px;
    display: inline-block;
    background-size: 200px 200px;
    background-repeat: no-repeat;
    outline: 1px solid #000;
    margin: 10px;
  }

  .point-bg {
    /*边界没有过渡模糊*/
    background-image: radial-gradient(red 71%, transparent 0);
  }

  .point-bg2 {
    /* 添加1%的模糊，可弱化圆点边界显示锯齿感*/
    background-image: radial-gradient(red 70%, transparent 71%, transparent);
  }
  </style>
</head>
<body>
<div class="point-bg">
  point-bg
</div>
<div class="point-bg2">
  point-bg2
</div>
</body>
</html>
```
> 两种效果对比显示结果如下

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201209101529827.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hhb2xhbmd0YWl5ZQ==,size_16,color_FFFFFF,t_70)
## 应用
*tips: 渐变函数生成的结果等同于图片，可以将其作为背景图片操作，实现自定义 ul>li 的 list-style 图标*

### 实现效果如下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200930161456248.png#pic_left)
