> 1.只使用 CSS 实现下图中的效果

![image](https://github.com/haolang/web/blob/master/%E9%9D%A2%E8%AF%95%E9%A2%98/%E4%B8%8A%E6%9C%BA%E9%A2%98/1/1.png)

> 2.编写代码实现以下要求：画一个矩形，拖拽矩形的4个角可以将矩形缩放，在矩形上按住拖动可以移动该矩形的位置。

![image](https://github.com/haolang/web/blob/master/%E9%9D%A2%E8%AF%95%E9%A2%98/%E4%B8%8A%E6%9C%BA%E9%A2%98/1/2.png)

#### 题 1:
1. 对于效果图中的三角形是难点，最简单的方法时直接用☆★图标但是在html网页端显示效果并不好，当然也可以用矢量图的方式实现。
但是，题目要求只使用 CSS 实现。也就是要通过css画出五角星，
2. css可以比较容易的画出三角形，基本方案就是通过三角形拼接处五角星
3. 一般的正五角星，每个角的角度为36度，而tan36度 为0.72左右，tan35度为0.7左右，为了画图方便此处选取每个角35度为五角星。
4. 星星轮廓有白色阴影，此处由于是通过隐藏矩形中的两个透明三角形显示一个三角形来组合的五角星，不能直接通过box-shadow来制造阴影。可以用组合五角星相同的方式添加轮廓。 
5. 通过取色器取得元素的颜色的16进制值,windows自带的画图工具就可以取色,测量图片像素。
6. 放弃使用css直接画出五角星，css画出的五角星要画出阴影相当麻烦。直接采用★符号。
7. css画星星在star-five.html


#### 题 2：
1. 对于点击拖拽事件，四角和中间矩形相互不影响的关键在于 e.stopPropagation(); 函数
    
    * stopPropagation 比较通俗的解释是，事件不在向上传递，此处的向上是指点击事件的父元素。例如点击点击按钮时若按钮外层父元素也绑定有点击事件则会同时触发父元素的点击事件，添加此函数后事件传递被终止，则不会触发上层元素的事件。

2. 四角对于拖拽方向无需单独判定，当前鼠标位置与上次记录的鼠标位置之差便是高宽增减的值。
    > 点击查看源码： [test2.html](https://github.com/haolang/web/blob/master/%E9%9D%A2%E8%AF%95%E9%A2%98/%E4%B8%8A%E6%9C%BA%E9%A2%98/1/test2.html#L120)
    ```javascript
    obj.style.height = obj.offsetHeight + mouseY - e.clientY + 'px';
    ```
3. 实际拖拽时除右下角其他四角进行拖拽后再次点击未拖拽未松开时矩形框会先有一个小段位移。
输出日志发现当点击鼠标左键拖拽后松开执行事件顺序为：onmousedown，onmousemove ... onmousemove,  onmouseup, onmousemove。在 onmouseup 后多执行了一次 onmousemove 。
猜测跟 stopPropagation有关,但是注释掉该函数，注释掉矩形拖拽事件，依旧有此bug。
网上搜索说是的 webkit 内核浏览器的bug，目前测试了ie和火狐打开没有此bug，应该是跟内核有关。
目前通过以下方法解决此bug：

    通过在onmousemove触发的函数里面判断点击鼠标的位置和当前鼠标的位置是否一样来判断是否真的移动了。

4. 完成网页预览（需要科学上网姿势打开）：
    * [题1](http://htmlpreview.github.io/?https://github.com/haolang/web/blob/master/%E9%9D%A2%E8%AF%95%E9%A2%98/%E4%B8%8A%E6%9C%BA%E9%A2%98/1/test1.html)
    * [题2](http://htmlpreview.github.io/?https://github.com/haolang/web/blob/master/%E9%9D%A2%E8%AF%95%E9%A2%98/%E4%B8%8A%E6%9C%BA%E9%A2%98/1/test2.html)