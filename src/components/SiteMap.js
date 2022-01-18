export default function SiteMap() {
    return (
        <div id="all_menu">
            <div className="search_area">
                <input type="text" className="text" placeholder="검색어를 입력하세요" />
                <div onClick={() => {
                    let allMenu = document.getElementById('all_menu');
                    allMenu.className = '';
                }}>닫기</div>
            </div>

            <ul className="quick_list">
                <li>
                    <a href="#">
                        <i className="ico_live"></i>
                        <div className="menu">라이브</div>
                    </a>
                </li>
                <li>
                    <a href="/chapter/1_1">
                        <i className="ico_bible"></i>
                        <div className="menu">성경</div>
                    </a>
                </li>
                <li>
                    <a href="/praisemain">
                        <i className="ico_praise"></i>
                        <div className="menu">찬송가</div>
                    </a>
                </li>
                <li>
                    <a href="/onseries">
                        <i className="ico_onseries"></i>
                        <div className="menu">온시리즈</div>
                    </a>
                </li>
            </ul>

            <div className="menu_wrap">
                <ul className="menu_list">
                    <li className="title">
                        <i className="ico_menu"></i>
                        <span>예배</span>
                        <ul className="sub_menu">
                            <li>
                                <a href="/sermonmain">전체</a>
                            </li>
                            <li>
                                <a href="/sermonmain">주일 1부 예배</a>
                            </li>
                            <li>
                                <a href="/sermonmain">주일 3부 예배</a>
                            </li>
                            <li>
                                <a href="/sermonmain">주일 연합 예배</a>
                            </li>
                            <li>
                                <a href="/sermonmain">수요 오전 예배</a>
                            </li>
                            <li>
                                <a href="/sermonmain">수요 오후 예배</a>
                            </li>
                            <li>
                                <a href="/sermonmain">금요 환언 특강</a>
                            </li>
                        </ul>
                    </li>

                    <li className="title">
                        <i className="ico_menu"></i>
                        <span>찬양</span>
                        <ul className="sub_menu">
                            <li>
                                <a href="/praisemain">전체</a>
                            </li>
                            <li>
                                <a href="/praisemain">1부 성가대(할렐루야)</a>
                            </li>
                            <li>
                                <a href="/praisemain">1부 헌금송</a>
                            </li>
                            <li>
                                <a href="/praisemain">3부 성가대(시무언)</a>
                            </li>
                            <li>
                                <a href="/praisemain">3부 헌금송</a>
                            </li>
                            <li>
                                <a href="/praisemain">연합 성가대(뉴헤븐)</a>
                            </li>
                            <li>
                                <a href="/praisemain">연합 헌금송</a>
                            </li>
                            <li>
                                <a href="/praisemain">예수로 찬양</a>
                            </li>
                        </ul>
                    </li>

                    <li className="title">
                        <i className="ico_menu"></i>
                        <a href="/chapter/1_1">성경</a>
                    </li>

                    <li className="title">
                        <i className="ico_menu"></i>
                        <a href="/praisemain">찬송가</a>
                    </li>

                    <li className="title">
                        <i className="ico_menu"></i>
                        <a href="/onseries">온시리즈</a>
                        <ul className="sub_menu">
                            <li>
                                <a href="/onseries">전체</a>
                            </li>
                            <li>
                                <a href="/onbibledetail">온성경</a>
                            </li>
                            <li>
                                <a href="/onprayerdetail">온특새</a>
                            </li>
                            <li>
                                <a href="/onthreedetail">온3분</a>
                            </li>
                            <li>
                                <a href="#">온목장</a>
                            </li>
                        </ul>
                    </li>

                    <li className="title">
                        <i className="ico_menu"></i>
                        <a href="#">주보 / 성락가이드</a>
                        <ul className="sub_menu">
                            <li>
                                <a href="#">전체</a>
                            </li>
                            <li>
                                <a href="/jubo">주보</a>
                            </li>
                            <li>
                                <a href="#">성락가이드</a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul className="foot_menu">
                    <li>
                        <a href="#">
                            <i className="ico_menu"></i>
                            교회 소식
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="ico_menu"></i>
                            공지사항
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}