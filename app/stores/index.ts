/*
 * @Author: lijiecong 2239108915@qq..com
 * @Date: 2026-04-08 14:17:02
 * @LastEditors: lijiecong 2239108915@qq..com
 * @LastEditTime: 2026-04-08 14:22:38
 * @FilePath: \my_nuxt\app\stores\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    sum: 0,
  }),
  getters: {},
  actions: {
    increment() {
      this.sum++;
    },
    decrement() {
      this.sum--;
    },
  },
});
