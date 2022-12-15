import { useRouter } from 'next/router';
import Button from './Button';

/**
 * 클릭 시 페이지 이동.
 *
 * @param {string} route 클릭 시 이동할 경로.
 * @param {*} content 컴포넌트 텍스트 또는 콘텐츠.
 */
export default function ClickToMovePage({ route, content }) {
  const router = useRouter();

  return <Button onClick={() => router.push(route)} content={content} />;
}
