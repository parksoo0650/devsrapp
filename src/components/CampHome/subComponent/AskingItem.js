import classNames from "classnames/bind";
import styles from "./AskingItem.module.scss";

const cn = classNames.bind(styles);

const AskingItem = ({ author, preview, image }) => {
  return (
    <article className={cn("AskingItem")}>
      <div className={cn("tag")}>궁금해요</div>

      <div className={cn("flexBox")}>
        <div className={cn("textArea")}>
          <div className={cn("preview")}>{preview}</div>
          <div className={cn("author")}>{author}</div>
        </div>

        {image && (
          <div className={cn("image")}>
            <img
              src={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${image}/shorts`}
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default AskingItem;
