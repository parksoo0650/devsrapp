import Icon from '@/components/Icon';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function TopBar({ left1, left2, right1, right2 }) {
    return (
        <>
            <section className="fixed w-full z-50 bg-white">
                <div className="flex items-center justify-between h-16 px-1">
                    <div className="flex items-center">
                        {left1 ? <>{left1}</> : null}
                        {left2 ? <span className="pl-1 font-normal font-medium text-lg">{left2}</span> : null}
                    </div>
                    <div className="flex">
                        {right1 ? <>{right1}</> : null}
                        {right2 ? <>{right2}</> : null}
                    </div>
                </div>
            </section>

            {/* blank */}
            <div className="h-16" />
        </>
    );
}

/**
 * 어플 홈.
 */
TopBar.Home = () => {
    return (
        <TopBar left1={<div className="pl-[14px]"><Icon.CiLogo /></div>}
                right1={<Icon.Alarm />}
                right2={<Icon.Search />} />
    );
};

/**
 * 교회를 위한 기도제목.
 */
TopBar.PrayerTitle = () => {

    const router = useRouter();
    const [toastShow, setToastShow] = useState(false);

    function Toast() {

        const SPAN_STYLE = 'flex items-center justify-between fixed bottom-24 ' +
            'children-[14px] px-[14px] w-[320px] h-[43px] children-white bg-[#313131] rounded drop-shadow-lg';

        return (
            <div className="flex justify-center">
                <span className={SPAN_STYLE}>
                    링크가 복사되었습니다!{' '}
                    <img src="/icons/ico_share_2_white.svg"
                         alt="copy link" />
                </span>
            </div>
        );
    }

    function handleClick() {
        // navigator.clipboard.writechildren(window.location.href);
        // setToastShow(true);
        // setTimeout(() => setToastShow(false), 3000);
    }

    return (
        <>
            <TopBar left1={<button className="pt-1.5"
                                   onClick={() => router.push('/')}><Icon.Back /></button>}
                    left2="기도제목"
                    right1={<Icon.Copy onClick={handleClick} />}
                    right2={<Icon.Download />} />
            {toastShow && <Toast />}
        </>
    );
};