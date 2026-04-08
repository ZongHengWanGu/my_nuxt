<!--
 * @Author: lijiecong 2239108915@qq..com
 * @Date: 2026-04-08 09:49:49
 * @LastEditors: lijiecong 2239108915@qq..com
 * @LastEditTime: 2026-04-08 14:41:19
 * @FilePath: \my_nuxt\app\pages\video\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <van-barrage
      class="w-[500px] h-[300px]"
      ref="reference"
      v-model="list"
      :play="isPlay"
      :duration="5000"
    >
      <video class="w-full h-full" src="./index.mp4" controls></video>
    </van-barrage>
    <van-space style="margin-top: 10px">
      <van-button @click="kaishi" type="primary" size="small">
        开始
      </van-button>
      <van-button @click="zhi" type="primary" size="small"> 暂停 </van-button>
    </van-space>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const reference = ref();
const isPlay = ref(false);
const list = ref([
  { id: 100, text: "轻量" },
  { id: 101, text: "可定制的" },
  { id: 102, text: "移动端" },
  { id: 103, text: "Vue" },
  { id: 104, text: "组件库" },
  { id: 105, text: "VantUI" },
  { id: 106, text: "666" },
]);

const kaishi = () => {
  reference.value.play();
};

const zhi = () => {
  reference.value.pause();
};
</script>

<style scoped></style>
