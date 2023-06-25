### babel 集成包

### @babel/types

#### 安装

```
npm install @babel/types -D
```

### @babel/types 常用 API

**arrayPattern** 与 **arrayExpression** 的区别：arrayPattern 和 arrayExpression 是 JavaScript 中两个不同的语法结构，用于在不同的上下文中表示数组。

1. arrayPattern 用于**解构赋值**或**函数参数列表**中的模式匹配。它通常用于从数组或类似数组的对象中提取值并赋给变量。例如：

```js
const [x, y, z] = [1, 2, 3];
```

在上述代码中，`[x, y, z]` 就是一个 `arrayPattern`，用于将数组 [1, 2, 3] 解构赋值给变量 x、y、z。

2. arrayExpression 是用于**创建数组字面量**的语法，用于表示一个具体的数组值。例如：

```js
const numbers = [1, 2, 3];
```

在上述代码中，`[1, 2, 3]` 就是一个 `arrayExpression`，表示一个包含数字 1、2、3 的数组。

因此两者的本质区别在于 `arrayPattern` 用于解构和模式匹配，而 `arrayExpression` 用于创建具体的数组值。

处理节点：

t.cloneNode(node)：克隆给定节点。
t.isIdentifier(node)：检查节点是否为标识符。
t.isStringLiteral(node)：检查节点是否为字符串字面量。
t.isNumericLiteral(node)：检查节点是否为数值字面量。
t.isBooleanLiteral(node)：检查节点是否为布尔字面量。
t.isObjectExpression(node)：检查节点是否为对象表达式。
t.assertNode(node)：断言节点为有效的 AST 节点。

修改节点：

t.cloneNode(node): 用于克隆给定节点，并返回一个相同类型和属性的新节点。可以使用该方法创建一个完全相同的节点副本。

t.updateObjectProperty(node, key, value): 用于更新对象属性节点的键名和值。node 是要更新的对象属性节点，key 是新的键名节点，value 是新的值节点。

t.updateArrayExpression(node, elements): 用于更新数组表达式节点的元素列表。node 是要更新的数组表达式节点，elements 是一个新的元素数组。

t.updateCallExpression(node, callee, args): 用于更新调用表达式节点的被调函数和参数列表。node 是要更新的调用表达式节点，callee 是新的被调函数节点，args 是一个新的参数数组。

t.updateFunctionDeclaration(node, id, params, body): 用于更新函数声明节点的标识符、参数列表和函数体。node 是要更新的函数声明节点，id 是新的标识符节点，params 是一个新的参数数组，body 是新的函数体节点。

t.removeBinding(node)：移除节点的绑定。

t.removeComments(node)：移除节点的注释。

遍历节点：

t.traverse(node, visitor)：遍历并访问节点及其子节点。

类型注解：

t.anyTypeAnnotation()：创建一个任意类型注解节点。

t.isAnyTypeAnnotation(node)：检查节点是否为任意类型注解。

t.assertAnyTypeAnnotation(node)：断言节点为任意类型注解。

判断类型：

t.isIdentifier(node, opts): 判断给定的节点是否为一个标识符（Identifier）。

t.isLiteral(node, opts): 判断给定的节点是否为一个字面量（Literal）。

t.isNumericLiteral(node, opts): 判断给定的节点是否为一个数字字面量（NumericLiteral）。

t.isStringLiteral(node, opts): 判断给定的节点是否为一个字符串字面量（StringLiteral）。

t.isArrayPattern(node, opts): 判断给定的节点是否为一个数组模式（ArrayPattern）。

t.isNullLiteral(node, opts): 判断给定的节点是否为一个空值字面量（NullLiteral）。

t.isBooleanLiteral(node, opts): 判断给定的节点是否为一个布尔字面量（BooleanLiteral）。

t.isObjectExpression(node, opts)：判断给定的节点是否为对象表达式（ObjectExpression）。

t.isFunction(node, opts)：判断给定的节点是否为函数类型（FunctionDeclaration）。
