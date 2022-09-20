import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import EventLayout from "../src/components/EventLayout";
import Input from "../src/components/input";
import Button from "../src/components/button";
import { useForm } from "react-hook-form";
import useMutation from "../libs/client/useMutation";
import { BookConsumer } from "../src/components/bibleProvider";
import Loading from "../src/components/Loading";

export default function Search() {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();
  const [lastId, setLastId] = useState("");
  const [keyword, setKeyword] = useState("");
  const [sendData, { data, loading }] = useMutation(
    `/api/search?lastId=${lastId}`
  );

  const onValid = (form) => {
    if (loading) return;
    if (form.keyword.length > 1) {
      if (keyword != form.keyword) {
        setLastId("");
      }
      setKeyword(form.keyword);
      setTimeout(() => {
        sendData(form);
      }, 100);
    } else {
      alert("한글자 이상 검색 가능합니다.");
      return;
    }
  };

  useEffect(() => {
    if (data && data.ok && data.search.length > 19) {
      setLastId(data.search[19].id);
    }
  }, [data]);

  return (
    <EventLayout canGoBack title="성경검색">
      <div className="pt-16 px-5">
        <form onSubmit={handleSubmit(onValid)} id="hook-form">
          <div className="w-full flex items-center">
            {/* <Button text={loading ? "Loading..." : "검색"} /> */}
            <div className="flex-1 relative">
              <Input
                name="keyword"
                placeholder="검색어를 입력하세요."
                required
                register={register("keyword", { required: true })}
              />
              <button className=" absolute top-2 right-2 opacity-30">
                <img src="/icons/ico_search.svg" alt="검색" />
              </button>
            </div>
          </div>
        </form>

        {data.search.length==0 ? 
        <>
        <ul className="pt-4">
        <li className="my-4 flex justify-center items-center relative ">
        <div className="text-gray-500">검색에 대한 결과가 없습니다.</div>
        </li>
        </ul>
        </> : null}

        {data?.search && (
          <>
            {loading ? (
              <div className="loading_box">
                <Loading />
              </div>
            ) : (
              <BookConsumer>
                {({ book_name }) => (
                  <ul className="pt-4">
                    {data?.search.map((sdata) => (
                      <Link
                        key={sdata.id}
                        href={`/chapter/${sdata.book}/${sdata.chapter}`}
                      >
                        <a>
                          <li className="my-4 flex items-center relative ">
                            <div className=" w-0.5 bg-gray-600 absolute h-full ">
                              &nbsp;
                            </div>
                            <div className="pl-4 flex flex-col items-start justify-between">
                              <div className=" text-base">{sdata.content}</div>
                              <div className=" pt-2 text-xs font-bold text-gray-500 ">
                                {book_name[sdata.book]} {sdata.chapter}:
                                {sdata.verse}
                              </div>
                            </div>
                          </li>
                        </a>
                      </Link>
                    ))}
                  </ul>
                )}
              </BookConsumer>
            )}
            {data.search.length > 19 && (
              <Button type="submit" form="hook-form" text="다음" />
            )}
          </>
        )}
      </div>
    </EventLayout>
  );
}
