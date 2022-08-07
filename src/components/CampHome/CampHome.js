import SectionContainer from "../SectionContainer/SectionContainer";
import classNames from "classnames/bind";
import styles from "./CampHome.module.scss";
import BannerAndNotice from "./subComponent/BannerAndNotice";
import SungrakInsta from "./subComponent/SungrakInsta";
import CampToggle from "../CampToggle/CampToggle";

const cn = classNames.bind(styles);

const CampHome = () => {

  return (
    <>
      <div className={cn("CampHome")}>
        {/* 배너 및 공지사항 */}
        <SectionContainer>
          <BannerAndNotice />
        </SectionContainer>

        {/* 성락 인스타 */}
        <SectionContainer>
          <SungrakInsta />
        </SectionContainer>

        <CampToggle />
      </div>
      {/* <CampNavbar /> */}
    </>
  );
};

export default CampHome;
