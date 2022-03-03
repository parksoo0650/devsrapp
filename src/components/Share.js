import React, { useState } from "react";
import Sheet from 'react-modal-sheet';

export default function Share() {
    const [isOpen, setOpen] = useState(false);
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
                                <li>
                                    <a href="#" target="_blank">
                                        <img src="../icons/ico_youtube.svg" alt="youtube" />
                                        <div className="tit">카카오톡</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <img src="../icons/ico_blog.svg" alt="blog" />
                                        <div className="tit">SNS</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <img src="../icons/ico_instar.svg" alt="instar" />
                                        <div className="tit">URL</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <img src="../icons/ico_blog.svg" alt="blog" />
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