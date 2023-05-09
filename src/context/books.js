import { createContext, useState } from "react";
import axios from "axios";
const BooksContext = createContext();
const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const valueToShare = {
    books,
    createBook: async (title) => {
      const res = await axios.post(`http://localhost:3001/books/`, {
        title,
      });
      const updateBooks = [...books, res.data];
      setBooks(updateBooks);
    },
    updateBookById: async (id, newTitle) => {
      await axios.put(`http://localhost:3001/books/${id}`, {
        title: newTitle,
      });
      const updatedBook = { id, title: newTitle };
      const updatedBooks = books.map((book) =>
        book.id === id ? updatedBook : book
      );
      setBooks(updatedBooks);
    },
    deleteBook: async (id) => {
      await axios.delete(`http://localhost:3001/books/${id}`);
      const updateBooks = books.filter((book) => {
        return book.id !== id;
      });
      setBooks(updateBooks);
    },
    fectBooks: async () => {
      const response = await axios.get("http://localhost:3001/books");
      setBooks(response.data);
    },
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
};

export { Provider };
export default BooksContext;
