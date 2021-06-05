<template>
  <div class="App-container">
    <div>{{ name }}</div>
    <div>{{ age }}</div>
    <button @click="updateName">修改数据</button>
  </div>
</template>

<script>
import { reactive, toRef, toRefs } from "vue";
export default {
  name: "App",
  setup() {
    // 1. 响应式数据对象
    const obj = reactive({
      name: "Melrose",
      age: 18,
    });
    console.log(obj);
    // 2.解构或者展开响应式数据对象
    // const { name, age } = obj;
    // console.log(name, age);
    // const obj2 = { ...obj };
    // console.log(obj2);
    // return { ...obj };
    // 以上方式导致数据就不是响应式了
    const obj2 = toRefs(obj);
    console.log(obj2);

    const updateName = () => {
      // obj2.name.value = "zs";
      obj.name = "zs";
    };

    return { ...obj2, updateName };
  },
};
</script>
