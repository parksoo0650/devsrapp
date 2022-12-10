import MarketFundamentalBoxed from '../templates/MarketFundamentalBoxed';

const Sub11KidsZone = () => {
  return (
    <MarketFundamentalBoxed
      title='11. 키즈존'
      subtitle={
        <h4>
          워터슬라이드 수영장(초등풀, 유아풀) <br />
          에어바운스, 키즈카페
        </h4>
      }
      place='센터 별관 앞 마당, 별관 1층 베냐민홀(키즈카페)'
      date='8. 4(목) - 5(금)'
      time='오전 10:00 - 오후 7:00'
      description1={
        <pre>
          수련회 기간, 우리 아이들의 즐거운 놀이마당! <br />
          물놀이와 워터슬라이드! 에어바운스에 키즈카페까지!
        </pre>
      }
      description2={
        <pre>
          ※ 오전 프로그램 및 오후 프로그램 시간에도 운영하오니, <br />
          5세 이상 영 · 유아는 키즈존에 맡기시고 프로그램 참석이 가능합니다.
        </pre>
      }
    />
  );
};

export default Sub11KidsZone;
