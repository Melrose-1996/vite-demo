<template>
  <div class="App-container">
    <div>{{ name }}</div>
    <div>{{ age }}</div>
    <button @click="updateName">修改数据</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    // 1. name 数据
    const name = ref("ls");
    // 2. age 数据
    const age = ref(10);
    console.log(name);
    const updateName = () => {
      name.value = "zs";
    };

    // ref 常用于定义简单数据类型的响应式数据
    // 其实也可以定义复杂数据类型的响应式
    // 注意 reactive 只能定义复杂数据类型
    // 如果对将要定义的数据类型是未知的这种情况，这个时候可以先把数据定义为空
    const data = ref(null);

    // setTimeout(() => {
    //   // 这个时候为数组，对象，数字都可以
    //   data.value = res.data;
    // }, 1000);

    return { name, age, updateName };
  },
};
</script>
