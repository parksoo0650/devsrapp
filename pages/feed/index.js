import Feed from '../../src/components/Feed';
import HomeBar from '../../src/components/HomeBar';

const tempData = [
  {
    date: '2022.11.02',
    title:
      '2022 교회와 함께! 성락인과 함께! 헌신 참여 챌린지 - 「No Skip송」 #shorts',
    tags: ['노스킵', '어린이부', '헌신'],
    department: '성락교회 어린이부',
  },
  {
    date: '2022.11.02',
    title:
      '2022 교회와 함께! 성락인과 함께! 헌신 참여 챌린지 - 「No Skip송」 #shorts',
    tags: ['노스킵', '어린이부', '헌신'],
    department: '성락교회 어린이부',
  },
  {
    date: '2022.11.02',
    title:
      '2022 교회와 함께! 성락인과 함께! 헌신 참여 챌린지 - 「No Skip송」 #shorts',
    tags: ['노스킵', '어린이부', '헌신'],
    department: '성락교회 어린이부',
  },
  {
    date: '2022.10.31',
    title:
      '2022 교회와 함께! 성락인과 함께! 헌신 참여 챌린지 - 「No Skip송」 #shorts',
    tags: ['노스킵', '어린이부', '헌신'],
    department: '성락교회 어린이부',
  },
  {
    date: '2022.10.31',
    title:
      '2022 교회와 함께! 성락인과 함께! 헌신 참여 챌린지 - 「No Skip송」 #shorts',
    tags: ['노스킵', '어린이부', '헌신'],
    department: '성락교회 어린이부',
  },
];

export default function feed() {
  return (
    <section>
      <Feed.Tags />

      {tempData.map((currentContent, index, contents) => (
        <>
          {/* 새로운 날짜 표시. 동일한 날짜 생략. */}
          {contents[index - 1]?.date == currentContent.date || (
            <Feed.Date date={currentContent.date} />
          )}

          <Feed.Content
            key={index}
            index={index}
            date={currentContent.date}
            title={currentContent.title}
            tags={currentContent.tags}
            department={currentContent.department}
          />
        </>
      ))}

      {/* blank */}
      <div
        style={{
          height: '82px',
        }}
      />

      <HomeBar />
    </section>
  );
}
