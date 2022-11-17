import Select from '../../temp/Select';
import useData from './useData';

export default function test() {
  const { options } = useData();
  console.log(options);

  return (
    <>
      <div>temp</div>
      {/* <Select label='' trigger='' value='' onChange='' options={options} /> */}
    </>
  );
}
