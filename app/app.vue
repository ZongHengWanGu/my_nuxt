<!--
 * @Author: lijiecong 2239108915@qq..com
 * @Date: 2026-04-08 09:14:25
 * @LastEditors: lijiecong 2239108915@qq..com
 * @LastEditTime: 2026-04-08 16:24:03
 * @FilePath: \my_nuxt\app\app.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <AppHeader />
    <van-tabs v-model:active="active" class="navtabs">
      <van-tab
        v-for="item in navList"
        :key="item.id"
        :title="item.title"
        :to="item.path"
        :name="item.path"
      />
    </van-tabs>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const active = ref(route.path);

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
