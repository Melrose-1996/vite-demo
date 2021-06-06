<template>
  <div class="App-container">
    <div>坐标</div>
    <div>{{ x }}</div>
    <div>{{ y }}</div>
    <hr />
    <div>{{ count }} <button @click="add">加一</button></div>
  </div>
</template>

<script>
const useMouse = () => {
  // 1. 记录鼠标坐标
  // 1.1 申明一个响应式数据，他是一个对象，包含 x，y
  const mouse = reactive({
    x: 0,
    y: 0,
  });
  // 鼠标移动的方法
  // 1.3 修改响应式数据
  const move = (e) => {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
  };
  // 1.2 等 dom 渲染完毕，去监听事件
  onMounted(() => {
    document.addEventListener("mousemove", move);
  });
  // 1.4 组件销毁，删除事件
  onUnmounted(() => {
    document.removeEventListener("mousemove", move);
  });

  return mouse;
};

import { onMounted, onUnmounted, reactive, ref, toRefs } from "vue";
export default {
  name: "App",
  setup() {
    const mouse = useMouse();
    // 2. 数字累加 - 注意凡是跟 ref 相关的，修改值都应该使用 .value
    const count = ref(0);
    const add = () => {
      count.value++;
    };
    return { ...toRefs(mouse), count, add };
  },
};
</script>
