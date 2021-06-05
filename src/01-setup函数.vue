<template>
  <div class="container">
    <h1 @click="say">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "App",
  // 1.组合 API 的起点，将来的组合 API 的代码，基本上可以再这里写
  // 2.可以理解为在 beforeCreate 钩子执行前执行，组件实例创建前执行
  // 3.不能用 this ==> undefined
  // 4.模板中需要使用的数据和函数，需要在 setup 中放回
  setup() {
    console.log("setup", this);
    // 数据
    const msg = "hi vue3";

    // 函数
    const say = () => {
      console.log("hi vue3");
    };

    // 注意返回的是一个对象
    return { msg, say };
  },
  beforeCreate() {
    console.log("beforeCreate", this);
  },
};
</script>

<style></style>
