<template>
  <div class="son-container">
    子组件{{ modelValue }} <button @click="fn">修改数据</button>
  </div>
</template>

<script>
export default {
  name: "son",
  props: {
    // 注意这里面传递的是 modelValue ，而不是 count
    modelValue: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const fn = () => {
      // 改变数据
      emit("update:modelValue", 100);
    };
    return { fn };
  },
};
</script>
