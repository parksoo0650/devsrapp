import React, { useState, useEffect } from "react";
import Sheet from 'react-modal-sheet';

export default function Share() {
    const [isOpen, setOpen] = useState(false);
    useEffect(() => {
        Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
    }, [])

    const shareKakao = () => {
        Kakao.Link.sendDefault({
            objectType: "feed",
            content: {
                title: "test",
                description: "내용!",
                imageUrl: "test",
                link: {
                    mobileWebUrl: "모바일 url!",
                    androidExecParams: "test",
                },
            },
            buttons: [
                {
                    title: "웹으로 이동",
                    link: {
                        mobileWebUrl: "공유할 url!",
                    },
                },
            ],
        });
    }

    return (
        <>
            <span className="btn_share" onClick={() => setOpen(true)}></span>
            <Sheet
                isOpen={isOpen}
                onClose={() => setOpen(false)}
                snapPoints={[0.4]}
            >
                <Sheet.Container>
                    <Sheet.Header />
                    <Sheet.Content>
                        <div className="pop_toast">
                            <button className="btn_close" onClick={() => setOpen(false)}></button>
                            <div className="title">공유하기</div>
                            <ul className="sns_list">
                                <li onClick={shareKakao}>
                                    <img src="../icons/icon_share_kakao.png" alt="kakao" />
                                    <div className="tit">카카오톡</div>
                                </li>
                                <li>
                                    <a href="sms:&body=문자발송테스트">
                                        <img src="../icons/icon_share_sms.png" alt="sms" />
                                        <div className="tit">문자</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <img src="../icons/icon_share_url.png" alt="url" />
                                        <div className="tit">URL복사</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <img src="../icons/icon_share_blog.png" alt="blog" />
                                        <div className="tit">블로그</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
        </>
    );
}