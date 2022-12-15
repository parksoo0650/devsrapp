import { useRouter } from 'next/router';
import Button from './Button';

/**
 * 클릭 시 뒤로 이동.
 *
 * @param {string} route 클릭 시 이동할 경로.
 */
export default function ClickToMoveBack({ route }) {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push(route)}
      content={<img src='/icons/ico_back.svg' />}
    />
  );
}
