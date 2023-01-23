import ActionBar from '../components/molecule/ActionBar';
import ClickToMoveBack from '../components/atom/ClickToMoveBack';

export default function Layout({ title, children, canGoBack }) {
  return (
    <>
      {/* 상단 바 */}
      <ActionBar center={title || ''} left={<ClickToMoveBack route='prev' />} />

      {/* 콘텐츠 리스트 */}
      <div>{children}</div>
    </>
  );
}
