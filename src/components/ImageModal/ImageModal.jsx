import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

export const ImageModal = ({ isOpen, onClose, content }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img src={content.urls.regular} className={css.img} />
      {content.description && <p className={css.text}>{content.description}</p>}
    </ReactModal>
  );
};
