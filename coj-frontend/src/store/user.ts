import ACCESS_ENUM from "@/access/accessEnum";

const state = () => ({
  loginUser: {
    userName: "未登录",
    userRole: ACCESS_ENUM.NOT_LOGIN,
  },
});

const getters = {
  getLoginUser: (state) => state.loginUser,
};

const mutations = {
  setLoginUser(state, payload) {
    state.loginUser = payload;
  },
};

const actions = {
  getLoginUser({ commit, state }, payload) {
    //TODO: 获取登录用户信息
    // 模拟异步登录逻辑或数据获取
    commit("setLoginUser", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
