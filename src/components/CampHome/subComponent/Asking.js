import classNames from "classnames/bind";
import styles from "./Asking.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AskingItem from "./AskingItem";
import Link from "next/link";
import useSWR from "swr";
import Loading from "../../../components/Loading";

const cn = classNames.bind(styles);

const Asking = () => {
  const { data } = useSWR(`/api/posts?ckind=notice`);
  return (
    <section className={cn("Asking")}>
      <div>
        <h3>문의하기</h3>
        <Link href={`/community`}>
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
          slidesPerView={2.4}
          resistanceRatio={0}
          pagination={false}
        >
          {data?.posts?.map((post) => (
            <SwiperSlide key={post.id}>
              <Link key={post.id} href={`/community/${post.id}`}>
                <a>
                  <AskingItem
                    author={post?.nickName ? post?.nickName : "성락인"}
                    preview={post.question}
                    category={post?.category}
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
