import { useRouter } from 'next/router';
import Button from '../atom/Button';

export default function ClickToMovePage({ route, content }) {
  const router = useRouter();

  return <Button onClick={() => router.push(route)} content={content} />;
}
