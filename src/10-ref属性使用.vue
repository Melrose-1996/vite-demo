<template>
  <div class="App-container">
    <!-- vue2.0 获取 div 元素 -->
    <!-- 1. 通过 ref 属性绑定该元素 -->
    <!-- 1. 通过 this.$refs.box 获取元素 -->
    <!-- <div ref="box">我是个 box</div> -->

    <!-- vue2.0 获取 v-for 遍历的多个元素 -->
    <!-- 1. 通过 ref 属性绑定被遍历的元素 -->
    <!-- 2. 通过 this.$refs.li 获取所有被遍历的元素 -->
    <!-- <ul>
      <li v-for="i in 4" :key="i" ref="li">{{ i }}</li>
    </ul> -->

    <!-- 单个元素 -->
    <!-- 当 ref 绑定了这个 box ，那么此时的这个 box 就是这个 DOM -->
    <div ref="box">我是box</div>
    <!-- 被遍历的元素 -->
    <ul>
      <li v-for="i in 4" :key="i" :ref="setDom">第{{ i }}个LI</li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "App",
  setup() {
    // 想拿到 div 这个元素，首先要在 setup 里面定义一个数据，用数据来接收 DOM
    // ref 定义的数据，什么类型都能接收

    // 1. 获取单个元素
    // 1.1 先定义一个空的响应式数据 ref 定义的
    // 1.2 setup 中返回该数据，你想获取那个 DOM 元素，在该元素上使用 ref 属性绑定该数据即可。
    const box = ref(null);

    // 如果想要获取到这个 div 的 value ，就需要在 onMounted 里面才能获取到
    onMounted(() => {
      console.log(box.value);
    });

    // 2. 获取 v-for 遍历的元素
    // 2.1 定义一个空数组，接收所有的 LI
    // 2.2 定义一个函数，往空数组里面插入 DOM (该函数 ref 使用)
    const domList = [];
    const setDom = (el) => {
      console.log(el);
      domList.push(el);
    };
    console.log(domList);
    return { box, setDom };
  },
};
</script>
