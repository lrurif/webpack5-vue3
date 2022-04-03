import { defineStore } from "pinia";
export default defineStore({
  id: "user",
  state: () => {
    return {
      userName: "xiaomign",
    };
  },
  actions: {
    updateName(name) {
      this.userName = name;
    },
  },
  getters: {
    allName(state) {
      return "方" + state.userName;
    },
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [
      {
        storage: sessionStorage,
        // 需要持久化存储的变量
        paths: ['userName']
      }
    ]
  },
});
