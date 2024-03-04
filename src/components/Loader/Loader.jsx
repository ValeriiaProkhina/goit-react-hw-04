import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.container}>
      <InfinitySpin
        visible={true}
        width="160"
        height="100"
        color="#2c54d5"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
}
