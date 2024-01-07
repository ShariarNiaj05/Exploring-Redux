import { createSlice } from "@reduxjs/toolkit"

const initialBooks = {
    books: [
        { id: 1, title: 'Book Title 1', author: 'Author 1' },
        { id: 2, title: 'Book Title 2', author: 'Author 2' },
        { id: 3, title: 'Book Title 3', author: 'Author 3' },
        { id: 4, title: 'Book Title 4', author: 'Author 4' },
    ]
}


export const bookSlice = createSlice({
    name: 'books',
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,

        addBook: (state, action) => {
            state.books.push(action.payload)
        },

        updateBook: (state, action) => {
            const { id, title, author } = action.payload;
            const isBookExist = state.books.find(book => book.id === id)
            if (isBookExist) {
                isBookExist.title = title,
                    isBookExist.author = author
            }
        },

        deleteBook: (state, action) => {
            const id = action.payload
            state.books = state.books.filter(book => book.id !== id)
        }


    }
})

export const { showBooks, addBook,updateBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;