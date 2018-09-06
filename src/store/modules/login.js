const login = {
  state:{
    token:undefined
  },
  mutations:{
    SET_TOKEN: (state, token) => {
      state.token = token;
    }
  },
  actions:{
    LoginByEmail({ commit }, userInfo) {
      const email = userInfo.email.trim();
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', 'sdsd');
        // loginByEmail(email, userInfo.password).then(response => {
        //   const data = response.data;
        //   console.log(response.data);
        //   Cookies.set('Admin-Token', response.data.token);
        //   commit('SET_TOKEN', data.token);
        //   commit('SET_EMAIL', email);
          resolve();
        // }).catch(error => {
        //   reject(error);
        // });
      });
    },
  }
};

export default login;
