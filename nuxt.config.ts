/*
 * @Author: lijiecong 2239108915@qq..com
 * @Date: 2026-04-08 09:14:26
 * @LastEditors: lijiecong 2239108915@qq..com
 * @LastEditTime: 2026-04-08 16:17:33
 * @FilePath: \my_nuxt\nuxt.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@unocss/nuxt",
    "@pinia/nuxt",
    "@vant/nuxt",
    [
      "@nuxt/icon",
      {
        localApiEntries: "/nuxt-icon",
      },
    ],
  ],
  devServer: {
    port: 3000,
  },
  // 搜索引擎优化
  app: {
    head: {
      title: "我的 Nuxt 应用",
      meta: [
        {
          name: "description",
          content: "这是一个使用 Nuxt.js 构建的示例应用。",
        },
        { name: "keywords", content: "Nuxt, Vue, JavaScript, SEO" },
      ],
    },
  },
  // 代理配置
  // nitro: {
  //   routeRules: {
  //     "/api/**": {
  //       proxy: "http://localhost:3000/**",
  //     },
  //   },
  // },
});
