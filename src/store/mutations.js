export default {
  //修改state中的状态
  tabBarIsChange(state, status) {
    return state.tabBarIsShow = status
  },
  addCounter(state, payload) {
    payload.num++
  },
  addToCart(state, payload) {
    // payload.num=1
    state.cartList.push(payload)
  },
  //修改单个商品数量
  increment(state, payload) {
    state.cartList[payload].num++
  },
  decrement(state, payload) {
    if (state.cartList[payload].num > 1) {
      state.cartList[payload].num--
    }else{}
  },
}
