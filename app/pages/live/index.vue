<!--
 * @Author: 李杰聪 2239108915@qq.com
 * @Date: 2026-04-08 22:36:18
 * @LastEditors: 李杰聪 2239108915@qq.com
 * @LastEditTime: 2026-04-08 22:36:20
 * @FilePath: \my_nuxt\app\pages\live\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">直播</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- 直播卡片 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="h-48 bg-gray-200 relative">
          <div
            class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full"
          >
            直播中
          </div>
        </div>
        <div class="p-4">
          <h3 class="font-medium mb-2">直播间标题</h3>
          <p class="text-gray-500 text-sm">主播名称</p>
        </div>
      </div>
      <!-- 直播卡片 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="h-48 bg-gray-200 relative">
          <div
            class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full"
          >
            直播中
          </div>
        </div>
        <div class="p-4">
          <h3 class="font-medium mb-2">直播间标题</h3>
          <p class="text-gray-500 text-sm">主播名称</p>
        </div>
      </div>
      <!-- 直播卡片 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="h-48 bg-gray-200 relative">
          <div
            class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full"
          >
            直播中
          </div>
        </div>
        <div class="p-4">
          <h3 class="font-medium mb-2">直播间标题</h3>
          <p class="text-gray-500 text-sm">主播名称</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 直播页面逻辑
</script>

<style scoped>
/* 直播页面样式 */
</style>
