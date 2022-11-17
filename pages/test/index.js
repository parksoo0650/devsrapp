import Select from '../../temp/Select';
import useData from './useData';
import DateUtil from '../../src/utils/DateUtil';

export default function test() {
  const { options } = useData();
  console.log(options);

  return (
    <>
      <button onClick={() => console.log(DateUtil.week)}>DateUtil 콘솔</button>
      {/* <Select label='' trigger='' value='' onChange='' options={options} /> */}
    </>
  );
}
