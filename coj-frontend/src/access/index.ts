import router from '@/router'
import { useUserStore } from '@/stores/user.ts'
import ACCESS_ENUM from '@/access/accessEnum.ts'
import checkAccess from '@/access/checkAccess.ts'

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();
  const loginUser = userStore.loginUser;
  if (!loginUser || !loginUser.userRole){
    await userStore.getLoginUserInfo();
  }
  const needAccess = to.meta.access ??  ACCESS_ENUM.NOT_LOGIN;
  if(needAccess!== ACCESS_ENUM.NOT_LOGIN ){
    if (userStore.loginUser.userRole === ACCESS_ENUM.NOT_LOGIN){
      next(`/user/login?redirect=${to.path}`);
      return;
    }
    if(checkAccess(userStore.loginUser, needAccess)){
      next();
      return;
    }else{
      next({ path: '/403' });
      return;
    }
  }
  next();
})
