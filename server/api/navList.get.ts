/*
 * @Author: lijiecong 2239108915@qq..com
 * @Date: 2026-04-08 11:26:44
 * @LastEditors: lijiecong 2239108915@qq..com
 * @LastEditTime: 2026-04-08 11:31:24
 * @FilePath: \my_nuxt\server\navList.get.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { navList } from "@/database/navList";

export default defineEventHandler(async (event) => {
  return navList;
});
