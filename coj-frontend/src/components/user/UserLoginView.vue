<template>
  <div id="userLoginView" class="login-container">
    <div class="login-card">
      <div class="header">
        <h2>欢迎登录</h2>
        <p>请输入您的账号信息</p>
      </div>
      <a-form :model="form" @submit="handleSubmit">
        <a-form-item field="userAccount" label="用户名">
          <a-input
            v-model="form.userAccount"
            placeholder="请输入用户名..."
            :style="{ width: '100%' }"
            allow-clear
          >
            <template #prefix>
              <icon-user />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item field="userPassword" label="密码">
          <a-input-password
            v-model="form.userPassword"
            placeholder="请输入密码..."
            :style="{ width: '100%' }"
            allow-clear
          >
            <template #prefix>
              <icon-lock />
            </template>
          </a-input-password>
        </a-form-item>
        <div class="remember-forgot">
          <a-checkbox>记住我</a-checkbox>
          <a-link>忘记密码？</a-link>
        </div>
        <a-form-item>
          <a-button type="primary" html-type="submit" long>登录</a-button>
        </a-form-item>
        <div class="register-link">
          <span>还没有账号？</span>
          <a-link @click="router.push('/user/register')">立即注册</a-link>
        </div>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router'

const form = reactive({
  userAccount: '',
  userPassword: '',
});
const router = useRouter();
const handleSubmit = () => {
  // 登录逻辑处理
  console.log('提交表单', form);
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  background-color: #f5f7fa;
  padding: 0;
}

.login-card {
  width: 100%;
  max-width: 480px;
  background: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h2 {
  font-size: 24px;
  color: #1d2129;
  margin-bottom: 8px;
}

.header p {
  color: #86909c;
  font-size: 14px;
}

.remember-forgot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  margin-left: 30px;
}

.register-link {
  text-align: center;
  margin-top: 16px;
  color: #86909c;
}

:deep(.arco-btn-primary) {
  background-color: #165dff;
  border-color: #165dff;
  height: 40px;
  font-size: 16px;
  margin-top: 8px;
}

:deep(.arco-btn-primary:hover) {
  background-color: #4080ff;
  border-color: #4080ff;
}

:deep(.arco-form-item-label-col) {
  font-weight: 500;
}

:deep(.arco-input-wrapper) {
  border-radius: 4px;
}

:deep(.arco-input) {
  height: 38px;
}
</style>
