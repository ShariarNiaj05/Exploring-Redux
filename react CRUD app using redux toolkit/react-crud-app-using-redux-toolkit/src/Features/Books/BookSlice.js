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
        }
    }
})

export const { showBooks, addBook } = bookSlice.actions;
export default bookSlice.reducer;