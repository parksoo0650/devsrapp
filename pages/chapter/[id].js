import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Sheet from 'react-modal-sheet';
import { db } from '../../fbase';
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { BookConsumer } from '../../src/components/bibleProvider';

const Post = ({ items, bid }) => {
    
    
    let [isOpen, setIsOpen] = useState(false);

    const [bibleBook, setBibleBook] = useState("구약");

    const strArr = bid.split('_');

    const router = useRouter();

    const [isActive, setActive] = useState("false");
    
    const handleToggle = () => {
        setActive(!isActive);
    };


    return (
        <div className="container">
            <BookConsumer>
                {({ book_name }) => (
                    <div className="top_area">
                        <div className="top_title txt_left">{book_name[strArr[0]]} {strArr[1]}장 <span className="arrow" onClick={() => setIsOpen(true)}></span></div>
                        <ul className="tool_list">
                            <li onClick={() => { router.push("/hymnmain"); }}>
                                <img src="../icons/ico_hymn.svg" alt="찬송가" />
                            </li>
                            <li onClick={handleToggle}>
                                <img src="../icons/ico_setting.svg" alt="설정" />
                            </li>
                            <li>
                                <img src="../icons/ico_search.svg" alt="검색" />
                            </li>
                        </ul>
                        <div className={isActive ? "txt_control" : "txt_control hide"}>
                            <div className="tit">
                                <strong>텍스트 크기</strong>
                                <span>16pt</span>
                            </div>
                            <ul className="size">
                                <li>가</li>
                                <li><strong>가</strong></li>
                            </ul>
                        </div>
                    </div>
                )}
            </BookConsumer>
            <div className="shadow"></div>
            <style jsx>
            {`
            .shadow {
                display: ${isActive ? "block" : "none"};
            }
            `}
            </style>
            
            <Sheet
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                snapPoints={[1]}
            >
                <Sheet.Container>
                    <Sheet.Header />
                    <Sheet.Content>
                        <div className="layer_bible_read">
                            <div className="title">성경</div>
                            <button className="btn_close" onClick={() => setIsOpen(false)}></button>
                            <ul className="tab_area">
                                <li onClick={() => { setBibleBook("구약"); }} className={(bibleBook == "구약") ? "on" : ""}>구약</li>
                                <li onClick={() => { setBibleBook("신약"); }} className={(bibleBook == "신약") ? "on" : ""}>신약</li>
                                <li onClick={() => { setBibleBook("장"); }} className={(bibleBook == "장") ? "on" : ""}>장</li>
                            </ul>
                            <div className="tab_con">
                            
                                {/* 구약 */}
                                <ul className={(bibleBook == "구약") ? "book_list" : "book_list hide"}>
                                    <li className="on"><span>창세기</span></li>
                                    <li><span>출애굽기</span></li>
                                    <li><span>레위기</span></li>
                                    <li><span>민수기</span></li>
                                    <li><span>신명기</span></li>
                                    <li><span>여호수아</span></li>
                                    <li><span>사사기</span></li>
                                    <li><span>룻기</span></li>
                                    <li><span>사무엘상</span></li>
                                    <li><span>사무엘하</span></li>
                                    <li><span>열왕기상</span></li>
                                    <li><span>열왕기하</span></li>
                                    <li><span>역대상</span></li>
                                    <li><span>역대하</span></li>
                                    <li><span>에스라</span></li>
                                    <li><span>느헤미야</span></li>
                                    <li><span>에스더</span></li>
                                    <li><span>욥기</span></li>
                                    <li><span>시편</span></li>
                                    <li><span>잠언</span></li>
                                    <li><span>전도사</span></li>
                                    <li><span>아가</span></li>
                                    <li><span>이사야</span></li>
                                    <li><span>예레미야</span></li>
                                    <li><span>예레미야 애가</span></li>
                                    <li><span>에스겔</span></li>
                                    <li><span>다니엘</span></li>
                                    <li><span>호세아</span></li>
                                    <li><span>요엘</span></li>
                                    <li><span>아모스</span></li>
                                    <li><span>오바댜</span></li>
                                    <li><span>요나</span></li>
                                    <li><span>미가</span></li>
                                    <li><span>나훔</span></li>
                                    <li><span>하박국</span></li>
                                    <li><span>스바냐</span></li>
                                    <li><span>학개</span></li>
                                    <li><span>스가랴</span></li>
                                    <li><span>말라기</span></li>
                                </ul>
                            
                                {/* 신약 */}
                                <ul className={(bibleBook == "신약") ? "book_list" : "book_list hide"}>
                                    <li><span>마태복음</span></li>
                                    <li><span>마가복음</span></li>
                                    <li><span>누가복음</span></li>
                                    <li><span>요한복음</span></li>
                                    <li><span>사도행전</span></li>
                                    <li><span>로마서</span></li>
                                    <li><span>고린도전서</span></li>
                                    <li><span>고린도후서</span></li>
                                    <li><span>갈라디아서</span></li>
                                    <li><span>에베소서</span></li>
                                    <li><span>빌립보서</span></li>
                                    <li><span>골로새서</span></li>
                                    <li className='on'><span>데살로니가 전서</span></li>
                                    <li><span>데살로니가 후서</span></li>
                                    <li><span>디모데 전서</span></li>
                                    <li><span>디모데 후서</span></li>
                                    <li><span>디도서</span></li>
                                    <li><span>빌레몬서</span></li>
                                    <li><span>히브리서</span></li>
                                    <li><span>야고보서</span></li>
                                    <li><span>베드로 전서</span></li>
                                    <li><span>베드로 후서</span></li>
                                    <li><span>요한1서</span></li>
                                    <li><span>요한2서</span></li>
                                    <li><span>요한3서</span></li>
                                    <li><span>유다서</span></li>
                                    <li><span>요한계시록</span></li>
                                </ul>
                            
                                {/* 장 */}
                                <ul className={(bibleBook == "장") ? "chapter_list" : "chapter_list hide"}>
                                    <li className='on'><span>1</span></li>
                                    <li><span>2</span></li>
                                    <li><span>3</span></li>
                                    <li><span>4</span></li>
                                    <li><span>5</span></li>
                                    <li><span>6</span></li>
                                    <li><span>7</span></li>
                                    <li><span>8</span></li>
                                    <li><span>9</span></li>
                                    <li><span>110</span></li>
                                    <li><span>111</span></li>
                                    <li><span>112</span></li>
                                    <li><span>113</span></li>
                                    <li><span>114</span></li>
                                    <li><span>115</span></li>
                                    <li><span>116</span></li>
                                    <li><span>117</span></li>
                                    <li><span>118</span></li>
                                    <li><span>119</span></li>
                                    <li><span>120</span></li>
                                    <li><span>121</span></li>
                                    <li><span>122</span></li>
                                    <li><span>123</span></li>
                                    <li><span>124</span></li>
                                    <li><span>125</span></li>
                                    <li><span>126</span></li>
                                    <li><span>127</span></li>
                                    <li><span>128</span></li>
                                    <li><span>129</span></li>
                                </ul>

                            </div>
                        </div>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
            
            <div className="section bible_con">
                <ul className="verse_list">
                    {items.map((item, i) => (
                        <li key={i}>
                            <strong>{item.verse}.</strong> {item.content}
                        </li>
                    ))}
                </ul>
                <span className="btn_left"></span>
                <span className="btn_right"></span>
            </div>

        </div>
    );
};

