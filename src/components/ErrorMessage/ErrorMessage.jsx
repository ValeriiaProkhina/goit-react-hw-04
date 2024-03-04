import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={css.text}>Error! Something is not right! Refresh the page!</p>
  );
}
