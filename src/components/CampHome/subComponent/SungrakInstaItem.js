import classNames from "classnames/bind";
import styles from "./SungrakInstaItem.module.scss";

const cn = classNames.bind(styles);

const SungrakInstaItem = ({ author, preview, image }) => {
  return (
    <article className={cn("SungrakInstaItem")}>
      <div className={cn("imgbox")}>
        <img
          className={cn("image")}
          src={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${image}/shorts`}
        />
      </div>
      <div className={cn("textbox")}>
        <div className={cn("author")}>{author}</div>
        <div className={cn("preview")}>{preview}</div>
      </div>
    </article>
  );
};

export default SungrakInstaItem;
