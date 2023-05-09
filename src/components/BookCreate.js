import { useState } from "react";
import "../css/bookcreate.css";
import useBooksContext from "../hooks/hook-Books-Context";
const BookCreate = () => {
  const [title, setTitle] = useState("");
  const { createBook } = useBooksContext();
  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange}></input>
        <button className="button">Create</button>
      </form>
    </div>
  );
};

export default BookCreate;
