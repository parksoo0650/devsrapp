import TopBar from '@/components/TopBar';
import Image from 'next/image';

function SearchIcon() {
    return <Image src={'/icons/icon_search.svg'} width={48} height={48} />;
}

function AlarmIcon() {
    return <Image src={'/icons/icon_alarm.svg'} width={48} height={48} />;
}

export default function TestPage1() {
    return (
        <>
            <TopBar left1={<SearchIcon />}
                    left2='주중말씀'
                    right1={<AlarmIcon />}
                    right2={<SearchIcon />} />
        </>
    );
}