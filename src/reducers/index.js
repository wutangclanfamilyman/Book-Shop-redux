const initialState = {
    books: [],
    loading: true,
    error: false
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
        default:
            return {
                ...state
            }
    }
}

export default reducer;