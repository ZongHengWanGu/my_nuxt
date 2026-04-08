<!--
 * @Author: lijiecong 2239108915@qq..com
 * @Date: 2026-04-08 09:49:37
 * @LastEditors: lijiecong 2239108915@qq..com
 * @LastEditTime: 2026-04-08 15:20:06
 * @FilePath: \my_nuxt\app\pages\index\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-button type="warning">警告按钮</van-button>

    <div class="text-[red]">
      <Icon name="weui:home-filled" size="54" color="red" />
    </div>
    <div class="flex items-center justify-center gap-4 mt-4">
      <van-button type="primary" @click="cartStore.decrement()">-</van-button>
      <p class="text-[blue]">{{ cartStore.sum }}</p>
      <van-button type="primary" @click="cartStore.increment()">+</van-button>
    </div>

    <div>
      计数器: {{ counter }}
      <button @click="counter++">+</button>
      <button @click="counter--">-</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/index";

const cartStore = useCartStore();

const counter = useState("counter", () => 0);
</script>

<style scoped></style>
