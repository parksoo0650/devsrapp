import React, { useState } from "react";
import Sheet from 'react-modal-sheet';
import {
    FacebookShareButton,
    FacebookIcon,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
    isIOS,
    isAndroid
} from "react-device-detect";

export default function Share({ title, thum, vid, type }) {
    const [isOpen, setOpen] = useState(false);
    const shareKakao = () => {
        Kakao.Link.sendDefault({
            objectType: "feed",
            content: {
                title: "성락교회",
                description: title,
                imageUrl: "https://srapp.vercel.app"+thum,
                link: {
                    mobileWebUrl: "https://youtu.be/" + vid,
                    webUrl: "https://youtu.be/" + vid,
                    androidExecParams: "SRAPP",
                }
            }
            , buttons: [
                {
                    title: '바로가기',
                    link: {
                        mobileWebUrl: "https://youtu.be/" + vid,
                        webUrl: "https://youtu.be/" + vid,
                    },
                },
            ]
        });
    }

    return (
        <>
            <span className={ (type=="white") ? "btn_share_white" : "btn_share"} onClick={() => setOpen(true)}></span>
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
                                    <img src="../icons/icon_share_kakao2.png" alt="kakao" />
                                    <div className="tit">카카오톡</div>
                                </li>
                                <li>
                                    {(isIOS) ?
                                        (
                                            <a href={`sms:&body=https://youtu.be/${vid}`}>
                                                <img src="../icons/icon_share_sms2.png" alt="sms" />
                                                <div className="tit">문자</div>
                                            </a>
                                        ) : (
                                            <a href={`sms:?body=https://youtu.be/${vid}`}>
                                                <img src="../icons/icon_share_sms2.png" alt="sms" />
                                                <div className="tit">문자</div>
                                            </a>
                                        )
                                    }
                                </li>
                                <li onClick={() => alert("복사되었습니다")}>
                                    <CopyToClipboard text={`https://youtu.be/${vid}`}>
                                        <img src="../icons/icon_share_url2.png" alt="url" />
                                    </CopyToClipboard>
                                    <div className="tit">URL복사</div>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <FacebookShareButton url={`https://youtu.be/${vid}`}>
                                            <img src="../icons/icon_share_facebook2.png" alt="facebook" />
                                        </FacebookShareButton>
                                        <div className="tit">페이스북</div>
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