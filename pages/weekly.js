import Share from "../src/components/Share";

export default function weeklynews() {
    return (
        <>
            <div className="sub_container">
                <div className="top_area">
                    <span className="btn_prev" onClick={() => router.push("/")}></span>
                    <div className="top_title">주보</div>
                </div>

                <div className="section subborder jubo_wrap pt0">
                    <div className="movie_wrap">
                        <div className="visual">
                            <div className="title">이름으로도 기억되는 자</div>
                            <div className="eng">Those who are Konwn by Name</div>
                            <div className="bible">[마가복음 13:24~37]</div>
                        </div>
                        <div className="info">
                            <Share title="" thum="" vid="" />
                            <div className="date">날짜</div>
                        </div>
                    </div>
                </div>

                <div className="section subbordert">
                    <ul className="sermon_list">
                        <li>
                            <div className="weekly_tit_box">
                                <div className="tit">주보</div>
                                <div className="date">2022.06.08</div>
                            </div>
                        </li>
                        <li>
                            <div className="weekly_tit_box">
                                <div className="tit">주보</div>
                                <div className="date">2022.06.08</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}