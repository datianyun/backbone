<b>backbone学习样例，结合RequireJs</b>

## 增加的

将RequireJS引入，使得样例中的Todo。js中原本view\model\collection集中一块的写法，分层，看起来更加清晰，便于以后项目更加大的时候的整理重构

新的模块统一使用RequireJS的写法

`````javascript
define([
  'jquery',
  'underscore', 
  'backbone',
  'collection/todos',
  'view/todoList',
  'text!templates/stats.html'
  ], function($, _, Backbone, Todos, TodoView, statsTemplate){
  
     //样例代码
     
     
  }）；
`````

