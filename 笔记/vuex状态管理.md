基本使用：
  1.下载vuex
  
  2.在store下的index中导入Vue，Vuex，然后使用一下Vuex插件，Vue.use(Vuex),默认导出
  export default new Vuex.store({modules:{模块名称}})
  模块名称写法：定义Vuex参数：state:{},mutations:{},actions:{},getters:{},然后导出
  rxports default {state，mutations，actions，getters}

  3.在需要的组件中使用actions派发事件，例如在组件挂载时：mounted(){this.$store.disptch("函数名称，这里要和仓库中actions中的函数对应")}，对应仓库中actions{xxx(context){context.commit("函数名","参数")}}，继续向上面提交，一般在这里做的是发送网络请求，获取数据在mutations中写commit提交的函数，例如xxx(state,res){state.x=res}

  4.在main中使用Vuex实例，使得app每一个组件上面都有$store属性

2.映射的使用：mapstate：对象写法：mapstate({变量：(state)=>state.模块名.仓库中变量名})
                      数组写法：mapstate('模块名'，['变量名'])
3.getters映射使用 ：数组：mapGetters(["模块明/xxx"])
                    对象：直接手动映射 computed:{xxx(){return this.$store.getters.xxx}}                     