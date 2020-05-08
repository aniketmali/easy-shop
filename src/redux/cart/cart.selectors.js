import { createSelector } from 'reselect';

export const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((prevQuantity,cartItem) => prevQuantity + cartItem.quantity,0)
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (prevQuantity,cartItem) => prevQuantity + cartItem.quantity*cartItem.price,0
        )
)