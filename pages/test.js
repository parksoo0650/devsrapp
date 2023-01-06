import ActionBar from '../src/components/molecule/ActionBar';
import ClickToMoveBack from '../src/components/atom/ClickToMoveBack';
import ClickToMovePage from '../src/components/atom/ClickToMovePage';
import ListRow from '../src/components/molecule/ListRow';
import useSWR from 'swr';

export default function test() {
  const contents = [];
  const { data: sermonData } = useSWR('/api/contents?kind=sermon');
  const { data: onContentsData } = useSWR('/api/contents?kind=oncontents');

  console.log('sermonData', sermonData);
  console.log('onContentsData', onContentsData);

  for (let index = 0; index < 5; index++) {
    contents.push(
      <div key={index}>
        <ListRow.V1
          title='교회를 위한 기도제목 바로가기'
          backgroundColor='#d38730'
        />

        <ClickToMovePage
          route='/Programme53'
          content={<img src='/images/banner_53_quick.png' />}
        />
      </div>
    );
  }

  return (
    <>
      <ActionBar
        center='테스트 페이지'
        left={<ClickToMoveBack route='/' />}
        height='16'
      />

      {contents}
    </>
  );
}
