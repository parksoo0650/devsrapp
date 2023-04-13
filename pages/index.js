import Jumbotron from '../src/components/Home/Jumbotron';
import ListRow from '../src/components/molecule/ListRow';
import WeekdayContent from '../src/components/Home/WeekdayContent';
import QuickMenu from '../src/components/Home/QuickMenu';
import Praise from '../src/components/Home/Praise';
import Department from '../src/components/Home/Department';
import HomeBar from '../src/components/HomeBar';
import TopBar from '@/components/TopBar';

export default function Home() {
    return (
        <>
            <TopBar.Home />

            {/* 대형 슬라이드 */}
            <Jumbotron />

            {/* 교회 기도제목 */}
            <ListRow.V1
                title="교회를 위한 기도제목 바로가기"
                backgroundColor="#d38730"
                route="/prayer"
            />

            {/* 주중 콘텐츠 */}
            <WeekdayContent />

            {/* 퀵 메뉴 7개 */}
            <QuickMenu />

            {/* 교회 표어 */}
            <div className="mdbanner">
                <img src="/images/banner_23.jpg" />
            </div>

            {/* 은혜로운 찬양 */}
            <Praise />

            {/* 성락교회 미래세대 */}
            <Department />

            {/* blank */}
            <div
                style={{
                    height: '82px',
                }}
            />

            {/* 하단 메뉴 바 */}
            <HomeBar />
        </>
    );
}
