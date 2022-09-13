import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import EventLayout from "../src/components/EventLayout";
import Input from "../src/components/input";
import Button from "../src/components/button";
import { useForm } from "react-hook-form";
import useMutation from "../libs/client/useMutation";
import { BookConsumer } from "../src/components/bibleProvider";

export default function Search() {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();
  const [lastId, setLastId] = useState("");
  const [sendData, { data, loading }] = useMutation(
    `/api/search?lastId=${lastId}`
  );

  const onValid = (form) => {
    if (loading) return;
    if (form.keyword.length > 1) {
      sendData(form);
    } else {
      alert("한글자 이상 검색 가능합니다.");
      return;
    }
  };

  useEffect(() => {
    if (data && data.ok && data.search.length > 19) {
      setLastId(data.search[19].id);
      console.log(lastId);
    }
  }, [data]);

  return (
    <EventLayout canGoBack title="성경검색">
      <div className="pt-16 px-5">
        <form onSubmit={handleSubmit(onValid)} id="hook-form">
          <div>
            <Input
              name="keyword"
              placeholder="검색어를 입력하세요."
              required
              register={register("keyword", { required: true })}
            />
          </div>
          <div className="pt-2">
            <Button text={loading ? "Loading..." : "검색"} />
          </div>
        </form>

        <div className="pt-10">
          <strong>검색 결과</strong>
        </div>

        {data?.search && (
          <>
            <BookConsumer>
              {({ book_name }) => (
                <ul className="pt-4">
                  {data?.search.map((sdata) => (
                    <Link
                      key={sdata.id}
                      href={`/chapter/${sdata.book}/${sdata.chapter}`}
                    >
                      <a>
                        <li className="py-2 flex items-center space-x-3 whitespace-pre-wrap border-b-[2px] border-dotted">
                          <div>
                            <span className="font-bold">
                              [{book_name[sdata.book]} {sdata.chapter}:
                              {sdata.verse}]
                            </span>{" "}
                            {sdata.content}
                          </div>
                        </li>
                      </a>
                    </Link>
                  ))}
                </ul>
              )}
            </BookConsumer>
            {data.search.length > 19 && (
              <Button type="submit" form="hook-form" text="다음" />
            )}
          </>
        )}
      </div>
    </EventLayout>
  );
}
