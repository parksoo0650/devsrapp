import classNames from "classnames/bind";
import styles from "./SungrakInsta.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SungrakInstaItem from "./SungrakInstaItem";
import useSWR from "swr";
import Link from "next/link";
import Loading from "../../../Loading";

const cn = classNames.bind(styles);

const SungrakInsta = () => {
  const { data } = useSWR(`/api/posts?ckind=insta`);
  return (
    <section className={cn("SungrakInsta")}>
      <div>
        <Link href={`/srinsta`}>
          <a>
            <h3>성락in스타</h3>
          </a>
        </Link>
        <Link href={`/srinsta`}>
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
          {data?.posts?.map((post) => (
            <SwiperSlide key={post.id}>
              <Link key={post.id} href={`/srinsta/${post.id}`}>
                <a>
                  <SungrakInstaItem
                    author={post?.nickName ? post?.nickName : "성락인"}
                    preview={post.question}
                    image={post?.image}
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

export default SungrakInsta;
