import React from 'react';
import BooksServiceContext from '../books-service-context';

const WithBooksService = () => (Wrapped) => {
    return (props) => {
        return (
            <BooksServiceContext.Consumer>
                {
                    (booksService) => {
                        return <Wrapped {...props} BooksService={booksService}  />
                    }
                }
            </BooksServiceContext.Consumer>
        )
    }
}

export default WithBooksService;