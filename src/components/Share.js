import React, { useState, useEffect } from "react";
import Sheet from 'react-modal-sheet';

export default function Share() {
    const [isOpen, setOpen] = useState(false);
    useEffect(() => {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
    }, [])

    function sendLink() {
        Kakao.Link.sendDefault({
            objectType: 'text',
            text:
                '기본 템플릿으로 제공되는 텍스트 템플릿은 텍스트를 최대 200자까지 표시할 수 있습니다. 텍스트 템플릿은 텍스트 영역과 하나의 기본 버튼을 가집니다. 임의의 버튼을 설정할 수도 있습니다. 여러 장의 이미지, 프로필 정보 등 보다 확장된 형태의 카카오링크는 다른 템플릿을 이용해 보낼 수 있습니다.',
            link: {
                mobileWebUrl: 'https://developers.kakao.com',
                webUrl: 'https://developers.kakao.com',
            },
        })
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
                                <li onClick={() => sendLink()}>
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