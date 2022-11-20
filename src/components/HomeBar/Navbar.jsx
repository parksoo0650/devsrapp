import Link from 'next/link';

Navbar.Tab = ({ icon, text, path }) => {
  return (
    <Link href={path}>
      <div className='w-1/5 text-center'>
        <img src={icon} alt={text} className='w-[24px] h-[24px] inline-block' />
        <div className='mt-3.5 text-center text-[10px]'>{text}</div>
      </div>
    </Link>
  );
};

export default function Navbar({ children }) {
  return <>{children}</>;
}
