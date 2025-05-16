<template>
  <div class="error-container">
    <div class="error-content">
      <div class="error-code">403</div>
      <div class="error-divider"></div>
      <h1 class="error-title">访问被禁止</h1>
      <p class="error-message">
        很抱歉，您没有权限访问此页面。请联系管理员获取访问权限。
      </p>
      <div class="error-illustration">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="#f8f9fa"
            stroke="#dc3545"
            stroke-width="2"
          />
          <!-- 锁的图案 -->
          <rect x="75" y="95" width="50" height="40" rx="5" fill="#dc3545" />
          <rect
            x="85"
            y="75"
            width="30"
            height="30"
            rx="15"
            fill="none"
            stroke="#dc3545"
            stroke-width="8"
          />
          <circle cx="100" cy="115" r="5" fill="white" />
          <line
            x1="100"
            y1="115"
            x2="100"
            y2="125"
            stroke="white"
            stroke-width="3"
          />
        </svg>
      </div>
      <div class="error-actions">
        <button class="error-button" @click="goHome">返回首页</button>
        <button class="error-button secondary" @click="goBack">返回上页</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Forbidden",
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #fff5f5 0%, #ffe3e3 100%);
  padding: 20px;
}

.error-content {
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  padding: 40px;
  text-align: center;
}

.error-code {
  font-size: 100px;
  font-weight: bold;
  color: #dc3545;
  line-height: 1;
  margin-bottom: 10px;
}

.error-divider {
  width: 60px;
  height: 4px;
  background-color: #dc3545;
  margin: 10px 0 20px;
  border-radius: 2px;
}

.error-title {
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
}

.error-message {
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
  line-height: 1.6;
}

.error-illustration {
  width: 200px;
  height: 200px;
  margin: 10px 0 30px;
}

.error-actions {
  display: flex;
  gap: 16px;
}

.error-button {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 12px 32px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.error-button:hover {
  background-color: #c82333;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(220, 53, 69, 0.4);
}

.error-button.secondary {
  background-color: transparent;
  color: #dc3545;
  border: 2px solid #dc3545;
}

.error-button.secondary:hover {
  background-color: rgba(220, 53, 69, 0.1);
  box-shadow: 0 5px 15px rgba(220, 53, 69, 0.2);
}

@media (max-width: 576px) {
  .error-content {
    padding: 30px;
  }

  .error-code {
    font-size: 80px;
  }

  .error-title {
    font-size: 24px;
  }

  .error-illustration {
    width: 160px;
    height: 160px;
  }

  .error-actions {
    flex-direction: column;
    width: 100%;
  }

  .error-button {
    width: 100%;
  }
}
</style>
