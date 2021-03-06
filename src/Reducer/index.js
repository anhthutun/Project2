import Home from "./Home"
import { combineReducers } from "redux"
import CusAccount from "./AccountReducer"

import UniProduct from "../Admin/Reducers/UniProduct"
import Customer from "../Admin/Reducers/CustomerAccount"
import HomeAdmin from "../Admin/Reducers/HomeAdmin"
import Account from "../Admin/Reducers/Account"
import CartReducer from "./CartReducer"
export default combineReducers({
    home: Home,
    CusAccount: CusAccount,
    Cart: CartReducer,
    uni: UniProduct,
    Cus: Customer,
    homeAdmin: HomeAdmin,
    Account: Account,
})