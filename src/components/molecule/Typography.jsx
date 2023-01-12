/**
 * 스켈레톤 기능을 포함한 텍스트.
 *
 * @param {*} content 텍스트 내용.
 * @param {*} skeleton 스켈레톤.
 */
export default function Typography(props) {
  return props.content ? (
    <p className={props.className}>{props.content}</p>
  ) : props.skeleton ? (
    props.skeleton
  ) : null;
}
