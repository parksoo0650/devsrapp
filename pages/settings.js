import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';

export default function Settings() {
    const router = useRouter();
    return (
        <div class="container">
            {/* <div onClick={() => { router.push("/csmain"); }}>앱설정</div> */}
            <div class="setting_wrap">
                <ul class="tab_area">
                    <li>알림</li>
                    <li class="on">알림설정</li>
                </ul>

                {/* 알림 */}
                <div class="tab_con" style={{display: "none"}}>
                    <ul class="alarm_list">
                        {/* 새로운 알림은 li에 new클래스 추가 */}
                        <li class="new">
                            <i class="ico"></i>
                            <strong>안내</strong> 예배 시작 10분 전 알려드립니다.
                            <div class="date">2021. 11. 05</div>
                        </li>
                        <li class="new">
                            <i class="ico"></i>
                            <strong>안내</strong> 예배 시작 10분 전 알려드립니다.
                            <div class="date">2021. 11. 05</div>
                        </li>
                        <li>
                            <i class="ico"></i>
                            <strong>안내</strong> 예배 시작 10분 전 알려드립니다.
                            <div class="date">2021. 11. 05</div>
                        </li>
                    </ul>
                </div>

                {/* 알림설정 */}
                <div class="tab_con">
                    <div class="section">
                        <div class="title">
                            예배
                            {/* switch는 on 클래스로 제어 */}
                            <div class="switch on"><span></span></div>
                        </div>
                        <div class="sub_txt">예배 시작 10분 전 알려드립니다.</div>
                        {/* 전체가 선택될때 나머지 메뉴는 disabled 클래스 추가 */}
                        <ul class="option_list">
                            <li class="on">전체</li>
                            <li class="disabled">주일 1부 예배</li>
                            <li class="disabled">주일 3부 예배</li>
                            <li class="disabled">주일 연합 예배</li>
                            <li class="disabled">수요 오전 예배</li>
                            <li class="disabled">수요 오후 예배</li>
                            <li class="disabled">금요 환언 특강</li>
                        </ul>
                    </div>
                    <div class="section">
                        <div class="title">
                            온시리즈
                            <div class="switch on"><span></span></div>
                        </div>
                        <div class="sub_txt">업데이트 시 알려드립니다.</div>
                        <ul class="option_list">
                            <li>전체</li>
                            <li class="on">온성경</li>
                            <li>온특새</li>
                            <li class="on">온3분</li>
                            <li>온목장</li>
                        </ul>
                    </div>
                    <div class="section">
                        <div class="title">
                            찬양
                            <div class="switch"><span></span></div>
                        </div>
                        <div class="sub_txt">업데이트 시 알려드립니다.</div>
                        <ul class="option_list">
                            <li>전체</li>
                            <li>1부 성가대</li>
                            <li>1부 헌금송</li>
                            <li>3부 성가대</li>
                            <li>3부 헌금송</li>
                            <li>연합 성가대</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}