import Cookies from 'js-cookie';
import i18n from '@/lang-i18n';

const login = {
  state:{
    token:Cookies.get('login-token'),
  },
  mutations:{
    SET_TOKEN: (state, token) => {
      state.token = token;
    }
  },
  actions:{
    doLogin({ commit }, userInfo) {
      const email = userInfo.email.trim();
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', 'sdsd');
        Cookies.set('login-token', email, { expires: 1 });
        resolve();
      });
    },
  }
};

export default login;
