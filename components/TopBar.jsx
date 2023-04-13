import Icon from '@/components/Icon';

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

TopBar.Home = () => <TopBar left1={<div className="pl-[14px]"><Icon.CiLogo /></div>}
                            right1={<Icon.Alarm />}
                            right2={<Icon.Search />} />;