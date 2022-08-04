import classNames from "classnames/bind";
import styles from "./AskingItem.module.scss";

const cn = classNames.bind(styles);

const AskingItem = ({ author, preview, category }) => {
  const kind = {
    questions: "수련회 질문",
    lost: "분실/실종",
    please: "도와주세요",
  };

  return (
    <article className={cn("AskingItem")}>
      <div className={cn("tag")}>{kind[category]}</div>

      <div className={cn("flexBox")}>
        <div className={cn("textArea")}>
          <div className={cn("preview")}>{preview}</div>
          <div className={cn("author")}>{author}</div>
        </div>

        {/* <div className={cn("image")}>
          {image && (
            <img
              src={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${image}/shorts`}
            />
          )}
        </div> */}
      </div>
    </article>
  );
};

export default AskingItem;
