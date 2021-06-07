<template>
  <div class="App-container">
    <h1>父组件</h1>
    <p>
      {{ money }}
    </p>
    <hr />
    <Son :money="money" @change-money="changMoney" />
  </div>
</template>

<script>
import { ref } from "vue";
import Son from "./son.vue";
export default {
  name: "App",
  components: {
    Son,
  },
  // 父组件的数据传递给子组件
  setup() {
    const money = ref(100);

    const changMoney = (newMoney) => {
      console.log(newMoney);
      money.value = newMoney;
    };
    return { money, changMoney };
  },
};
</script>
