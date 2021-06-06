<template>
  <div class="App-container">
    <div>今年：{{ age }}岁</div>
    <div>后年：{{ newAge }}岁</div>
    <!-- 使用 v-model 绑定计算属性 -->
    <input type="text" v-model="newAge" />
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  name: "App",
  setup() {
    // 1. 计算属性：当你需要依赖现有的响应式数据，根据一定逻辑得到的一个新的数据
    const age = ref(18);
    // 得到后年的年龄
    // const newAge = computed(() => {
    //   // 该函数的返回值就是计算属性的值
    //   return age.value + 2;
    // });

    // 计算属性的高级用法(computed 还可以传对象，返回一个对象)
    const newAge = computed({
      // get 函数，获取计算属性的值
      get() {
        return age.value + 2;
      },
      // set 函数，当你给计算属性摄制组的时候触发
      set(val) {
        // 计算属性可以获取到修改的那个值，但是不能直接在这里去修改这个值
        // 如果要修改的话是修改的 ref 的这个值
        console.log(val);
        age.value = val - 2;
      },
    });

    return { age, newAge };
  },
};
</script>
