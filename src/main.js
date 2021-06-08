// 主要职责：创建一个 vue 应用(根实例)
// 以前创建的是 new app / new vue，现在不使用 new 了，vue3提供了专属的方法 - createApp
// 1. 导入 createApp 函数从 vue 中
// 2. 创建一个根组件 App.vue 导入至 main
// 3. 使用 createApp 创建应用实例
// 实例创建好了之后需要跟一个根容器进行关联 - #app(位于 index.html 页面的 id="app")
// 4. 应用挂载到 #app 容器中

import { createApp } from "vue";

// 导入 app
import App from "./App.vue";

// 使用 createApp 创建应用实例
const app = createApp(App);

// mount => 挂载的意思
// 以前是 $mount
// new Vue({
//     router,
//     store,
//     render: h => h(App)
// }).$mount('#app')

// 如果是 vue2.0 Vue.mixin({全局混入的选项对象})
// vue3.0 app.mixin({全局混入的选项对象}) - 向下兼容
app.mixin({
  mounted() {
    // $el 组件的根元素
    console.log(this.$el, "dom 准备好了");
  },
});

app.mount("#app");
