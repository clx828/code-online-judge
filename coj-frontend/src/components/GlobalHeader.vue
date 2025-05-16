<template>
  <a-row id="globalHeader" align="center" :wrap="false">
    <a-col flex="auto">
      <div>
        <a-menu
          mode="horizontal"
          :selected-keys="selectedKeys"
          @menu-item-click="doMenuClick"
        >
          <a-menu-item
            key="0"
            :style="{ padding: 0, marginRight: '38px' }"
            disabled
          >
            <div class="title-bar">
              <img class="logo" src="../assets/coj-logo.png" />
            </div>
          </a-menu-item>
          <a-menu-item v-for="item in visibleRoutes" :key="item.path">{{
            item.name
          }}</a-menu-item>
        </a-menu>
      </div>
    </a-col>
    <a-col flex="100px" class="">
      <a-dropdown position="bottom"
        ><div>
          <a-avatar :style="{ backgroundColor: '#14a9f8' }">COJ</a-avatar
          >{{ store.state.user.loginUser.userName }}
        </div>
        <template #content>
          <a-doption>Option 1</a-doption>
          <a-doption>Option 2</a-doption>
          <a-doption>Option 3</a-doption>
        </template>
      </a-dropdown>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "@/router/routes";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import checkAccess from "@/access/checkAccess";

const router = useRouter();
const selectedKeys = ref(["/"]);
const store = useStore();
const visibleRoutes = computed(() => {
  return routes.filter((item) => {
    if (item.meta?.hideInMenu) {
      return false;
    }
    return checkAccess(store.state.user.loginUser, item.meta?.access);
  });
});

//  路由监听
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});

//模拟获取登录用户信息,3秒后模拟登录
setTimeout(() => {
  store.commit("user/setLoginUser", {
    userName: "CC",
    userRole: "admin",
  });
}, 3000);

const doMenuClick = (key: string) => {
  //路由跳转
  router.push({
    path: key,
  });
};
</script>

<style scoped>
#globalHeader {
  box-shadow: #eee 1px 1px 5px;
}
.title-bar {
  width: 120px;
  height: 48px;
  borderradius: 2px;
  background: var(--color-fill-3);
}
.logo {
  height: 48px;
}
</style>
