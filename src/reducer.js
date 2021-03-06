export const initialState = {
    basket: [],
    user: null
};
//Selector
export const getBasketTotal = (basket) => basket.reduce((amount, item) => amount + item.price, 0)

// export const getBasketTotal = (basket) => {
//     return basket.reduce((amount, item) => { 
//         return amount + item.price
//     },0)
// }


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET': {
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        }
        case 'EMPTY_BASKET':{
            return{
                ...state,
                basket:[]
            }
        }
        case 'REMOVE_FROM_BASKET': {
            const index = state.basket.findIndex((itemIndex) => {
                return itemIndex.id === action.payload;
            })
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            else {
                console.warn(`cannot find product as its not found in the basket`)
            }
            return {
                ...state,
                basket: newBasket
            }
        }
        case 'SET_USER': {
            return {
                ...state,
                user: action.user
            }
        }
        default: return state;
    }

};

export default reducer;

