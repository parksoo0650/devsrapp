import { useRouter } from 'next/router';

export default function WeekdayContentItem({ doc, type, imageSrc }) {
  const router = useRouter();

  return (
    <li
      key={doc.id}
      onClick={() => {
        router.push(
          `/${type}?vid=${doc.videoId}&vtit=${doc.name}&vdate=${doc.publishedAt}&kind=${doc.subKind}`,
          `/${type}`
        );
      }}
    >
      <div className='bg-[#d9d9d9]'>
        <img src={imageSrc} />
      </div>

      <div className=''>
        <div className='text-lg font-semibold pt-4'>{doc.name}</div>
        <div className='text-xs font-normal'>{doc.publishedAt}</div>
      </div>
    </li>
  );
}