export default Post;

// export async function getStaticPaths() {
//     const paths = ['/chapter/1_1','/chapter/1_2','/chapter/1_3','/chapter/1_4','/chapter/1_5','/chapter/1_6','/chapter/1_7','/chapter/1_8','/chapter/1_9','/chapter/1_10','/chapter/1_11','/chapter/1_12','/chapter/1_13','/chapter/1_14','/chapter/1_15','/chapter/1_16','/chapter/1_17','/chapter/1_18','/chapter/1_19','/chapter/1_20','/chapter/1_21','/chapter/1_22','/chapter/1_23','/chapter/1_24','/chapter/1_25','/chapter/1_26','/chapter/1_27','/chapter/1_28','/chapter/1_29','/chapter/1_30','/chapter/1_31','/chapter/1_32','/chapter/1_33','/chapter/1_34','/chapter/1_35','/chapter/1_36','/chapter/1_37','/chapter/1_38','/chapter/1_39','/chapter/1_40','/chapter/1_41','/chapter/1_42','/chapter/1_43','/chapter/1_44','/chapter/1_45','/chapter/1_46','/chapter/1_47','/chapter/1_48','/chapter/1_49','/chapter/1_50','/chapter/2_1','/chapter/2_2','/chapter/2_3','/chapter/2_4','/chapter/2_5','/chapter/2_6','/chapter/2_7','/chapter/2_8','/chapter/2_9','/chapter/2_10','/chapter/2_11','/chapter/2_12','/chapter/2_13','/chapter/2_14','/chapter/2_15','/chapter/2_16','/chapter/2_17','/chapter/2_18','/chapter/2_19','/chapter/2_20','/chapter/2_21','/chapter/2_22','/chapter/2_23','/chapter/2_24','/chapter/2_25','/chapter/2_26','/chapter/2_27','/chapter/2_28','/chapter/2_29','/chapter/2_30','/chapter/2_31','/chapter/2_32','/chapter/2_33','/chapter/2_34','/chapter/2_35','/chapter/2_36','/chapter/2_37','/chapter/2_38','/chapter/2_39','/chapter/2_40','/chapter/3_1','/chapter/3_2','/chapter/3_3','/chapter/3_4','/chapter/3_5','/chapter/3_6','/chapter/3_7','/chapter/3_8','/chapter/3_9','/chapter/3_10','/chapter/3_11','/chapter/3_12','/chapter/3_13','/chapter/3_14','/chapter/3_15','/chapter/3_16','/chapter/3_17','/chapter/3_18','/chapter/3_19','/chapter/3_20','/chapter/3_21','/chapter/3_22','/chapter/3_23','/chapter/3_24','/chapter/3_25','/chapter/3_26','/chapter/3_27','/chapter/4_1','/chapter/4_2','/chapter/4_3','/chapter/4_4','/chapter/4_5','/chapter/4_6','/chapter/4_7','/chapter/4_8','/chapter/4_9','/chapter/4_10','/chapter/4_11','/chapter/4_12','/chapter/4_13','/chapter/4_14','/chapter/4_15','/chapter/4_16','/chapter/4_17','/chapter/4_18','/chapter/4_19','/chapter/4_20','/chapter/4_21','/chapter/4_22','/chapter/4_23','/chapter/4_24','/chapter/4_25','/chapter/4_26','/chapter/4_27','/chapter/4_28','/chapter/4_29','/chapter/4_30','/chapter/4_31','/chapter/4_32','/chapter/4_33','/chapter/4_34','/chapter/4_35','/chapter/4_36','/chapter/5_1','/chapter/5_2','/chapter/5_3','/chapter/5_4','/chapter/5_5','/chapter/5_6','/chapter/5_7','/chapter/5_8','/chapter/5_9','/chapter/5_10','/chapter/5_11','/chapter/5_12','/chapter/5_13','/chapter/5_14','/chapter/5_15','/chapter/5_16','/chapter/5_17','/chapter/5_18','/chapter/5_19','/chapter/5_20','/chapter/5_21','/chapter/5_22','/chapter/5_23','/chapter/5_24','/chapter/5_25','/chapter/5_26','/chapter/5_27','/chapter/5_28','/chapter/5_29','/chapter/5_30','/chapter/5_31','/chapter/5_32','/chapter/5_33','/chapter/5_34','/chapter/6_1','/chapter/6_2','/chapter/6_3','/chapter/6_4','/chapter/6_5','/chapter/6_6','/chapter/6_7','/chapter/6_8','/chapter/6_9','/chapter/6_10','/chapter/6_11','/chapter/6_12','/chapter/6_13','/chapter/6_14','/chapter/6_15','/chapter/6_16','/chapter/6_17','/chapter/6_18','/chapter/6_19','/chapter/6_20','/chapter/6_21','/chapter/6_22','/chapter/6_23','/chapter/6_24','/chapter/7_1','/chapter/7_2','/chapter/7_3','/chapter/7_4','/chapter/7_5','/chapter/7_6','/chapter/7_7','/chapter/7_8','/chapter/7_9','/chapter/7_10','/chapter/7_11','/chapter/7_12','/chapter/7_13','/chapter/7_14','/chapter/7_15','/chapter/7_16','/chapter/7_17','/chapter/7_18','/chapter/7_19','/chapter/7_20','/chapter/7_21','/chapter/8_1','/chapter/8_2','/chapter/8_3','/chapter/8_4','/chapter/9_1','/chapter/9_2','/chapter/9_3','/chapter/9_4','/chapter/9_5','/chapter/9_6','/chapter/9_7','/chapter/9_8','/chapter/9_9','/chapter/9_10','/chapter/9_11','/chapter/9_12','/chapter/9_13','/chapter/9_14','/chapter/9_15','/chapter/9_16','/chapter/9_17','/chapter/9_18','/chapter/9_19','/chapter/9_20','/chapter/9_21','/chapter/9_22','/chapter/9_23','/chapter/9_24','/chapter/9_25','/chapter/9_26','/chapter/9_27','/chapter/9_28','/chapter/9_29','/chapter/9_30','/chapter/9_31','/chapter/10_1','/chapter/10_2','/chapter/10_3','/chapter/10_4','/chapter/10_5','/chapter/10_6','/chapter/10_7','/chapter/10_8','/chapter/10_9','/chapter/10_10','/chapter/10_11','/chapter/10_12','/chapter/10_13','/chapter/10_14','/chapter/10_15','/chapter/10_16','/chapter/10_17','/chapter/10_18','/chapter/10_19','/chapter/10_20','/chapter/10_21','/chapter/10_22','/chapter/10_23','/chapter/10_24','/chapter/11_1','/chapter/11_2','/chapter/11_3','/chapter/11_4','/chapter/11_5','/chapter/11_6','/chapter/11_7','/chapter/11_8','/chapter/11_9','/chapter/11_10','/chapter/11_11','/chapter/11_12','/chapter/11_13','/chapter/11_14','/chapter/11_15','/chapter/11_16','/chapter/11_17','/chapter/11_18','/chapter/11_19','/chapter/11_20','/chapter/11_21','/chapter/11_22','/chapter/12_1','/chapter/12_2','/chapter/12_3','/chapter/12_4','/chapter/12_5','/chapter/12_6','/chapter/12_7','/chapter/12_8','/chapter/12_9','/chapter/12_10','/chapter/12_11','/chapter/12_12','/chapter/12_13','/chapter/12_14','/chapter/12_15','/chapter/12_16','/chapter/12_17','/chapter/12_18','/chapter/12_19','/chapter/12_20','/chapter/12_21','/chapter/12_22','/chapter/12_23','/chapter/12_24','/chapter/12_25','/chapter/13_1','/chapter/13_2','/chapter/13_3','/chapter/13_4','/chapter/13_5','/chapter/13_6','/chapter/13_7','/chapter/13_8','/chapter/13_9','/chapter/13_10','/chapter/13_11','/chapter/13_12','/chapter/13_13','/chapter/13_14','/chapter/13_15','/chapter/13_16','/chapter/13_17','/chapter/13_18','/chapter/13_19','/chapter/13_20','/chapter/13_21','/chapter/13_22','/chapter/13_23','/chapter/13_24','/chapter/13_25','/chapter/13_26','/chapter/13_27','/chapter/13_28','/chapter/13_29','/chapter/14_1','/chapter/14_2','/chapter/14_3','/chapter/14_4','/chapter/14_5','/chapter/14_6','/chapter/14_7','/chapter/14_8','/chapter/14_9','/chapter/14_10','/chapter/14_11','/chapter/14_12','/chapter/14_13','/chapter/14_14','/chapter/14_15','/chapter/14_16','/chapter/14_17','/chapter/14_18','/chapter/14_19','/chapter/14_20','/chapter/14_21','/chapter/14_22','/chapter/14_23','/chapter/14_24','/chapter/14_25','/chapter/14_26','/chapter/14_27','/chapter/14_28','/chapter/14_29','/chapter/14_30','/chapter/14_31','/chapter/14_32','/chapter/14_33','/chapter/14_34','/chapter/14_35','/chapter/14_36','/chapter/15_1','/chapter/15_2','/chapter/15_3','/chapter/15_4','/chapter/15_5','/chapter/15_6','/chapter/15_7','/chapter/15_8','/chapter/15_9','/chapter/15_10','/chapter/16_1','/chapter/16_2','/chapter/16_3','/chapter/16_4','/chapter/16_5','/chapter/16_6','/chapter/16_7','/chapter/16_8','/chapter/16_9','/chapter/16_10','/chapter/16_11','/chapter/16_12','/chapter/16_13','/chapter/17_1','/chapter/17_2','/chapter/17_3','/chapter/17_4','/chapter/17_5','/chapter/17_6','/chapter/17_7','/chapter/17_8','/chapter/17_9','/chapter/17_10','/chapter/18_1','/chapter/18_2','/chapter/18_3','/chapter/18_4','/chapter/18_5','/chapter/18_6','/chapter/18_7','/chapter/18_8','/chapter/18_9','/chapter/18_10','/chapter/18_11','/chapter/18_12','/chapter/18_13','/chapter/18_14','/chapter/18_15','/chapter/18_16','/chapter/18_17','/chapter/18_18','/chapter/18_19','/chapter/18_20','/chapter/18_21','/chapter/18_22','/chapter/18_23','/chapter/18_24','/chapter/18_25','/chapter/18_26','/chapter/18_27','/chapter/18_28','/chapter/18_29','/chapter/18_30','/chapter/18_31','/chapter/18_32','/chapter/18_33','/chapter/18_34','/chapter/18_35','/chapter/18_36','/chapter/18_37','/chapter/18_38','/chapter/18_39','/chapter/18_40','/chapter/18_41','/chapter/18_42','/chapter/19_1','/chapter/19_2','/chapter/19_3','/chapter/19_4','/chapter/19_5','/chapter/19_6','/chapter/19_7','/chapter/19_8','/chapter/19_9','/chapter/19_10','/chapter/19_11','/chapter/19_12','/chapter/19_13','/chapter/19_14','/chapter/19_15','/chapter/19_16','/chapter/19_17','/chapter/19_18','/chapter/19_19','/chapter/19_20','/chapter/19_21','/chapter/19_22','/chapter/19_23','/chapter/19_24','/chapter/19_25','/chapter/19_26','/chapter/19_27','/chapter/19_28','/chapter/19_29','/chapter/19_30','/chapter/19_31','/chapter/19_32','/chapter/19_33','/chapter/19_34','/chapter/19_35','/chapter/19_36','/chapter/19_37','/chapter/19_38','/chapter/19_39','/chapter/19_40','/chapter/19_41','/chapter/19_42','/chapter/19_43','/chapter/19_44','/chapter/19_45','/chapter/19_46','/chapter/19_47','/chapter/19_48','/chapter/19_49','/chapter/19_50','/chapter/19_51','/chapter/19_52','/chapter/19_53','/chapter/19_54','/chapter/19_55','/chapter/19_56','/chapter/19_57','/chapter/19_58','/chapter/19_59','/chapter/19_60','/chapter/19_61','/chapter/19_62','/chapter/19_63','/chapter/19_64','/chapter/19_65','/chapter/19_66','/chapter/19_67','/chapter/19_68','/chapter/19_69','/chapter/19_70','/chapter/19_71','/chapter/19_72','/chapter/19_73','/chapter/19_74','/chapter/19_75','/chapter/19_76','/chapter/19_77','/chapter/19_78','/chapter/19_79','/chapter/19_80','/chapter/19_81','/chapter/19_82','/chapter/19_83','/chapter/19_84','/chapter/19_85','/chapter/19_86','/chapter/19_87','/chapter/19_88','/chapter/19_89','/chapter/19_90','/chapter/19_91','/chapter/19_92','/chapter/19_93','/chapter/19_94','/chapter/19_95','/chapter/19_96','/chapter/19_97','/chapter/19_98','/chapter/19_99','/chapter/19_100','/chapter/19_101','/chapter/19_102','/chapter/19_103','/chapter/19_104','/chapter/19_105','/chapter/19_106','/chapter/19_107','/chapter/19_108','/chapter/19_109','/chapter/19_110','/chapter/19_111','/chapter/19_112','/chapter/19_113','/chapter/19_114','/chapter/19_115','/chapter/19_116','/chapter/19_117','/chapter/19_118','/chapter/19_119','/chapter/19_120','/chapter/19_121','/chapter/19_122','/chapter/19_123','/chapter/19_124','/chapter/19_125','/chapter/19_126','/chapter/19_127','/chapter/19_128','/chapter/19_129','/chapter/19_130','/chapter/19_131','/chapter/19_132','/chapter/19_133','/chapter/19_134','/chapter/19_135','/chapter/19_136','/chapter/19_137','/chapter/19_138','/chapter/19_139','/chapter/19_140','/chapter/19_141','/chapter/19_142','/chapter/19_143','/chapter/19_144','/chapter/19_145','/chapter/19_146','/chapter/19_147','/chapter/19_148','/chapter/19_149','/chapter/19_150','/chapter/20_1','/chapter/20_2','/chapter/20_3','/chapter/20_4','/chapter/20_5','/chapter/20_6','/chapter/20_7','/chapter/20_8','/chapter/20_9','/chapter/20_10','/chapter/20_11','/chapter/20_12','/chapter/20_13','/chapter/20_14','/chapter/20_15','/chapter/20_16','/chapter/20_17','/chapter/20_18','/chapter/20_19','/chapter/20_20','/chapter/20_21','/chapter/20_22','/chapter/20_23','/chapter/20_24','/chapter/20_25','/chapter/20_26','/chapter/20_27','/chapter/20_28','/chapter/20_29','/chapter/20_30','/chapter/20_31','/chapter/21_1','/chapter/21_2','/chapter/21_3','/chapter/21_4','/chapter/21_5','/chapter/21_6','/chapter/21_7','/chapter/21_8','/chapter/21_9','/chapter/21_10','/chapter/21_11','/chapter/21_12','/chapter/22_1','/chapter/22_2','/chapter/22_3','/chapter/22_4','/chapter/22_5','/chapter/22_6','/chapter/22_7','/chapter/22_8','/chapter/23_1','/chapter/23_2','/chapter/23_3','/chapter/23_4','/chapter/23_5','/chapter/23_6','/chapter/23_7','/chapter/23_8','/chapter/23_9','/chapter/23_10','/chapter/23_11','/chapter/23_12','/chapter/23_13','/chapter/23_14','/chapter/23_15','/chapter/23_16','/chapter/23_17','/chapter/23_18','/chapter/23_19','/chapter/23_20','/chapter/23_21','/chapter/23_22','/chapter/23_23','/chapter/23_24','/chapter/23_25','/chapter/23_26','/chapter/23_27','/chapter/23_28','/chapter/23_29','/chapter/23_30','/chapter/23_31','/chapter/23_32','/chapter/23_33','/chapter/23_34','/chapter/23_35','/chapter/23_36','/chapter/23_37','/chapter/23_38','/chapter/23_39','/chapter/23_40','/chapter/23_41','/chapter/23_42','/chapter/23_43','/chapter/23_44','/chapter/23_45','/chapter/23_46','/chapter/23_47','/chapter/23_48','/chapter/23_49','/chapter/23_50','/chapter/23_51','/chapter/23_52','/chapter/23_53','/chapter/23_54','/chapter/23_55','/chapter/23_56','/chapter/23_57','/chapter/23_58','/chapter/23_59','/chapter/23_60','/chapter/23_61','/chapter/23_62','/chapter/23_63','/chapter/23_64','/chapter/23_65','/chapter/23_66','/chapter/24_1','/chapter/24_2','/chapter/24_3','/chapter/24_4','/chapter/24_5','/chapter/24_6','/chapter/24_7','/chapter/24_8','/chapter/24_9','/chapter/24_10','/chapter/24_11','/chapter/24_12','/chapter/24_13','/chapter/24_14','/chapter/24_15','/chapter/24_16','/chapter/24_17','/chapter/24_18','/chapter/24_19','/chapter/24_20','/chapter/24_21','/chapter/24_22','/chapter/24_23','/chapter/24_24','/chapter/24_25','/chapter/24_26','/chapter/24_27','/chapter/24_28','/chapter/24_29','/chapter/24_30','/chapter/24_31','/chapter/24_32','/chapter/24_33','/chapter/24_34','/chapter/24_35','/chapter/24_36','/chapter/24_37','/chapter/24_38','/chapter/24_39','/chapter/24_40','/chapter/24_41','/chapter/24_42','/chapter/24_43','/chapter/24_44','/chapter/24_45','/chapter/24_46','/chapter/24_47','/chapter/24_48','/chapter/24_49','/chapter/24_50','/chapter/24_51','/chapter/24_52','/chapter/25_1','/chapter/25_2','/chapter/25_3','/chapter/25_4','/chapter/25_5','/chapter/26_1','/chapter/26_2','/chapter/26_3','/chapter/26_4','/chapter/26_5','/chapter/26_6','/chapter/26_7','/chapter/26_8','/chapter/26_9','/chapter/26_10','/chapter/26_11','/chapter/26_12','/chapter/26_13','/chapter/26_14','/chapter/26_15','/chapter/26_16','/chapter/26_17','/chapter/26_18','/chapter/26_19','/chapter/26_20','/chapter/26_21','/chapter/26_22','/chapter/26_23','/chapter/26_24','/chapter/26_25','/chapter/26_26','/chapter/26_27','/chapter/26_28','/chapter/26_29','/chapter/26_30','/chapter/26_31','/chapter/26_32','/chapter/26_33','/chapter/26_34','/chapter/26_35','/chapter/26_36','/chapter/26_37','/chapter/26_38','/chapter/26_39','/chapter/26_40','/chapter/26_41','/chapter/26_42','/chapter/26_43','/chapter/26_44','/chapter/26_45','/chapter/26_46','/chapter/26_47','/chapter/26_48','/chapter/27_1','/chapter/27_2','/chapter/27_3','/chapter/27_4','/chapter/27_5','/chapter/27_6','/chapter/27_7','/chapter/27_8','/chapter/27_9','/chapter/27_10','/chapter/27_11','/chapter/27_12','/chapter/28_1','/chapter/28_2','/chapter/28_3','/chapter/28_4','/chapter/28_5','/chapter/28_6','/chapter/28_7','/chapter/28_8','/chapter/28_9','/chapter/28_10','/chapter/28_11','/chapter/28_12','/chapter/28_13','/chapter/28_14','/chapter/29_1','/chapter/29_2','/chapter/29_3','/chapter/30_1','/chapter/30_2','/chapter/30_3','/chapter/30_4','/chapter/30_5','/chapter/30_6','/chapter/30_7','/chapter/30_8','/chapter/30_9','/chapter/31_1','/chapter/32_1','/chapter/32_2','/chapter/32_3','/chapter/32_4','/chapter/33_1','/chapter/33_2','/chapter/33_3','/chapter/33_4','/chapter/33_5','/chapter/33_6','/chapter/33_7','/chapter/34_1','/chapter/34_2','/chapter/34_3','/chapter/35_1','/chapter/35_2','/chapter/35_3','/chapter/36_1','/chapter/36_2','/chapter/36_3','/chapter/37_1','/chapter/37_2','/chapter/38_1','/chapter/38_2','/chapter/38_3','/chapter/38_4','/chapter/38_5','/chapter/38_6','/chapter/38_7','/chapter/38_8','/chapter/38_9','/chapter/38_10','/chapter/38_11','/chapter/38_12','/chapter/38_13','/chapter/38_14','/chapter/39_1','/chapter/39_2','/chapter/39_3','/chapter/39_4','/chapter/40_1','/chapter/40_2','/chapter/40_3','/chapter/40_4','/chapter/40_5','/chapter/40_6','/chapter/40_7','/chapter/40_8','/chapter/40_9','/chapter/40_10','/chapter/40_11','/chapter/40_12','/chapter/40_13','/chapter/40_14','/chapter/40_15','/chapter/40_16','/chapter/40_17','/chapter/40_18','/chapter/40_19','/chapter/40_20','/chapter/40_21','/chapter/40_22','/chapter/40_23','/chapter/40_24','/chapter/40_25','/chapter/40_26','/chapter/40_27','/chapter/40_28','/chapter/41_1','/chapter/41_2','/chapter/41_3','/chapter/41_4','/chapter/41_5','/chapter/41_6','/chapter/41_7','/chapter/41_8','/chapter/41_9','/chapter/41_10','/chapter/41_11','/chapter/41_12','/chapter/41_13','/chapter/41_14','/chapter/41_15','/chapter/41_16','/chapter/42_1','/chapter/42_2','/chapter/42_3','/chapter/42_4','/chapter/42_5','/chapter/42_6','/chapter/42_7','/chapter/42_8','/chapter/42_9','/chapter/42_10','/chapter/42_11','/chapter/42_12','/chapter/42_13','/chapter/42_14','/chapter/42_15','/chapter/42_16','/chapter/42_17','/chapter/42_18','/chapter/42_19','/chapter/42_20','/chapter/42_21','/chapter/42_22','/chapter/42_23','/chapter/42_24','/chapter/43_1','/chapter/43_2','/chapter/43_3','/chapter/43_4','/chapter/43_5','/chapter/43_6','/chapter/43_7','/chapter/43_8','/chapter/43_9','/chapter/43_10','/chapter/43_11','/chapter/43_12','/chapter/43_13','/chapter/43_14','/chapter/43_15','/chapter/43_16','/chapter/43_17','/chapter/43_18','/chapter/43_19','/chapter/43_20','/chapter/43_21','/chapter/44_1','/chapter/44_2','/chapter/44_3','/chapter/44_4','/chapter/44_5','/chapter/44_6','/chapter/44_7','/chapter/44_8','/chapter/44_9','/chapter/44_10','/chapter/44_11','/chapter/44_12','/chapter/44_13','/chapter/44_14','/chapter/44_15','/chapter/44_16','/chapter/44_17','/chapter/44_18','/chapter/44_19','/chapter/44_20','/chapter/44_21','/chapter/44_22','/chapter/44_23','/chapter/44_24','/chapter/44_25','/chapter/44_26','/chapter/44_27','/chapter/44_28','/chapter/45_1','/chapter/45_2','/chapter/45_3','/chapter/45_4','/chapter/45_5','/chapter/45_6','/chapter/45_7','/chapter/45_8','/chapter/45_9','/chapter/45_10','/chapter/45_11','/chapter/45_12','/chapter/45_13','/chapter/45_14','/chapter/45_15','/chapter/45_16','/chapter/46_1','/chapter/46_2','/chapter/46_3','/chapter/46_4','/chapter/46_5','/chapter/46_6','/chapter/46_7','/chapter/46_8','/chapter/46_9','/chapter/46_10','/chapter/46_11','/chapter/46_12','/chapter/46_13','/chapter/46_14','/chapter/46_15','/chapter/46_16','/chapter/47_1','/chapter/47_2','/chapter/47_3','/chapter/47_4','/chapter/47_5','/chapter/47_6','/chapter/47_7','/chapter/47_8','/chapter/47_9','/chapter/47_10','/chapter/47_11','/chapter/47_12','/chapter/47_13','/chapter/48_1','/chapter/48_2','/chapter/48_3','/chapter/48_4','/chapter/48_5','/chapter/48_6','/chapter/49_1','/chapter/49_2','/chapter/49_3','/chapter/49_4','/chapter/49_5','/chapter/49_6','/chapter/50_1','/chapter/50_2','/chapter/50_3','/chapter/50_4','/chapter/51_1','/chapter/51_2','/chapter/51_3','/chapter/51_4','/chapter/52_1','/chapter/52_2','/chapter/52_3','/chapter/52_4','/chapter/52_5','/chapter/53_1','/chapter/53_2','/chapter/53_3','/chapter/54_1','/chapter/54_2','/chapter/54_3','/chapter/54_4','/chapter/54_5','/chapter/54_6','/chapter/55_1','/chapter/55_2','/chapter/55_3','/chapter/55_4','/chapter/56_1','/chapter/56_2','/chapter/56_3','/chapter/57_1','/chapter/58_1','/chapter/58_2','/chapter/58_3','/chapter/58_4','/chapter/58_5','/chapter/58_6','/chapter/58_7','/chapter/58_8','/chapter/58_9','/chapter/58_10','/chapter/58_11','/chapter/58_12','/chapter/58_13','/chapter/59_1','/chapter/59_2','/chapter/59_3','/chapter/59_4','/chapter/59_5','/chapter/60_1','/chapter/60_2','/chapter/60_3','/chapter/60_4','/chapter/60_5','/chapter/61_1','/chapter/61_2','/chapter/61_3','/chapter/62_1','/chapter/62_2','/chapter/62_3','/chapter/62_4','/chapter/62_5','/chapter/63_1','/chapter/64_1','/chapter/65_1','/chapter/66_1','/chapter/66_2','/chapter/66_3','/chapter/66_4','/chapter/66_5','/chapter/66_6','/chapter/66_7','/chapter/66_8','/chapter/66_9','/chapter/66_10','/chapter/66_11','/chapter/66_12','/chapter/66_13','/chapter/66_14','/chapter/66_15','/chapter/66_16','/chapter/66_17','/chapter/66_18','/chapter/66_19','/chapter/66_20','/chapter/66_21','/chapter/66_22'];
//     const paths = [];
//     return { paths, fallback: false }
// }

export async function getServerSideProps(context) {
    const id = context.params.id;
    const strArr = id.split('_');
    const book = strArr[0];
    const chapter = strArr[1];
    const book_data = [];
    const q = query(collection(db, "bible"), where("book", "==", parseInt(book)), where("chapter", "==", parseInt(chapter)), orderBy("verse", "asc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        book_data.push(doc.data());
    });

    return {
        props: {
            items: book_data,
            bid: id
        },
    };
}