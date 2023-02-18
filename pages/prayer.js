import { useState } from 'react';
import ActionBar from '../src/components/molecule/ActionBar';
import ClickToMoveBack from '../src/components/atom/ClickToMoveBack';

export default function prayer() {
  /**
   * 토스트 표시 여부.
   */
  const [toastShow, setToastShow] = useState(false);

  /**
   * 성락인의 기도제목 페이지.
   */
  return (
    <main className='bg-[#fafafa]'>
      <TopBar />
      <Contents />
      <Footer />
      {toastShow && <Toast />}
    </main>
  );

  /**
   * 상단 바.
   */
  function TopBar() {
    return (
      <ActionBar
        center='기도제목'
        left={<ClickToMoveBack route='/' />}
        right={<Tools />}
      />
    );
  }

  /**
   * 복사 버튼, 다운로드 버튼 모음.
   */
  function Tools() {
    return (
      <div className='w-5 h-5'>
        <CopyButton />
        <DownloadButton />
      </div>
    );
  }

  /**
   * 링크 복사 버튼.
   */
  function CopyButton() {
    return (
      <img
        className='w-5 h-5 absolute right-[60px]'
        src='/icons/ico_share_3.svg'
        onClick={() => {
          navigator.clipboard.writechildren(window.location.href);
          setToastShow(() => true);
          setTimeout(() => setToastShow(() => false), 3000);
        }}
      />
    );
  }

  /**
   * 다운로드 버튼.
   */
  function DownloadButton() {
    return (
      <a href='/images/prayer_230218.jpeg' download='성락인의 기도제목'>
        <img className='w-5 h-5' src='/icons/ico_download.svg' />
      </a>
    );
  }

  /**
   * 팝업 토스트. 링크 복사 버튼 누르면 표시.
   */
  function Toast() {
    return (
      <div className='flex justify-center'>
        <span className='flex items-center justify-between fixed bottom-24 children-[14px] px-[14px] w-[320px] h-[43px] children-white bg-[#313131] rounded drop-shadow-lg'>
          링크가 복사되었습니다!
          <img src='/icons/ico_share_2_white.svg' />
        </span>
      </div>
    );
  }

  /**
   * 페이지 하단.
   */
  function Footer() {
    return (
      <div className='pt-4 px-4 pb-10'>
        <div className=''>
          <p className='text-right text-sm text-[#333333] font-semibold'>
            새벽특별기도회 및 가정릴레이기도회 기도제목
          </p>
          <p className='text-right text-sm text-[#333333]'>
            2023-02-18 업데이트
          </p>
        </div>
      </div>
    );
  }

  /**
   * 카드.
   */
  function Card({ children }) {
    // border border-gray-200 rounded-lg shadow
    return (
      <div className='m-4 px-4 pb-2 bg-white border border-gray-100 rounded-lg drop-shadow-lg'>
        {children}
      </div>
    );
  }

  /**
   * 제목.
   */
  function Heading({ children }) {
    return <div className='text-lg font-bold pt-6 px-4'>{children}</div>;
  }

  /**
   * 부제목.
   */
  function SubHeading({ children }) {
    return (
      <div className='text-base font-bold pt-4 text-[#d38730]'>{children}</div>
    );
  }

  /**
   * 항목.
   */
  function Item({ children }) {
    return <div className='text-base font-normal pt-2'>{children}</div>;
  }

  /**
   * 기도제목 내용.
   */
  function Contents() {
    return (
      <section className=''>
        <Heading>Ⅰ. 우리교회회복을 위한 기도</Heading>

        <Card>
          <SubHeading>1. 회개의 기도</SubHeading>
          <Item>
            1) 메마른 심령을 회개하고 주님을 향한 처음 사랑을 회복하도록
          </Item>
          <Item>
            2) 높아진 교만과 아집을 버리고 감독님을 통해 주시는 말씀에
            순종하도록
          </Item>
          <Item>
            3) 가식된 모습을 버리고 겸손과 진실한 마음으로 영혼을 섬기는 심령을
            갖도록
          </Item>
        </Card>

        <Card>
          <SubHeading>2. 연합과 동역의 기도</SubHeading>
          <Item>
            1) 하나님의 사랑과 주님의 은혜로 하나된 지체임을 깨닫고 겸손히
            연합할 수 있도록
          </Item>
          <Item>
            2) 교회와 감독님과 함께 한마음 한뜻 한방향을 가지고 동역할수 있도록
          </Item>
          <Item>
            3) 하나님과 교회 앞에 사랑과 겸손으로 충성과 헌신을 다하는 신실한
            일꾼이 되도록
          </Item>
        </Card>

        <Card>
          <SubHeading>3. 회복과 소망의 기도</SubHeading>
          <Item>1) 교회 보전의 위기에서 벗어나 안정권에 진입할 수 있도록</Item>
          <Item>
            2) 주일예배를 통해 은혜받고 소망을 가지며 교회를 사랑하는 심령이
            회복되도록
          </Item>
          <Item>
            3) 온 성도가 소망으로 하나 되어 분열의 아픔과 어려움을 이기도록
          </Item>
        </Card>

        <Heading>Ⅱ. 교회와 감독님과 사무처리회를 위한 기도 </Heading>

        <Card>
          <SubHeading>1. 교회 재건과 전도를 위한 기도</SubHeading>
          <Item>1) 분열사태가 속히 종식되고 교회가 재건되도록</Item>
          <Item>2) 성락인 모두 단합하여 교회를 든든히 지키도록</Item>
          <Item>3) 교회 수호와 재건에 모두 한마음으로 행동하도록</Item>
          <Item>
            4) 교회의 미래세대가 어릴 때부터 교회관과 신앙관을 견고히 세우도록
          </Item>
          <Item>
            5) 교회 이미지가 좋아지며, 선한 영향력을 끼쳐 전도의 결실을 맺도록
          </Item>
        </Card>

        <Card>
          <SubHeading>2. 사무처리회 성공을 위한 기도</SubHeading>

          <Item>1) 사무처리회를 철저히 준비하여 성공하도록</Item>
          <Item>2) 사무처리회 성공을 통해 교회 재정 안정을 이루도록</Item>
          <Item>3) 사무처리회 개최일에 성락인 모두 참여하도록</Item>
          <Item>4) 사무처리회 준비팀에게 지혜와 안목이 넘치도록</Item>
          <Item>
            5) 사무처리회 성공을 위해 날마다 간절히 기도하는 성락인이 되도록
          </Item>
        </Card>

        <Card>
          <SubHeading>3. 감독님을 위한 기도</SubHeading>
          <Item>1) 감독님께서 하나님의 권능으로 교회를 치리하시도록</Item>
          <Item>2) 감독님께 말씀의 영감이 충만하시도록</Item>
          <Item>3) 감독님 중심으로 교역자와 평신도가 하나되도록</Item>
          <Item>4) 감독님께서 하나님의 지혜로 미래를 이끌어가시도록</Item>
          <Item>5) 감독님의 심령이 평안하며 육체가 강건하시도록</Item>
        </Card>

        <Card>
          <SubHeading>4. 법적 승리를 위한 기도</SubHeading>
          <Item>1) 분열사태의 모든 법적 소송 승리하도록</Item>
          <Item>2) 감독님 공판이 무죄 판결되도록</Item>
          <Item>3) 분열사태의 왜곡된 주장들이 바로잡히도록</Item>
          <Item>4) 법무팀과 담당 변호사들에게 지혜와 명철이 있도록</Item>
          <Item>
            5) 분열사태로 인한 교회와 가정의 아픔을 서로 위로하고 격려하도록
          </Item>
        </Card>
      </section>
    );
  }
}

/**
 * 반복되는 아이템을 print 하는 함수 ?
 *
 * ItemArray.map((item) => <Item text={item.text} />)
 */
