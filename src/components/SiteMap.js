export default function SiteMap() {
    return (
        <div id="all_menu">
            <div class="search_area">
                <input type="text" class="text" placeholder="검색어를 입력하세요" />
                <div onClick={() => {
                    let allMenu = document.getElementById('all_menu');
                    allMenu.className = '';
                }}>닫기</div>
            </div>

            <ul class="quick_list">
                <li>
                    <a href="#">
                        <i class="ico_live"></i>
                        <div class="menu">라이브</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="ico_bible"></i>
                        <div class="menu">성경</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="ico_praise"></i>
                        <div class="menu">찬송가</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="ico_onseries"></i>
                        <div class="menu">온시리즈</div>
                    </a>
                </li>
            </ul>

            <div class="menu_wrap">
                <ul class="menu_list">
                    <li class="title">
                        <i class="ico_menu"></i>
                        <span>예배</span>
                        <ul class="sub_menu">
                            <li>
                                <a href="#">전체</a>
                            </li>
                            <li>
                                <a href="#">주일 1부 예배</a>
                            </li>
                            <li>
                                <a href="#">주일 3부 예배</a>
                            </li>
                            <li>
                                <a href="#">주일 연합 예배</a>
                            </li>
                            <li>
                                <a href="#">수요 오전 예배</a>
                            </li>
                            <li>
                                <a href="#">수요 오후 예배</a>
                            </li>
                            <li>
                                <a href="#">금요 환언 특강</a>
                            </li>
                        </ul>
                    </li>

                    <li class="title">
                        <i class="ico_menu"></i>
                        <span>찬양</span>
                        <ul class="sub_menu">
                            <li>
                                <a href="#">전체</a>
                            </li>
                            <li>
                                <a href="#">1부 성가대(할렐루야)</a>
                            </li>
                            <li>
                                <a href="#">1부 헌금송</a>
                            </li>
                            <li>
                                <a href="#">3부 성가대(시무언)</a>
                            </li>
                            <li>
                                <a href="#">3부 헌금송</a>
                            </li>
                            <li>
                                <a href="#">연합 성가대(뉴헤븐)</a>
                            </li>
                            <li>
                                <a href="#">연합 헌금송</a>
                            </li>
                            <li>
                                <a href="#">예수로 찬양</a>
                            </li>
                        </ul>
                    </li>

                    <li class="title">
                        <i class="ico_menu"></i>
                        <a href="#">성경</a>
                    </li>

                    <li class="title">
                        <i class="ico_menu"></i>
                        <a href="#">찬송가</a>
                    </li>

                    <li class="title">
                        <i class="ico_menu"></i>
                        <a href="#">온시리즈</a>
                        <ul class="sub_menu">
                            <li>
                                <a href="#">전체</a>
                            </li>
                            <li>
                                <a href="#">온성경</a>
                            </li>
                            <li>
                                <a href="#">온특새</a>
                            </li>
                            <li>
                                <a href="#">온3분</a>
                            </li>
                            <li>
                                <a href="#">온목장</a>
                            </li>
                        </ul>
                    </li>

                    <li class="title">
                        <i class="ico_menu"></i>
                        <a href="#">주보 / 성락가이드</a>
                        <ul class="sub_menu">
                            <li>
                                <a href="#">전체</a>
                            </li>
                            <li>
                                <a href="#">주보</a>
                            </li>
                            <li>
                                <a href="#">성락가이드</a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul class="foot_menu">
                    <li>
                        <a href="#">
                            <i class="ico_menu"></i>
                            교회 소식
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="ico_menu"></i>
                            공지사항
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}