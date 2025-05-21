<template>
  <div id="userLayout">
    <a-layout style="min-height: 100vh">
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
</script>

<style scoped>
#basicLayout {
  width: 100%;
}
.content {
  background-color: #f5f7fa;
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
