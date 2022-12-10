import MarketFundamental from '../templates/MarketFundamental';

const Sub10FleaMarket = () => {
  return (
    <MarketFundamental
      title='10. 플리마켓'
      place='세계센터 1층 로비'
      date='8. 4(목) - 5(금)'
      time='오후 12:00 - 7:00'
      description={
        <pre>
          생필품부터 건강식품까지! 특가판매! 딱 2일간만! <br />
          우리동네마켓! 주민 누구나 오세요!
        </pre>
      }
    />
  );
};

export default Sub10FleaMarket;
