export default {
  cartLength(state){
    return state.cartList.length
  },

  cartList(state){
    return state.cartList
  },

  totalMoney(state){
    return state.totalMoney
  }
}
