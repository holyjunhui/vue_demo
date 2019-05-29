import show from '../../api/shop'
import shop from '../../api/shop';

//state
const state = {
    checkoutStatus:null,
    items:[]
}

//getters 
const getters = {
    cartProducts:(state,getters,rootState)=>{
        return state.items.map(({id,quantity})=>{
            const product = rootState.products.all.find(product => product.id === id)
            return {
                title:product.title,
                price:product.price,
                quantity
            }
        })
    },
    cartTotalPrice:(state,getters) =>{
        console.log("getter",getters.cartProducts)
        return getters.cartProducts.reduce((total,product)=>{
            return total + product.price * product.quantity
        },0)
    }
}

//actions
const actions = {
    addProductToCart({state,commit},product){
        commit("checkoutStatus",null)
        if(product.inventory>0){
            const cartItem = state.items.find(item=>item.id === product.id)
            if(!cartItem){
                commit("pushProductToCart",{id:product.id})
            }else{
                commit("incrementItemQuanTity",cartItem)
            }
            commit("products/decrementProductInventory",{id:product.id},{root:true})
        }
    },
    checkout({state, commit},products){
        // const saveItems = [...state.items]

        commit("checkoutStatus",null)
        commit("setItems",{items:[]})
        commit("checkoutStatus",'sucessful')
    }
}

//mutations
const mutations = {
    checkoutStatus(state,status){
        state.checkoutStatus = status
    },
    pushProductToCart(state,{id}){
        state.items.push({
            id,
            quantity:1
        })
    },
    incrementItemQuanTity(state,{id}){
        const product = state.items.find(item => item.id === id)
        product.quantity++
    },
    setItems(state,{items}){
        state.items = items
    }
}


export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}