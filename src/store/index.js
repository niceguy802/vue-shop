import {createStore} from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
export default createStore({
  state: {
    tabBarIsShow: true,
    //传入的商品数据
    cartList: [],
    //总价
    totalMoney:0
  },
  mutations,
  actions,
  getters,
  modules: {}
})
