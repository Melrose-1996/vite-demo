<template>
  <div class="App-container">
    <div>
      <p>count的值：{{ count }}</p>
      <button @click="add">改数据</button>
    </div>
    <hr />
    <div>
      <p>{{ obj.name }}</p>
      <p>{{ obj.age }}</p>
      <p>{{ obj.brand.name }}</p>
      <button @click="updateName">改名字</button>
      <button @click="updateBrandName">改品牌的名字</button>
    </div>
  </div>
</template>

<script>
import { reactive, ref, watch } from "vue";
export default {
  name: "App",
  setup() {
    // 监听 ref 数据的变化
    const count = ref(0);
    const add = () => {
      count.value++;
    };

    // 当需要监听数据的变化，就可以使用 watch
    // 1. 监听一个 ref 数据
    // 1.1 第一个参数 需要监听的目标
    // 1.2 第二个参数 改变后触发的函数
    // watch(count, (newVal, oldVal) => {
    //   console.log(newVal.name, oldVal.name);
    // });

    const obj = reactive({
      name: "ls",
      age: 10,
      // 定义再深一点的数据
      //   brand: {
      //     id: 1,
      //     name: "宝马",
      //     car: {
      //       id: 11,
      //       name: "宝马",
      //     },
      //   },
      //   brand: [
      //     {
      //       id: 1,
      //       name: "宝马",
      //     },
      //   ],
      brand: {
        id: 1,
        name: "宝马",
      },
    });
    const updateName = () => {
      obj.name = "zs";
    };
    const updateBrandName = () => {
      //   obj.brand.car.name = "奔驰";
      //   obj.brand[0].name = "奔驰";
      obj.brand.name = "奔驰";
    };
    // 2. 监听一个 reactive 数据
    // watch 有第三个参数，参数是一个对象，里面有个 deep 属性，这个属性会让用户监听到更深层次的对象
    // watch(
    //   obj,
    //   () => {
    //     console.log("数据改变了");
    //   },
    //   {
    //     // 深度监听
    //     deep: true,
    //     // 默认执行
    //     immediate: true,
    //   }
    // );

    // 3. 监听多个数据的变化
    // watch([count, obj], () => {
    //   console.log("监听多个数据改变了");
    // });

    // 4. 此时只想监听对象中某一个组件的变化 例如 obj.name
    // 需要写成函数返回该属性的方式才能监听到
    // watch(
    //   () => obj.name,
    //   () => {
    //     console.log("监听obj.name改变了");
    //   }
    // );
    watch(
      () => obj.brand,
      () => {
        console.log("数据改变了");
      },
      {
        deep: true,
      }
    );
    return { count, add, obj, updateName, updateBrandName };
  },
};
</script>
