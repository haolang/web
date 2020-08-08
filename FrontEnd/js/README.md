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
# Number 类型
注意：typeof NaN的返回结果是 number。

Undefined和任何数值计算的结果为 NaN。NaN 与任何值都不相等，包括 NaN 本身。

# 短路运算的妙用【重要】
## 1、JS中的&&属于短路的与：
* 如果第一个值为false，则不会执行后面的内容。

* 如果第一个值为 true，则继续执行第二条语句，并返回第二个值。
```javascript
const a1 = 'qianguyihao';
//第一个值为true，会继续执行后面的内容
a1 && alert('看 a1 出不出来'); // 可以弹出 alert 框

const a2 = undefined;
//第一个值为false，不会继续执行后面的内容
a2 && alert('看 a2 出不出来'); // 不会弹出 alert 框
```
## 2、JS中的||属于短路的或： 
* 如果第一个值为true，则不会执行后面的内容。
* 如果第一个值为 false，则继续执行第二条语句，并返回第二个值。

# 比较运算符
1. 比较两个字符串时，比较的是字符串的Unicode编码，不会转换为数字
2. NaN不和任何值相等，包括他本身。通过 isNaN() 函数来判断
3. 逻辑与 && 比逻辑或 || 的优先级更高。

# 代码块 {}
1. 在 ES5 语法中，代码块，只具有分组的作用，没有其他的用途。

# 基本包装类型
JS 为我们提供了三个基本包装类型：
* String()：将基本数据类型字符串，转换为 String 对象。
* Number()：将基本数据类型的数字，转换为 Number 对象。
* Boolean()：将基本数据类型的布尔值，转换为 Boolean 对象。
需要注意的是：我们在实际应用中一般不会使用基本数据类型的对象。如果使用基本数据类型的对象，在做一些比较时可能会带来一些不可预期的结果。
例如： 
```javascript
var boo1 = new Boolean(true);
var boo2 = new Boolean(true);
console.log(boo1 === boo2); // 打印结果竟然是：false
```

通过上面这这三个包装类，我们可以将基本数据类型的数据转换为对象。

当我们对一些基本数据类型的值去调用属性和方法时，浏览器会临时使用包装类将基本数据类型转换为引用数据类型，这样的话，基本数据类型就有了属性和方法，然后再调用对象的属性和方法；调用完以后，再将其转换为基本数据类型。
举例：
```javascript
var str = 'qianguyihao';
console.log(str.length); // 打印结果：11
```
比如，上面的代码，执行顺序是这样的：
```javascript
// 步骤（1）：把简单数据类型 string 转换为 引用数据类型  String，保存到临时变量中
var temp = new String('qianguyihao');

// 步骤（2）：把临时变量的值 赋值给 str
str = temp;

//  步骤（3）：销毁临时变量
temp = null;
```
String 对象的很多内置方法，也可以直接给字符串用。此时，也是临时将字符串转换为 String 对象，然后再调用内置方法。

*字符串的所有方法，都不会改变原字符串（字符串的不可变性），操作完成后会返回一个新的值。*

# 数组
修改数组的长度（修改 length）
* 如果修改的 length 大于原长度，则多出部分会空出来，置为 null。
* 如果修改的 length 小于原长度，则多出的元素会被删除，数组将从后面删除元素。
* （特例：伪数组 arguments 的长度可以修改，但是不能修改里面的元素。）
## 伪数组与真数组的区别
### 伪数组：包含 length 属性的对象或可迭代的对象。
另外，伪数组的原型链中没有 Array.prototype，而真数组的原型链中有 Array.prototype。因此伪数组没有数组的一般方法，比如 pop()、join() 等方法。
```javascript
let btnArray = document.getElementsByTagName('button');
//btnArray 为伪数组它就不能使用数组的一般方法，否则会报错，使用Array.from转换为真数组
// es5 array = Array.prototye.slice.call(arrayLike); 伪数组转真数组
Array.from(btnArray).forEach((item)=>{
  { item }
  // ...
})
```

## forEach() 能不能改变原数组？
1、数组的*元素*是基本数据类型：（无法改变原数组）
2、数组的元素是引用数据类型：（直接修改整个元素对象时，无法改变原数组）
3、数组的元素是引用数据类型：（修改元素对象里的某个属性时，可以改变原数组）
```javascript
// 1、数组的元素是基本数据类型
let numArr = [1, 2, 3];
// 可以改变原数组
numArr.forEach((item, index, arr) => {
    arr[index] = arr[index] * 2;
});
```

> 如果纯粹只是遍历数组，那么，可以用 forEach() 方法。但是，如果你想在遍历数组的同时，去改变数组里的元素内容，那么，最好是用 map() 方法来做，不要用 forEach()方法，避免出现一些低级错误。
## map 常用场景
1. 拷贝的过程中改变数组元素的值
2. 将 A 数组中某个属性的值，存储到 B 数组中

## reduce 常见应用
1. 求和:
2. 求平均
3. 求元素出现的次数
4. 将二维数组转换为一维数组
5. 求数组最大值

# 函数 
* 如果函数中不写return，则也会返回undefined
* return 只能返回一个值。如果用逗号隔开多个值，则以最后一个为准。
> 定义形参就相当于在函数作用域中声明了变量。
```javascript
function fun6(e) { // 这个函数中，因为有了形参 e，此时就相当于在函数内部的第一行代码里，写了 var e;
    console.log(e);
}
```
