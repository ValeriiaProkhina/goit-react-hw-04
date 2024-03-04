import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import fetchImages from "../../images-api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { ImageModal } from "../ImageModal/ImageModal";
import css from "./App.module.css";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [modal, setModal] = useState(false);
  const [contentModal, setContentModal] = useState({});

  useEffect(() => {
    if (!query) return;

    setIsLoading(true);
    async function getImages() {
      try {
        const { results, total } = await fetchImages(query, page);
        setImages((prevImages) => [...prevImages, ...results]);
        setTotalResults(total);
        if (total === 0) {
          toast.error("Images not found for your request! ");
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setError(false);
    setTotalResults(0);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (content) => {
    setModal(true);
    setContentModal(content);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && (
        <ImageGallery items={images} openModal={openModal} />
      )}
      {error && <ErrorMessage />}
      {images.length > 0 && images.length < totalResults && !isLoading && (
        <LoadMoreBtn handleClick={handleLoadMore} />
      )}
      {isLoading && <Loader />}
      <Toaster position="top right" />
      {modal && (
        <ImageModal
          isOpen={modal}
          onClose={closeModal}
          content={contentModal}
        />
      )}
    </div>
  );
}
