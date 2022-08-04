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
        <h2>셋째 날 수련회 새벽 광고</h2>
        <h2>1. 새벽성회 이후 07:00부터 30분간 셔틀운행이 있습니다.</h2>
        <h2>2. 어제와 같이 조식배달은 숙소에 있는 일반성도에게만 해당하고, 봉사자와 교역자 조식은 07:00부터 리더센터 2층에서 받으실 수 있습니다.</h2>
        <h2>3. 오전 10:00부터 모든 성락인이 함께 듣는, "전교인 특강"이 시작됩니다. 우리 교회 목회방향을 이해하고 동참하기 위해서, 모든 성락인들의 참여를 바랍니다.</h2>
        <h2>4. 오늘 수영장은 물 정화작업 등의 이유로, 12:00에 개장합니다. 착오가 없으시길 바랍니다.</h2>
        {/* <p>1/5 전체보기</p> */}
      </div>
    </>
  );
};

export default BannerAndNotice;
