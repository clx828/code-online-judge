import { defineStore } from 'pinia';
import ACCESS_ENUM from "@/access/accessEnum";
import { getLoginUserUsingGet } from '@/api/userController.ts'

// Convert Vuex store to Pinia store
export const useUserStore = defineStore('user', {
  // state is now a function that returns an object
  state: () => ({
    loginUser: {
      userName: "未登录",
    }
  }),

  // 移除了getters，直接从state访问loginUser

  // actions replace mutations and async actions from Vuex
  actions: {
    // In Pinia, you can directly modify state in actions
    setLoginUser(payload) {
      this.loginUser = payload;
    },

    async getLoginUserInfo() {
      // TODO: 获取登录用户信息\
      try{
        const res = await getLoginUserUsingGet()
        if (res.data.code === 200 && res.data.data){
          this.setLoginUser(res.data.data)
        }else {
          this.setLoginUser({
            userName: "未登录",
            userRole: ACCESS_ENUM.NOT_LOGIN,
          })
        }
      }catch (e){
        this.$message.error("获取登录用户信息失败")
        console.log(e)
      }
    }
  }
});
