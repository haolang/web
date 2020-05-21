### 闭包
[参考链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)
1. 可实现类似对象的效果
  ```javascript
  function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }

  // 此处的 makeAddr 可以看做初始化构造函数
  var add5 = makeAdder(5);
  var add10 = makeAdder(10);

  console.log(add5(2));  // 7
  console.log(add10(2)); // 12
  ```
2. 用闭包模拟私有方法
  ```javascript
  var Counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    }   
  })();

  console.log(Counter.value()); /* logs 0 */
  Counter.increment();
  Counter.increment();
  console.log(Counter.value()); /* logs 2 */
  Counter.decrement();
  console.log(Counter.value()); /* logs 1 */
  ```

3. 某些循环回调必须使用闭包
由于es5使用var定义变量存在变量提升，二js中变量常常是引用，共同造成了某些情况不得不使用闭包
如下：
```javascript
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    //若去掉此处匿名闭包helpText始终是age相关的
    (function() {
       var item = helpText[i];
       document.getElementById(item.id).onfocus = function() {
         showHelp(item.help);
       }
    })(); // 马上把当前循环项的item与事件回调相关联起来
  }
}

setupHelp();
```
**闭包影响性能**


# js 值传递与引用传递
- JavaScript 有 5 种基本的数据类型，分别是：布尔、null、undefined、String 和 Number。这些基本类型在赋值的时候是通过值传递的方式
- 另外三种类型: Array、Function 和 Object，它们通过引用来传递。从底层技术上看，它们三都是对象。

