<!--
 * @Author: lijiecong 2239108915@qq..com
 * @Date: 2026-04-08 09:14:25
 * @LastEditors: 李杰聪 2239108915@qq.com
 * @LastEditTime: 2026-04-08 23:20:31
 * @FilePath: \my_nuxt\app\app.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="min-h-full">
    <!-- 哔哩哔哩风格头部导航栏 -->
    <header class="header">
      <div class="container">
        <!-- 左侧Logo和导航 -->
        <div class="flex items-center space-x-8">
          <!-- Logo -->
          <div class="logo">
            <NuxtLink to="/">哔哩哔哩</NuxtLink>
          </div>

          <!-- 主导航菜单 -->
          <nav class="nav-menu hidden md:flex">
            <NuxtLink
              v-for="item in navMenu"
              :key="item.path"
              :to="item.path"
              :class="{ active: item.path === '/' }"
            >
              {{ item.title }}
            </NuxtLink>
          </nav>
        </div>

        <!-- 右侧搜索框和功能按钮 -->
        <div class="flex items-center space-x-4">
          <!-- 搜索框 -->
          <div class="search-box hidden md:block">
            <input
              type="text"
              v-model="searchQuery"
              @keyup.enter="handleSearch"
              placeholder="搜索视频、番剧、用户..."
            />
            <svg
              class="search-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>

          <!-- 功能按钮 -->
          <div class="action-buttons">
            <NuxtLink to="/messages" class="action-button">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
            </NuxtLink>

            <NuxtLink to="/notifications" class="action-button">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
            </NuxtLink>

            <NuxtLink to="/profile" class="action-button">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </NuxtLink>
          </div>

          <!-- 登录/注册按钮 -->
          <div class="auth-buttons hidden md:flex">
            <NuxtLink to="/login" class="login-button">登录</NuxtLink>
            <NuxtLink to="/register" class="register-button">注册</NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <main class="main-content">
      <div class="container">
        <NuxtPage />
      </div>
    </main>

    <!-- 底部导航 -->
    <footer class="footer">
      <div class="container">
        <div class="footer-logo">
          <h2>哔哩哔哩</h2>
          <p>让生活充满欢乐</p>
        </div>
        <div class="footer-links">
          <div class="footer-link-group">
            <h3>关于我们</h3>
            <ul>
              <li><NuxtLink to="/about">公司介绍</NuxtLink></li>
              <li><NuxtLink to="/contact">联系我们</NuxtLink></li>
              <li><NuxtLink to="/join">加入我们</NuxtLink></li>
            </ul>
          </div>
          <div class="footer-link-group">
            <h3>帮助中心</h3>
            <ul>
              <li><NuxtLink to="/faq">常见问题</NuxtLink></li>
              <li><NuxtLink to="/feedback">用户反馈</NuxtLink></li>
              <li><NuxtLink to="/privacy">隐私政策</NuxtLink></li>
            </ul>
          </div>
          <div class="footer-link-group">
            <h3>商务合作</h3>
            <ul>
              <li><NuxtLink to="/advertise">广告投放</NuxtLink></li>
              <li><NuxtLink to="/cooperation">内容合作</NuxtLink></li>
              <li><NuxtLink to="/events">活动合作</NuxtLink></li>
            </ul>
          </div>
          <div class="footer-link-group">
            <h3>关注我们</h3>
            <ul>
              <li><a href="#">官方微博</a></li>
              <li><a href="#">官方微信</a></li>
              <li><a href="#">B站动态</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-copyright">
          © 2026 哔哩哔哩 bilibili.com 版权所有
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const searchQuery = ref("");

// 导航菜单数组
const navMenu = [
  { title: "首页", path: "/" },
  { title: "番剧", path: "/anime" },
  { title: "直播", path: "/live" },
  { title: "游戏中心", path: "/games" },
  { title: "会员购", path: "/shop" },
  { title: "漫画", path: "/comics" },
  { title: "赛事", path: "/events" },
];

// 处理搜索功能
const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push(`/search?query=${encodeURIComponent(searchQuery.value)}`);
  }
};
</script>

<style scoped>
/* 局部样式可以在这里添加 */
</style>
