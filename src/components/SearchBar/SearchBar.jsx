import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSubmit = (evt) => {
    if (searchQuery.trim() === "") {
      toast.error("Please enter your query!");
    }
    evt.preventDefault();
    onSubmit(searchQuery.trim());
    setSearchQuery("");
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          name="search"
          value={searchQuery}
          onChange={(evt) => setSearchQuery(evt.target.value)}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          <FaMagnifyingGlass size="14" />
        </button>
      </form>
      <Toaster position="top right" />
    </header>
  );
}
