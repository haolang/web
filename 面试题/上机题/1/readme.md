> 1.只使用 CSS 实现下图中的效果

![image](https://github.com/haolang/web/blob/master/%E9%9D%A2%E8%AF%95%E9%A2%98/%E4%B8%8A%E6%9C%BA%E9%A2%98/1/1.png)

> 2.编写代码实现以下要求：画一个矩形，拖拽矩形的4个角可以将矩形缩放，在矩形上按住拖动可以移动该矩形的位置。

![image](https://github.com/haolang/web/blob/master/%E9%9D%A2%E8%AF%95%E9%A2%98/%E4%B8%8A%E6%9C%BA%E9%A2%98/1/2.png)


#### 题 2：
1. 对于点击拖拽事件，四角和中间矩形相互不影响的关键在于 e.stopPropagation(); 函数
    
    * stopPropagation 比较通俗的解释是，事件不在向上传递，此处的向上是指点击事件的父元素。例如点击点击按钮时若按钮外层父元素也绑定有点击事件则会同时触发父元素的点击事件，添加此函数后事件传递被终止，则不会触发上层元素的事件。

2. 四角对于拖拽方向无需单独判定，当前鼠标位置与上次记录的鼠标位置之差便是高宽增减的值。
    > 点击查看源码： [test2.html](https://github.com/haolang/web/blob/050c23262b28d907d4c0168af0265b5057b73868/%E9%9D%A2%E8%AF%95%E9%A2%98/%E4%B8%8A%E6%9C%BA%E9%A2%98/1/test2.html#L122)
    ```javascript
    obj.style.height = obj.offsetHeight + mouseY - e.clientY + 'px';
    ```