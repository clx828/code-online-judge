<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header"><GlobalHeader /></a-layout-header>
      <a-layout-content class="content"><RouterView /></a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://github.com/clx828" target
        >Code Online Judge by 橙子</a
        ></a-layout-footer
      >
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>

<style scoped>
#basicLayout {
  width: 100%;
}
.header {
}
.content {
  background-color: cornflowerblue;
  padding: 20px;
}
.footer {
  background-color: #efefef;
  padding: 16px;
  text-align: center;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
