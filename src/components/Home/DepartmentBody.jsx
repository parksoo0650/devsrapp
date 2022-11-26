import DepartmentContent from './DepartmentContent';
import useSWR from 'swr';

export default function DepartmentBody({ department }) {
  const { data: dataFeed } = useSWR('/api/contents?kind=feed');
  let dspContentsCnt = 0;

  return (
    <>
      {/* blank */}
      <div className='h-6' />

      {dataFeed?.contents.map((doc, i) => {
        if (department == '전체') {
          if (doc.subKind != 'noskip') {
            if (dspContentsCnt > 1) return;
            dspContentsCnt++;
            return (
              <DepartmentContent
                key={doc.id}
                doc={doc}
                imageSrc={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${doc.image}/public`}
              />
            );
          }
        }
        if (doc.subKind == department) {
          return (
            <DepartmentContent
              key={doc.id}
              doc={doc}
              imageSrc={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${doc.image}/public`}
            />
          );
        }
      })}
    </>
  );
}
