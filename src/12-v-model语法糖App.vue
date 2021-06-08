<template>
  <div class="App-container">
    <!-- 如果你想获取原生事件事件对象 -->
    <!-- 触发 fn 事件，默认给你传的，如果绑定事函数 fn fn(e){ // e 就是事件对象 } -->
    <!-- 如果绑定的是js表达式 此时提供一个默认的变量 $event(事件对象  ) -->
    <h1 @click="$event.target.style.color = 'red'">父组件{{ count }}</h1>
    <hr />
    <!-- 如果你想获取自定义事件，此时是没有事件对象，自由原生事件才有自定义事件，此时 $event 代表的是触发自定时事件的传参(也就是 Son 触发自定义事件传递的 100) -->
    <!-- 如果绑定事函数 fn fn(data){ // data 触发自定义事件的传参 } -->
    <!-- <Son :modelValue="count" @update:modelValue="count = $event" /> -->
    <Son v-model="count" />
  </div>
</template>

<script>
import { ref } from "vue";
import Son from "./Son.vue";
export default {
  name: "App",
  components: {
    Son,
  },
  setup() {
    const count = ref(10);
    return { count };
  },
};
</script>
