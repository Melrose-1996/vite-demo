<template>
  <div class="son-container">
    <h1>子组件</h1>
    <p>{{ money }}</p>
    <button @click="changeMoney">花50元</button>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  name: "son",
  // 子组件接收父组件数据使用 props 即可
  props: {
    money: {
      type: Number,
      default: 0,
    },
  },
  // setup 第一个默认参数就是 props
  // 第二个参数 context，里面包含了 emit(触发自定义事件的函数)
  setup(props, { emit }) {
    // 获取父组件数据 money
    console.log(props.money);

    // 向父组件传值
    const changeMoney = () => {
      // 消费50元
      // 通知父组件，money 需要变成50
      emit("change-money", 50);
    };

    // 一定要 return
    return { changeMoney };
    // onMounted(() => {
    // 拿不到，会报错
    //   console.log(this.money);
    // });
  },
};
</script>
