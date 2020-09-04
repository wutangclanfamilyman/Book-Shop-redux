const booksLoaded = (newBooks) => {
    return {
        type: "BOOKS_LOADED",
        payload: newBooks
    }
}

const booksRequested = () => {
    return {
        type: 'BOOKS_REQUSTED'
    }
};

const booksError = () => {
    return {
        type: 'BOOKS_ERROR'
    }
};

const addBookToCart = (id) => {
    return {
        type: 'ADD_BOOK_TO_CART',
        payload: id
    }
}

const deleteBookFromCart = (id) => {
    return {
        type: 'DELETE_BOOK_FROM_CART',
        payload: id
    }
}

export {
    booksError,
    booksLoaded,
    booksRequested,
    addBookToCart,
    deleteBookFromCart
}