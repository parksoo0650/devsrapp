import Link from 'next/link';
export default function DepartmentContent({ doc, imageSrc }) {
  return (
    <Link
      href={
        {
          pathname: "/feed",
          query: doc.subKind,
        }
      }
    >
      <li key={doc.id} onClick={() => {}} className='px-[30px] mb-7'>
        {/* <img src='' /> */}

        <div className='w-full bg-slate-200'>
          <img src={imageSrc} alt="feed image" />
        </div>

        <h3 className='pt-3.5 text-base'>
          {doc.name}
        </h3>

        <div className='pt-3 text-xs'>{doc.publishedAt}</div>
      </li>
    </Link>
  );
}
