<template>
  <div class="App-container">
    {{ name }}
    <button @click="updateName">修改数据</button>
  </div>
</template>

<script>
import { reactive, toRef } from "vue";
export default {
  name: "App",
  setup() {
    // 1. 响应式数据对象
    const obj = reactive({
      name: "Melrose",
      age: 18,
    });
    // 2.模板中只需要使用 name 数据
    // 注意： 从响应式数据对象中解构出来的属性数据，不再是响应式数据
    // const { name } = obj 不能直接解构，出来的是一个普通数据
    const name = toRef(obj, "name"); // 会把这个 name 封装成一个响应式对象
    const updateName = () => {
      // name 这个值是修改了，但是并不是响应式
      name = "zs";
      // toRef 转换成响应式数据包装成对象， value 存放值的位置
      name.value = "zs";
    };
    return { name, updateName };
  },
};
</script>
