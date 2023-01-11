import { Skeleton } from '@mui/material';

_Skeleton.Contents = () => {
  return (
    <div className='text-left pt-4 px-4'>
      <Skeleton
        className='inline-block w-full'
        variant='rounded'
        animation='wave'
        height={208}
      />
      <Skeleton
        className='inline-block w-full mt-2'
        variant='rounded'
        animation='wave'
        height={24}
      />
      <Skeleton
        className='inline-block w-full'
        variant='rounded'
        animation='wave'
        height={24}
      />
      <Skeleton
        className='inline-block w-3/5'
        variant='rounded'
        animation='wave'
        height={24}
      />
    </div>
  );
};

export default function _Skeleton() {}
