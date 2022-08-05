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
        <h2>셋째 날 수련회 점심 광고</h2>
        <h2>1. 점심 식사는 이 시간 이후, 12:00부터 가능합니다.</h2>
        <h2>2. 오후 1:00에 침례실에서 침례가 있습니다. 침례 대상자들은 점심을 서둘러 드시고 침례실로 이동해 주시기 바랍니다.</h2>
        <h2>3. 수련회는 다수가 함께 하는 현장이니, 분실물이 발생하지 않도록 소지품 관리를 잘 해 주시길 바랍니다.</h2>
        <h2>4. 이어 오후 2:30에는 세계센터 대성전에서 “신유집회”가 있습니다. 집회를 통해, 영·혼·육 회복의 시간을 가지시길 바랍니다.</h2>
        <h2>5. 오늘 수련회 마지막 날로써, 플리마켓을 적극적으로 이용해 주시기 바랍니다. 퇴장하실 때, 대성전 “1번 게이트”로 나가시면 플리마켓 부스로 바로 이동하실 수 있습니다.</h2>
        <h2>6. 오늘 저녁성회는 말씀 이후 “전 교인 특별 축복”의 시간을 갖습니다. 감독님을 비롯하여 부목사님이 현장에 오신 모든 성도에게 축복 안수를 하실 것이니, 더 사모하는 마음으로 수련회 마지막 저녁성회에 함께하여 주시기 바랍니다.</h2>
        {/* <p>1/5 전체보기</p> */}
      </div>
    </>
  );
};

export default BannerAndNotice;
