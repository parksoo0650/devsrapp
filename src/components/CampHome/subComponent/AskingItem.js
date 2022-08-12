import classNames from "classnames/bind";
import styles from "./AskingItem.module.scss";

const cn = classNames.bind(styles);

const AskingItem = ({ author, image  }) => {
  return (
    <article className={cn("AskingItem")}>
      <div className={cn("imgbox")}>
        <img
          className={cn("image")}
          src={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${image}/shorts`}
        />
      </div>
      <div className={cn("textbox")}>
        <div className={cn("author")}>{author}</div>
      </div>
    </article>
  );
};

export default AskingItem;
