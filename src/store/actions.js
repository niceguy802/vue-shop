export default {
  //加入购物车的数据
  addCart(context, payload) {
    // 判断是否已存在当前商品，若存在，num+，不存在则num=1
    let oldGoods = context.state.cartList.find(item => item.iid === payload.iid)

    if (oldGoods) {
      // oldGoods.num+=1
      context.commit('addCounter', oldGoods)
      // context.commit('changeNum', oldGoods)

    } else {
      payload.num = 1
      // context.state.cartList.push(payload)
      context.commit('addToCart', payload)
    }
    // if(context.state.cartList[payload.iid]===undefined){
    //   context.state.cartList[payload.iid]=payload
    // }

    // state.cartList[payload.iid].num++
    //
    // console.log(state.cartList)
    // console.log(state.cartList[payload.iid].num)
    // state.shopCartGoods.push(state.cartList)
    // console.log(state.shopCartGoods)
  },
}
