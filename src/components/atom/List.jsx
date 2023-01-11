export default function List({ children, gapY, backgroundColor }) {
  return (
    <div className={`grid gap-y-${gapY} bg-[${backgroundColor}]`}>
      {children}
    </div>
  );
}
