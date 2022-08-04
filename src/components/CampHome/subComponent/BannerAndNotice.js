import classNames from "classnames/bind";
import styles from "./BannerAndNotice.module.scss";

const cn = classNames.bind(styles);

const BannerAndNotice = () => {
  return (
    <>
      <div className={cn("MainBanner")}>
        <span>교회와 함께</span>

        <h1>
          사랑과 겸손으로 <br />
          행복한 성락인
        </h1>
      </div>

      <div className={cn("Notice")}>
        <h2>둘째 날 수련회 밤 광고</h2>
        <h2>1. 저녁성회 셔틀은 예정 시간보다 빨리 운행하지 않습니다. "축도" 마친 뒤, 10분 후부터 운행합니다.</h2>
        <h2>2. 셔틀운행 시간은 10:30부터 11:20까지입니다.</h2>
        <h2>3. 내일 05:50부터 세계센터 대성전에서 "새벽성회"가 있습니다.</h2>
        <h2>4. "새벽성회" 셔틀 운행 시간은 05:00부터입니다.</h2>
        {/* <p>1/5 전체보기</p> */}
      </div>
    </>
  );
};

export default BannerAndNotice;
