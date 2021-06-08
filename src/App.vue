<template>
  <div class="App-container">
    <h1>
      作者：周杰伦<a href="javascript:;" @click="followFn">{{
        loading ? "正在请求在..." : "关注"
      }}</a>
    </h1>
    <hr />
    <Son />
  </div>
</template>

<script>
import Son from "./Son.vue";
import { followMixin } from "./mixins";
export default {
  components: { Son },
  name: "App",
  // 这是一个数组类型，可以混入多个代码片段
  mixins: [followMixin],
  setup() {},
};
</script>
