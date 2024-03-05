import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

export const ImageModal = ({ isOpen, onClose, content }) => {
  return (
    content.urls.regular && (
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <img
          src={content.urls.regular}
          alt={content.alt_description}
          className={css.img}
        />
        {content.description && (
          <p className={css.text}>{content.description}</p>
        )}
      </ReactModal>
    )
  );
};
