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
        <h2>셋째 날 수련회 저녁 광고</h2>
        <h2>1. 오늘 저녁성회에는 "수련회 특별 축복의 시간"이 있습니다. 특히 영·유아를 비롯하여, 어린이들은 감독님께서 직접 축복을 하실 예정이니, 자녀와 함께 저녁성회에 사모함으로 오시기 바랍니다.</h2>
        <h2>2. 성도분들이 축사를 받으실 때, 분실물이 발생하지 않도록 소지품 관리를 잘 해주시기 바립니다.</h2>
        <h2>3. 플리마켓은 오늘 저녁 7:00까지만 운영합니다. 신유집회 이후 세계센터 로비로 가셔서 구경하시고, 필요한 물품이 있다면 구매하시기 바랍니다.</h2>
        <h2>4. 봉사자/교역자의 저녁식사는 오후 5:30부터 일반 성도님은 6:00부터 가능합니다.</h2>
        <h2>5. 오늘 침례받으신 성도님은 세계센터 침례실에서 침례증서를 수령해가시길 바랍니다.</h2>

        {/* <p>1/5 전체보기</p> */}
      </div>
    </>
  );
};

export default BannerAndNotice;
