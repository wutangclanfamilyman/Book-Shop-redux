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

export {
    booksError,
    booksLoaded,
    booksRequested
}