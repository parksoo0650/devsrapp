DateUtil.week = ['일', '월', '화', '수', '목', '금', '토'];

const date = new Date();
const hours = new Date().getHours();

DateUtil.isLive = date.getDay() == 0 && hours > 6 && hours < 13 ? true : false;

DateUtil.onlineContentsDay =
  date.getDay() == 0 || date.getDay() == 6 ? 1 : date.getDay();

export default function DateUtil() {}
