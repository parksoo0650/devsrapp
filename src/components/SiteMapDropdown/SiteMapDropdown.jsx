import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SiteMapDropdown({
  content: { id, title, pathname, subCategory },
  isOpen,
  handleDropdown,
  bibleUrl,
  isContents,
  videosUrl,
  campUrl,
}) {
  const router = useRouter();

  return (
    <section
      onClick={() => {
        subCategory && handleDropdown(id);
        bibleUrl && router.push(bibleUrl);
        videosUrl && router.push(videosUrl);
        campUrl && router.push(campUrl);
      }}
      className='border-b border-[#ebebeb] mx-[30px] pb-4'
    >
      <div className='flex items-center justify-between pt-5 pb-3'>
        <h3 className='font-bold text-[22px] h-[30px]'>{title}</h3>

        {subCategory && (
          <img
            src={isOpen ? '/icons/ico_drop_up.svg' : '/icons/ico_drop_down.svg'}
          />
        )}
      </div>

      {isOpen && subCategory ? (
        <ul>
          {subCategory.map((category, index) => (
            <Link
              href={
                isContents
                  ? { pathname: category.query }
                  : {
                      pathname: pathname,
                      query: category.query,
                    }
              }
            >
              <a>
                <li key={index} className='text-base py-[8px] w-full'>
                  {category.title}
                </li>
              </a>
            </Link>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
