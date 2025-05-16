<template>
  <div class="error-container">
    <div class="error-content">
      <div class="error-code">404</div>
      <div class="error-divider"></div>
      <h1 class="error-title">页面未找到</h1>
      <p class="error-message">很抱歉，您请求的页面不存在或已被移除。</p>
      <div class="error-illustration">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#f8f9fa"
            d="M40,60 C40,30 100,30 100,60 C100,30 160,30 160,60 L160,140 C160,170 100,170 100,140 C100,170 40,170 40,140 Z"
          />
          <path
            fill="none"
            stroke="#5755d9"
            stroke-width="2"
            d="M40,60 C40,30 100,30 100,60 C100,30 160,30 160,60 L160,140 C160,170 100,170 100,140 C100,170 40,170 40,140 Z"
          />
          <g transform="translate(70, 80)">
            <!-- 左眼 - 闭眼效果 -->
            <path
              d="M0,0 Q10,-10 20,0"
              fill="none"
              stroke="#5755d9"
              stroke-width="2"
            />
          </g>
          <g transform="translate(110, 80)">
            <!-- 右眼 - 闭眼效果 -->
            <path
              d="M0,0 Q10,-10 20,0"
              fill="none"
              stroke="#5755d9"
              stroke-width="2"
            />
          </g>
          <!-- 嘴巴 - 难过表情 -->
          <path
            d="M85,110 Q100,100 115,110"
            fill="none"
            stroke="#5755d9"
            stroke-width="2"
          />
        </svg>
      </div>
      <button class="error-button" @click="goHome">返回首页</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  methods: {
    goHome() {
      this.$router.push("/");
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
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
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
  color: #5755d9;
  line-height: 1;
  margin-bottom: 10px;
}

.error-divider {
  width: 60px;
  height: 4px;
  background-color: #5755d9;
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

.error-button {
  background-color: #5755d9;
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
  background-color: #4240aa;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(87, 85, 217, 0.4);
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
}
</style>
