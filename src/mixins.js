// 提供 mixin 逻辑
// 有很多逻辑，所以不能用 export default

// 是做关注需求的混入选项
export const followMixin = {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    followFn() {
      this.loading = true;
      // 模拟请求
      setTimeout(() => {
        // 关注成功的逻辑，省略
        this.loading = false;
      }, 2000);
    },
  },
};
