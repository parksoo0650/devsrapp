export default function Footer() {
    return (
        <footer>
            <div className="inner">
                <div className="f_logo">
                    <img src="../images/logo.svg" alt="성락교회" />
                </div>
                <ul className="sns_list">
                    <li>
                        <a href="#" target="_blank"><img src="../icons/ico_youtube.svg" alt="youtube" /></a>
                    </li>
                    <li>
                        <a href="#" target="_blank"><img src="../icons/ico_blog2.svg" alt="blog" /></a>
                    </li>
                    <li>
                        <a href="#" target="_blank"><img src="../icons/ico_instar.svg" alt="instar" /></a>
                    </li>
                    <li>
                        <a href="#" target="_blank"><img src="../icons/ico_facebook.svg" alt="facebook" /></a>
                    </li>
                </ul>
                <span className="alarm on"></span>
                <address>
                    성락교회 / 크리스천세계선교센터<br />
                    08210 서울특별시 구로구 신도림로 56-24
                </address>
                <div className="address_eng">56-24, SINDORIM-RO, GURO-GU, SEOUL, 08210, KOREA</div>
            </div>
        </footer>
    );
}
