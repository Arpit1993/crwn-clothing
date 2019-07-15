import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cardItems => 
        cartItems.reduce(
            (accumalatedQuantity, cartItem) => 
            accumalatedQuantity + cartItem.quantity,
         0)
)