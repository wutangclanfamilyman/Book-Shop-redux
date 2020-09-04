const initialState = {
    books: [],
    loading: true,
    error: false,
    cart: [],
    totalPrice: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "BOOKS_LOADED":
            return {
                ...state,
                books: action.payload,
                loading: false,
            };
        case "BOOKS_REQUSTED":
            return {
                ...state,
                loading: true
            };
        case "BOOKS_ERROR":
            return {
                ...state,
                loading: false,
                error: true
            };
        case "ADD_BOOK_TO_CART":
            const id = action.payload;
            const itemInx = state.cart.findIndex(item => item.id === id);
            console.log(itemInx)
            // If item wad added to cart
            if(itemInx >= 0) {
                const itemInState = state.cart.find(item => item.id === id);
                const newItem = {
                    ...itemInState,
                    qtty: ++itemInState.qtty
                }
                return {
                    ...state,
                    cart: [
                        ...state.cart.slice(0, itemInx),
                        newItem,
                        ...state.cart.slice(itemInx + 1)
                    ],
                    totalPrice: state.totalPrice + newItem.price
                }
            }
            const item = state.books.find(item => item.id === id);
            const newItem = {
                id: item.id,
                title: item.title,
                description: item.description,
                pages: item.pages,
                price: item.price,
                author: item.author,
                image: item.image,
                qtty: 1
            }
            return {
                ...state,
                cart: [
                    ...state.cart,
                    newItem
                ],
                totalPrice: state.totalPrice + newItem.price
            }
        case "DELETE_BOOK_FROM_CART":
            const idx = action.payload;
            const itemIdx = state.cart.findIndex(item => item.id === idx);
            const price = state.cart[itemIdx]['price'] * state.cart[itemIdx]['qtty'];
            return {
                ...state,
                cart: [
                    ...state.cart.slice(0, itemIdx),
                    ...state.cart.slice(itemIdx + 1)
                ],
                totalPrice: state.totalPrice - price
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;