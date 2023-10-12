// 텍스트 스타일.
export const text = {
  title: 'font-medium text-base text-[#222222] line-clamp-2 leading-5', // Today title.
  topTitle: 'font-medium text-2xl text-[#222222]', // Top text1.
  caption: 'font-normal text-sm text-[#666666] line-clamp-1', // Card caption.
  topCaption: 'font-normal text-base text-[#666666]', // Top text2.
  jumbotronTitle: 'font-bold text-3xl text-white leading-10 w-3/4 break-keep',
  jumbotronCaption: 'font-normal text-base text-white',
  rowTitle: 'font-medium text-lg text-[#222222] line-clamp-2 leading-7',
}

// 애니메이션 스타일.
export const animation = {
  opacity: 'active:opacity-50',
  scale:
    'transform transition-transform duration-200 ease-in-out active:scale-95 active:inset-0',
}
animation.onClick = `${animation.opacity} ${animation.scale}`

// 유틸 스타일.
export const util = {
  fixImageHeight: 'flex items-center',
}

// 필 스타일.
export const pill = {
  common: 'block w-fit px-[12px] py-2 rounded-full font-medium text-sm',
}
pill.selected = `${pill.common} bg-[#88629B] text-white`
pill.default = `${pill.common} bg-gray-200 text-gray-600`

// 홈 > 점보트론 > 설교 배너.
export const sermon = {
  banner:
    'w-full h-full bg-no-repeat bg-cover bg-center bg-[url("images/jumbotron_sermon.png")] px-8',
  title:
    'text-white font-extrabold text-[32px] mb-3 max-h-[80px] tracking-[-0.5px] break-keep max-w-xs leading-10 text-ellipsis overflow-hidden',
  scripture: 'text-[#eeeeee] text-[14px] leading-6 font-bold',
}

const tailwind = {
  text,
  animation,
  util,

  sermon,
}

export default tailwind
