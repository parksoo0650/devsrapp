import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import useMutation from '../../libs/client/useMutation';
import Input from '../../src/components/input';

export default function Enter() {
  /**
   * 로그인 API 호출.
   */
  const [enter, { loading, data, error }] = useMutation('/api/users/enter');

  /**
   * 유저 인증 API 호출.
   */
  const [confirmToken, { loading: tokenLoading, data: tokenData }] =
    useMutation('/api/users/confirm');

  /**
   * 이메일 양식.
   */
  const { register, handleSubmit } = useForm();

  /**
   * 인증번호 양식.
   */
  const {
    register: tokenRegister,
    handleSubmit: tokenHandleSubmit,
    watch,
  } = useForm();

  console.log(watch());

  /**
   * 인증 방식 설정.
   */
  const [method, setMethod] = useState('email');

  /**
   * 제출한 이메일 양식이 유효한 경우.
   */
  const onValid = (validForm) => {
    if (loading) return;
    enter(validForm);
  };

  /**
   * 제출한 인증번호 양식이 유효한 경우.
   */
  const onTokenValid = (validForm) => {
    if (tokenLoading) return;
    confirmToken(validForm);
  };

  const router = useRouter();

  /**
   * 인증번호가 유효하면 어드민 패널로 이동.
   */
  useEffect(() => {
    if (tokenData?.ok) {
      router.push('/admin');
    }
  }, [tokenData, router]);

  return (
    <>
      <section className='pt-16 px-4'>
        {/* Heading Title */}
        <h1 className='mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl'>
          Enter to{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
            Admin Panel
          </span>
        </h1>

        {/* Heading Description */}
        <p className='text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400'>
          Yon can create, read, update, delete online contents in the admin
          panel. 🛠️
        </p>

        {/* Form: Input & Button */}
        <div className='mt-12'>
          {data?.ok ? (
            <form onSubmit={tokenHandleSubmit(onTokenValid)}>
              <input
                type='number'
                id='token'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-base font-semibold rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-3.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 mb-3'
                placeholder='인증번호 6자리를 입력해주세요.'
                required
                {...tokenRegister('token', { required: true })}
              />

              <button
                type='submit'
                className='w-full text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-semibold rounded-lg text-base px-5 py-4 text-center'
              >
                {tokenLoading ? '로딩 중입니다...' : '관리자 인증하기'}
              </button>
            </form>
          ) : (
            <>
              <form onSubmit={handleSubmit(onValid)}>
                <div className='relative mb-3'>
                  <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                    <svg
                      aria-hidden='true'
                      className='w-5 h-5 text-gray-500 dark:text-gray-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
                      <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
                    </svg>
                  </div>

                  <input
                    type='email'
                    id='email'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-base font-semibold rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 p-3.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500'
                    placeholder='support@sungrak.or.kr'
                    required
                    {...register('email', { required: true })}
                  />
                </div>

                <button
                  type='submit'
                  className='w-full text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-semibold rounded-lg text-base px-5 py-4 text-center'
                >
                  {loading
                    ? '메일을 보내는 중입니다...'
                    : '메일로 인증번호 받기'}
                </button>
              </form>
            </>
          )}
        </div>
        {/* end of the Form: Input & Button */}
      </section>

      {/* Copyright */}
      <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400 mx-4 mt-8'>
        © {new Date().getFullYear()}{' '}
        <a
          href='http://sungrak.or.kr/sr/'
          target='_blank'
          className='hover:underline'
        >
          SUNGRAK CHURCH
        </a>
        . All Rights Reserved.
      </span>
    </>
  );
}
