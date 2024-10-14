import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import adminProductsSlice from "./admin/products-slice"; 
import shopProductsSlice from "./shop/products-slice";
import shopCartSlice from "./shop/cart-slice"
import shopAddressSlice from "./shop/address-slice";
import shopOrderSlice from "./shop/order-slice";
import adminOrderSlice from "./admin/order-slice";
import shopSearchSlicee from "./shop/search-slice";
import shopReviewSlice from "./shop/review-slice";
import commonFeatureSlice from "./common-slice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: adminProductsSlice,
    shopProducts : shopProductsSlice,
    shopCart : shopCartSlice,
    shopAddress : shopAddressSlice,
    shopOrder : shopOrderSlice,
    adminOrder : adminOrderSlice,
    shopSearch :shopSearchSlicee,
    shopReview :shopReviewSlice,
    commonFeature :commonFeatureSlice
  }
});

export default store;