import { createSlice } from "@reduxjs/toolkit";


const CartShop = createSlice({
    name: "CartShop",
    initialState : [],
    reducers: {
        ADD(state, action) {
            const exist = state.find(pro => pro.id === action.payload.id)
            if (exist) {
                exist.quantity +=1
            }
            else{
                const product_quantity = {...action.payload , quantity:1}
                state.push(product_quantity)
            }
            
        },
        DELETE(state,action) {
            const exist = state.find(pro => pro.id === action.payload.id)
            state.splice(exist,1)
        },
        increaseCount(state , action){
            const exist = state.find(pro => pro.id === action.payload.id)
            if (exist) {
                exist.quantity +=1
            }
            return state
        },

        decreaseCount(state , action){

            const exist = state.find(pro => pro.id === action.payload.id)

            if (exist) {
                exist.quantity -=1
                if (exist.quantity === 0 ) {
                    state.splice(exist,1)

            }

            }
            return state
        }

    },
    });

export const { ADD ,increaseCount ,decreaseCount , DELETE} = CartShop.actions;
export default CartShop.reducer;
