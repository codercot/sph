  跳转：在进行home页面跳转到search页面时，需要传递数据，需要给每一个a绑定点击事件，但是盒子中有许多a，会拖慢浏览器加载速度，这时就用到了事件委派，给父亲添加点击事件。
  问题：1 盒子里面有很多元素，如h，dd，a,点击后都会通过冒泡触发父亲的事件。解决：给a标签加上一个自定义类名，利用event.target找到目标元素，let el = event.target let {a} = el
  .datase获取a元素上面的自定义类名，返回的是一个对象，对对象进行结构，判断类名是否存在，然后在进行id判断，同时配置路由参数location={path:"/xxx"},query={a,a}，location.query=
  query,this.$router.push(location)

  跳转后对url进行判断，看是否显示导航栏，同时加上动画