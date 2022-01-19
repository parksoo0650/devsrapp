import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

export default function Sermonmain() {

    const router = useRouter();

    const [offering, setOffering] = useState("국내");

    return (
        <div className="sub_container offering_wrap">
            <div className="top_area">
                <span className="btn_prev"></span>
                <div className="top_title">헌금안내</div>
            </div>

            <div className="section">
                <ul className="tab_area">
                    <li onClick={() => { setOffering("국내"); }} className={(offering == "국내") ? "on" : ""}>국내</li>
                    <li onClick={() => { setOffering("해외"); }} className={(offering == "해외") ? "on" : ""}>해외</li>
                </ul>
                <div className="tab_con">
                    {/* 국내 */}
                    <div className={(offering == "국내") ? "domestic_wrap" : "domestic_wrap hide"}>
                        <ul className="bank_list">
                            <li>
                                <span className="bank">우리은행</span>
                                <div>
                                    <span className="account">054-085786-01-023</span> 
                                    <span className="name">성락침례교회</span>
                                    <span className="btn_copy"></span>
                                </div>
                            </li>
                            <li>
                                <span className="bank">KB국민은행</span>
                                <div>
                                    <span className="account">765201-04-038219</span> 
                                    <span className="name">성락침례교회</span>
                                    <span className="btn_copy"></span>
                                </div>
                            </li>
                            <li>
                                <span className="bank">NH농협</span>
                                <div>
                                    <span className="account">054-01-092341</span> 
                                    <span className="name">성락침례교회</span>
                                    <span className="btn_copy"></span>
                                </div>
                            </li>
                            <li>
                                <span className="bank">신한은행</span>
                                <div>
                                    <span className="account">304-05-040250</span> 
                                    <span className="name">성락침례교회 김성현</span>
                                    <span className="btn_copy"></span>
                                </div>
                            </li>
                            <li>
                                <span className="bank">스탠다드차타드 (SC)</span>
                                <div>
                                    <span className="account">350-20-267614</span> 
                                    <span className="name">성락침례교회</span>
                                    <span className="btn_copy"></span>
                                </div>
                            </li>
                            <li>
                                <span className="bank">우체국</span>
                                <div>
                                    <span className="account">010108-01-011171</span> 
                                    <span className="name">성락침례교회</span>
                                    <span className="btn_copy"></span>
                                </div>
                            </li>
                            <li>
                                <span className="bank">IBK기업은행</span>
                                <div>
                                    <span className="account">077-117515-01-015</span> 
                                    <span className="name">성락침례교회</span>
                                    <span className="btn_copy"></span>
                                </div>
                            </li>
                            <li>
                                <span className="bank">씨티은행</span>
                                <div>
                                    <span className="account">130-53216-251</span> 
                                    <span className="name">성락침례교회</span>
                                    <span className="btn_copy"></span>
                                </div>
                            </li>
                            <li>
                                <span className="bank">KEB하나은행</span>
                                <div>
                                    <span className="account">116-075931-00104</span> 
                                    <span className="name">성락침례교회</span>
                                    <span className="btn_copy"></span>
                                </div>
                            </li>
                            <li>
                                <span className="bank">수협중앙회</span>
                                <div>
                                    <span className="account">041-01-040932</span> 
                                    <span className="name">성락침례교회</span>
                                    <span className="btn_copy"></span>
                                </div>
                            </li>
                        </ul>
                        <div className="bank_guide">
                            온라인 송금시 성도님의 정보나 헌금의 종류가 정확하지 않을 경우 등록처리가 지연될 수 있습니다. 아래 내용을 참고하시어 처리하시면 원활한 등록을 하실 수 있습니다. (추후 내방하시거나 유선상 확인을 통해서도 등록 가능합니다.)
                        </div>
                        <ul className="offering_guide">
                            <li>* 온라인 송금(텔레뱅킹, 인터넷 뱅킹, 무통장 입금) 후 이체확인증 또는 헌금입금증을 해당 헌금 봉투에 넣어 헌금 시간에 헌금해주세요. 이체확인증 출력이 어려우신 경우에는 교회내 헌금함 주변에 비치된 헌금입금증에 적어 주시거나 일반 종이에 적으셔도 됩니다.</li>
                            <li>* 입금시 적요란에 본인 이름 및 배우자의 이름, 소속 예배당, 그 외 생년월일이나 성도 코드를 기입해주시면 더 정확한 처리가 가능합니다.</li>
                            <li>* 본인 확인이 제대로 이루어지지 않는 경우, 헌금 처리가 누락될 수 있습니다. 하지만 기록이 남아있으므로 언제든지 확인 및 등록이 가능합니다.</li>
                        </ul>
                    </div>
                    
                    {/* 해외 */}
                    <div className={(offering == "해외") ? "overseas_wrap" : "overseas_wrap hide"}>
                        <ul className="bank_list">
                            <li>
                                <span className="bank">우리은행</span>
                                <div>
                                    <span className="account">054-085786-01-023</span> 
                                    <span className="btn_copy"></span>
                                </div>
                                <div className="info">
                                    <span className="name">은행/지점명 : WOORI BANK SHIN-GILSO BR</span><br /> 
                                    <span className="name">SWIFT코드 : HVBKKRSEXXX</span>
                                </div>
                            </li>
                            <li>
                                <span className="bank">KB국민은행</span>
                                <div>
                                    <span className="account">765201-04-038219</span> 
                                    <span className="btn_copy"></span>
                                </div>
                                <div className="info">
                                    <span className="name">SWIFT코드 : CZBKRSE</span>
                                </div>
                            </li>
                        </ul>
                        <div className="bank_guide">
                            온라인 송금시 성도님의 정보나 헌금의 종류가 정확하지 않을 경우 등록처리가 지연될 수 있습니다. 아래 내용을 참고하시어 처리하시면 원활한 등록을 하실 수 있습니다. (추후 내방하시거나 유선상 확인을 통해서도 등록 가능합니다.)
                        </div>
                        <ul className="offering_guide">
                            <li>* 온라인 송금(텔레뱅킹, 인터넷 뱅킹, 무통장 입금) 후 이체확인증 또는 헌금입금증을 해당 헌금 봉투에 넣어 헌금 시간에 헌금해주세요. 이체확인증 출력이 어려우신 경우에는 교회내 헌금함 주변에 비치된 헌금입금증에 적어 주시거나 일반 종이에 적으셔도 됩니다.</li>
                            <li>* 입금시 적요란에 본인 이름 및 배우자의 이름, 소속 예배당, 그 외 생년월일이나 성도 코드를 기입해주시면 더 정확한 처리가 가능합니다.</li>
                            <li>* 본인 확인이 제대로 이루어지지 않는 경우, 헌금 처리가 누락될 수 있습니다. 하지만 기록이 남아있으므로 언제든지 확인 및 등록이 가능합니다.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}