import classNames from "classnames/bind";
import styles from "./Asking.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AskingItem from "./AskingItem";
import Link from "next/link";
import useSWR from "swr";
import Loading from "../../../Loading";

const cn = classNames.bind(styles);

const Asking = () => {
  const { data } = useSWR(`/api/contents?kind=camp22`);
  return (
    <section className={cn("Asking")}>
      <div>
        <Link href={`/campvideo`}>
          <a>
            <h3>2022 여름수련회</h3>
          </a>
        </Link>
        <Link href={`/campvideo`}>
          <a>
            <span>전체보기</span>
          </a>
        </Link>
      </div>
      {!data ? (
        <Loading />
      ) : (
        <Swiper
          className={cn("Swiper")}
          spaceBetween={10}
          slidesPerView={2.1}
          resistanceRatio={0}
          pagination={false}
        >
          {data?.contents?.map((content) => (
            <SwiperSlide key={content.id}>
              <Link key={content.id} href={`/campvideo/${content.id}`}>
                <a>
                  <AskingItem
                    author={content?.name}
                    image={content?.image}
                  />
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default Asking;
