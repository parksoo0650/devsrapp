import Image from 'next/image';

export default function Icon({ children }) {
    return <>{children}</>;
}

Icon.Search = () => <Image src={'/icons/icon_search.svg'} width={48} height={48} />;

Icon.Alarm = () => <Image src={'/icons/icon_alarm.svg'} width={48} height={48} />;

Icon.CiLogo = () => <Image src={'/images/ci_sungrak.svg'} width={124} height={37} />;   // Church Identity Logo Image

Icon.Back = () => <Image src={'/icons/icon_back.svg'} width={48} height={48} />;

Icon.Copy = () => <Image src={'/icons/icon_copy.svg'} width={48} height={48} />;

Icon.Download = () => <Image src={'/icons/icon_download.svg'} width={48} height={48} />;