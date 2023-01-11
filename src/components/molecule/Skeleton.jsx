import { Skeleton } from '@mui/material';

CustomSkeleton.Contents = () => {
  return (
    <div className='text-left pt-4 px-4'>
      <Skeleton
        className='inline-block w-full h-52'
        variant='rounded'
        animation='wave'
      />
      <Skeleton
        className='inline-block w-full h-6 mt-2'
        variant='rounded'
        animation='wave'
      />
      <Skeleton
        className='inline-block w-full h-6'
        variant='rounded'
        animation='wave'
      />
      <Skeleton
        className='inline-block w-3/5 h-6'
        variant='rounded'
        animation='wave'
      />
    </div>
  );
};

export default function CustomSkeleton() {}
