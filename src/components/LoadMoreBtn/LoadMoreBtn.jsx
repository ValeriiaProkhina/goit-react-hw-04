import css from "./LoadMoreBtn.module.css";
export default function LoadMoreBtn({ handleClick }) {
  return (
    <div className={css.container}>
      <button className={css.btn} onClick={handleClick}>
        Load more
      </button>
    </div>
  );
}
