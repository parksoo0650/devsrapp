import classNames from "classnames/bind";
import styles from "./BannerAndNotice.module.scss";
import Link from "next/link";
import YouTube from "react-youtube";

const cn = classNames.bind(styles);

const BannerAndNotice = () => {
  const opts = {
    width: "320px",
    height: "200px",
    playerVars: {
      autoplay: 1,
      rel: 0,
      modestbranding: 1,
    },
  };
  return (
    <>
      <div className={cn("MainBanner")}>
        <span>교회와 함께</span>

        <h1>
          사랑과 겸손으로 <br />
          행복한 성락인
        </h1>
      </div>

      <div className="movie_wrap">
        <YouTube
          videoId="kxIuwP6ljcs"
          opts={opts}
          containerClassName="iframe_wrap"
        />
      </div>

      <div className={cn("Notice")}>
        <h2>☆ 수련회 마감 광고 ☆</h2>
        <h2>
          1. 큰 은혜 주신 하나님께 아직 감사를 못하신 성도님은, 돌아오는 주일에
          감사할 수 있도록 해주시길 바랍니다.
        </h2>
        <h2>
          2. 분실물을 습득하신 분은 세계센터 6층 606호 "진행본부"에 전달해
          주시길 바랍니다.
        </h2>
        <h2>3. 넉넉지 않은 환경 속에서도 기쁨으로 함께해 주셔서 감사합니다.</h2>

        {/* <h2>
          <Link href={`https://bit.ly/3vDHaUT`}>
            <a>수련회 설문 링크 바로가기</a>
          </Link>
        </h2> */}

        {/* <p>1/5 전체보기</p> */}
      </div>
    </>
  );
};

export default BannerAndNotice;
