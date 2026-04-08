<!--
 * @Author: 李杰聪 2239108915@qq.com
 * @Date: 2026-04-08 22:36:30
 * @LastEditors: 李杰聪 2239108915@qq.com
 * @LastEditTime: 2026-04-08 22:36:32
 * @FilePath: \my_nuxt\app\pages\shop\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">会员购</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- 商品卡片 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="h-48 bg-gray-200"></div>
        <div class="p-4">
          <h3 class="font-medium mb-2">商品标题</h3>
          <p class="text-red-500 font-medium mb-2">¥99.00</p>
          <button
            class="bg-pink-600 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-700 transition-colors"
          >
            立即购买
          </button>
        </div>
      </div>
      <!-- 商品卡片 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="h-48 bg-gray-200"></div>
        <div class="p-4">
          <h3 class="font-medium mb-2">商品标题</h3>
          <p class="text-red-500 font-medium mb-2">¥199.00</p>
          <button
            class="bg-pink-600 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-700 transition-colors"
          >
            立即购买
          </button>
        </div>
      </div>
      <!-- 商品卡片 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="h-48 bg-gray-200"></div>
        <div class="p-4">
          <h3 class="font-medium mb-2">商品标题</h3>
          <p class="text-red-500 font-medium mb-2">¥299.00</p>
          <button
            class="bg-pink-600 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-700 transition-colors"
          >
            立即购买
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 会员购页面逻辑
</script>

<style scoped>
/* 会员购页面样式 */
</style>
