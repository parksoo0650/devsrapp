/**
 * 홈 점보트론 설교 데이터 파싱. 제목, 본문.
 */
ParsingUtil.parseSermonData = (data, isLive) => {
  // let _title = '';
  let title = '';
  // let temp = '';
  // let temp2 = '';
  let scripture = '';

  if (isLive) {
    // _title = data.title || '';
    // title = _title.split('(')[0];
    // temp = _title.split('(')[1] || '';
    // scripture = temp.split(')')[0] || '';

    title = data?.title?.split('(')[0];
    scripture = data?.title?.split('(')[1]?.split(')')[0];
  } else {
    // 한글 제목(English Title)요한복음 17:1~8

    title = data?.title?.split('(')[0];
    scripture = data?.title?.split(')')[1]?.trim();
  }

  return { title, scripture };
};

export default function ParsingUtil() {}
