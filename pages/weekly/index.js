import Share from '../../src/components/Share';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Link from 'next/link';
import Loading from '../../src/components/Loading';
import ActionBar from '../../src/components/molecule/ActionBar';
import ClickToMoveBack from '../../src/components/atom/ClickToMoveBack';
import ClickToMovePage from '../../src/components/atom/ClickToMovePage';
import ListRow from '../../src/components/molecule/ListRow';
import List from '../../src/components/atom/List';

export default function weeklynews() {
  const router = useRouter();
  const { data } = useSWR('/api/weekly');

  return (
    <>
      <div className='sub_container'>
        <ActionBar center='주보' left={<ClickToMoveBack route='/' />} />

        {!data ? (
          <div className='loading_box'>
            <Loading />
          </div>
        ) : (
          <>
            <div className='section subborder jubo_wrap pt0'>
              <div className='movie_wrap'>
                <Link href={`/weekly/${data?.weekly[0].id}`}>
                  <a>
                    <div className='visual'>
                      <div className='text-2xl font-extrabold text-[#333333] break-keep'>
                        {data?.weekly[0].titleKR}
                      </div>
                      <div className='text-base font-semibold text-[#a0a0a0]'>
                        {data?.weekly[0].titleEN}
                      </div>
                      <div className='text-base font-semibold text-[#555555]'>
                        [{data?.weekly[0].bible}]
                      </div>
                    </div>
                    <div className='info'>
                      {/* <Share title="" thum="" vid="" /> */}
                      <div className='text-sm font-semibold text-[#a0a0a0]'>
                        {data?.weekly[0].publishedAt}
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>

            <List backgroundColor='white'>
              {data?.weekly?.map((item, i) => {
                if (i == 0) {
                  return false;
                }
                return (
                  <ClickToMovePage
                    route={`/weekly/${item.id}`}
                    key={item.id}
                    content={
                      <ListRow.TextsOnly
                        text1={item.titleKR}
                        text2={item.publishedAt}
                      />
                    }
                  />
                );
              })}
            </List>
          </>
        )}
      </div>
    </>
  );
}
