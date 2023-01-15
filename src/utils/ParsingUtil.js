import DateUtil from './DateUtil';

ParsingUtil.parseSermonData = (data) => {
  const fullName = data?.contents[0]?.name;
  const publishedAt = data?.contents[0]?.publishedAt;
  const videoId = data?.contents[0]?.videoId;
  const thumbnail = data?.contents[0]?.image;
  const category = data?.contents[0]?.subKind;

  let title = '';
  let scripture = '';

  if (DateUtil.isLive) {
    title = fullName?.split('(')[0];
    scripture = fullName?.split('(')[1]?.split(')')[0];
  } else {
    title = fullName?.split('(')[0];
    scripture =
      fullName?.split(')')[1]?.trim() || fullName?.split('(')[1]?.split(')')[0];
  }

  return {
    fullName,
    publishedAt,
    videoId,
    thumbnail,
    category,
    title,
    scripture,
  };
};

export default function ParsingUtil() {}
