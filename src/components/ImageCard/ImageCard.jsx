import css from "./ImageCard.module.css";
import { FcLike } from "react-icons/fc";

export default function ImageCard({
  item: { urls, alt_description, user, likes },
}) {
  return (
    <div className={css.container}>
      <img src={urls.small} alt={alt_description} width="330" height="210" />
      <div className={css.descriptionBox}>
        <p className={css.text}>
          Photo by: <span className={css.span}>{user.name}</span>
        </p>
        <p>
          <FcLike className={css.icon} size="12" />
          <span className={css.span}> {likes}</span>
        </p>
      </div>
    </div>
  );
}
