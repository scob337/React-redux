import { configureStore } from '@reduxjs/toolkit'
import CartShop from './CartShop-Slice'



export  const store = configureStore({ reducer:{
    Cart:CartShop,

} })