<!--
 * @Author: lijiecong 2239108915@qq..com
 * @Date: 2026-04-08 09:14:25
 * @LastEditors: lijiecong 2239108915@qq..com
 * @LastEditTime: 2026-04-08 12:06:21
 * @FilePath: \my_nuxt\app\app.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <AppHeader />
    <van-tabs class="navtabs">
      <van-tab
        v-for="item in navList"
        :key="item.id"
        :title="item.title"
        :to="item.path"
      />
    </van-tabs>

    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "我的Nuxt应用",
  description: "这是一个使用 Nuxt.js 构建的应用程序",
  keywords: "Nuxt.js, 应用程序, 开发",
});

const { data: navList } = await useFetch("/api/navList");
</script>

<style>
:root {
  --van-primary-color: #e1e6ed !important;
}

.navtabs {
  margin-bottom: 20px;
}
</style>
