/**
 * 커스텀 버튼.
 *
 * @param {*} content 버튼 텍스트 또는 콘텐츠.
 * @param {() => {}} onClick 버튼 클릭 시 호출할 함수.
 */
export default function Button({ content, onClick }) {
  return <button onClick={onClick}>{content}</button>;
}
