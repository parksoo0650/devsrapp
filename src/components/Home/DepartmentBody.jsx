import DepartmentContent from './DepartmentContent';
import useSWR from 'swr';

export default function DepartmentBody({ department }) {

  const { data: dataFeed } = useSWR('/api/contents?kind=feed');
  console.log(dataFeed);

  return (
    <>
      <span className='p-[30px] text-xl text-[#333333]'>
        <strong>[{department}] </strong>
        콘텐츠 보여줄 자리입니다...
      </span>

      {dataFeed?.contents.map((doc, i) => {
        return(
          <DepartmentContent 
            key={doc.id}
            doc={doc}
            imageSrc={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${doc.image}/public`}
          />
        );
      })}

    </>
  );
}
