<template>
  <div class="container"></div>
</template>

<script>
// 注意钩子都是需要在函数里面去导入的
import { onBeforeMount, onMounted } from "vue";
export default {
  name: "App",
  setup() {
    // 1.使用 DOM 渲染前的构造
    onBeforeMount(() => {
      console.log("DOM 渲染前的构造", document.querySelector(".container"));
    });

    // 2.使用 DOM 渲染后的构造
    onMounted(() => {
      console.log("DOM 渲染后的构造1", document.querySelector(".container"));
    });
    // vue3.0 可以写两个钩子 - 比如 munted 需要做两个功能，以前都需要写到 mounted 里面，也可以写两个函数然后自己去调用， vue3 可以注册两个，可以把两个功能写在不同的 mounted 里面，这样可以拆开代码，注意顺序是先后跟你代码的顺序有关系
    onMounted(() => {
      console.log("DOM 渲染后的构造2", document.querySelector(".container"));
    });
  },
};
</script>

<style></style>
