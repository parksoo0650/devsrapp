import SectionContainer from "../SectionContainer/SectionContainer";
import classNames from "classnames/bind";
import styles from "./CampHome.module.scss";
import BannerAndNotice from "./subComponent/BannerAndNotice";
import SungrakInsta from "./subComponent/SungrakInsta";
import CampNavbar from "../CampNavbar/CampNavbar";
import CampToggle from "../CampToggle/CampToggle";
import { useEffect, useState } from "react";

const cn = classNames.bind(styles);

const ModalStyle = {
  content: {
    position: "absolute",
    left: 0,
    right: 0,
    top: "22vh",
    height: "700px",
    zIndex: 9999,
    padding: 0,
    borderRadius: "14px",
  },
};

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
