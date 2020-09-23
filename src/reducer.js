export const initialState = {
    basket: [{
        id: "123424",
        title: "The Lean startup",
        price: 11.96,
        rating: 5,
        image: "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg",
    }],
    user: null,
}

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0)

function reducer(state, action) {
    console.log(action);
    console.log(state);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
            break;
        case 'ADD_TO_BASKET':
            // logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
            break;
        case 'REMOVE_FROM_BASKET':
            // logic for removing item from basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex(basketItem => basketItem.id === action.id);
            if (index > -1) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`product not found: ${action.id}`)
            }
            return {
                ...state,
                basket: newBasket
            };

            break;
        default:
            return state;
    }
}
export default reducer;
/**
 *
 */