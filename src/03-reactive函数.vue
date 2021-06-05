<template>
  <div class="App-container">
    <div class="name">{{ obj.name }}</div>
    <div class="age">{{ obj.age }}</div>
    <button @click="updateName">修改数据</button>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    // 普通数据
    // const obj = {
    //   name: "Melrose",
    //   age: 18,
    // };
    // 响应式数据 reactive 能够把对象转化成响应式数据，也可以使用数组，但是 reactiv 一般是用来处理对象的响应式数据的
    const obj = reactive({
      name: "Melrose",
      age: 18,
    });
    // 修改名字
    const updateName = () => {
      console.log("updateName");
      obj.name = "zs";
    };
    return { obj, updateName };
  },
};
</script>
