export default function DepartmentContent({ doc, imageSrc }) {
  return (
    <li key={doc.id} onClick={() => {}} className='px-[30px] mb-7'>
      {/* <img src='' /> */}

      <div className='w-full h-[176px] bg-slate-200'>
        <img src={imageSrc} alt="feed image" />
      </div>

      <h3 className='pt-3.5 text-base'>
        {doc.name}
      </h3>

      <div className='pt-3 text-xs'>2022.00.00</div>
    </li>
  );
}
