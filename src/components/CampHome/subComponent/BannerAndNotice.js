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
        <h2>2022 여름수련회 공지사항</h2>
        <h2>
          1. 오늘(8/3) 저녁성회 기도회가 끝난 뒤, 10:30부터 11:20까지 셔틀운행이
          있습니다.
        </h2>
        <h2>
          2. 내일(8/4) 05:50부터 세계센터 대성전에서 "새벽성회"가 있습니다. 셔틀
          운행은 05:00부터 운행합니다.
        </h2>
        <h2>
          3. 내일(8/4) 조식 배달은 숙소에 있는 평신도만을 대상으로 합니다.
        </h2>
        <h2>
          4. 봉사자와 교역자의 조식은 리더센터 2층에서 수령하여 드시면 됩니다.{" "}
        </h2>
        <h2>
          5. 둘째 날(8/4) 프로그램이 다양하고 은혜가 충만하게 준비되고 있으니,
          내일 전 시간을 함께해주시기 바랍니다.
        </h2>

        {/* 수정 바랍니다. */}
        {/* <p>1/5 전체보기</p> */}
      </div>
    </>
  );
};

export default BannerAndNotice;
