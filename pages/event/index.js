import EventLayout from "../../src/components/EventLayout";
import Link from "next/link";

const Event = () => {
  return (
    <EventLayout hasTabBar title="수련회메인">
      <div className="space-y-4 p-4">
          <Link href={`/community`}>
            <a className="flex cursor-pointer flex-col items-start">
              문의하기
            </a>
          </Link>
          <Link href={`/srinsta`}>
            <a className="flex cursor-pointer flex-col items-start">
              성락인스타
            </a>
          </Link>
      </div>
    </EventLayout>
  );
};

export default Event;