import { createStore } from 'vuex'

export default createStore({
  state: {
    category: [
      { label: "狗派", value: "dog" },
      { label: "貓派", value: "cat" },
    ],
    profiles: [
      {
        category: "cat",
        label: "虎斑",
        value: "A6U958f",
        src: "https://i.imgur.com/A6U958f.jpeg",
      },
      {
        category: "cat",
        label: "小黑",
        value: "WrV5Lj8",
        src: "https://i.imgur.com/WrV5Lj8.jpeg",
      },
      {
        category: "dog",
        label: "哈士奇",
        value: "bIRGzVO",
        src: "https://i.imgur.com/bIRGzVO.jpeg",
      },
      {
        category: "dog",
        label: "柴柴",
        value: "6YEsRvX",
        src: "https://i.imgur.com/6YEsRvX.jpeg",
      },
    ],
  },
  getters: {
  },
  mutations: {},
  actions: {},
  modules: {},
});
