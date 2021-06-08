<template>
  <div class="son-container">
    <h2>
      作者：周杰伦<button @click="followFn">
        {{ loading ? "loading..." : "关注" }}
      </button>
    </h2>
  </div>
</template>

<script>
import { followMixin } from "./mixins";
export default {
  name: "son",
  setup() {},
  mixins: [followMixin],
};
</script>
