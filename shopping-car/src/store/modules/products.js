// import show from '../../api/shop'
import shop from '../../api/shop';

//state
const state = {
    all:[]
}


//getters
const getters = {}

//action
const actions = {
    getAllProducts({commit}){
        shop.getProduct(products => {
            commit('setProducts',products)
        })
    },
}

//mutations
const mutations = {
    setProducts(state,products){
        state.all = products
    },
    decrementProductInventory(state,{id}){
        const product = state.all.find(item => item.id === id)
        product.inventory--
    }
}

export default{
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}