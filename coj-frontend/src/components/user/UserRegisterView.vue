<template>
  <div id="userRegisterView" class="register-container">
    <div class="register-card">
      <div class="header">
        <h2>欢迎注册</h2>
      </div>
      <a-form :model="form" @submit="handleSubmit" :rules="rules" ref="formRef">
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

        <a-form-item field="checkPassword" label="确认密码">
          <a-input-password
            v-model="form.checkPassword"
            placeholder="请再次输入密码..."
            :style="{ width: '100%' }"
            allow-clear
          >
            <template #prefix>
              <icon-lock />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item field="email" label="邮箱">
          <a-input
            v-model="form.email"
            placeholder="请输入邮箱..."
            :style="{ width: '100%' }"
            allow-clear
          >
            <template #prefix>
              <icon-email />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item field="verificationCode" label="验证码">
          <div class="verify-group">
            <a-input
              v-model="form.verificationCode"
              placeholder="请输入验证码..."
              :style="{ width: '100%' }"
              allow-clear
            >
              <template #prefix>
                <icon-safe />
              </template>
            </a-input>
            <a-button
              type="outline"
              class="verification-btn"
              :disabled="countDown > 0"
              @click="getVerificationCode"
            >
              {{ countDown > 0 ? `${countDown}s` : '获取验证码' }}
            </a-button>
          </div>
        </a-form-item>

        <a-form-item field="agreement">
          <a-checkbox v-model="form.agreement">
            我已阅读并同意 <a-link>用户协议</a-link> 和 <a-link>隐私政策</a-link>
          </a-checkbox>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit" long>注册</a-button>
        </a-form-item>

        <div class="login-link">
          <span>已有账号？</span>
          <a-link @click="() => router.push('/user/login')">立即登录</a-link>
        </div>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { Message } from '@arco-design/web-vue';

const formRef = ref(null);
const countDown = ref(0);
let timer: number | null = null;

const form = reactive({
  userAccount: '',
  userPassword: '',
  checkPassword: '',
  email: '',
  verificationCode: '',
  agreement: false
});

const rules = {
  userAccount: [
    { required: true, message: '请输入用户名' },
    { minLength: 4, message: '用户名不能少于4个字符' }
  ],
  userPassword: [
    { required: true, message: '请输入密码' },
    { minLength: 6, message: '密码不能少于6个字符' }
  ],
  checkPassword: [
    { required: true, message: '请再次输入密码' },
    {
      validator: (value: string, cb: (error?: string) => void) => {
        if (value !== form.userPassword) {
          return cb('两次输入的密码不一致');
        }
        return cb();
      }
    }
  ],
  email: [
    { required: true, message: '请输入邮箱地址' },
    {
      validator: (value: string, cb: (error?: string) => void) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(value)) {
          return cb('请输入有效的邮箱地址');
        }
        return cb();
      }
    }
  ],
  verificationCode: [
    { required: true, message: '请输入验证码' },
    { length: 6, message: '验证码长度应为6位' }
  ],
  agreement: [
    {
      validator: (value: boolean, cb: (error?: string) => void) => {
        if (!value) {
          return cb('请阅读并同意用户协议和隐私政策');
        }
        return cb();
      }
    }
  ]
};

const router = useRouter();

// 启动倒计时函数
const startCountDown = () => {
  countDown.value = 60;
  timer = window.setInterval(() => {
    if (countDown.value > 0) {
      countDown.value -= 1;
    } else {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }
  }, 1000);
};

// 验证码获取逻辑
const getVerificationCode = async () => {
  try {
    // 验证邮箱格式
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!form.email) {
      Message.error('请先输入邮箱地址');
      return;
    }

    if (!emailRegex.test(form.email)) {
      Message.error('请输入有效的邮箱地址');
      return;
    }

    // 验证通过，调用验证码发送接口
    try {
      // 这里替换为你的验证码获取API
      // await api.sendVerificationCode(form.email);
      console.log('发送验证码到邮箱:', form.email);
      Message.success('验证码已发送，请查收');

      // 开始倒计时
      startCountDown();
    } catch (error) {
      console.error('验证码发送失败', error);
      Message.error('验证码发送失败，请稍后重试');
    }
  } catch (error) {
    console.error('验证失败', error);
  }
};

// 表单提交函数
const handleSubmit = async () => {
  if (formRef.value) {
    try {
      await formRef.value.validate();
      // 表单验证通过，执行注册逻辑
      console.log('提交表单', form);
      Message.success('注册信息已提交');
    } catch (errors) {
      console.log('表单验证失败', errors);
    }
  }
};

// 组件卸载前清除定时器
onBeforeUnmount(() => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
});

// 检查localStorage中是否有保存的倒计时数据
const initCountDown = () => {
  const savedCountDown = localStorage.getItem('verificationCountDown');
  const savedTimestamp = localStorage.getItem('countDownTimestamp');

  if (savedCountDown && savedTimestamp) {
    const elapsedSeconds = Math.floor((Date.now() - parseInt(savedTimestamp)) / 1000);
    const remainingSeconds = parseInt(savedCountDown) - elapsedSeconds;

    if (remainingSeconds > 0) {
      countDown.value = remainingSeconds;
      startCountDown();
    } else {
      // 清除过期的数据
      localStorage.removeItem('verificationCountDown');
      localStorage.removeItem('countDownTimestamp');
    }
  }
};

// 监听倒计时变化，保存到localStorage
const watchCountDown = () => {
  if (countDown.value > 0) {
    localStorage.setItem('verificationCountDown', countDown.value.toString());
    localStorage.setItem('countDownTimestamp', Date.now().toString());
  } else {
    localStorage.removeItem('verificationCountDown');
    localStorage.removeItem('countDownTimestamp');
  }
};

// 初始化倒计时
initCountDown();

// 监听倒计时变化
import { watch } from 'vue';
watch(countDown, watchCountDown);
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  background-color: #f5f7fa;
  text-align: center;
}

.register-card {
  width: 100%;
  max-width: 480px;
  background: white;
  border-radius: 8px;
  padding: 25px 70px 25px 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin: 0 auto;
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

.verify-group {
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
}

.verification-btn {
  white-space: nowrap;
  min-width: 110px;
}

.login-link {
  text-align: center;
  margin-top: 16px;
  color: #86909c;
}

:deep(.arco-form-item) {
  text-align: left;
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
