const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUESTED',
  };
};

const booksLoaded = newBooks => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks,
  };
};

const bookError = error => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error,
  };
};

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService
    .getBooks()
    .then(data => {
      dispatch(booksLoaded(data));
    })
    .catch(error => {
      dispatch(bookError(error));
    });
};

export { fetchBooks };
