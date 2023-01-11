import { Skeleton } from '@mui/material';

_Skeleton.Title2 = () => {
  return (
    <div className='block'>
      <Skeleton
        className='inline-block'
        variant='rounded'
        animation='wave'
        width={160}
        height={30}
        sx={{ bgcolor: 'rgba(255, 255, 255, 0.3)' }}
      />
      <br />
      <Skeleton
        className='inline-block mt-2'
        variant='rounded'
        animation='wave'
        width={240}
        height={30}
        sx={{ bgcolor: 'rgba(255, 255, 255, 0.3)' }}
      />
    </div>
  );
};

_Skeleton.Description = () => {
  return (
    <div className='block'>
      <Skeleton
        className='inline-block mt-4'
        variant='rounded'
        animation='wave'
        width={100}
        height={16}
        sx={{ bgcolor: 'rgba(255, 255, 255, 0.3)' }}
      />
      <br />
      <Skeleton
        className='inline-block mt-2'
        variant='rounded'
        animation='wave'
        width={100}
        height={16}
        sx={{ bgcolor: 'rgba(255, 255, 255, 0.3)' }}
      />
    </div>
  );
};

_Skeleton.Badge = () => {
  return (
    <Skeleton
      className='inline-block mb-2'
      variant='rounded'
      animation='wave'
      width={60}
      height={20}
      sx={{ bgcolor: 'rgba(255, 255, 255, 0.3)' }}
    />
  );
};

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
        className='inline-block w-full mt-4'
        variant='rounded'
        animation='wave'
        height={24}
      />
      <Skeleton
        className='inline-block w-full mt-2'
        variant='rounded'
        animation='wave'
        height={24}
      />
      <Skeleton
        className='inline-block w-3/5 mt-2'
        variant='rounded'
        animation='wave'
        height={24}
      />
    </div>
  );
};

export default function _Skeleton() {}
