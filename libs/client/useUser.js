import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';

export default function useUser() {
  /**
   * 현재 클라이언트가 로그인 상태인지 확인.
   */
  const { data, error } = useSWR('/api/users/me');

  const router = useRouter();

  /**
   * 로그인 상태가 아니면 로그인 페이지로 이동.
   */
  useEffect(() => {
    if (data && !data.ok) {
      router.replace('/admin/Enter');
    }
  }, []);

  return { user: data?.profile, isLoading: !data && !error };
}
