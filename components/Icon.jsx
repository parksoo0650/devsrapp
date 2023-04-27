import Image from 'next/image'

export default function Icon({ children }) {
    return <>{children}</>
}

Icon.Search = () => <Image src={'/icons/icon_search.svg'} width={48} height={48} />             // 검색.

Icon.Alarm = () => <Image src={'/icons/icon_alarm.svg'} width={48} height={48} />               // 알림.

Icon.CiLogo = () => <Image src={'/images/ci_sungrak.svg'} width={124} height={37} />            // CI 로고.

Icon.Back = () => <Image src={'/icons/icon_back.svg'} width={48} height={48} />                 // 뒤로 가기.

Icon.Copy = () => <Image src={'/icons/icon_copy.svg'} width={48} height={48} />                 // 복사.

Icon.Download = () => <Image src={'/icons/icon_download.svg'} width={48} height={48} />         // 다운로드.